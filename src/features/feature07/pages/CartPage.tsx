import React from 'react';
import { useState,useEffect } from 'react';
import { Box,HStack,Flex, VStack} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
// import { RButton } from '../component/RButton';
import { CartCard } from '../component/CartCard';
import { ButtonComponent } from '../../../components/buttons/ButtonComponent';
export const CartPage = () => {

    const navigate = useNavigate();

    // const [buttonColor, setButtonColor] = useState<"brand.100" | "brand.200">("brand.200");
    // const [subtitle, setSubtitle] = useState<string>("Preparaing");

    // const handleButtonClick = (newSubtitle : string) => {
    //     setSubtitle(newSubtitle);
    //     if (buttonColor === "brand.100") {
    //       setButtonColor("brand.200");
    //     } else {
    //       setButtonColor("brand.100");
    //     }
    //   };

      
    
    
   return(
    <Flex direction="column" align="center" justify="center">
    {/* <Flex direction="column" align="center" justify="center">
      <HStack spacing={4}>
        <RButton 
        text={"Preparaing"}
        textStyle={"body2"}
        width={"110px"}
        height={"32px"}
        onClick={() => handleButtonClick("Preparaing")}
        bgColor={buttonColor === "brand.200" ? "brand.200" : "brand.100"}
         />
         <RButton 
        text={"Completed"}
        textStyle={"body2"}
        width={"110px"}
        height={"32px"}
        onClick={() => handleButtonClick("Completed")}
        bgColor={buttonColor === "brand.200" ? "brand.200" : "brand.100"}
         />
      </HStack>
    </Flex> */}
    <VStack mt={4} overflowY="auto" maxHeight="500px">
    <CartCard />
    </VStack>
    <Flex align="center" justify="center" mt={4}>
      <Box
        position="fixed"
        bottom="4"
        left="32%"
        width="109px"
        height="29px"
        textAlign="center"
        borderRadius="5px">
            
        <ButtonComponent 
        text="Order"
        onClick={() => navigate("/venue/:venueId/receipt")}
         />
         
      </Box>
      </Flex>
    </Flex>
    
   )
};