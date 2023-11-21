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
  const [appTrans,setAppTrans] = useState();
  const { venueId } = useParams();
  const [allTransactionIds, setAllTransactionIds] = useState([]);
  const [appTransaction,setAppTransaction] = useState([]);
  const [appTransactionByMonth, setAppTransactionByMonth] = useState<Record<string, any[]>>({});

  useEffect(() => {
    const fetchTableNumber = async () => {
      try {
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        const response = await axios.get(`${backendUrl}/feature8/apptransactions/${venueId}`);
        const tableData = response.data;
        setAppTrans(tableData); // Set the entire array of transactions

        // Extract appTransactionIds and store them in allTransactionIds
        const transactionIds = tableData.map((transaction:any) => transaction.appTransactionId);
        setAllTransactionIds(transactionIds);

      } catch (error) {
        console.error('Error fetching table number:', error);
      }
    };  

    fetchTableNumber();
  }, [venueId]); // Include venueId in the dependency array to rerun the effect when it changes


  // useEffect(() => {
  //   // Make requests to apptransaction_details for each appTransactionId
  //   allTransactionIds.forEach(async (transactionId) => {
  //     try {
  //       const backendUrl = import.meta.env.VITE_BACKEND_URL;
  //       const response = await axios.get(`${backendUrl}/feature8/apptransaction_details/bytransactionId/${transactionId}`);
  //       const appTransactionDetails = response.data;
  //       setAppTransaction(appTransactionDetails)
  //       // Handle appTransactionDetails as needed
  //       console.log(appTransaction);
  //     } catch (error) {
  //       console.error(`Error fetching apptransaction details for id ${transactionId}:`, error);
  //     }
  //   });
  // }, [allTransactionIds]);

    // console.log(appTransaction);


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



    
//   return (
//     <Center>
//       <Box
//         display={"flex"}
//         flexDirection={"column"}
//         margin={[3, 5, 7]}
//         width={["100%", "80%", "70%"]}
//         gap={4}
//       >
//         <Card 
//           width="337px"
//           backgroundColor="#5F0DBB66"
//           color="#C5C4C7"
//           rounded="lg"
//           padding={6}
//           marginBottom={5}
          
//         >
//           <Text style={TextStyle.h3} fontWeight={"bold"} color={"#FFFFFF"}>
//             Latest transfer amount
//           </Text>
//           <Text fontSize="sm" fontWeight={"bold"} color={"#CC0000"}>
//             10% commission has been deducted
//           </Text>
//           <Text fontSize="2xl" fontWeight={"bold"} color={"#FFFFFF"}>
//             THB 80000
//           </Text>
//           <Text style={TextStyle.h5} fontWeight={"bold"} color={"#C5C4C7"}>
//             01 Nov 2023
//           </Text>
//         </Card>
//         <Text style={TextStyle.h1} fontWeight={"bold"}>
//           Accounting information
//         </Text>
//         {/* Card header */}
//         <Card
//           width={"100%"}
//           backgroundColor={"#5F0DBB"}
//           color={"#C5C4C7"}
//           marginBottom={[4, 6, 8]}
//         >
//           <CardBody textAlign={"center"}>
//             <Stack
//               divider={<StackDivider />}
//               color={"#C5C4C7"}
//               spacing={[2, 4]}
//             >
//               <Box>
//                 <TableContainer>
//                   <Table variant="unstyled">
//                     <Thead>
//                       <Tr borderBottom="none">
//                         <Th
//                           textAlign="center"
//                           borderRight="1px solid white"
//                           style={TextStyle.h4}
//                           color="white"
//                         >
//                           Date
//                         </Th>
//                         <Th textAlign="center" style={TextStyle.h4} color="white">
//                           Amount
//                         </Th>
//                       </Tr>
//                     </Thead>
//                   </Table>
//                 </TableContainer>
//               </Box>
//             </Stack>
//           </CardBody>
//         </Card>

//         {/* Card one */}
//         <Link to={"/venue/Account/Accounting"}>
//           <Card width={"100%"} backgroundColor={"#D9D9D9"} color={"black"}>
//             <CardBody textAlign="center">
//               <Stack divider={<StackDivider />} color={"#C5C4C7"}>
//                 <Box>
//                   <TableContainer>
//                     <Table variant="unstyled">
//                       <Thead>
//                         <Tr borderBottom="none">
//                           <Th
//                             textAlign="center"
//                             borderRight="1px solid white"
//                             style={TextStyle.h4}
//                             color="black"
//                           >
//                             01 Nov 2023
//                           </Th>
//                           <Th textAlign="center" style={TextStyle.h1} color="black">
//                             5000
//                             <Text
//                               textAlign="center"
//                               display="inline-block"
//                               marginLeft={2}
//                               style={TextStyle.h4}
//                               color="black"
//                             >
//                               Baht
//                             </Text>
//                           </Th>
//                         </Tr>
//                       </Thead>
//                     </Table>
//                   </TableContainer>
//                 </Box>
//               </Stack>
//             </CardBody>
//           </Card>
//         </Link>

