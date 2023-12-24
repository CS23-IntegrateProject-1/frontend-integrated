import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Card,
  Heading,
  CardBody,
  Stack,
  StackDivider,
  Box,
  Text,
  Center
} from "@chakra-ui/react";

import { ButtonComponent } from "../../../../components/buttons/ButtonComponent";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Axios } from "../../../../AxiosInstance";

type AdvertiseNoti = {
  advertisementId: string;
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  cost: string;
  isApprove: string;
  customer_type: string;
  target_group: string;
  businessId: string;
};

export const AdvertiseNotiSuccess = () => {
  const [advertiseNotified, setAdvertiseNotified] = useState<AdvertiseNoti | null>(null);
  const { advertisementId } = useParams();
  const { sessionId } = useParams();

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const paymentResponse = await Axios.post(`/feature8/complete-payment/${sessionId}/${advertisementId}`);
        console.log(paymentResponse.data);
    
        
      } catch (error) {
        console.error('Error in AdvertiseNoti component:', error);
    
        if ((error as any).response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('Response data:', (error as any).response.data);
          console.error('Status code:', (error as any).response.status);
          console.error('Headers:', (error as any).response.headers);
        } else if ((error as any).request) {
          // The request was made but no response was received
          console.error('No response received. Request details:', (error as any).request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error setting up the request:', (error as any).message);
        }
      }
    };
    

    fetchData();
  }, [advertisementId, sessionId]);

  useEffect(() => {
    const fetchAdvertiseInfo = async () => {
      try {
        
        const response = await Axios.get(`/feature8/advertisements/${advertisementId}`);
        const tableData = response.data;
        setAdvertiseNotified(tableData);
      } catch (error) {
        console.error('Error fetching table number:', error);
      }
    };

    fetchAdvertiseInfo();
  }, [advertisementId]);

console.log(advertiseNotified)
  if (!advertiseNotified) {
    // Render loading state or return null
    return <div>Loading...</div>;
  }

  const { isApprove, cost,name,description, } = advertiseNotified;
  console.log(isApprove,name )

  return (
    <Center>
      <Box
        display={"flex"}
        flexDirection={"column"}
        margin={[3, 5, 7]}
        width={["100%", "80%", "70%"]}
      >
        <Card
          width={"100%"}
          backgroundColor={""}
          color={"white"}
          border={"1px solid #DEBEF6"}
          marginBottom={5}
        >
          <CardBody>
            <Stack divider={<StackDivider />} spacing={[2, 4]}>
              <Box>
                <Heading size="md" marginBottom={3}>
                  Title: {name}
                </Heading>
                <Text marginBottom={5}>
                  This email is to notify you that your advertisement is 
                  {isApprove === "Completed" ? " Completed" : isApprove === "In_progress" ? " In_progress" : isApprove === "Awaiting_payment" ? " Awaiting_payment" : " Rejected"}
                  
                </Text>
                <Heading size="md" marginBottom={2}>
                  Payment Information
                </Heading>
                <TableContainer>
                  <Table className="striped-table" variant={'striped'} colorScheme="" width="100%">
                    <Tbody>
                      <Tr backgroundColor={"#A533C8"}>
                        <Td>Description</Td>
                        <Td textAlign={"right"}>Amount</Td>
                      </Tr>
                      <Tr>
                        <Td>{description}</Td>
                        <Td textAlign={"right"}>
                          {isApprove === "Completed" ? cost + " baht" : isApprove === "In_progress" ? cost + " baht" : isApprove === "Awaiting_payment" ? cost : cost + " baht"}
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
                <Text marginTop={2} textAlign={"right"}>
                  {isApprove === "Completed" ? "Total cost: " + cost + " baht" : (isApprove === "In_progress" ? "Total cost: " + cost + " baht" : "")}
                </Text>
                <Text marginTop={5} textAlign={"center"}>
                  {isApprove === "Awaiting_payment" ? <Link to={`/venue/paymentAd/${advertisementId}`}><ButtonComponent text="Pay now" /></Link> : null}
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Box>
    </Center>
  );
};


// return (
//   <Center>
//     <Box
//       display={"flex"}
//       flexDirection={"column"}
//       margin={[3, 5, 7]}
//       width={["100%", "80%", "70%"]}
//     >
//       <Card
//         key={advertiseNotified[0].advertisementId}
//         width={"100%"}
//         backgroundColor={""}
//         color={"white"}
//         border={"1px solid #DEBEF6"}
//         marginBottom={5}
//       >
//         <CardBody>
//           <Stack divider={<StackDivider />} spacing={[2, 4]}>
//             <Box>
//               <Heading size="md" marginBottom={3}>
//                 Title: Advertisement {isApprove === "Completed" ? "approved" : 
//                                       (isApprove === "In_progress" ? "in_progress" : 
//                                       (isApprove === "Rejected" ? "Rejected" : "other status"))}
//               </Heading>
//               <Text marginBottom={5}>
//                 This email is to notify you that your advertisement has been {isApprove === "Completed" ? "approved and this is the total amount that you have to pay." 
//                                                                             : (isApprove === "In_progress" ? "in_progress and this is the estimated total amount that you have to pay." 
//                                                                             : (isApprove === "Rejected" ? "Rejected." : "other status."))}
//               </Text>
//               <Heading size="md" marginBottom={2}>
//                 Payment Information
//               </Heading>
//               <TableContainer>
//                 <Table className="striped-table" variant={'striped'} colorScheme="" width="100%">
//                   <Tbody>
//                     <Tr backgroundColor={"#A533C8"}>
//                       <Td>Discription</Td>
//                       <Td textAlign={"right"}>Amount</Td>
//                     </Tr>
//                     <Tr>
//                       <Td>Advertisement</Td>
//                       <Td textAlign={"right"}>
//                         {isApprove === "Completed" ? advertiseNotified[0].cost + " baht"
//                                                 : (isApprove === "In_progress" ? advertiseNotified[0].cost + " baht" 
//                                                 : (isApprove === "Rejected" ? "0 baht" : "other status."))}
//                       </Td>
//                     </Tr>
//                   </Tbody>
//                 </Table>
//               </TableContainer>
//               <Text marginTop={2} textAlign={"right"}>
//                 {isApprove === "Completed" ? "Total cost: " + advertiseNotified[0].cost + " baht"
//                                           : (isApprove === "In_progress" ? "Total cost: " + advertiseNotified[0].cost + " baht" 
//                                           : (isApprove === "Rejected"))}
//               </Text>
//               <Text marginTop={5} textAlign={"center"}>
//                 {isApprove === "Completed" ? <ButtonComponent text="Pay now" />
//                                           : (isApprove === "In_progress" ? <ButtonComponent text="Pay now" />
//                                           : (isApprove === "Rejected"))}
//               </Text>
//             </Box>
//           </Stack>
//         </CardBody>
//       </Card>
//     </Box>
//   </Center>
// );
// };