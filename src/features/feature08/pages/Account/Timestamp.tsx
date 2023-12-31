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
import { TextStyle } from "../../../../theme/TextStyle";
import { useEffect, useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { formatDate1, formatDatetime1 } from "../../../../functions/formatDatetime";
import { Axios } from "../../../../AxiosInstance";

export const Timestamp = () => {
  const [appTrans, setAppTrans] = useState<any[] | undefined>(undefined);
  const { venueId, year, month, day } = useParams();
  const selectedDate = useMemo(() => new Date(`${year}-${month}-${day}`), [year, month, day]);
  const allTransactionIds = useMemo(() => appTrans?.map((transaction: any) => transaction.appTransactionId) || [], [appTrans]);
  const [appTransactionByDate, setAppTransactionByDate] = useState<any[]>([]);

  useEffect(() => {
    const fetchTableNumber = async () => {
      try {
        
        const response = await Axios.get(`/feature8/apptransactions/${venueId}`);
        const tableData = response.data;
        setAppTrans(tableData);
      } catch (error) {
        console.error('Error fetching table number:', error);
      }
    };

    fetchTableNumber();
  }, [venueId]);

  useEffect(() => {
    // Reset the array before adding new data
    setAppTransactionByDate([]);

    const fetchData = async (transactionId: any) => {
      try {
        
        const response = await Axios.get(
          `/feature8/apptransaction_details/bytransactionId/${transactionId}`
        );
        const appTransactionDetails = response.data;

        const detailsArray = Array.isArray(appTransactionDetails)
          ? appTransactionDetails
          : [appTransactionDetails];

        detailsArray.forEach((detail) => {
          const transactionDate = new Date(detail.monthly);

          if (
            transactionDate.getFullYear() === selectedDate.getFullYear() &&
            transactionDate.getMonth() === selectedDate.getMonth() &&
            transactionDate.getDate() === selectedDate.getDate()
          ) {
            setAppTransactionByDate((prevData) => [...prevData, detail]);
          }
        });
      } catch (error) {
        console.error(`Error fetching apptransaction details for id ${transactionId}:`, error);
      }
    };

    allTransactionIds.forEach(fetchData);
  }, [allTransactionIds, selectedDate]);
  
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
        {/* Card header */}
        <Card width={"100%"} height={"75px"} backgroundColor={"#5F0DBB"} color={"#C5C4C7"}  marginBottom={[4, 6, 8]}>
          <CardBody textAlign={"center"}>
            <Stack divider={<StackDivider />} color={"#C5C4C7"} spacing={[2, 4]}>
              <Box>
                <TableContainer>
                  <Table variant="unstyled">
                    <Thead>
                      <Tr borderBottom="none">
                        <Th textAlign="center" borderRight="1px solid white" style={TextStyle.h4} color="white">Time</Th>
                        <Th textAlign="center" style={TextStyle.h4} color="white">Amount</Th>
                      </Tr>
                    </Thead>
                  </Table>
                </TableContainer>
              </Box>
            </Stack>
          </CardBody>
        </Card>

        {/* Display transactions for the selected date */}
        {appTransactionByDate.map((details, index) => {
          // const formattedDateAbove = format(new Date(details.monthly), 'HH:mm:ss');
          // const formattedDateBelow = format(
          //   utcToZonedTime(new Date(details.monthly), ThailandTimeZone),
          //   'dd MMMM yyyy',
          // );
          const formattedDate = new Date(details.monthly).toISOString();

          const formattedAmount = `${details.total_amount} Baht`;
          const appTransactionDetailId = `${details.appTransactionDetailId}`;
          // const appTransactionId = details.appTransactionId;
          return (
            <Card key={index} width="100%" height={"100px"} backgroundColor={"#D9D9D9"} color="black">
              <CardBody textAlign="center">
                <Stack divider={<StackDivider />} color={"#C5C4C7"}>
                  <Box>
                    {/* /business/Account/Checkbill/:venueId/:appTransactionDetailId */}
                  <Link to={`/business/Account/Checkbill/${venueId}/${appTransactionDetailId}`}>
                    <TableContainer>
                      <Table width="100%" variant="unstyled">
                        <Thead>
                          <Tr borderBottom="none">
                            <Th textAlign="center" borderRight="1px solid white" style={TextStyle.h4} color="black">
                              {formatDatetime1(formattedDate)}<br></br>
                              <Text marginTop={6} color={"grey"}>{formatDate1(formattedDate)}</Text>
                            </Th>
                            <Th textAlign="center" style={TextStyle.h1} color="black">
                              {formattedAmount}
                            </Th>
                          </Tr>
                        </Thead>
                      </Table>
                    </TableContainer>
                    </Link>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          );
        })}
      </Box>
    </Center>
  );
};
