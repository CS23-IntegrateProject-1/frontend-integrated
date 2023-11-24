import {
  Table,
  Thead,
  Tr,
  Th,
  TableContainer,
  Card,
  CardBody,
  Stack,
  StackDivider,
  Box,
  Center,
  Text,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { TextStyle } from "../../../../theme/TextStyle";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import React from "react";
import { utcToZonedTime } from "date-fns-tz";

export const Accounting = () => {
  const [appTrans, setAppTrans] = useState();
  const { venueId, month } = useParams();
  const selectedMonth = month ? new Date(month) : null;
  const [allTransactionIds, setAllTransactionIds] = useState([]);
  const [appTransactionByMonth, setAppTransactionByMonth] = useState<
    Record<string, any[]>
  >({});

  useEffect(() => {
    const fetchTableNumber = async () => {
      try {
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        const response = await axios.get(
          `${backendUrl}/feature8/apptransactions/${venueId}`
        );
        const tableData = response.data;
        setAppTrans(tableData);

        const transactionIds = tableData.map(
          (transaction: any) => transaction.appTransactionId
        );
        setAllTransactionIds(transactionIds);
      } catch (error) {
        console.error("Error fetching table number:", error);
      }
    };

    fetchTableNumber();
  }, [venueId]);

  useEffect(() => {
    const fetchData = async (transactionId: any) => {
      try {
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        const response = await axios.get(
          `${backendUrl}/feature8/apptransaction_details/bytransactionId/${transactionId}`
        );
        const appTransactionDetails = response.data;

        const detailsArray = Array.isArray(appTransactionDetails)
          ? appTransactionDetails
          : [appTransactionDetails];

        detailsArray.forEach((detail) => {
          const monthKey = format(
            utcToZonedTime(new Date(detail.monthly), ThailandTimeZone),
            "MMMM yyyy"
          );

          setAppTransactionByMonth((prevData) => {
            const existingDetails = prevData[monthKey] || [];
            const isDuplicate = existingDetails.some(
              (existingDetail) =>
                existingDetail.appTransactionDetailId ===
                detail.appTransactionDetailId
            );

            if (!isDuplicate) {
              return {
                ...prevData,
                [monthKey]: [...existingDetails, detail],
              };
            }

            return prevData;
          });
        });
      } catch (error) {
        console.error(
          `Error fetching apptransaction details for id ${transactionId}:`,
          error
        );
      }
    };

    allTransactionIds.forEach(fetchData);
  }, [allTransactionIds]);

  const ThailandTimeZone = "Asia/Bangkok";

  const aggregateAmountsByDate = () => {
    const aggregatedData: Record<string, { total: number; details: any[] }> = {};

    // Aggregate amounts for transactions with the same date
    Object.entries(appTransactionByMonth).forEach(([monthKey, detailsArray]) => {
      detailsArray.forEach((details) => {
        const formattedDate = format(
          utcToZonedTime(new Date(details.monthly), ThailandTimeZone),
          "dd MMMM yyyy"
        );

        if (aggregatedData[formattedDate]) {
          // Add the amount to the existing date
          aggregatedData[formattedDate].total += Number(details.total_amount);
          aggregatedData[formattedDate].details.push(details);
        } else {
          // Initialize the amount for a new date
          aggregatedData[formattedDate] = { total: Number(details.total_amount), details: [details] };
        }        
      });
    });

    return aggregatedData;
  };

  const aggregatedAmountsByDate = aggregateAmountsByDate();
  console.log(aggregatedAmountsByDate);

  return (
    <Center>
      <Box
        display={"flex"}
        flexDirection={"column"}
        margin={[3, 5, 7]}
        width={["100%", "80%", "70%"]}
        gap={4}
      >
        <Text style={TextStyle.h1} fontWeight={"bold"}>
          Accounting information
        </Text>
        <Card
          width={"100%"}
          backgroundColor={"#5F0DBB"}
          color={"#C5C4C7"}
          marginBottom={[4, 6, 8]}
        >
          <CardBody textAlign={"center"}>
            <Stack divider={<StackDivider />} color={"#C5C4C7"} spacing={[2, 4]}>
              <Box>
                <TableContainer>
                  <Table variant="unstyled">
                    <Thead>
                      <Tr borderBottom="none">
                        <Th
                          textAlign="center"
                          borderRight="1px solid white"
                          style={TextStyle.h4}
                          color="white"
                        >
                          Date
                        </Th>
                        <Th textAlign="center" style={TextStyle.h4} color="white">
                          Amount
                        </Th>
                      </Tr>
                    </Thead>
                  </Table>
                </TableContainer>
              </Box>
            </Stack>
          </CardBody>
        </Card>

        {/* Display aggregated transactions for the selected month */}
        {Object.entries(aggregatedAmountsByDate).map(
              ([formattedDate, aggregatedAmount], index) => {
                const details = aggregatedAmount.details[0]; // Assuming details array is not empty
                const formattedDateForURL = new Date(details.monthly).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long', // Use 'short' for abbreviated month names
                  year: 'numeric',
                });

                const year = new Date(details.monthly).getFullYear();
                const month = new Date(details.monthly).toLocaleDateString('en-US', { month: 'long' }).toLowerCase();
                const day = new Date(details.monthly).getDate();

                return (
                  <Link
                    key={index}
                    to={`/${venueId}/Account/datexpand/${year}/${month}/${day}`}
                  >
                <Card width="100%" backgroundColor="#D9D9D9" color="black">
                  <CardBody textAlign="center">
                    <Stack divider={<StackDivider />} color="#C5C4C7">
                      <Box>
                        <TableContainer>
                          <Table width="100%" variant="unstyled">
                            <Thead>
                              <Tr borderBottom="none">
                                <Th
                                  textAlign="center"
                                  borderRight="1px solid white"
                                  style={TextStyle.h4}
                                  color="black"
                                >
                                  {formattedDate}
                                </Th>
                                <Th
                                  textAlign="center"
                                  style={TextStyle.h1}
                                  color="black"
                                >
                                  {`${aggregatedAmount.total} Baht`}
                                </Th>
                              </Tr>
                            </Thead>
                          </Table>
                        </TableContainer>
                      </Box>
                    </Stack>
                  </CardBody>
                </Card>
              </Link>
            );
          }
        )}
      </Box>
    </Center>
  );
};
