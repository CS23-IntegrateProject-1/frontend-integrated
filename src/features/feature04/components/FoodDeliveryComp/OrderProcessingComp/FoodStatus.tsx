import { Box, Text, Flex, IconButton } from "@chakra-ui/react";
import index from "../../../../../theme/foundations/index";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
export const FoodStatus = () => {
  const location = useLocation();
  const CheckoutIsActive = location.pathname === "/map/food-delivery/checkout";
  const YourOrderIsActive = location.pathname === "/map/food-delivery/your-order"
const navigate = useNavigate();
const navigateInCartDetail =()=>{ navigate('/map/food-delivery/cart-detail')};
const navigateCheckout = ()=>{navigate('/map/food-delivery/checkout')};

  const linkIsCompleted = {
    backgroundColor: index.colors.brand[200],
    color: index.colors.white,
  };
  const linkNotComplete = {
    backgroundColor: index.colors.grey[100],
    color: index.colors.white,
  };

  
const StepContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 70px;
position: relative;

&:before,
&:after {
  content: '';
  position: absolute;
  background: #d9d9d9;
  height: 4px;
  width: calc(100% - 40px);
  transform: translateY(200%);
  left: 20px;
}

&:after {
  background: #a533c8;
  height: 4px;
  transition: 0.4s ease;
  transform: translateY(200%);
<<<<<<< HEAD
  width: ${({ activeStep }) =>
    location.pathname === '/map/food-delivery/cart-detail' ? '46%' : location.pathname==='/map/food-delivery/checkout' ? '82%' : '100%'};
=======
  width: ${() =>
    location.pathname === '/map/food-delivery/cart-detail' ? '47%' : location.pathname==='/map/food-delivery/checkout' ? '82%' : '100%'};
>>>>>>> 48f2d41f42c6b1a4cafddf35f256e5a35662c9a8
  left: 20px;
}
`;


return (
  <Box m={5}>
    <StepContainer activeStep={location.pathname} />
    <Flex flexDir={"row"} justifyContent={"space-around"}>
      <IconButton
        aria-label="none"
        borderColor={"none"}
        variant={"none"}
        // isDisabled={!location.pathname.includes("menu")}
      >
        <Flex flexDir={"column"} alignItems={"center"}>
          <Text
            borderRadius={"100%"}
            backgroundColor={index.colors.brand[200]}
            width={"2em"}
            height={"2em"}
            textAlign={"center"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            1
          </Text>
          <Text
            textAlign={"center"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            Menu
          </Text>
        </Flex>
      </IconButton>

      <IconButton
        aria-label="none"
        borderColor={"none"}
        variant={"none"}
        // isDisabled={!location.pathname.includes("cart-detail")}
      >
        <Flex flexDir={"column"} alignItems={"center"}>
          <Text
            borderRadius={"100%"}
            backgroundColor={index.colors.brand[200]}
            width={"2em"}
            height={"2em"}
            textAlign={"center"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            onClick={navigateInCartDetail}
          >
            2
          </Text>

          <Text
            textAlign={"center"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            Cart
          </Text>
        </Flex>
      </IconButton>

      <IconButton
        aria-label="none"
        borderColor={"none"}
        variant={"none"}
        // isDisabled={!CheckoutIsActive && !YourOrderIsActive}
      >
        <Flex flexDir={"column"} alignItems={"center"}>
          <Text
            borderRadius={"100%"}
            color={index.colors.black}
            width={"2em"}
            height={"2em"}
            textAlign={"center"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            style={
              CheckoutIsActive || YourOrderIsActive
                ? linkIsCompleted
                : linkNotComplete
            }
            onClick={navigateCheckout}
          >
            3
          </Text>
          <Text
            textAlign={"center"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            Checkout
          </Text>
        </Flex>
      </IconButton>
    </Flex>
  </Box>
);
};