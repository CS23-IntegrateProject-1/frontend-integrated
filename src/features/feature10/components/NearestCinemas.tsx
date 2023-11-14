import React from 'react';
import { Box, Text } from '@chakra-ui/react';

interface NearestCinemasProps {
  cinemas: {
    name: string;
    location: string;
    showtimes: string[];
  }[];
}

const NearestCinemas: React.FC<NearestCinemasProps> = ({ cinemas }) => {
  return (
    <>
        <Box backgroundColor={"grey.400"}>
        <Text fontSize="16px" fontWeight="bold"  color={"brand.100"} ml={"5px"}>
        Nearest Cinemas
      </Text>
    </Box>
    <Box  boxShadow="md" backgroundColor={"#D9D9D9"} >
      {cinemas.map((cinema, index) => (
        <Box key={index} mb={4}>
          <Box backgroundColor={"brand.200"} >
          <Text fontSize="14px" fontWeight="semibold" mb={2} ml={"5px"} h={"35px"}>
            {cinema.name}
          </Text>
          </Box>          
          <Text fontSize="md" color="gray.600" mb={2} ml={"5px"}>
            Location: {cinema.location}
          </Text>
          <Text fontSize="md" color="teal.500" ml={"5px"}>
            Showtimes: {cinema.showtimes.join(', ')}
          </Text>
        </Box>
      ))}
    </Box>
    </>

  );
};

export default NearestCinemas;
