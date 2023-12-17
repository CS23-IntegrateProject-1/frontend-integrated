import React from 'react';
import { Box, Text ,HStack, VStack,Flex} from '@chakra-ui/react';
import textStyles from '../../../theme/foundations/textStyles';
import {ButtonComponent} from '../../../components/buttons/ButtonComponent';
import { Axios } from '../../../AxiosInstance';
import { useQuery } from '@tanstack/react-query';
import { formatDate1, formatTime1 } from '../../../functions/formatDatetime';

interface ReceiptPageProps {
  orderId: string;
  orderDate: string;
  itemCount: number;
}

export const ReceiptPage: React.FC<ReceiptPageProps> = () => {

  const { data: receipt } = useQuery(['orderReceipt'], async () => {
    const response = await Axios.get('/feature7/getReceipt');
    console.log("Receipt data:" ,response.data);
    return response.data;
  });

  return (
    <Box>
      {/* {receipt && () } */}
      <Text {...textStyles.h2}>Order #{receipt?.orderId}</Text>
      <Text {...textStyles.h3}>{formatDate1(receipt?.orderDate)} {formatTime1(receipt?.orderDate)}</Text>
      <Box borderTop="1px dotted" mt={2} mb={2}/>
            <HStack display="flex" justifyContent="space-between">
              <Text>QTY</Text>
              <Text>ITEM</Text>
              <Text>PRICE</Text>
              <Text>AMT</Text>
            </HStack>
        <Box borderTop="1px dotted" mt={2} mb={2} />
        <VStack spacing={2} align="start">
        {receipt?.orderDetails?.map((order, index) => (
          <Box key={index} width="100%">
                <HStack display="flex" justifyContent="space-between">
                  <Text>{(index + 1).toString().padStart(2, '0')}</Text>
                  <Text>{order.menuName}</Text>
                  <Text>{order.menuPrice}</Text>
                  <Text>{order.quantity}</Text>
                </HStack>
          </Box>
        ))}
        </VStack>
         <Box borderTop="1px dotted" mt={2} mb={2}/>
        
        <HStack display="flex" justifyContent="space-between">
        <VStack align="start" spacing={0}>
            <Text {...textStyles.h3}>ITEM COUNT :</Text>
            <Text {...textStyles.h3}>TOTAL COUNT :</Text>
            <Text {...textStyles.h3}>TOTAL AMOUNT :</Text>
        </VStack>
        <VStack align="end" spacing={0}>
            <Text {...textStyles.h3}>{receipt?.itemCount}</Text>
            <Text {...textStyles.h3}>{receipt?.totalCount}</Text>
            <Text {...textStyles.h3}>{receipt?.totalAmount}</Text>
        </VStack>
        </HStack>
        <Box borderTop="1px dotted" mt={2} mb={2} />
        <Flex align="center" justify="center" >
        <Box
        position="fixed"
        bottom="4"
        left="32%"
        width="109px"
        height="29px"
        textAlign="center"
        borderRadius="5px">
            
        <ButtonComponent text="Pay" />
         
        </Box>
        </Flex>
    </Box>
  );
};


