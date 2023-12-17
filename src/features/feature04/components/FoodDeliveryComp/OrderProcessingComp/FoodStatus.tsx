import { Box, Text, Flex, IconButton } from "@chakra-ui/react";
import index from "../../../../../theme/foundations/index";
import { StyledComponent } from "@emotion/styled";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const FoodStatus = () => {
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
  width: ${({ activeStep }) =>
    location.pathname === '/map/food-delivery/cart-detail' ? '47%' : location.pathname==='/map/food-delivery/checkout' ? '80%' : '100%'};
  left: 20px;
}
`;


  return (
    <Box m={5}>
      <StepContainer/>
      <Flex flexDir={"row"} justifyContent={"space-around"}>
        <IconButton aria-label="none" borderColor={"none"} variant={"none"}>
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

        <IconButton aria-label="none" borderColor={"none"} variant={"none"}>
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
              // style={CartDetailIsActive ? linkIsCompleted:{}}
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

        <IconButton aria-label="none" borderColor={"none"} variant={"none"}>
          <Flex flexDir={"column"} alignItems={"center"}>
            <Text
              borderRadius={"100%"}
              // backgroundColor={index.colors.grey[100]}
              color={index.colors.black}
              width={"2em"}
              height={"2em"}
              textAlign={"center"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              style={CheckoutIsActive || YourOrderIsActive? linkIsCompleted : linkNotComplete}
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