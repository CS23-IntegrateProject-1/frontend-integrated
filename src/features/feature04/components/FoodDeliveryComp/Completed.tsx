import { Box,Flex,Text,IconButton,Button } from "@chakra-ui/react";
import index from "../../../../theme/foundations/index"
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

interface OrderDetail {
  restaurantName: string;
  OrderDate: string;
  price: number;
  Driver: string;
  licensePlate: string;
  branchId: number;
}

export const Completed=(props: OrderDetail)=> {
  return <Box>
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
            <Flex alignItems={"flex-end"} justifyContent={"flex-end"} mt={5}>
            <NavLink to={`/ReviewDelivery/${props.branchId}`}>
            <Button variant={"unstyle"} backgroundColor={index.colors.brand[200]} borderRadius={10} minWidth={100}>
                Review
            </Button>
            </ NavLink>
            </Flex>
           
          </Box>
          <IconButton
            size="sm"
            aria-label="Next"
            fontSize="1.5rem"
            variant={"unstyle"}
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
  </Box>;
}

