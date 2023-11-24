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
  Text
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { TextStyle } from "../../../../theme/TextStyle";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from 'date-fns';
import React from "react";
import { utcToZonedTime } from 'date-fns-tz';


export const Accounting = () => {
  const [appTrans, setAppTrans] = useState();
  const { venueId, month } = useParams();
  const selectedMonth = month ? new Date(month) : null;
  const [allTransactionIds, setAllTransactionIds] = useState([]);
  const [appTransaction, setAppTransaction] = useState([]);
  const [appTransactionByMonth, setAppTransactionByMonth] = useState<Record<string, any[]>>({});

  useEffect(() => {
    const fetchTableNumber = async () => {
      try {
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        const response = await axios.get(`${backendUrl}/feature8/apptransactions/${venueId}`);
        const tableData = response.data;
        setAppTrans(tableData);

        const transactionIds = tableData.map((transaction: any) => transaction.appTransactionId);
        setAllTransactionIds(transactionIds);
       
      } catch (error) {
        console.error('Error fetching table number:', error);
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
          const monthKey = format(new Date(detail.monthly), 'MMMM yyyy');

          setAppTransactionByMonth((prevData) => {
            const existingDetails = prevData[monthKey] || [];
            const isDuplicate = existingDetails.some(
              (existingDetail) =>
                existingDetail.appTransactionDetailId === detail.appTransactionDetailId
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
        console.error(`Error fetching apptransaction details for id ${transactionId}:`, error);
      }
    };

    allTransactionIds.forEach(fetchData);
  }, [allTransactionIds]);
  const ThailandTimeZone = 'Asia/Bangkok';
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
        <Card width={"100%"} backgroundColor={"#5F0DBB"} color={"#C5C4C7"} marginBottom={[4, 6, 8]}>
          <CardBody textAlign={"center"}>
            <Stack divider={<StackDivider />} color={"#C5C4C7"} spacing={[2, 4]}>
              <Box>
                <TableContainer>
                  <Table variant="unstyled">
                    <Thead>
                      <Tr borderBottom="none">
                        <Th textAlign="center" borderRight="1px solid white" style={TextStyle.h4} color="white">Date</Th>
                        <Th textAlign="center" style={TextStyle.h4} color="white">Amount</Th>
                      </Tr>
                    </Thead>
                  </Table>
                </TableContainer>
              </Box>
            </Stack>
          </CardBody>
        </Card>

        {/* Display transactions for the selected month */}
        {Object.entries(appTransactionByMonth).map(([monthKey, detailsArray]) => {
          if (!selectedMonth || selectedMonth.getMonth() === new Date(monthKey).getMonth()) {
            return (
              <React.Fragment key={monthKey}>
                {detailsArray.map((details, index) => {
                  const formattedDate = format(
                    utcToZonedTime(new Date(details.monthly), ThailandTimeZone),
                    'dd MMMM yyyy',
                  );
                  
                  const formattedAmount = `${details.total_amount} Baht`;
                  const [year, month, day] = formattedDate.split(' ');

                  return (
                    <Link key={index} to={`/${venueId}/Account/datexpand/${year}/${month.toLowerCase()}/${day}`}>
                      <Card width="100%" backgroundColor="#D9D9D9" color="black">
                        <CardBody textAlign="center">
                          <Stack divider={<StackDivider />} color="#C5C4C7">
                            <Box>
                              <TableContainer>
                                <Table width="100%" variant="unstyled">
                                  <Thead>
                                    <Tr borderBottom="none">
                                      <Th textAlign="center" borderRight="1px solid white" style={TextStyle.h4} color="black">
                                        {formattedDate}
                                      </Th>
                                      <Th textAlign="center" style={TextStyle.h1} color="black">
                                        {formattedAmount}
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
                })}
              </React.Fragment>
            );
          }
          return null;
        })}
      </Box>
    </Center>
  );
};
