/* eslint-disable @typescript-eslint/no-unused-vars */
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
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Order  {
  userId: number;
  venueId: number;
  order_date: Date;
  total_amount: number;
  addressId: null;
  branchId: number;
  driverId: null;
  isDelivery: boolean;
  orderId: number;
  status: string;
  reserveId: null;
}

export const OrderUpdateNoti = () => {
  const [userData, setUserData] = useState('');
  const [userId, setUserId] = useState('');
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const { orderId } = useParams();
            
  const fetchData = async () => {
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      const response = await fetch(backendUrl + '/feature8/user', {
        credentials: 'include'
      });

      if (response.ok) {
        const userData = await response.json();
        if (userData) {
          console.log('API Response:', userData);
          setUserData(userData);
          setUserId(userData.userId);
        } else { 
          console.error('No user data received from API');
        }
      } else {
        console.error('Error fetching user data. Status:', response.status);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const fetchOrderData = async () => {
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      const OrderResponse = await axios.get(`${backendUrl}/feature8/orders/${orderId}`);
      const orderData = OrderResponse.data;
      setOrder(orderData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching Order data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrderData();
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderId]); // Include orderId as a dependency to re-run the effect when it changes

  console.log('Order Data: ', order);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      margin={[3, 5, 7]}
      width={['100%', '80%', '70%']}
    >
      <Card width={'70%'} backgroundColor={''} color={'white'} border={'1px solid #DEBEF6'}>
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
                    {/* {Array.isArray(order) && order.length > 0 ? (
                      order.map((item) => (
                        <Tr key={item.orderId}>
                          <Td>{item.status}</Td>
                          <Td>{item.total_amount}</Td>
                        </Tr>
                      ))
                    ) : (
                      <Tr>
                        <Td colSpan={2}>No orders found</Td>
                      </Tr>
                    )} */}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};