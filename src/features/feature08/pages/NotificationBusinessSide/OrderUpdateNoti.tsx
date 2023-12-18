import {
  Table,
  Tbody,
  // Tr,
  // Td,
  TableContainer,
  Card,
  Heading,
  CardBody,
  Stack,
  StackDivider,
  Box,
  Text,
  Td,
  Tr
} from '@chakra-ui/react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Axios } from '../../../../AxiosInstance';
import { useQuery } from '@tanstack/react-query';

// interface Order  {
//   userId: number;
//   venueId: number;
//   order_date: Date;
//   total_amount: number;
//   addressId: null;
//   branchId: number;
//   driverId: null;
//   isDelivery: boolean;
//   orderId: number;
//   status: string;
//   reserveId: null;
// }

interface Order {
  orderdetail : orderDetail[],
  sumOfAllPrice : number
}

interface orderDetail {
  menuId?: number,
  setId?: number,
  unit_price: number,
  quantity: number,
  name: string,
  tableNo: number

}

export const OrderUpdateNoti = () => {
  // const [userData, setUserData] = useState('');
  // const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(true);
  const { orderId } = useParams();
     

  const fetchOrderUpdate = async () => {
    const orderRes = await Axios.get<Order>(`/feature8/venue/orderchecklatest/${orderId}`)

    const orderData = orderRes.data;
    setLoading(false);
    return { orderData }
  }

  const { data: orderData } = useQuery(['orderUpdate', orderId], () => fetchOrderUpdate());
  console.log('orderData', orderData?.orderData.orderdetail.map((item) => item.tableNo));
  
  // Idea on fetching userId by credential cookies
  // const fetchData = async () => {
  //   try {
  //     const backendUrl = import.meta.env.VITE_BACKEND_URL;
  //     const response = await fetch(backendUrl + '/feature8/user', {
  //       credentials: 'include'
  //     });

  //     if (response.ok) {
  //       const userData = await response.json();
  //       if (userData) {
  //         console.log('API Response:', userData);
  //         setUserData(userData);
  //         setUserId(userData.userId);
  //       } else { 
  //         console.error('No user data received from API');
  //       }
  //     } else {
  //       console.error('Error fetching user data. Status:', response.status);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching user data:', error);
  //   }
  // };

 

  

  // console.log('Order Data: ', order);
  // console.log('Order Detail Data: ', orderDetail);
  

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
                <Text>
                  Order Update
                </Text>
                
              </Heading>
              <Text>Table no {orderData?.orderData.orderdetail[0].tableNo}</Text>
              <TableContainer>
                <Table variant={'no-decoration'}>
                  <Tbody>
                    {orderData?.orderData.orderdetail.map((item) => (
                      <Tr key={item.name}>
                        <Td>{item.name}</Td>
                        <Td>{item.quantity}</Td>
                      </Tr>
                    ))}
                    <Tr>
                      <Td>Total</Td>
                      <Td>{orderData?.orderData.sumOfAllPrice}</Td>
                    </Tr>
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