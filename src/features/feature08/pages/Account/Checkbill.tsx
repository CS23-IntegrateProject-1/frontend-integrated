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
import { TextStyle } from "../../../../theme/TextStyle";

// type order = {
//   userId  :  string; 
//   venueId  :  string; 
//   order_date : string; 
//   total_amount: string; 
//   addressId : string;
//   branchId  :  string; 
//   driverId   : string; 
//   isDelivery : string;        
//   orderId : string;            
//   status : string; 
//   reservedId :  string;          
// }
// type orderDetail = {
//   orderDetailId: string;
//   unit_price: string;
//   order_time: string;
//   additional_req: string;
//   orderId: string;
//   menuId: string;
//   quantity: string;
//   setId: string;
//   status: string;
// }


export const Checkbill = () => {
  const { reservationId } = useParams();
  const { venueId } = useParams();
  // need ReservationId , date? , orderId, orderDetailId for all from orderId
  





  //orderDetail axios.get(`http://localhost:8080/feature8/orderdetail/${orderDetailId}`);
  // const [unitPrice, setUnitPrice] = useState<string>('');
  // const [orderTime, setOrderTime] = useState<string>('');
  // const [additionalReq, setAdditionalReq] = useState<string>('');
  // const [menuId, setMenuId] = useState<string>('');
  // const [quantity, setQuantity] = useState<string>('');
  // const [setId, setSetId] = useState<string>('');
  // const [status, setStatus] = useState<string>('');

  //order axios.get(`http://localhost:8080/feature8/order/${orderId}`);
  // const [userId, setUserId] = useState<string>('');
  // const [venueId, setVenueId] = useState<string>('');
  // const [orderDate, setOrderDate] = useState<string>('');
  // const [totalAmount, setTotalAmount] = useState<string>('');
  // const [addressId, setAddressId] = useState<string>('');
  // const [branchId, setBranchId] = useState<string>('');
  // const [driverId, setDriverId] = useState<string>('');
  // const [isDelivery, setIsDelivery] = useState<string>('');
  // const [reservedId, setReservedId] = useState<string>('');

  //Menu
  // const [name,setName] = useState<string>('');


// Fetch orderDetail data based on orderId
// useEffect(() => {
//   if (orderId) {
//     // Make a request to get orderDetailId based on orderId
//     axios.get(`http://localhost:8080/feature8/order/${orderId}`)
//       .then((response) => {
//         const data = response.data;
//         console.log(data);
        

//         // Extract orderDetailId from the response
//         // Fetch orderDetail data based on the obtained orderDetailId
//         axios.get(`http://localhost:8080/feature8/orderdetail/${orderId}`)
//           .then((orderDetailResponse) => {
//             const orderDetailData = orderDetailResponse.data;

//             // Update state for orderDetail properties
//             setUnitPrice(orderDetailData.unit_price);
//             setOrderTime(orderDetailData.order_time);
//             setAdditionalReq(orderDetailData.additional_req);
//             setMenuId(orderDetailData.menuId);
//             setQuantity(orderDetailData.quantity);
//             setSetId(orderDetailData.setId);
//             setStatus(orderDetailData.status);
//           })
//           .catch((orderDetailError) => {
//             console.error('Error fetching orderDetail:', orderDetailError);
//           });
//       })
//       .catch((error) => {
//         console.error('Error fetching order:', error);
//       });
//   }
// }, [orderId]);


//   useEffect(() => {
//     // Fetch order data
//     if (orderId) {
//       axios.get(`http://localhost:8080/feature8/order/${orderId}`)
//         .then((response) => {
//           const data = response.data;

//           // Update state for order properties
//           setUserId(data.userId);
//           setVenueId(data.venueId);
//           setOrderDate(data.order_date);
//           setTotalAmount(data.total_amount);
//           setAddressId(data.addressId);
//           setBranchId(data.branchId);
//           setDriverId(data.driverId);
//           setIsDelivery(data.isDelivery);
//           setReservedId(data.reservedId);
//           // ... update other state variables as needed
//         })
//         .catch((error) => {
//           console.error('Error fetching order:', error);
//         });
//     }
//   }, [orderId]);

//   useEffect(() => {
//     if(menuId){
//       axios.get(`http://localhost:8080/feature8/menu/${menuId}`)
//       .then((res) =>{
//         setName(res.data.name);
//         console.log(name)
//       })
//       .catch((error) => {
//         console.error('Error fetching Menu', error);
//       });
//     }
//   }, [menuId]);

  

//   const formattedOrderDate = orderDate
//   ? new Date(orderDate).toLocaleString('en-US', {
//       weekday: 'long',
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//       hour: 'numeric',
//       minute: 'numeric',
//     })
//   : '';


  return (
    <Center>
      <Box
        display={"flex"}
        flexDirection={"column"}
        margin={[3, 5, 7]}
        width={["100%", "80%", "70%"]}
        fontWeight={"bold"}
      >
        <Text style={TextStyle.h1} fontSize={"lg"} fontWeight={"bold"} marginBottom={3}>
          {/* Order #{orderId} */}
        </Text>
        <Text fontSize={"lg"} fontWeight={"bold"} marginBottom={2}>
          {/* {formattedOrderDate} */}
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
            <Divider variant={"dashed"} width={"365%"} />
            <Tbody>
              
                <Tr>
                  <Td textAlign="center" fontSize="lg" color="white">
                    1
                    {/* not integrate yet */}
                  </Td>
                  <Td textAlign="center" fontSize="lg" color="white">
                    {/* {name} */}
                  </Td>
                  <Td textAlign="center" fontSize="lg" color="white">
                    {/* {quantity} */}
                  </Td>
                </Tr>
              
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
                  1{/* Your item count value */}
                </Td>
              </Tr>
              <Tr borderBottom="none">
                <Td fontSize="lg" color="white">
                  TOTAL:
                </Td>
                <Td></Td>
                <Td textAlign="center" fontSize="lg" color="white">
                  {/* {quantity}Your total amount value */}
                </Td>
              </Tr>
              <Tr borderBottom="none">
                <Td fontSize="lg" color="white">
                  PRICE:
                </Td>
                <Td></Td>
                <Td textAlign="center" fontSize="lg" color="white">
                  {/* {totalAmount} */}
                </Td>
              </Tr>
              <Divider width={"300%"} variant={"dashed"} marginTop={3} />
            
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Center>
  );
}