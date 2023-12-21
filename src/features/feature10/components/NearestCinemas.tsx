import React, { useState } from 'react';
import { Box, Text, Button, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface NearestCinemasProps {
  cinemas: {
    name: string;
    location: string;
    showtimes: string[];
    type: string;
  }[];
}

const NearestCinemas: React.FC<NearestCinemasProps> = ({ cinemas }) => {
  const navigate = useNavigate();
  const [clickedShowtime, setClickedShowtime] = useState<string | null>(null);

  const handleShowtimeClick = (showtime: string) => {
    setClickedShowtime(showtime);
    
  };

  return (
    <>
      <Box backgroundColor={"grey.400"}>
        <Text fontSize="16px" fontWeight="bold" color={"brand.100"} padding={"7px"}>
          Nearest Cinemas
        </Text>
      </Box>
      <Box boxShadow="md" backgroundColor={"#D9D9D9"}>
        {cinemas.map((cinema, index) => (
          <Box key={index} mb={4} maxWidth="100%" maxHeight="256px">
            <Box backgroundColor={"brand.200"} alignItems="center" padding={"7px"} justifyContent={"center"}>
              <Text fontSize="14px" fontWeight="bold" >
                {cinema.name}
              </Text>
            </Box>
            <Text fontSize="14px" fontWeight="bold" color="gray.600" mb={2} ml={"5px"}>
              Location: {cinema.location}
            </Text>
            <Text fontSize="10px" fontWeight='normal' ml={"5px"} color={"#000000"}>
              Type {cinema.type}
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

export default NearestCinemas;
