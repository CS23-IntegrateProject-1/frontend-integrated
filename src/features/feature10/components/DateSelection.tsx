// DateSelection.tsx

import React, { useState } from 'react';
import { Box, Text, Flex, Button,extendTheme } from '@chakra-ui/react';

const DateSelection = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const dates = ['08', '09', '10', '11', '12', '13', '14', '15', '16', '17'];
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  
  const theme = extendTheme({
    colors: {
      purple: {
        500: '#8a4baf',
      },
      
    },
  });

  return (
    <Box p={4}>
      <Text as="h5" fontSize="10px" fontWeight="bold" color='#DEBEF6' marginLeft='8px'>
        Nov
      </Text>
      <Flex overflowX="auto" pb={4} align="flex-start">
        
        {dates.map((date) => (
          <Button
          key={date}          
          colorScheme={selectedDate === date ? 'purple' : 'transparent'} 
          borderColor="purple.500"
          borderWidth={0.5}
          onClick={() => handleDateClick(date)}
          borderRadius="md"
          m={2}          
        >
            {date}
          </Button>
        ))}
      </Flex>

      {selectedDate && (
        <Box mt={4}>
          <Text fontSize="lg" fontWeight="bold">
            Selected Date: {selectedDate}
          </Text>          
        </Box>
      )}
    </Box>
  );
};

export default DateSelection;
