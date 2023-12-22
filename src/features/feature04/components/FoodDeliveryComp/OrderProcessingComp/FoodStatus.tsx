import { Box, Text, Flex, IconButton } from "@chakra-ui/react";
import index from "../../../../../theme/foundations/index";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

interface FoodStatusProps {
  venueId: string | undefined;
  branchId: string | undefined;
}
export const FoodStatus = (props:FoodStatusProps) => {
  const location = useLocation();
  const CheckoutIsActive = location.pathname === "/map/food-delivery/checkout";
  const YourOrderIsActive = location.pathname === "/map/food-delivery/your-order"
const navigate = useNavigate();
const navigateInCartDetail =()=>{ navigate(`/map/food-delivery/cart-detail/${props.venueId}/${props.branchId}`)};
const navigateCheckout = ()=>{navigate(`/map/food-delivery/checkout/${props.venueId}/${props.branchId}`)};
const navigateMenu = ()=>{navigate(`/map/food-delivery/${props.venueId}/${props.branchId}`)}
  const linkIsCompleted = {
    backgroundColor: index.colors.brand[200],
    color: index.colors.white,
  };
  const linkNotComplete = {
    backgroundColor: index.colors.grey[100],
    color: index.colors.white,
  };

  
  const StepContainer = styled.div<{ activestep: string }>`
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
    width: ${({ activestep }) =>
      activestep === '/map/food-delivery/cart-detail'
        ? `calc(100vw - ${'57vw'})`
        : activestep === '/map/food-delivery/checkout'
        ? `calc(100vw - ${'27vw'})`
        : '100%'};
    left: 20px;
  }
`;



return (
  <Box m={5}>
    <StepContainer activestep={location.pathname} />
    <Flex flexDir={"row"} justifyContent={"space-around"}>
      <IconButton
        aria-label="none"
        borderColor={"none"}
        variant={"none"}
        // isDisabled={!location.pathname.includes("menu")}
        onClick={navigateMenu}
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