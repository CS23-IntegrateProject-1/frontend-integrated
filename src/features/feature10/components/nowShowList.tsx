import React from 'react'

import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Text, Flex, SimpleGrid, Image, Center } from '@chakra-ui/react';

import img1 from '../assets/img/poster1.jpg'
interface Movie {
  title: string;
  imageUrl: string;
  id: string;
}

const movies = [
    {
      title: 'Movie 1',
      imageUrl: img1,
      id: 'movie1',
    },
    {
      title: 'Movie 2',
      imageUrl: 'movie2.jpg',
      id: 'movie2',
    },
    {
      title: 'Movie 3',
      imageUrl: 'movie3.jpg',
      id: 'movie3',
    },
    {
      title: 'Movie 4',
      imageUrl: 'movie4.jpg',
      id: 'movie4',
    },
  ];

export const NowShowList = () => {

    return (
        <>        
        <Box>
      <Text fontSize="20px" fontWeight="bold" mb={4}>
        Now Showing
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
            <Link to={`/showtimes/${movie.id}`}>
              <Image
                src={movie.imageUrl}
                alt={movie.title}
                h="171px"
                w="127px"
                objectFit="cover"
                cursor="pointer"
              />
            </Link>            
          </Box>
        ))}
      </Flex>
    </Box>
        </>
        
    );
};
