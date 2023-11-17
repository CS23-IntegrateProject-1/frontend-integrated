import React from 'react';
import { Box, Text ,HStack, VStack,Flex} from '@chakra-ui/react';
import textStyles from '../../../theme/foundations/textStyles';
import {ButtonComponent} from '../../../components/buttons/ButtonComponent';

interface ReceiptPageProps {
  orderId: string;
  orderDate: string;
  itemCount: number;
}

export const ReceiptPage: React.FC<ReceiptPageProps> = ({ orderId, orderDate, itemCount }) => {
    const itemsPerRow = 3;
  return (
    <Box>
      <Text {...textStyles.h2}>Order #intergrate</Text>
      <Text {...textStyles.h3}>order date</Text>
      <Box borderTop="1px dotted" mt={2} mb={2}/>
            <HStack display="flex" justifyContent="space-between">
            <Text>QTY</Text>
            <Text>ITEM</Text>
            <Text>AMT</Text>
            </HStack>
        <Box borderTop="1px dotted" mt={2} mb={2} />
        <VStack spacing={2} align="start">
        {[...Array(itemCount)].map((_, index) => (
          <Box key={index} width="100%">
                <HStack justifyContent="space-between">
                <Text>{(index + 1).toString().padStart(2, '0')}</Text>
                <Text>Item Name</Text>
                <Text>Amount</Text>
                </HStack>
          </Box>
        ))}
        </VStack>
         <Box borderTop="1px dotted" mt={2} mb={2}/>
        
        <VStack align="start" spacing={0}>
            <Text {...textStyles.h3}>ITEM COUNT :</Text>
            <Text {...textStyles.h3}>TOTAL :</Text>
            <Text {...textStyles.h3}>PRICE :</Text>
        </VStack>
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


