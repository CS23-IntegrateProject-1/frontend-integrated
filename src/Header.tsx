import { Box, Text, Spacer, Button } from "@chakra-ui/react";
import React from "react";
import SavedLocationCard from "./SavedLocationCard";
import index from "../../../theme/foundations/index";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate= useNavigate();
  const navigateLocation=()=>{
    navigate('/map');
  }
  const navigateSavedLocation=()=>{
    navigate('/map/savedlocation')
  }

  const activePaths = ["/map", "/map/cinemas", "/map/bars"];
  const isLocationActive = activePaths.includes(location.pathname);
  const isSavedLocationActive = location.pathname === "/map/savedlocation";

  const linkStyle = {
    textDecoration: "none",
    borderBottom: isLocationActive || isSavedLocationActive ? "2px solid" : "none",
    paddingBottom: "10px",
    color: index.colors.brand[100],
  };
  return (
    <Box>
      <Box display={"flex"} flexDirection={"row"} m={2}>
        <Button variant="link" onClick={navigateLocation}
        style={isLocationActive ? linkStyle : {}}
        borderRadius={0}
        >
          <Text
            fontSize={index.textStyles.h1.fontSize}
            fontWeight={index.textStyles.h1.fontWeight}
            color={index.colors.brand[100]}
          >
            Locations
          </Text>
        </Button>
        <Spacer />

        <Button variant="link" onClick={navigateSavedLocation} style={isSavedLocationActive ? linkStyle : {}}
        borderRadius={0}>
          <Text
            fontSize={index.textStyles.h1.fontSize}
            fontWeight={index.textStyles.h1.fontWeight}
            color={index.colors.brand[100]}

          >
            Saved Locations
          </Text>
        </Button>
      </Box>

      
      <Box display={"flex"} overflowX="auto" maxH="193px" gap="20px" padding="15px" paddingTop="25px">
        
      </Box>
    </Box>
  );
};

export default Header;
