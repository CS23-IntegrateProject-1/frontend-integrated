import { Box } from "@chakra-ui/react";
import FoodStatus from "../../components/FoodDeliveryComp/FoodStatusNavbar";
import Ongoing from "../../components/FoodDeliveryComp/Ongoing";
function OngoingPage() {
  return <Box>
    <FoodStatus/>
    <Ongoing/>
  </Box>;
}
export default OngoingPage;