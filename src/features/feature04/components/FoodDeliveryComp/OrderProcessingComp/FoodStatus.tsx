import { Box, Text, Flex } from "@chakra-ui/react";
import index from "../../../../../theme/foundations/index";


export const FoodStatus = () => {
  const CheckoutIsActive = location.pathname==='/map/food-delivery/checkout'

  const linkIsCompleted={
    backgroundColor:index.colors.brand[200],
    color:index.colors.white
  }
  const linkNotComplete={
    backgroundColor:index.colors.grey[100],
    color:index.colors.white
  }

  return (
    <Box m={5}>
      <Flex flexDir={"row"} justifyContent={"space-around"}>
        <Flex flexDir={"column"} alignItems={"center"}>
          <Text
            borderRadius={"100%"}
            backgroundColor={index.colors.brand[200]}
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
            textAlign={"center"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            Menu
          </Text>
        </Flex>

        <Flex flexDir={"column"} alignItems={"center"}>
          <Text
            borderRadius={"100%"}
            backgroundColor={index.colors.brand[200]}
            width={"2em"}
            height={"2em"}
            textAlign={"center"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            // style={CartDetailIsActive ? linkIsCompleted:{}}
          >
            2
          </Text>
          
          <Text
            textAlign={"center"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            Cart
          </Text>
        </Flex>

        <Flex flexDir={"column"} alignItems={"center"}>
          <Text
            borderRadius={"100%"}
            // backgroundColor={index.colors.grey[100]}
            color={index.colors.black}
            width={"2em"}
            height={"2em"}
            textAlign={"center"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            style={CheckoutIsActive ? linkIsCompleted:linkNotComplete}
          >
            3
            
          </Text>
          <Text
            textAlign={"center"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            Chekout
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};
