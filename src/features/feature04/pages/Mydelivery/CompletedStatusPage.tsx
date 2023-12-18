import { Box } from "@chakra-ui/react"
import { Completed } from "../../components/FoodDeliveryComp/Completed"
import FoodStatus from "../../components/FoodDeliveryComp/FoodStatusNavbar"
export const CompletedStatusPage=()=>{
    return<Box>
        <FoodStatus/>
        <Completed/>
    </Box>
}