import { Box, Flex, Button } from "@chakra-ui/react";
import index from "../../../../../theme/foundations/index";
// import { OrderSummary } from "./OrderSummary";
import { useNavigate } from "react-router-dom";
export const PlaceOrder = () => {
    const navigate=useNavigate();
    const navToOrder=()=>{
      navigate('/map/food-delivery/your-order')
    }
  // interface Order {
  //   amount: number;
  //   restaurant: string;
  //   size: string;
  //   price: number;
  // }
  // const orders: Order[] = [
  //   {
  //     amount: 2,
  //     restaurant: "MK Roasted Duck",
  //     size: "Large",
  //     price: 20,
  //   },
  // ];
  // const calculateTotalAmount = () => {
  //   return orders.reduce(
  //     (total, order) => total + order.price * order.amount,
  //     0
  //   );
  // };
  return (
    <Box>
      <Flex flexDirection={"column"} alignItems={"center"} gap={2}>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-around"}
          gap={2}
        >
          {/* <Text>Total(incl. Vat)</Text>
          <Text>
            ${calculateTotalAmount()}
          </Text> */}
        </Box>
        <Button
          variant={"unstyle"}
          backgroundColor={index.colors.brand[200]}
          maxWidth={500}
          minWidth={100}
          maxHeight={100}
          width={500}
          mb={2}
          onClick={navToOrder}
        >
          Place Order
        </Button>
      </Flex>
    </Box>
  );
};
