import React from 'react';
import { useState,useEffect } from 'react';
import { Box,HStack,Flex, VStack} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { CartCard } from '../component/CartCard';
import { ButtonComponent } from '../../../components/buttons/ButtonComponent';
export const CartPage = () => {

    const navigate = useNavigate();


      
    
    
   return(
    <Flex direction="column" align="center" justify="center">
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