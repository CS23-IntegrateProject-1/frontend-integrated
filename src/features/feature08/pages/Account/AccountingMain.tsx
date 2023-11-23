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

export const AccountingMain = () => {
  const [appTrans, setAppTrans] = useState();
  const { venueId } = useParams();
  const [allTransactionIds, setAllTransactionIds] = useState([]);
  const [appTransaction, setAppTransaction] = useState([]);
  const [appTransactionByMonth, setAppTransactionByMonth] = useState<Record<string, any[]>>({});

  useEffect(() => {
    const fetchTableNumber = async () => {
      try {
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        const response = await axios.get(`${backendUrl}/feature8/apptransactions/${venueId}`);
        const tableData = response.data;
        setAppTrans(tableData); // Set the entire array of transactions

        // Extract appTransactionIds and store them in allTransactionIds
        const transactionIds = tableData.map((transaction: any) => transaction.appTransactionId);
        setAllTransactionIds(transactionIds);

      } catch (error) {
        console.error('Error fetching table number:', error);
      }
    };

    fetchTableNumber();
  }, [venueId]); // Include venueId in the dependency array to rerun the effect when it changes

  useEffect(() => {
    const fetchData = async (transactionId: any) => {
      try {
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        const response = await axios.get(
          `${backendUrl}/feature8/apptransaction_details/bytransactionId/${transactionId}`
        );
        const appTransactionDetails = response.data;

        // Convert appTransactionDetails to an array if it's an object
        const detailsArray = Array.isArray(appTransactionDetails)
          ? appTransactionDetails
          : [appTransactionDetails];

        // Update state based on month and year, avoiding duplicate details
        detailsArray.forEach((detail) => {
          const monthKey = new Date(detail.monthly).toLocaleString('en-US', {
            month: 'long',
            year: 'numeric', // Include the year
          });

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

    // Make requests to apptransaction_details for each appTransactionId
    allTransactionIds.forEach(fetchData);
  }, [allTransactionIds]);

  console.log(appTransactionByMonth);


  return (
    <Center>
      <Box
        display={"flex"}
        flexDirection={"column"}
        margin={[3, 5, 7]}
        width={["100%", "80%", "70%"]}
        gap={4}
      >
        <Card
          width="337px"
          backgroundColor="#5F0DBB66"
          color="#C5C4C7"
          rounded="lg"
          padding={6}
          marginBottom={5}
        >
          {/* Your existing card content */}
        </Card>

        <Text style={TextStyle.h1} fontWeight={"bold"}>
          Accounting information
        </Text>

        {/* Card header */}
        <Card
          width={"100%"}
          backgroundColor={"#5F0DBB"}
          color={"#C5C4C7"}
          marginBottom={[4, 6, 8]}
        >
          <CardBody textAlign={"center"}>
            <Stack
              divider={<StackDivider />}
              color={"#C5C4C7"}
              spacing={[2, 4]}
            >
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

        {/* Render cards dynamically based on appTransactionByMonth */}
        {Object.entries(appTransactionByMonth).map(([monthKey, transactions]) => {
          // Extract unique years for the month
          const uniqueYears = Array.from(new Set(transactions.map(transaction => new Date(transaction.monthly).getFullYear())));

          return (
            <Box key={monthKey}>
              {uniqueYears.map(year => (
                <Link key={year} to={`/${venueId}/Account/${year}/${monthKey}`}>
                  <Card width={"100%"} backgroundColor={"#D9D9D9"} color={"black"}>
                    <CardBody textAlign="center">
                      <Stack divider={<StackDivider />} color={"#C5C4C7"}>
                        <Box>
                          <TableContainer>
                            <Table variant="unstyled">
                              <Thead>
                                <Tr borderBottom="none">
                                  <Th
                                    textAlign="center"
                                    borderRight="1px solid white"
                                    style={TextStyle.h4}
                                    color="black"
                                  >
                                    {monthKey}
                                  </Th>
                                  <Th textAlign="center" style={TextStyle.h1} color="black">
                                    {transactions
                                      .filter(transaction => new Date(transaction.monthly).getFullYear() === year)
                                      .reduce((total, transaction) => total + parseFloat(transaction.total_amount), 0)}
                                    <Text
                                      textAlign="center"
                                      display="inline-block"
                                      marginLeft={2}
                                      style={TextStyle.h4}
                                      color="black"
                                    >
                                      Baht
                                    </Text>
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
              ))}
            </Box>
          );
        })}
      </Box>
    </Center>
  );
};
