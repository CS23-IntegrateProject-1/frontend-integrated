import React, { useState } from 'react';
import { Box, Text, Flex, Button, extendTheme } from '@chakra-ui/react';

const generateDatesForMonth = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Get the last day of the month
  const lastDay = new Date(year, month + 1, 0).getDate();

  // Generate dates only for the remaining days of the month
  return Array.from({ length: lastDay - currentDate.getDate() + 1 }, (_, index) => {
    const date = new Date(year, month, currentDate.getDate() + index);
    return date.getDate().toString().padStart(2, '0'); // Ensure two-digit format
  });
};



const DateSelection = ({onDateSelect}:any) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const dates = generateDatesForMonth();

  const handleDateClick = (date: any) => {
    setSelectedDate(date);
    onDateSelect(date);
  };

  const theme = extendTheme({
    colors: {
      purple: {
        500: '#8a4baf',
      },
    },
  });

  return (
    <Box p={1} marginTop={'5px'}>
      <Text as="h5" fontSize="10px" fontWeight="bold" color="#DEBEF6" marginLeft="8px">
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


    </Box>
  );
};

export default DateSelection;
