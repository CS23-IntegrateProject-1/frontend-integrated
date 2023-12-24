import React, { useState, useEffect } from 'react';
import {Box, Image, Text, Flex,useMediaQuery  } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
// import map1 from '../assets/img/map1.png';
import {Axios} from '../../../AxiosInstance';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

interface Movie {
  title: string;
  imageUrl: string;
  id: number;
}



const containerStyle = {
  width: '60vw',
  height: '40vw',
};

const center = {
  lat: 13.652054676389412,
  lng: 100.49688877851413,
};
export const CinemaMain = () => {
  const [nowShowingMovies, setNowShowingMovies] = useState<Movie[]>([]);
  const [soonMovies, setSoonMovies] = useState<Movie[]>([]);
  const [isDesktop] = useMediaQuery('(min-width: 768px)');


  const fetchMovies = async (url: string, setState: React.Dispatch<React.SetStateAction<Movie[]>>) => {
    try {
      const response = await Axios.get(url);
      setState(
        response.data.map((film: any) => ({
          title: film.name,
          imageUrl: film.poster_img, // Adjust the property name based on your Prisma model
          id: film.filmId, // Adjust the property name based on your Prisma model
        }))
      );
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
    }
  };

  useEffect(() => {
    fetchMovies('/feature10/getNowshowingFilms', setNowShowingMovies);
  }, []);

  useEffect(() => {
    fetchMovies('/feature10/getUpcomingFilms', setSoonMovies);
  }, []);

  return (
    <>
      <Box marginBottom={'5px'} display={'flex'} justifyContent={'center'}>
        <LoadScript googleMapsApiKey="AIzaSyCsa_leZkTisoRvdzf3qJub4iyzQxrmeHY">
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>          
          </GoogleMap>
        </LoadScript>
      </Box>
      <Box>
        <Text fontSize="20px" fontWeight="bold" mb={4}>
          Now Showing
        </Text>

        <Flex overflowX="auto" pb={8} align="center">
          {nowShowingMovies.map((movie, index) => (
            <Box
              key={index}
              flex="0 0 200px"
              mx={2}
              borderRadius="11px"
              boxShadow="md"
              overflow="hidden"
            >
              <Link to={`/showtimes/${movie.id}`}>
                <Image
                  src={movie.imageUrl}
                  alt={movie.title}
                  h={isDesktop ? '300px' : '100%'}
                  w={isDesktop ? '200px' : 'auto'}
                  objectFit="cover"
                  cursor="pointer"
                />
              </Link>
              
            </Box>
          ))}
          
        </Flex>
        <Text  fontSize="20px" fontWeight="bold" mb={4}>
          Coming Soon
        </Text>
        <Flex overflowX="auto" pb={8} align="center">
          {soonMovies.map((movie, index) => (
            <Box
              key={index}
              flex="0 0 200px"
              mx={2}
              borderRadius="11px"
              boxShadow="md"
              overflow="hidden"
            >
              <Link to={`/showtimes/${movie.id}`}>
                <Image
                  src={movie.imageUrl}
                  alt={movie.title}
                  h={isDesktop ? '300px' : '100%'}
                  w={isDesktop ? '200px' : 'auto'}
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