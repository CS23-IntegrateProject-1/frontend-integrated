import  { useState, useEffect } from 'react';
import { Box } from "@chakra-ui/react";
import FoodStatus from "../../components/FoodDeliveryComp/FoodStatusNavbar";
import Ongoing from "../../components/FoodDeliveryComp/Ongoing";
import { Axios } from "../../../../AxiosInstance";

// interface OrderDetail {
//   restaurantName: string;
//   OrderDate: string;
//   price: number;
//   Driver: string;
//   LicensePlate: string;
// }

function OngoingPage() {
  const [ongoingOrders, setOngoingOrders] = useState<any[]>([]);

  useEffect(() => {
    const fetchOngoingOrders = async () => {
      try {
        const response = await Axios.get('feature4/showOnGoingOrder');
        setOngoingOrders(response.data);
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error fetching ongoing orders:', error);
      }
    };

    fetchOngoingOrders();
  }, []);

  return (
    <Box>
      <FoodStatus />
      {ongoingOrders.map((order) => (
        <Ongoing
          key={order.onlineOrderId}
          onlineOrderId={order.onlineOrderId}
          price={parseFloat(order.total_amount)}
          restaurantName={order.Venue_branch.branch_name}
          Driver={order.Driver_list.driver_first_name}
          OrderDate={new Date(order.order_date).toLocaleDateString()}
          licensePlate={order.Driver_list.driver_license_plate} // Make sure to update this based on your data structure
        />
      ))}
    </Box>
  );
}

export default OngoingPage;
