import React, { useState } from 'react';
import { Flex, HStack, VStack, Box, Center } from '@chakra-ui/react';
import { RButton } from '../component/RButton';
import { PreparedMenuCard } from '../component/PreparedCard';
import { CompleteCard } from '../component/CompleteCard';
import { ButtonComponent } from '../../../components/buttons/ButtonComponent';
import { useNavigate, useParams } from 'react-router-dom';

import { Axios } from '../../../AxiosInstance';
import { useQuery } from '@tanstack/react-query';

type OrderStatus = 'Preparing' | 'Completed';

export const OrderStatusPage: React.FC = () => {
  const [preparingButtonColor, setPreparingButtonColor] = useState<'brand.400' | 'brand.200'>('brand.200');
  const [completedButtonColor, setCompletedButtonColor] = useState<'brand.400' | 'brand.200'>('brand.400');
  const [borderColor, setBorderColor] = useState('brand.200');
  const [status, setStatus] = useState<OrderStatus>('Preparing');
  const navigate = useNavigate();

  const { venueId } = useParams();

  const handleButtonClick = (newStatus: OrderStatus) => {
    setStatus(newStatus);
    setPreparingButtonColor(newStatus === 'Preparing' ? 'brand.200' : 'brand.400');
    setCompletedButtonColor(newStatus === 'Completed' ? 'brand.200' : 'brand.400');
    setBorderColor(newStatus === 'Preparing' ? 'brand.200' : 'brand.400');
  };

  const { data: ongoingOrderDetails } = useQuery(['ongoingOrderDetails'], async () => {
    const response = await Axios.get(`/feature7/showOngoingOrderDetails/${venueId}`);
    console.log("Ongoing:" ,response.data);
    return response.data;
  });

  const { data: completedOrderDetails } = useQuery(['completedOrderDetails'], async () => {
    const response = await Axios.get(`/feature7/showCompletedOrderDetails/${venueId}`);
    return response.data;
  });

  const renderCard = () => {
    switch (status) {
      case 'Preparing':
        return (
          <VStack mt={4} overflowY="auto" maxHeight="calc(100vh - 100px)">
            {ongoingOrderDetails && ongoingOrderDetails.map((order: any) => (
              <PreparedMenuCard 
              key={order.orderDetailId} /* Use unique key */ 
              id={order.menuId !== null ? order.menuId : order.setId}
              foodName={order.menuId !== null ? order.menu?.name : order.set?.name}
              description={order.additional_req}
              price={order.unit_price}
              imageUrl={order.imageUrl}
              amount={order.quantity}
              order={order} />
            ))}
          </VStack>
        );
      case 'Completed':
        return (
          <VStack mt={4} overflowY="auto" maxHeight="calc(100vh - 100px)">
            {completedOrderDetails && completedOrderDetails.map((order: any) => (
              <CompleteCard 
              key={order.orderDetailId} /* Use unique key */ 
              id={order.menuId !== null ? order.menuId : order.setId}
              foodName={order.menuId !== null ? order.menu?.name : order.set?.name}
              description={order.additional_req}
              price={order.unit_price}
              imageUrl={order.imageUrl}
              amount={order.quantity}
              order={order} />
            ))}
          </VStack>
        );
      default:
        return null;
    }
  };

  return (
    <Flex direction="column" align="center" justify="center">
      <HStack spacing={4}>
        <RButton
          text={'Preparing'}
          borderColor={borderColor}
          textStyle={'body2'}
          width={'110px'}
          height={'32px'}
          onClick={() => handleButtonClick('Preparing')}
          bgColor={preparingButtonColor}
        />
        <RButton
          text={'Completed'}
          borderColor={borderColor}
          textStyle={'body2'}
          width={'110px'}
          height={'32px'}
          onClick={() => handleButtonClick('Completed')}
          bgColor={completedButtonColor}
        />
      </HStack>
      <VStack mt={4} overflowY="auto" maxHeight="calc(100vh - 100px)">
        {renderCard()}
      </VStack>
    
      {status === 'Completed' && (
        <Center>
         <Flex align="center" justify="center" >
         <Box
           position="fixed"
           bottom="4"
           width="109px"
           height="29px"
           textAlign="center"
           borderRadius="5px">
               
           <ButtonComponent width={"160px"} text="View Receipt"
           onClick={() => navigate("/venue/:venueId/receipt")} />
            
         </Box>
         </Flex>
         </Center> 
      )}
    </Flex>
  );
};
