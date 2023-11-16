import React from 'react';
import { useState,useEffect } from 'react';
import { Box,HStack,Flex, VStack} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { SecondCartCard } from '../component/SecondCartCard';
import { ButtonComponent } from '../../../components/buttons/ButtonComponent';

import { Axios } from '../../../AxiosInstance';
import { useQuery } from '@tanstack/react-query';

// const fetchCartItems = async () => {
//   const userId = 4;
//   const response = await Axios.get(`/feature7/showCart?userId=${userId}`); 
//   return response.data.data;
// };
const fetchCartItems = async () => {
  const userId = 4;
  try {
    // const response = await Axios.get(`/feature7/showCart?userId=${userId}`);
    const response = await Axios.get('/feature7/showCart');
    // console.log('Response:', response.data); // Log the response data for debugging
    return response.data;
  } catch (error) {
    console.error('Error fetching cart items:', error); // Log any errors for debugging
    console.log('Error response:'); // Log the error response for debugging
  }
};


export const CartPage = () => {

    const navigate = useNavigate();

    const { data: cartItems, isLoading, isError } = useQuery(["cartItem"], () => fetchCartItems());

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error</div>;
    }

    // console.log("new cartItems");
    // console.log(cartItems);
   return(
    <Flex direction="column" align="center" justify="center">
    <VStack mt={4} overflowY="auto" maxHeight="500px">
      {Array.isArray(cartItems) &&
          cartItems.map((item, index)=> (
            <SecondCartCard
              key={index}
              foodName={item.name}
              description={item.description}
              price={item.price}
              imageUrl={item.imageUrl}
              amount={item.quantity}
            />
          ))}
          {/* <SecondCartCard /> */}
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