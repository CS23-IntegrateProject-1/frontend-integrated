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
    Text
  } from '@chakra-ui/react'
import axios from 'axios';

  import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
type Order = {
  userId:       number
  venueId:      number
  order_date:   Date
  total_amount: number
  addressId:    null
  branchId:     number  
  driverId:     null
  isDelivery:   Boolean
  orderId:      number
  status:       string
  reserveId:    null
}

export const OrderUpdateNoti = () => {
  const [userData,setUserData] = useState('');
  const [userId, setUserId] = useState('');
  const [order, setOrder] = useState<Order[]>([]);
  const {orderId} = useParams();
  const fetchData = async () => {
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      // Use the fetch function instead of axios
      const response = await fetch(backendUrl+'/feature8/user', {
        credentials: 'include'
      });
      // Check if the request was successful (status code in the range 200-299)
      if (response.ok) {
        const userData = await response.json(); // Extract userData from response
        // Check if userData exists before calling setUserData
        if (userData) {
          console.log("API Response:", userData);
          setUserData(userData); // Call setUserData with valid userData
          setUserId(userData.userId)
        } else {
          console.error("No user data received from API");
        }
      } else {
        // Handle non-successful response (status code outside the range 200-299)
        console.error("Error fetching user data. Status:", response.status);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  const fetchOrderData = async () => {
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      const OrderResponse = await axios.get(`${backendUrl}/feature8/orders/${orderId}`);
      const orderData = OrderResponse.data; // Assuming the data is in the 'data' property
      setOrder(orderData);
    } catch (error) {
      console.error('Error fetching reservation data:', error);
    }
  }

  useEffect(() => {
    fetchOrderData();
  }, []);

  console.log(order);

  useEffect(() => {
    fetchData();
  }, []);
  
    return (
        <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      margin={[3, 5, 7]} // Responsive margin for different screen sizes
      width={["100%", "80%", "70%"]} // Responsive width for different screen sizes
    >
      <Card width={"70%"} backgroundColor={""} color={"white"} border={"1px solid #DEBEF6"}>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="md" marginBottom={3}>
                Order update
              </Heading>
              <Text>
                Kevin Table no.7
              </Text>
              <TableContainer>
                <Table variant={'simple'}>
                    <Tbody>
                        <Tr>
                            <Td>Soup</Td>
                            <Td>3</Td>
                        </Tr>
                        <Tr>
                            <Td>Salad</Td>
                            <Td>1</Td>
                        </Tr>
                        <Tr>
                            <Td>Super pasta</Td>
                            <Td>1</Td>
                        </Tr>
                        <Tr>
                            <Td>Total</Td>
                            <Td>670</Td>
                        </Tr>
                    </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
    )
}