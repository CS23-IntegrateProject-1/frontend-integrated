import { Box, Text} from "@chakra-ui/react";
import { YourOrderStatusComp } from "../../components/FoodDeliveryComp/YourOrderStatus/YourOrderStatusComp";
import index from "../../../../theme/foundations/index"
import { useParams } from "react-router-dom";
import { Axios } from "../../../../AxiosInstance";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";


export const CompleteOrder=()=>{
  const {onlineOrderId} = useParams();
        
        // Define a function to fetch data from the backend

        const fetchOrderData = async () => {
            const response = await Axios.get(`/feature4/showCompletedOrderDetail/${onlineOrderId}`);
            return response.data;
          };
        
          // Use useQuery to fetch and manage the data
          const { data: orderData,isLoading,isError } = useQuery(["ongoingOrder", onlineOrderId], fetchOrderData);
        
          // Use useEffect to log the data
          useEffect(() => {
            console.log(orderData);
          }, [orderData]);

          if (isLoading) {
            return <p>Loading...</p>;
          }
        
          if (isError || !orderData) {
            return <p>Error fetching data or data is undefined</p>;
          }
    
        console.log(orderData);
    return(
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <YourOrderStatusComp
          amount={1}
          cardNo={1234567890987123}
          cardType="Visa"
          cardTypeImg="="
          mainAddress={orderData.address}
          price={210}
          restaurant="MK Roasted Duck"
          size="small"
          DriverName={orderData.Driver_list.driver_first_name}
          DriverLicensePlate={orderData.Driver_list.driver_license_plate}
        />
        <Text color={"#92E29A"} fontSize={index.textStyles.h1.fontSize} fontWeight={index.textStyles.h1.fontWeight}>
          Completed
        </Text>
      </Box>
    )
}