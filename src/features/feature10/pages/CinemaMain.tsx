import React, { useState, useEffect } from 'react';
import { Button, Box, Image, Text, Flex,useMediaQuery  } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
// import map1 from '../assets/img/map1.png';
import {Axios} from '../../../AxiosInstance';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

interface Movie {
  title: string;
  imageUrl: string;
  id: number;
}
const buttonStyles = {
  borderRadius: '35px',
  textColor: 'white',
  mr: 5,
  mt: 5,
  mb: 5,
};


const containerStyle = {
  width: '60vw',
  height: '40vw',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};
export const CinemaMain = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [nowShowingMovies, setNowShowingMovies] = useState<Movie[]>([]);
  const [soonMovies, setSoonMovies] = useState<Movie[]>([]);
  const [isDesktop] = useMediaQuery('(min-width: 768px)');

  const handleClick = (index: any) => {
    setActiveButton(index);
  };

  const buttons = ['All', 'Dolby', 'IMAX', 'kid'];

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
            {/* Add markers or other map components as needed */}
          </GoogleMap>
        </LoadScript>
      </Box>
      <Box textAlign="center" fontSize="xl">
        {buttons.map((button, index) => (
          <Button
            {...buttonStyles}
            bg={activeButton === index ? 'brand.300' : 'rgba(0, 0, 0, 0.3)'}
            onClick={() => handleClick(index)}
          >
            {button}
          </Button>
        ))}
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
        <Text fontSize="20px" fontWeight="bold" mb={4}>
          Coming Soon
        </Text>
        <Flex>
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