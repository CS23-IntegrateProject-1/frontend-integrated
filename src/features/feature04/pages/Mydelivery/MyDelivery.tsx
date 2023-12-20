import { Box } from "@chakra-ui/react";
import FoodStatus from "../../components/FoodDeliveryComp/FoodStatusNavbar";
import Ongoing from "../../components/FoodDeliveryComp/Ongoing";

interface OrderDetail {
  menuName: string;
  OrderDate: string;
  price: number;
  Driver: string;
  LicensePlate: string;

}

function OngoingPage() {
  const orderDetail: OrderDetail = {
    menuName: "MK Roasted Duck",
    OrderDate: "2023-01-15",
    price: 12.99,
    Driver: "John Doe",
    LicensePlate:"AB1234"
  };
  const formattedDate = new Date(orderDetail.OrderDate).toLocaleDateString();

  // No need to format the date here

  return (
    <Box>
      <FoodStatus />
      <Ongoing
        price={orderDetail.price}
        menuName={orderDetail.menuName}
        Driver={orderDetail.Driver}
        OrderDate={formattedDate}
        licensePlate={orderDetail.LicensePlate}
      />
    </Box>
  );
}

export default OngoingPage;
