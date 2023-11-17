import React from 'react'

import  { useState, useEffect } from 'react';
import { Box, Text, Flex, SimpleGrid, Image, Center } from '@chakra-ui/react';

import img1 from '../assets/img/poster1.jpg'
// interface Movie {
//     id: number;
//     title: string;
//     releaseDate: string;
//     posterUrl: string;
// }

const movies = [
    {
      title: 'Movie 1',
      imageUrl: img1,
    },
    {
      title: 'Movie 2',
      imageUrl: 'movie2.jpg',
    },
    {
      title: 'Movie 3',
      imageUrl: 'movie3.jpg',
    },
    {
      title: 'Movie 4',
      imageUrl: 'movie4.jpg',
    },
  ];

export const SoonList = () => {

    return (
        <>        
        <Box>
      <Text fontSize="20px" fontWeight="bold" mb={4}>
        Coming Soon
      </Text>

      <Flex overflowX="auto" pb={4} align="center">
        {movies.map((movie, index) => (
          <Box
            key={index}
            flex="0 0 127px"
            mx={2}
            borderRadius="11px"
            boxShadow="md"
            overflow="hidden"
          >
            <Image src={movie.imageUrl} alt={movie.title} h="171px" w="127px" objectFit="cover" />

            {/* <Box p={2}>
              <Text fontSize="lg" fontWeight="semibold" mb={2}>
                {movie.title}
              </Text>
            </Box> */}
          </Box>
        ))}
      </Flex>
    </Box>
        </>
        
    );
};
