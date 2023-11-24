import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

const PaymentPage = () => {
  const posterPhotoUrl =
    'https://th.bing.com/th/id/R.c885bc0b17e0e2af6da4ac6b4cf601c9?rik=0e2ZuDz7XW%2fXfg&riu=http%3a%2f%2fimages1.wikia.nocookie.net%2f__cb20110414135716%2fpixar%2fimages%2f8%2f88%2fCars_poster_5.jpg&ehk=SVNDryQS4B5MtyJ1iie9VOKU0w7FoUSIldrRUBciEXk%3d&risl=&pid=ImgRaw&r=0';

  // Image URL for the payment
  const paymentPhotoUrl =
    'https://cdn.discordapp.com/attachments/975067964061651016/1177124936683376701/IMG_9642.jpg?ex=65715e06&is=655ee906&hm=3fa2ef2d2df462e21159f97680eeaf5d408a49d7eeec2a123ed3ed5ba95d7cb3&';

  return (
    <div>
      <Text fontWeight={'extrabold'}>Purchase Order</Text>
      <Box display={'flex'} marginTop={'20px'}>
        <Box maxWidth={'127px'} maxHeight={'171px'} borderRadius={'30px'}>
          <img src={posterPhotoUrl} alt="Poster Photo" />
        </Box>
        <Box ml={4}>
          <Text fontWeight={'bold'} marginBottom={'2px'}>
            Seat No :
          </Text>
          <Text fontWeight={'bold'} marginBottom={'2px'}>
            Type Seat :
          </Text>
          <Text fontWeight={'bold'}>
            Total :
          </Text>
          
          {/* Add more text boxes as needed */}
        </Box>
      </Box>
      <div>
        <div>
          <Text fontWeight={'bold'} marginTop={'25px'}>
            Scan to pay
          </Text>
          <Box display={'flex'} justifyContent={'center'} marginTop={'30px'}>
            <img
              src={paymentPhotoUrl}
              alt={`Payment Photo`}
              style={{ maxWidth: '75%' }}
            />
          </Box>
          {/* Add payment form or other relevant content here */}
        </div>
      </div>
      <Box mt={4} textAlign="center">
        <Button
          bgColor={'#A533C8'}
          size="lg"
          color={'white'}
          width="300px" 
          marginTop={'25px'} 
          // Set a custom width as needed
        >
          Confirm
        </Button>
      </Box>
    </div>
  );
};

export default PaymentPage;
