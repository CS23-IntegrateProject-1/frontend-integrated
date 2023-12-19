import { Box, Text} from '@chakra-ui/react';
import QRCode from 'qrcode.react'; // Import the QRCode library

const PaymentSuccess = () => {
  const confirmationMessage = 'Payment Successful!';
  const reservationId = 'ABC123'; // Replace this with the actual reservation ID

  const posterPhotoUrl =
    'https://th.bing.com/th/id/R.c885bc0b17e0e2af6da4ac6b4cf601c9?rik=0e2ZuDz7XW%2fXfg&riu=http%3a%2f%2fimages1.wikia.nocookie.net%2f__cb20110414135716%2fpixar%2fimages%2f8%2f88%2fCars_poster_5.jpg&ehk=SVNDryQS4B5MtyJ1iie9VOKU0w7FoUSIldrRUBciEXk%3d&risl=&pid=ImgRaw&r=0';

  return (
    <div>
      <Text fontWeight={'extrabold'}>Purchase Order</Text>
      <Box display={'flex'} marginTop={'20px'}>
        <Box maxWidth={'127px'} maxHeight={'171px'} borderRadius={'30px'}>
          <img src={posterPhotoUrl} alt="Poster Photo" />
        </Box>
        <Box ml={4}>
          <Text fontWeight={'bold'} marginBottom={'2px'}>
            Seat No:
          </Text>
          <Text fontWeight={'bold'} marginBottom={'2px'}>
            Type Seat:
          </Text>
          <Text fontWeight={'bold'}>Total:</Text>
        </Box>
      </Box>
      <Text fontWeight={'extrabold'} marginTop={'30px'} >
        {confirmationMessage}
      </Text>
      <Box
        display={'flex'}
        marginTop={'30px'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Text fontWeight={'bold'}>Reservation Id: {reservationId}</Text>
      </Box>
      <Box
        display={'flex'}
        marginTop={'30px'}
        alignItems={'center'}
        justifyContent={'center'}
        marginBottom={'30px'}
      >
        <QRCode value={reservationId} size={180} /> 
      </Box>
      <Box mt={4} textAlign="center" marginTop={'30px'} maxWidth={'300px'} margin={'auto'} >
        <Text >
            Scan this QR code at the cinema to get the ticket.(Please take the screenshot of this QR code)
        </Text>
      </Box>
    </div>
  );
};

export default PaymentSuccess;
