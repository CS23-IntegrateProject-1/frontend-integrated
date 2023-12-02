import { Box } from "@chakra-ui/react"
import { CartDetailNavbar } from "../../components/FoodDeliveryComp/CartDetail/CartDetailNavbar"
import { DeliveryTime } from "../../components/FoodDeliveryComp/CartDetail/DeliveryTime"
import { YourOrderComp } from "../../components/FoodDeliveryComp/OrderProcessingComp/YourOrderComp"
interface Order {
    amount: number;
    restaurant: string;
    size: string;
    price: number;
  }
export const YourOrder=()=>{
    return(
        <Box>
         <CartDetailNavbar RestaurantName="MK Restaurant (Big C Rama 4)"/>
         <DeliveryTime/>
         <YourOrderComp/>

        </Box>
    )
}