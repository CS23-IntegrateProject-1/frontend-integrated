// import React from 'react';
import { Box,Flex, VStack, Text,Center} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { SecondCartCard } from '../component/SecondCartCard';
import { ButtonComponent } from '../../../components/buttons/ButtonComponent';

import { Axios } from '../../../AxiosInstance';
import { useQuery } from '@tanstack/react-query';
import textStyles from '../../../theme/foundations/textStyles';

interface cartItemProps {
  menuId: number;
  setId: number;
  name: string;
  description: string;
  price: number;
  image: string;
  image_url: string;
  quantity: number;
}

const fetchCartItems = async () => {
  // const userId = 4;
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
    // const { venueId } = useParams();
    // console.log(venueId);

    const { data: cartItems, isLoading, isError } = useQuery(["cartItem"], () => fetchCartItems());

    const handleOrder = async () => {
      try {
        const response = await Axios.post('/feature7/addCartToOrderDetailsOfDineIn');
        console.log('Response:', response.data); // Log the response data for debugging
        navigate('/venue/order');
      } catch (error) {
        console.error('Error confirming order:', error); // Log any errors for debugging
        console.log('Error response:'); // Log the error response for debugging
      }
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error</div>;
    }

    const buttonBgColor=(cartItems.length===0)? "gray.300":"brand.200";
    // console.log("new cartItems");
    // console.log(cartItems);
   return(
    <Flex direction="column" align="center" justify="center">
    <VStack mt={4} overflowY="auto" maxHeight="calc(100vh - 100px)">
      {cartItems.length===0 ? (
        <Box><Text {...textStyles.h2}>No items in cart</Text></Box>
      ) : (
          cartItems.map((item: cartItemProps, index: number)=> (
            <SecondCartCard
              key={index}
              id={item.menuId !== null ? item.menuId : item.setId}
              foodName={item.name}
              description={item.description}
              price={item.price}
              imageUrl={item.image}
              amount={item.quantity}
              type={item.menuId !== null ? 'Menu' : 'Set'}
            />
          ))
        )}
          {/* <SecondCartCard /> */}
    </VStack>
    <Center>
    <Flex align="center" justify="center" mt={4}>
      <Box
        position="fixed"
        bottom="4"
        width="109px"
        height="29px"
        textAlign="center"
        borderRadius="5px">
            
        <ButtonComponent 
        text="Order"
        onClick={() => handleOrder()}
        isDisabled={cartItems.length===0}
        bgColor={buttonBgColor}
         />
         
      </Box>
      </Flex>
      </Center>
    </Flex>
    
   )
};