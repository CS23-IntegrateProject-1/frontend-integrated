import React, { useState } from 'react';
import { Flex, HStack, VStack } from '@chakra-ui/react';
import { RButton } from '../../component/RButton';
import { useParams } from 'react-router-dom';

import { Axios } from '../../../../AxiosInstance';
import { useQuery } from '@tanstack/react-query';
import { BusOngoCard } from '../../component/BusOngoCard';
import { BusCompleteCard } from '../../component/BusCompleteCard';

type OrderStatus = 'Preparing' | 'Completed';

export const BusOrderStat: React.FC = () => {
  const [preparingButtonColor, setPreparingButtonColor] = useState<'brand.400' | 'brand.200'>('brand.200');
  const [completedButtonColor, setCompletedButtonColor] = useState<'brand.400' | 'brand.200'>('brand.400');
  const [borderColor, setBorderColor] = useState('brand.200');
  const [status, setStatus] = useState<OrderStatus>('Preparing');

  const { venueId } = useParams();

  const handleButtonClick = (newStatus: OrderStatus) => {
    setStatus(newStatus);
    setPreparingButtonColor(newStatus === 'Preparing' ? 'brand.200' : 'brand.400');
    setCompletedButtonColor(newStatus === 'Completed' ? 'brand.200' : 'brand.400');
    setBorderColor(newStatus === 'Preparing' ? 'brand.200' : 'brand.400');
  };

  const { data: ongoingOrderDetails } = useQuery(['ongoingOrderDetails'], async () => {
    const response = await Axios.get(`/feature7/onGoingOrderDetailsInBusiness/${venueId}`);
    console.log("Ongoing:" ,response.data);
    return response.data;
  });

  const { data: completedOrderDetails } = useQuery(['completedOrderDetails'], async () => {
    const response = await Axios.get(`/feature7/completedOrderDetailsInBusiness/${venueId}`);
    console.log("Completed:" ,response.data);
    return response.data;
  });

  const renderCard = () => {
    switch (status) {
      case 'Preparing':
        return (
            // <VStack mt={4} overflowY="auto" maxHeight="calc(100vh - 100px)">
            //     <BusOngoCard />
            // </VStack>
            <VStack mt={4} overflowY="auto" maxHeight="calc(100vh - 100px)">
                {ongoingOrderDetails && ongoingOrderDetails.map((order: any) => (
                    <BusOngoCard 
                    key={order.orderDetailId} /* Use unique key */ 
                    id={order.menuId !== null ? order.menuId : order.setId}

                     />
                ))}
            </VStack>
        );
      case 'Completed':
        return (
            // <VStack mt={4} overflowY="auto" maxHeight="calc(100vh - 100px)">
            //     <BusCompleteCard />
            // </VStack>
          <VStack mt={4} overflowY="auto" maxHeight="calc(100vh - 100px)">
            {completedOrderDetails && completedOrderDetails.map((order: any) => (
              <BusCompleteCard 
              key={order.orderDetailId} /* Use unique key */ 
              id={order.menuId !== null ? order.menuId : order.setId}
              tableNo={order.table.tableId}
              orderDate={order.order_time}/>
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
    </Flex>
  );
};
