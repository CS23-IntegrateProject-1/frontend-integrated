import { Box, Text, Flex } from "@chakra-ui/react";
import { YourOrderStatusComp } from "../../components/FoodDeliveryComp/YourOrderStatus/YourOrderStatusComp";
import index from "../../../../theme/foundations/index"
 import { useParams } from "react-router-dom";
import { Axios } from "../../../../AxiosInstance";
import { useEffect, useState } from "react";



export const OngoingOrder=()=>{
    const {onlineOrderId} = useParams();
    
     // Define a function to fetch data from the backend

  const [orderData, setOrderData] = useState<any[]>([]);

    useEffect(() => {
        const fetchOngoingOrders = async () => {
        try {
            const response = await Axios.get(`/feature4/showOnGoingOrderDetail/${onlineOrderId}`);
            console.log(response.data);
            setOrderData(response.data);
        } catch (error) {
            console.error('Error fetching ongoing orders:', error);
        }
        };

        fetchOngoingOrders();
    }, []);

  
    console.log(orderData);
return(
    <Box>
        <Flex flexDirection={"column"} alignItems={"center"}>
        <YourOrderStatusComp
          amount={1}
          cardNo={1234567890987123}
          cardType="Visa"
          cardTypeImg="="
          mainAddress="{orderData.address}"
          price={210}
          restaurant="MK Roasted Duck"
          size="small"
          DriverName="{orderData.Driver_list.driver_first_name}"
          DriverLicensePlate="{orderData.Driver_list.driver_license_plate}"
        />
        <Text color={"white"} fontSize={index.textStyles.h1.fontSize} fontWeight={index.textStyles.h1.fontWeight}>
            Ongoing
        </Text>
        <br/>
        </Flex>
    </Box>
)
}