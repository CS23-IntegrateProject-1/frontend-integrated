import React, { useState } from 'react';
import { Box, Text, Button, Flex } from '@chakra-ui/react';

interface TimeSelectionProps {
  cinemas: {
    name: string;
    location: string;
    showtimes: string[];
    type: string;
  }[];
}

const TimeSelection: React.FC<TimeSelectionProps> = ({ cinemas }) => {
  const [clickedShowtime, setClickedShowtime] = useState<string | null>(null);

  const handleShowtimeClick = (showtime: string) => {
    setClickedShowtime(showtime);
    // Add your additional logic or actions here
  };

  const cinemaNames = cinemas.map((cinema) => cinema.name);
  
  return (
    <>
      <Box boxShadow="md" backgroundColor={"#D9D9D9"}>
        {cinemas.map((cinema, index) => (
          <Box key={index} mb={4} maxWidth="100%" maxHeight="256px" justifyContent={'center'}>
            <Text fontSize="10px" fontWeight='normal' ml={"5px"} color={"#000000"} >
              Type {cinema.type} //
            </Text>
            <Flex overflowX="auto">
            {cinema.showtimes.map((showtime, showtimeIndex) => (
              <Button
              key={showtimeIndex}
              bg={clickedShowtime === showtime ?  '#200944' : '#D9D9D9'}
              color={clickedShowtime === showtime ? 'white' : '#200944'}
              borderColor="#200944"
              borderWidth={1}
              borderRadius="2px"
              fontSize="10px"
              fontWeight="bold"
              mt={2}
              ml={2}
              mr={2}
              mb={4} 
              p="1" 
              width="81px"
              height="22px" 
              onClick={() => handleShowtimeClick(showtime)}
            >
              {showtime}
            </Button>
            ))}
            </Flex>

          </Box>
        ))}
      </Box>
    </>
  );
};

export default TimeSelection;
