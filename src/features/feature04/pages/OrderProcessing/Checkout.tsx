import { Box, Text, Flex } from "@chakra-ui/react";
import { CartDetailNavbar } from "../../components/FoodDeliveryComp/CartDetail/CartDetailNavbar";
import { FoodStatus } from "../../components/FoodDeliveryComp/OrderProcessingComp/FoodStatus";
import { SelectLocation } from "../../components/FoodDeliveryComp/OrderProcessingComp/SelectLocation";
import { PaymentMethod } from "../../components/FoodDeliveryComp/OrderProcessingComp/PaymentMethod";
import index from "../../../../theme/foundations/index";
import { OrderSummary } from "../../components/FoodDeliveryComp/OrderProcessingComp/OrderSummary";
import { PlaceOrder } from "../../components/FoodDeliveryComp/OrderProcessingComp/PlaceOrder";
// import { useNavigate } from "react-router-dom";
interface Order {
  amount: number;
  restaurant: string;
  size: string;
  price: number;
}
export const Checkout = () => {


  const orders: Order[] = [
    {
      amount: 1,
      restaurant: "MK Roasted Duck",
      size: "Large",
      price: 20,
    },
  ];
  return (
    <Box>
      <FoodStatus />
<br/>
      <Flex justifyContent={"center"}>
        <Text
          textAlign={"center"}
          fontSize={index.textStyles.h1.fontSize}
          fontWeight={index.textStyles.h1.fontWeight}
          color={index.colors.white}
        >
          Checkout
        </Text>
      </Flex>
      <CartDetailNavbar RestaurantName="MK Restaurant (Big C Rama 4)" />
      <SelectLocation/>
      <br />
      <PaymentMethod cardTypeImg="data:image/png;base64,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"
      cardType="Visa"
      cardNo={1234567891112345}
      />
      <br />

      <OrderSummary orders={orders}/>
      <br/>
      <PlaceOrder/>
    </Box>
  );
};
