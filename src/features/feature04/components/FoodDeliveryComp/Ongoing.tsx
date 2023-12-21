import { Box, Text, Flex, IconButton, Button } from "@chakra-ui/react";
import index from "../../../../theme/foundations/index";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
interface OrderDetail {
  restaurantName: string;
  OrderDate: string;
  price: number;
  Driver: string;
  licensePlate: string;
}
function Ongoing(props: OrderDetail) {
  const navigate = useNavigate();
  const CancelOrder = () => {
    navigate("/map/food-delivery/canceled");
  };
  const CompleteOrder = () => {
    navigate("/map/food-delivery/completed");
  };
  const NavigateOngoingDetail = () => {
    navigate("/map/food-delivery/Ongoing-your-order");
  };

  return (
    <Box>
      <Flex justifyContent={"center"}>
        <Box
          border={"solid 1.5px"}
          borderColor={index.colors.brand[100]}
          p={2}
          borderRadius={5}
          m={10}
          width={"auto"}
          maxWidth={500}
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
              fontWeight={index.textStyles.h1.fontWeight}
            >
              {props.restaurantName}
            </Text>
            <Text
              fontSize={index.textStyles.body2.fontSize}
              fontWeight={index.textStyles.body2.fontWeight}
            >
              {props.OrderDate}
            </Text>
            <Text
              fontSize={index.textStyles.body2.fontSize}
              fontWeight={index.textStyles.body2.fontWeight}
            >
              ฿ {props.price}
            </Text>
            <Flex flexDirection={"row"}>
              <Text>Driver : </Text>
              <Text>{props.Driver}</Text>
            </Flex>
            <Flex flexDirection={"row"}>
              <Text>License Plate : </Text>
              <Text> {props.licensePlate}</Text>
            </Flex>

            <Box display={"flex"} gap={5}>
              <Button
                variant={"unstyle"}
                backgroundColor={index.colors.brand[200]}
                onClick={CancelOrder}
              >
                Cancel
              </Button>
              <Button
                variant={"unstyle"}
                backgroundColor={index.colors.brand[200]}
                onClick={CompleteOrder}
              >
                Complete
              </Button>
            </Box>
          </Box>
          <IconButton
            size="sm"
            aria-label="Next"
            fontSize="1.5rem"
            variant={"unstyle"}
            onClick={NavigateOngoingDetail}
          >
            <MdKeyboardArrowRight />
          </IconButton>
          {/* <Box display={"flex"} flexDirection="column" justifyContent={"flex-end"} alignItems={"flex-end"}>
              <Text
                fontSize={index.textStyles.body2.fontSize}
                fontWeight={index.textStyles.body2.fontWeight}
              >
                $210
              </Text>
            </Box> */}
        </Box>
      </Flex>
    </Box>
  );
}

export default Ongoing;
