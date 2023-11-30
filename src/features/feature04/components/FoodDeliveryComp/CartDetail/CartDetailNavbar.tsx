import { Box,Flex,Text,Divider } from "@chakra-ui/react"
import index from "../../../../../theme/foundations/index"

interface resName{
    RestaurantName: string;
}
export const CartDetailNavbar=(prop: resName)=>{
    return(
    <Box>
        <Flex flexDir={"column"} alignItems={"center"}>
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
        <Text
          fontSize={index.textStyles.h4.fontSize}
          fontWeight={index.textStyles.body1.fontWeight}
          color={index.colors.white}
        >
          {prop.RestaurantName}
        </Text>
      </Flex>
    </Box>)
}