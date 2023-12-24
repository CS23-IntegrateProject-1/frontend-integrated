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
} from "@chakra-ui/react";
import { Axios } from "../../../../AxiosInstance";
import { useParams } from "react-router-dom";
import { TextStyle } from "../../../../theme/TextStyle";
import { useQuery } from "@tanstack/react-query";
import { formatDate1 } from "../../../../functions/formatDatetime";
import { useState, useEffect } from "react";

interface order {
  orderDetails: orderDetail[];
  itemCount: number;
  orderDate: string;
  orderId: number;
  totalAmount: number;
  totalCount: number;
}
interface orderDetail {
  menuName: string;
  menuPrice: number;
  quantity: number;
}

interface orders {
  orderId: number;
}

export const Checkbill: React.FC = () => {
  const { appTransactionDetailId } = useParams();
  const [newOrderId, setNewOrderId] = useState<string | undefined>();
  const { orderId } = useParams();
  

  useEffect(() => {
    const fetchOrderId = async () => {
      try {
        const response = await Axios.get<orders>(
          `/feature8/getOrderIdByAppTransactionDetailId/${appTransactionDetailId}`
        );
        const orderIdData = response.data;
        setNewOrderId(orderIdData.orderId.toString());
      } catch (error) {
        console.error("Error fetching order ID:", error);
        setNewOrderId(undefined);
      }
    };

    if (orderId === undefined) {
      fetchOrderId();
      
    }else{
      setNewOrderId(orderId);
    }
  }, [orderId, appTransactionDetailId]);

  
  

  const fetchOrderData = async () => {
    try {
      const [orderResponse] = await Promise.all([
        Axios.get<order>(`/feature8/getReceipt/${newOrderId}`)
      ]);
      const orderData = orderResponse.data;
      return { orderData };
    } catch (error) {
      console.error("Error fetching order data:", error);
      return { orderData: null };
    }
  };

  const { data } = useQuery(["fetchOrderData", newOrderId || ""], () => fetchOrderData());

  return (
    <Center>
      <Box
        display={"flex"}
        flexDirection={"column"}
        margin={[3, 5, 7]}
        width={["100%", "80%", "70%"]}
        fontWeight={"bold"}
      >
        {data && (
          <>
            <Text style={TextStyle.h1} fontSize={"lg"} fontWeight={"bold"} marginBottom={3}>
              Order #{data.orderData && data.orderData.orderId}
            </Text>
            <Text fontSize={"lg"} fontWeight={"bold"} marginBottom={2}>
              {(data.orderData && formatDate1(data.orderData.orderDate))}
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
                  {data?.orderData?.orderDetails.map((orderDetail, index) => (
                    <Tr key={index}>
                      <Td textAlign="center" fontSize="lg" color="white">
                        {orderDetail.quantity}
                      </Td>
                      <Td textAlign="center" fontSize="lg" color="white">
                        {orderDetail.menuName}
                      </Td>
                      <Td textAlign="center" fontSize="lg" color="white">
                        {orderDetail.menuPrice}
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
                      {data.orderData && data.orderData.itemCount}
                    </Td>
                  </Tr>
                  <Tr borderBottom="none">
                    <Td fontSize="lg" color="white">
                      TOTAL:
                    </Td>
                    <Td></Td>
                    <Td textAlign="center" fontSize="lg" color="white">
                    {data.orderData && data.orderData.totalCount}
                    </Td>
                  </Tr>
                  <Tr borderBottom="none">
                    <Td fontSize="lg" color="white">
                      PRICE:
                    </Td>
                    <Td></Td>
                    <Td textAlign="center" fontSize="lg" color="white">
                      {data.orderData && data.orderData.totalAmount}
                    </Td>
                  </Tr>
                  <Divider width={"300%"} variant={"dashed"} marginTop={3} />
                </Tbody>
              </Table>
            </TableContainer>
          </>
        )}
      </Box>
    </Center>
  );
}
