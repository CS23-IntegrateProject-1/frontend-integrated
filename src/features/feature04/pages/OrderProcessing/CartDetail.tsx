import { Box, Flex, Text } from "@chakra-ui/react";
import { CartDetailNavbar } from "../../components/FoodDeliveryComp/CartDetail/CartDetailNavbar";
import { DeliveryTime } from "../../components/FoodDeliveryComp/CartDetail/DeliveryTime";
import { InCartMenu } from "../../components/FoodDeliveryComp/OrderProcessingComp/InCartMenu";
import { FoodStatus } from "../../components/FoodDeliveryComp/OrderProcessingComp/FoodStatus";
import index from "../../../../theme/foundations/index";
import { useEffect, useState } from "react";
import { Axios } from "../../../../AxiosInstance";


export const CartDetail = () => {
  const [venue, setVenue] = useState<string>(""); // Define total state
  const [branchName, setBranchName] = useState<string>(""); // Define total state

  useEffect(() => {
    const fetchBranchName = async () => {
      try {
        const response = await Axios.get("/feature4/branch/1/4");
        console.log("hello from cart detail" + response.data.venue);
        setBranchName(response.data.branch.branch_name);
        setVenue(response.data.venue.name);
      } catch (error) {
        console.log("Error fetching branch name: ", error);
      }
    }
    fetchBranchName();
  }, []);
  
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
      <CartDetailNavbar RestaurantName={venue} BranchName={branchName} />
      <DeliveryTime />
      <InCartMenu />
    </Box>
  );
};
