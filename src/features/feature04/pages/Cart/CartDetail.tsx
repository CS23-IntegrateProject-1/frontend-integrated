import { Box } from "@chakra-ui/react"
import { CartDetailNavbar } from "../../components/FoodDeliveryComp/CartDetail/CartDetailNavbar"
import { DeliveryTime } from "../../components/FoodDeliveryComp/CartDetail/DeliveryTime"
import { InCartMenu } from "../../components/FoodDeliveryComp/CartDetail/InCartMenu"
export const CartDetail=()=>{
    return<Box>
        <CartDetailNavbar RestaurantName="MK Restaurant (Big C Rama 4)"/>
        <DeliveryTime/>
        <InCartMenu/>
    </Box>
}