//         {/* Card two */}
//         <Card width={"100%"} backgroundColor={"#D9D9D9"} color={"black"}>
//           <CardBody textAlign="center">
//             <Stack
//               divider={<StackDivider />}
//               color={"#C5C4C7"}
//               spacing={[2, 4]}
//             >
//               <Box>
//                 <TableContainer>
//                   <Table width="100%" variant="unstyled">
//                     <Thead>
//                       <Tr borderBottom="none">
//                         <Th
//                           textAlign="center"
//                           borderRight="1px solid white"
//                           style={TextStyle.h4}
//                           color="black"
//                         >
//                           01 Oct 2023
//                         </Th>
//                         <Th textAlign="center" style={TextStyle.h1} color="black">
//                           7000
//                           <Text
//                             display="inline-block"
//                             marginLeft={2}
//                             style={TextStyle.h4}
//                             color="black"
//                           >
//                             Baht
//                           </Text>
//                         </Th>
//                       </Tr>
//                     </Thead>
//                   </Table>
//                 </TableContainer>
//               </Box>
//             </Stack>
//           </CardBody>
//         </Card>

//         {/* Card three */}
//         <Card width={"100%"} backgroundColor={"#D9D9D9"} color={"black"}>
//           <CardBody textAlign="center">
//             <Stack
//               divider={<StackDivider />}
//               color={"#C5C4C7"}
//               spacing={[2, 4]}
//             >
//               <Box>
//                 <TableContainer>
//                   <Table width="100%" variant="unstyled">
//                     <Thead>
//                       <Tr borderBottom="none">
//                         <Th
//                           textAlign="center"
//                           borderRight="1px solid white"
//                           style={TextStyle.h4}
//                           color="black"
//                         >
//                           01 Sep 2023
//                         </Th>
//                         <Th textAlign="center" style={TextStyle.h1} color="black">
//                           4000
//                           <Text
//                             display="inline-block"
//                             marginLeft={2}
//                             style={TextStyle.h4}
//                             color="black"
//                           >
//                             Baht
//                           </Text>
//                         </Th>
//                       </Tr>
//                     </Thead>
//                   </Table>
//                 </TableContainer>
//               </Box>
//             </Stack>
//           </CardBody>
//         </Card>

//         {/* Card four */}
//         <Card width={"100%"} backgroundColor={"#D9D9D9"} color={"black"}>
//           <CardBody textAlign="center">
//             <Stack
//               divider={<StackDivider />}
//               color={"#C5C4C7"}
//               spacing={[2, 4]}
//             >
//               <Box>
//                 <TableContainer>
//                   <Table width="100%" variant="unstyled">
//                     <Thead>
//                       <Tr borderBottom="none">
//                         <Th
//                           textAlign="center"
//                           borderRight="1px solid white"
//                           style={TextStyle.h4}
//                           color="black"
//                         >
//                           01 Aug 2023
//                         </Th>
//                         <Th textAlign="center" style={TextStyle.h1} color="black">
//                           5000
//                           <Text
//                             display="inline-block"
//                             marginLeft={2}
//                             style={TextStyle.h4}
//                             color="black"
//                           >
//                             Baht
//                           </Text>
//                         </Th>
//                       </Tr>
//                     </Thead>
//                   </Table>
//                 </TableContainer>
//               </Box>
//             </Stack>
//           </CardBody>
//         </Card>
//       </Box>
//     </Center>
//   );
// };
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
      {Object.entries(appTransactionByMonth).map(([monthKey, transactions]) => (
        <Link key={monthKey} to={`/venue/Account/Accounting/${monthKey}`}>
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
                            {monthKey} {/* Display month and year */}
                          </Th>
                          <Th textAlign="center" style={TextStyle.h1} color="black">
                            {/* Assuming you want to display total amount for the month */}
                            {transactions.reduce((total, transaction) => total + parseFloat(transaction.total_amount), 0)}
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
  </Center>
);
};
