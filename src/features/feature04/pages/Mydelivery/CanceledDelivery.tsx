import { Box,Flex,Text,IconButton, Wrap, WrapItem } from "@chakra-ui/react";
import index from "../../../../theme/foundations/index"
import { MdKeyboardArrowRight } from "react-icons/md";
import FoodStatus from "../../components/FoodDeliveryComp/FoodStatusNavbar";
import { useEffect, useState } from "react";
import { Axios } from "../../../../AxiosInstance";
import { useNavigate } from "react-router-dom";
export const CanceledMyDelivery=()=>{
  const navigate = useNavigate();
  const [canceledOrders, setCanceledOrders] = useState<any[]>([]);
  const NavigateCanceledDetail = () => {
    navigate(`/map/food-delivery/cancel-your-order/${canceledOrders[0].onlineOrderId}`);
  };

  useEffect(() => {
    const fetchOngoingOrders = async () => {
      try {
        const response = await Axios.get('feature4/showCanceledOrder');
        setCanceledOrders(response.data);
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error fetching ongoing orders:', error);
      }
    };

    fetchOngoingOrders(); 
  }, []);
    return(
     
      <Box>
      <FoodStatus />
      <Wrap spacing="20px" justify="center">
        {canceledOrders.map((order) => (
          <WrapItem key={order.onlineOrderId}>
          <Box
            key={order.onlineOrderId} // Use a unique key for each mapped component
            border={"solid 1.5px"}
            borderColor={index.colors.brand[100]}
            p={2}
            borderRadius={5}
            m={10}
            width={"auto"}
            maxWidth={600}
            minHeight={200}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <img
              src="https://www.mkrestaurant.com/public/uploads/mk_menu/images/33e10dd680609fd2de8cc182fd51f644.jpg"
              width="30%"
              height="30%"
              style={{ borderRadius: "5%", margin: 0 }}
              alt="Menu Item"
            />
            <Box flexDir={"row"}>
              <Text
                fontSize={index.textStyles.h1.fontSize}
                fontWeight={index.textStyles.h2.fontWeight}
              >
                {order.Venue_branch.branch_name.length > 15
                  ? `${order.Venue_branch.branch_name.substring(0, 12)}...`
                  : order.Venue_branch.branch_name}
              </Text>
              <Text
                fontSize={index.textStyles.body2.fontSize}
                fontWeight={index.textStyles.body2.fontWeight}
              >
                Date: {new Date(order.order_date).toLocaleDateString()}
              </Text>
              <Text
                fontSize={index.textStyles.body2.fontSize}
                fontWeight={index.textStyles.body2.fontWeight}
                >
                  Driver : {order.Driver_list.driver_first_name}
                </Text>
              <Flex alignItems={"flex-end"} justifyContent={"flex-end"} mt={5}>
                <Text
                  fontSize={index.textStyles.body1.fontSize}
                  fontWeight={index.textStyles.body3.fontWeight}
                  color={index.colors.red[300]}
                >
                  {order.status}
                </Text>
              </Flex>
            </Box>
            <IconButton
              size="sm"
              aria-label="Next"
              fontSize="1.5rem"
              variant={"unstyle"}
              onClick={NavigateCanceledDetail}
            >
              <MdKeyboardArrowRight />
            </IconButton>
          </Box>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
    
    
    )
}