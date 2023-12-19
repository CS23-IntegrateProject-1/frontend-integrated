import { Box, Flex, Text } from "@chakra-ui/react";
import { CartDetailNavbar } from "../../components/FoodDeliveryComp/CartDetail/CartDetailNavbar";
import { DeliveryTime } from "../../components/FoodDeliveryComp/CartDetail/DeliveryTime";
import { InCartMenu } from "../../components/FoodDeliveryComp/OrderProcessingComp/InCartMenu";
import { FoodStatus } from "../../components/FoodDeliveryComp/OrderProcessingComp/FoodStatus";
import index from "../../../../theme/foundations/index";

export const CartDetail = () => {
  return (
    <Box>
      <FoodStatus />
      <Flex justifyContent={"center"}>
        <Text
          textAlign={"center"}
          fontSize={index.textStyles.h1.fontSize}
          fontWeight={index.textStyles.h1.fontWeight}
          color={index.colors.white}
        >
          Cart
        </Text>
      </Flex>
      <CartDetailNavbar RestaurantName="MK Restaurant (Big C Rama 4)" />
      <DeliveryTime />
      <InCartMenu />
    </Box>
  );
};
