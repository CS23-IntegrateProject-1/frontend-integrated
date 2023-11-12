import { Box, HStack, Button,Text, IconButton, Icon, VStack,Flex} from "@chakra-ui/react";
import { useState,useEffect } from "react";
import textStyles from "../../../theme/foundations/textStyles";
import { MenuCard } from "../component/MenuCard";
import { ButtonComponent } from "../../../components/buttons/ButtonComponent";
import { CustomCartIcon } from "../component/CartIcon/createIcon";
import { useNavigate } from "react-router-dom";

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
        <Button
          colorScheme={buttonColor}
          size="xs"
          height="28px"
          width="100px"
          border="1px"
          variant="outline"
          borderRadius="full"
          _hover={{ bg: "brand.200", borderColor:"brand.200" }}
          onClick={() => handleButtonClick("All Menu")}
        >
          <Text {...textStyles.h3}>All Menu</Text>
        </Button>
        <Button
          colorScheme={buttonColor}
          size="xs"
          height="28px"
          width="100px"
          border="1px"
          variant="outline"
          borderRadius="full"
          
          _hover={{ bg: "brand.200", borderColor:"brand.200" }}
          onClick={() => handleButtonClick("Set Menu")}
        >
          <Text {...textStyles.h3}>Set Menu</Text>
        </Button>
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
