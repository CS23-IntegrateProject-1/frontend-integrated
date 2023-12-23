import { Box, Text, Flex, Divider } from "@chakra-ui/react";
import index from "../../../../theme/foundations/index";
interface resName {
  RestaurantName: string;
  BranchName : string;
  DeliveryMinute: number;
}
export const FoodDeliNavbar = (prop: resName) => {
  // const navigate = useNavigate();
  // const navigate=()=>{
  //   navigate('/map/')
  // }
  return (
    <Box>
      <Flex flexDir={"column"} alignItems={"center"}>
        <Flex justifyContent={"center"}>
          <Text
            textAlign={"center"}
            fontSize={index.textStyles.h1.fontSize}
            fontWeight={index.textStyles.h1.fontWeight}
            color={index.colors.white}
          >
            {prop.RestaurantName}
            
          </Text>
        </Flex>
        <Text
          fontSize={index.textStyles.h4.fontSize}
          fontWeight={index.textStyles.body1.fontWeight}
          color={index.colors.white}
        >
          {prop.BranchName}
        </Text>
      </Flex>
      <Divider color={index.colors.brand[100]} m={2}/>
    </Box>
  );
};
