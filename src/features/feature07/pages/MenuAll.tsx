import { Box, HStack, Button,Text, IconButton, Icon, VStack,Flex} from "@chakra-ui/react";
import { useState,useEffect } from "react";
import textStyles from "../../../theme/foundations/textStyles";
import { MenuCard } from "../component/MenuCard";
import { ButtonComponent } from "../../../components/buttons/ButtonComponent";
import { CustomCartIcon } from "../component/CartIcon/createIcon";
import { useNavigate } from "react-router-dom";
import { RButton } from "../component/RButton";

export const MenuAll = () => {
  
  const [buttonColor, setButtonColor] = useState("brand.200");
  const [subtitle, setSubtitle] = useState<string>("Substitle");
  const navigate= useNavigate();

  const handleButtonClick = (newSubtitle : string) => {
    setSubtitle(newSubtitle);
    if (buttonColor === "brand.100") {
      setButtonColor("brand.200");
    } else {
      setButtonColor("brand.100");
    }
  };
  const handleMenuClick = () => {
    navigate("/venue/yourVenueId/menudetail");
  }  
  const handleCartClick = () => {
    navigate("/venue/yourVenueId/cart"); 
  };
  useEffect(() => {
    handleButtonClick("All Menu");
  }, []);

  const renderMenuCards = () => {
    if (subtitle === "All Menu") {
      return (
        <VStack mt={4} overflowY="auto" maxHeight="400px">
          <MenuCard onClick={handleMenuClick} />
        </VStack>
      );
    } else if (subtitle === "Set Menu") {
      return (
        <VStack mt={4} overflowY="auto" maxHeight="400px">
          <MenuCard onClick={handleMenuClick} />
        </VStack>
      );
    }
  };
  return (
    <Box>
    <Flex direction="column" align="center" justify="center">
      <HStack spacing={4}>
      <RButton 
        text={"All Menu"}
        textStyle={"h3"}
        width={"110px"}
        height={"32px"}
        onClick={() => handleButtonClick("All Menu")}
         />
         <RButton 
        text={"Set Menu"}
        textStyle={"h3"}
        width={"110px"}
        height={"32px"}
        onClick={() => handleButtonClick("Set Menu")}
         />
      </HStack>
      </Flex>
      <Box mt={4} p={1} marginLeft={0} borderColor="brand.200" borderWidth="1px" width='115px' height='30px' rounded="md" textAlign="center" bgColor="brand.200">
       <Text {...textStyles.h3}>{subtitle}</Text>
      </Box>
      {renderMenuCards()}
      <Box
        position="fixed"
        bottom="20"
        right="4"
        borderRadius="5px"
        zIndex="1"
      >
        <Icon as={CustomCartIcon}
          color="currentColor"
          aria-label="Open Cart"
          boxSize={20}
          onClick={handleCartClick}
        />
      </Box>
      <Flex align="center" justify="center" >
      <Box
        position="fixed"
        bottom="4"
        left="32%"
        width="109px"
        height="29px"
        textAlign="center"
        borderRadius="5px">
            
        <ButtonComponent text="Order Status" />
         
      </Box>
      </Flex>
      </Box>
   
  );
};
