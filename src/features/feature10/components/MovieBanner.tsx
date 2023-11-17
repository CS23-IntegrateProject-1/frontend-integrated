// MovieBanner.tsx

import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

interface Movie {
  title: string;
  genre: string;
  id: string;
  rate: string;
  imageUrl: string;  
}

interface MovieBannerProps {
  movie: Movie;
}

const MovieBanner: React.FC<MovieBannerProps> = ({ movie }) => {
  const { title, imageUrl, genre, rate } = movie;

  return (
    <Box p={4} boxShadow="md" borderRadius="md" backgroundColor={"black"}>
      <Box display="flex" >
        <Image src={imageUrl} alt={title} w={"54px"} h={"80px"}  />
        <Box ml={{ md: 4 }}>
          <Text fontSize="10px" fontWeight="bold" mb={2} m={"5px"}>
            {title}
          </Text>
          <Text fontSize= "6px" fontWeight= "bold" mb={2} m={"5px"}>
            {genre}
          </Text>
          <Text fontSize= "6px" fontWeight= "bold" mb={2} m={"5px"}>
            {rate}
          </Text>
          {/* Add more details about the movie if needed */}
        </Box>
      </Box>
    </Box>
  );
};

export default MovieBanner;
