import {
  Box,
  Text,
  Table,
  Thead,
  Th,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Divider,
  Center,
  HStack,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";
import { FC, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// interface CheckBillProp {
//   transactionDetailId: string,
//   detail: string,
//   timestamp: Date,
//   status: string,
//   total_amount: string,
//   transactionId: string,
// }

// interface CBP {
//   check: CheckBillProp;
// }


export const Checkbill = () => {

  const [transactionDetails, setTransactionDetails] = useState([]);
  const { transactionId } = useParams();
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [detail,setDetail] =useState<String | null>(null);
  const [timeStamp, setTimeStamp] = useState<Date | null>(null);



  useEffect(() => {
    // Fetch a specific transaction detail based on the URL parameter
    axios.get(`http://localhost:8080/feature8/transaction_details/${transactionId}`)
      .then((response) => {
        const { data, total_amount: fetchedTA, detail:fetchedDT
                ,timestamp:fetchedTS } = response.data;
        
        setTransactionDetails(data);
        setTotalAmount(fetchedTA);
        setDetail(fetchedDT);
        setTimeStamp(fetchedTS);


      })
      .catch((error) => console.error(`Error fetching transaction detail for ID ${transactionId}:`, error));
  }, [transactionId]);

  console.log(transactionId);
  console.log(totalAmount);
  console.log(detail);
  console.log(timeStamp);


  return (
    <Center>
      <Box
        display={"flex"}
        flexDirection={"column"}
        margin={[3, 5, 7]}
        width={["100%", "80%", "70%"]}
        fontWeight={"bold"}
      >
        <Text fontSize={"lg"} fontWeight={"bold"} marginBottom={3}>
          Order #{transactionId}
        </Text>
        <Text fontSize={"lg"} fontWeight={"bold"} marginBottom={2}>
          {/* Thursday, November 1, 2023 */}
          {timeStamp !== null && timeStamp.toLocaleString()}
        </Text>
        <Divider variant={"dashed"} />

        <TableContainer>
          <Table variant="unstyled">
            <Thead>
              <Tr borderBottom="none">
                <Th textAlign="center" fontSize="lg" color="white">
                  QTY
                </Th>
                <Th textAlign="center" fontSize="lg" color="white">
                  ITEM
                </Th>
                <Th textAlign="center" fontSize="lg" color="white">
                  AMT
                </Th>
              </Tr>
            </Thead>
            <Divider variant={"dashed"} width={"365%"}/>
            <Tbody>
              {[...Array(12)].map((_, index) => (
                <Tr key={index}>
                  <Td textAlign="center" fontSize="lg" color="white">
                    {index + 1}
                  </Td>
                  <Td textAlign="center" fontSize="lg" color="white">
                    {detail}
                  </Td>
                  <Td textAlign="center" fontSize="lg" color="white">
                    2
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        <Divider width={"100%"} variant={"dashed"} />

        <TableContainer>
          <Table variant="unstyled">
            <Tbody>
              <Tr borderBottom="none">
                <Td fontSize="lg" color="white">
                  ITEM COUNT:
                </Td>
                <Td></Td>
                <Td textAlign="center" fontSize="lg" color="white">
                  12
                </Td>
              </Tr>
              <Tr borderBottom="none">
                <Td fontSize="lg" color="white">
                  TOTAL:
                </Td>
                <Td></Td>
                <Td textAlign="center" fontSize="lg" color="white">
                  {totalAmount}
                </Td>
              </Tr>
              <Tr borderBottom="none">
                <Td fontSize="lg" color="white">
                  PRICE:
                </Td>
                <Td></Td>
                <Td textAlign="center" fontSize="lg" color="white">
                  2200
                </Td>
              </Tr>
              <Divider width={"300%"} variant={"dashed"} marginTop={3} />
              <Tr borderBottom="none">
                <Td fontSize="lg" color="white">
                  Payment method
                </Td>
                <Td></Td>
                <Td textAlign="center" fontSize="lg" color="white">
                  <HStack justifyContent="center" alignItems="center">
                    <ChevronRightIcon boxSize={6} />
                  </HStack>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Center>
  );
};
