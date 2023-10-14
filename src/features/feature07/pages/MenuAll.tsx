import { Box, HStack, Button,Text, IconButton, Icon, VStack} from "@chakra-ui/react";
import { useState } from "react";
import textStyles from "../../../theme/foundations/textStyles";
import { MenuCard } from "../component/MenuCard";
export const MenuAll = () => {
  
  const [buttonColor, setButtonColor] = useState("brand.200");
  const [subtitle, setSubtitle] = useState<string>("Subtitle");

  const handleButtonClick = (newSubtitle : string) => {
    setSubtitle(newSubtitle);
    if (buttonColor === "brand.100") {
      setButtonColor("brand.200");
    } else {
      setButtonColor("button.100");
    }
  };

  return (
    <Box>
      <HStack spacing={4}>
        <Button
          colorScheme={buttonColor}
          size="xs"
          height="28px"
          width="87px"
          border="1px"
          variant="outline"
          _hover={{ bg: "brand.200", borderColor:"brand.200" }}
          onClick={() => handleButtonClick("All")}
        >
          <Text {...textStyles.h3}>All</Text>
        </Button>
        <Button
          colorScheme={buttonColor}
          size="xs"
          height="28px"
          width="87px"
          border="1px"
          variant="outline"
          _hover={{ bg: "brand.200", borderColor:"brand.200" }}
          onClick={() => handleButtonClick("Food")}
        >
          <Text {...textStyles.h3}>Food</Text>
        </Button>
        <Button
          colorScheme={buttonColor}
          size="xs"
          height="28px"
          width="87px"
          border="1px"
          variant="outline"
          _hover={{ bg: "brand.200", borderColor:"brand.200" }}
          onClick={() => handleButtonClick("Drink")}
        >
          <Text {...textStyles.h3}>Drink</Text>
        </Button>
        <Button
          colorScheme={buttonColor}
          size="xs"
          height="28px"
          width="87px"
          border="1px"
          variant="outline"
          _hover={{ bg: "brand.200", borderColor:"brand.200" }}
          onClick={() => handleButtonClick("Dessert")}
        >
          <Text {...textStyles.h3}>Dessert</Text>
        </Button>
      </HStack>
      <Box mt={4} p={1} marginLeft={0} borderColor="brand.200" borderWidth="1px" width='142px' height='33px' rounded="md" textAlign="center" bgColor="brand.200">
       <Text {...textStyles.h2}>{subtitle}</Text>
      </Box>
      <VStack mt={4}>
        <MenuCard/>
      </VStack>
     
    </Box>
  );
};
