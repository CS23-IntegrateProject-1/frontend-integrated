import React, { useState } from 'react';
import { Flex, HStack, VStack, Box } from '@chakra-ui/react';
import { RButton } from '../component/RButton';
import { PreparedMenuCard } from '../component/PreparedCard';
import { CompleteCard } from '../component/CompleteCard';
import { ButtonComponent } from '../../../components/buttons/ButtonComponent';
import { useNavigate } from 'react-router-dom';

type OrderStatus = 'Preparing' | 'Completed';

export const OrderStatusPage: React.FC = () => {
  const [buttonColor, setButtonColor] = useState<'brand.100' | 'brand.200'>('brand.200');
  const [status, setStatus] = useState<OrderStatus>('Preparing');
  const navigate = useNavigate();
  const handleButtonClick = (newStatus: OrderStatus) => {
    setStatus(newStatus);
    setButtonColor((prevColor) => (prevColor === 'brand.100' ? 'brand.200' : 'brand.100'));
  };

  const renderCard = () => {
    switch (status) {
      case 'Preparing':
        return <PreparedMenuCard />;
      case 'Completed':
        return <CompleteCard />;
      default:
        return null;
    }
  };

  return (
    <Flex direction="column" align="center" justify="center">
      <HStack spacing={4}>
        <RButton
          text={'Preparing'}
          textStyle={'body2'}
          width={'110px'}
          height={'32px'}
          onClick={() => handleButtonClick('Preparing')}
          bgColor={buttonColor === 'brand.200' ? 'brand.200' : 'brand.100'}
        />
        <RButton
          text={'Completed'}
          textStyle={'body2'}
          width={'110px'}
          height={'32px'}
          onClick={() => handleButtonClick('Completed')}
          bgColor={buttonColor === 'brand.200' ? 'brand.200' : 'brand.100'}
        />
      </HStack>
      <VStack mt={4} overflowY="auto" maxHeight="400px">
        {renderCard()}
      </VStack>
      {status === 'Completed' && (
         <Flex align="center" justify="center" >
         <Box
           position="fixed"
           bottom="4"
           left="32%"
           width="109px"
           height="29px"
           textAlign="center"
           borderRadius="5px">
               
           <ButtonComponent width={"160px"} text="View Receipt"
           onClick={() => navigate("/venue/:venueId/receipt")} />
            
         </Box>
         </Flex>
      )}
    </Flex>
  );
};
