import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { MenuComp } from "../components/FoodDeliveryComp/MenuComp";
import { FoodDeliNavbar } from "../components/FoodDeliveryComp/FoodDeliNavbar";
import index from "../../../theme/foundations/index";
const FoodDelivery = () => {
  return (
    <Box>
      <FoodDeliNavbar RestaurantName="MK Restaurant (Big C Rama 4)" DeliveryMinute={30}/>
      <Flex flexDir={"column"} alignItems="center">
        <Flex flexWrap="wrap" justifyContent="center" maxW="800px" gap={5}>
          <MenuComp menuName="MK Roasted Duck" price={210.0}/>
          <MenuComp menuName="MK Roasted Duck"price={210.0} />
          <MenuComp menuName="MK Roasted Duck" price={210.0}/>
          <MenuComp menuName="MK Roasted Duck" price={210.0}/>
          <MenuComp menuName="MK Roasted Duck"price={210.0} />
          <MenuComp menuName="MK Roasted Duck"price={210.0} />
        </Flex>
      </Flex>
      
      <Flex justifyContent={"center"}>
        <Button
          variant={"unstyle"}
          display={"flex"}
          justifyContent={"space-between"}
          width={"auto"}
          minW={"300"}
          height={70}
          background={index.colors.brand[200]}
          color={index.colors.white}
          m={10}
        >
          <Text
            borderRadius={"100%"}
            borderWidth="2px"
            borderStyle="solid"
            width={"2em"}
            height={"2em"}
            textAlign={"center"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            1
          </Text>
          <Text
            fontSize={index.textStyles.body1.fontSize}
            fontWeight={index.textStyles.h1.fontWeight}
          >
            View Your Cart
          </Text>
          <Text
            fontSize={index.textStyles.body1.fontSize}
            fontWeight={index.textStyles.body1.fontWeight}
          >
            $210.0
          </Text>
        </Button>
      </Flex> 
    </Box>
  );
};
export default FoodDelivery;
