import React, { useState } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

interface NearestCinemasProps {
  cinemas: {
    name: string;
    location: string;
    showtimes: string[];
    type: string;
  }[];
}

const NearestCinemas: React.FC<NearestCinemasProps> = ({ cinemas }) => {
  const [clickedShowtime, setClickedShowtime] = useState<string | null>(null);

  const handleShowtimeClick = (showtime: string) => {
    setClickedShowtime(showtime);
    // Add your additional logic or actions here
  };

  return (
    <>
      <Box backgroundColor={"grey.400"}>
        <Text fontSize="16px" fontWeight="bold" color={"brand.100"} ml={"5px"}>
          Nearest Cinemas
        </Text>
      </Box>
      <Box boxShadow="md" backgroundColor={"#D9D9D9"}>
        {cinemas.map((cinema, index) => (
          <Box key={index} mb={4} maxWidth="427px" maxHeight="256px">
            <Box backgroundColor={"brand.200"} alignItems="center" >
              <Text fontSize="14px" fontWeight="bold" mb={2} ml={"5px"} >
                {cinema.name}
              </Text>
            </Box>
            <Text fontSize="14px" fontWeight="bold" color="gray.600" mb={2} ml={"5px"}>
              Location: {cinema.location}
            </Text>
            <Text fontSize="10px" fontWeight='normal' ml={"5px"} color={"#000000"}>
              Type {cinema.type}
            </Text>
            {cinema.showtimes.map((showtime, showtimeIndex) => (
              <Button
              key={showtimeIndex}
              bg={clickedShowtime === showtime ?  '#200944' : '#D9D9D9'}
              color={clickedShowtime === showtime ? 'white' : '#200944'}
              borderColor="#200944"
              borderWidth={1}
              borderRadius="md"
              fontSize="10px"
              fontWeight="bold"
              m={1} 
              p="1" 
              width="81px"
              height="22px" 
              onClick={() => handleShowtimeClick(showtime)}
            >
              {showtime}
            </Button>
            ))}
          </Box>
        ))}
      </Box>
    </>
  );
};

export default NearestCinemas;
