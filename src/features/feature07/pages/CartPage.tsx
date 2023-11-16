import React from 'react';
import { useState,useEffect } from 'react';
import { Box,HStack,Flex, VStack} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { SecondCartCard } from '../component/SecondCartCard';
import { ButtonComponent } from '../../../components/buttons/ButtonComponent';

import { Axios } from '../../../AxiosInstance';
import { useQuery } from '@tanstack/react-query';

const fetchCartItems = async () => {
  const response = await Axios.get('/feature7/showCart/:userId'); 
  return response.data;
};

export const CartPage = () => {

    const navigate = useNavigate();

    // const { data: cartItems, isLoading, isError } = useQuery(["cartItem"], () => fetchCartItems);

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    // if (isError) {
    //     return <div>Error</div>;
    // }

   return(
    <Flex direction="column" align="center" justify="center">
    <VStack mt={4} overflowY="auto" maxHeight="500px">
      {/* {Array.isArray(cartItems) &&
          cartItems.map((item) => (
            <SecondCartCard
              key={item.id}
              foodName={item.foodName}
              description={item.description}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))} */}
          <SecondCartCard />
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