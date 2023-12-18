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
import { Axios } from "../../../../AxiosInstance";
import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import { parseISO } from "date-fns";

interface appTransaction {
  // Define the properties of the business insight here
  appTransactionId: number;
  venueId: number;
  transactionId: number;
}
interface appTransactionDetail {
  // Define the properties of the business insight here
  appTransactionDetailId: number;
  detail: string;
  monthly: Date;
  total_amount: number;
  timestamp: Date;
  appTransactionId: number;
}




export const Accounting = () => {
  const [appTrans, setAppTrans] = useState();
  appTrans;
  const { venueId, month } = useParams();
  const urlMonth = decodeURIComponent(month || "").split(" ")[0];
  const [allTransactionIds, setAllTransactionIds] = useState([]);
  const [appTransactionByMonth, setAppTransactionByMonth] = useState<
    Record<string, unknown[]>
  >({});



   const formatDate12 = (datetime: string) => {
    const originalISO = parseISO(datetime);
    const utcDate = utcToZonedTime(originalISO, "UTC");
    const formattedDate = format(utcDate, "dd MMMM yyyy", {
      timeZone: "UTC",
    } as any).toUpperCase(); // Convert the month to uppercase
    return formattedDate;
  };

  useEffect(() => {
    const fetchTableNumber = async () => {
      try {
        
        const response = await Axios.get(
          `/feature8/apptransactions/${venueId}`
        );
        const tableData = response.data;
        setAppTrans(tableData);

        const transactionIds = tableData.map(
          (transaction: appTransaction) => transaction.appTransactionId
        );
        setAllTransactionIds(transactionIds);
      } catch (error) {
        console.error("Error fetching table number:", error);
      }
    };
    
    fetchTableNumber();
  }, [venueId]);
// }, [appTrans, venueId]);


  useEffect(() => {
    const fetchData = async (transactionId: number) => {
      try {
        
        const response = await Axios.get(
          `/feature8/apptransaction_details/bytransactionId/${transactionId}`
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
                (existingDetail as appTransactionDetail).appTransactionDetailId ===
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
    const aggregatedData: Record<string, { total: number; details: unknown[] }> = {};
  
    // Aggregate amounts for transactions with the same date
    // Object.entries(appTransactionByMonth).forEach(([monthKey, detailsArray]) => {
    Object.entries(appTransactionByMonth).forEach(([, detailsArray]) => {
      detailsArray.forEach((details) => {
        const formattedDate = new Date(
          utcToZonedTime(new Date((details as appTransactionDetail).monthly), ThailandTimeZone)
        ).toISOString();
  
        console.log('Formatted Date:', formatDate12(formattedDate));
  
        if (aggregatedData[formatDate12(formattedDate)]) {
          // Add the amount to the existing date
          aggregatedData[formatDate12(formattedDate)].total += Number((details as appTransactionDetail).total_amount);
          aggregatedData[formatDate12(formattedDate)].details.push(details);
        } else {
          // Initialize the amount for a new date
          aggregatedData[formatDate12(formattedDate)] = {
            total: Number((details as appTransactionDetail).total_amount),
            details: [details],
          };
        }
      });
    });
  
    return aggregatedData;
  };
  

      const aggregatedAmountsByDate = aggregateAmountsByDate();

        // Filter data based on the extracted month (case-insensitive)
        const filteredData = Object.fromEntries(
        Object.entries(aggregatedAmountsByDate).filter(([formattedDate]) =>
        formattedDate.toLowerCase().includes(urlMonth.toLowerCase())
            )
          );

  


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

              {/* Display filtered transactions for the selected month */}
      {Object.entries(filteredData).map(([formattedDate, aggregatedAmount], index) => {
        const details = aggregatedAmount.details[0]; // Assuming details array is not empty
        // const formattedDateForURL = new Date(details.monthly).toLocaleDateString('en-US', {
        //   day: 'numeric',
        //   month: 'long', // Use 'short' for abbreviated month names
        //   year: 'numeric',
        // });

        const year = new Date((details as appTransactionDetail).monthly).getFullYear();
        const month = new Date((details as appTransactionDetail).monthly).toLocaleDateString('en-US', { month: 'long' }).toLowerCase();
        const day = new Date((details as appTransactionDetail).monthly).getDate();

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
      })}
            </Box>
          </Center>
        );
      };
