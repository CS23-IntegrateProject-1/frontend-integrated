import { Box, Text,Spacer, Button } from "@chakra-ui/react";
import React from "react";
import { TextStyle } from "../../../theme/TextStyle";
import colors from "../../../theme/foundations/colors";
import { useNavigate } from "react-router-dom";
const PlaceTypes = () => {
    const isRestaurants = location.pathname === "/map";
    const isCinemas = location.pathname === "/map/cinemas";
    const isBars = location.pathname === "/map/bars";
    const navigate = useNavigate();
    const navigateRestaurant=()=>{
        navigate('/map');
      }
    const navigateCinemas=()=>{
        navigate('/map/cinemas');
      }
      const navigateBars=()=>{
        navigate('/map/bars')
      }
      const isRestaurantActive = location.pathname === "/map";
  const isCinemasActive = location.pathname === "/map/cinemas";
  const isBarsActive = location.pathname === "/map/bars";

  const ButtonStyle = {
    textDecoration: "none",
    paddingBottom: "10px",
    backgroundColor: colors.brand[300],
    color:colors.white
  };
  const ButtonInactive = {
    textDecoration: "none",
    paddingBottom: "10px",
    backgroundColor: colors.grey[400],
    color: colors.grey[200]
  };
    return (
        <Box display={"flex"} flexDirection={"row"} m={2}>
            <Button variant="link"  p={2} pl={5} pr={5} borderRadius={50} onClick={navigateRestaurant} style={isRestaurantActive ? ButtonStyle : ButtonInactive}>
            <Text fontSize={TextStyle.body1.fontSize} fontWeight={TextStyle.h1.fontWeight} style={{ color: isRestaurantActive ? colors.white : colors.grey[200] }} >
                Restaurants
            </Text>
            </Button>
            <Spacer/>
            <Button variant="link" p={2} pl={5} pr={5} borderRadius={50} onClick={navigateCinemas} style={isCinemasActive ? ButtonStyle : ButtonInactive}>
            <Text fontSize={TextStyle.body1.fontSize} fontWeight={TextStyle.h1.fontWeight} style={{ color: isCinemasActive ? colors.white : colors.grey[200] }}>
                Cinemas
            </Text>
            </Button>
            <Spacer/>
            <Button variant="link" backgroundColor={colors.brand[300]} p={2} pl={5} pr={5} borderRadius={50} style={isBarsActive ? ButtonStyle : ButtonInactive}onClick={navigateBars}>
            <Text fontSize={TextStyle.body1.fontSize} fontWeight={TextStyle.h1.fontWeight} style={{ color: isBarsActive ? colors.white : colors.grey[200] }} >
                Bars
            </Text>
            </Button>
        </Box>
    );
};

export default PlaceTypes;
