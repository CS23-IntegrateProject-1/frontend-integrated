import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DateSelection from '../components/DateSelection'
import { Box, Image, Text , useMediaQuery} from '@chakra-ui/react';
import MovieBanner from '../components/MovieBanner'
import poster1 from '../assets/img/poster1.jpg'
import SearchBar from '../components/SearchBar'
import NearestCinemas from '../components/NearestCinemas'

interface Movie {
  title: string;
  imageUrl: string;
  id: number; // Adjust the data type based on your API response
  rate: string;
  genre: string;
  duration: number;
  // Add other properties as needed
}

export const ShowTime = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isDesktop] = useMediaQuery('(min-width: 768px)');
    

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/feature10//getFilmsById/${movieId}`);
        setMovie({
          title: response.data.film.name,
          imageUrl: response.data.film.poster_img,
          id: response.data.film.filmId,
          rate: response.data.film.rate,
          genre: response.data.film.genre,
          duration: response.data.film.duration,
        });
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
      
      
    };
    
    fetchMovieDetails();
    
  }, [movieId]);




  if (!movie) {
    return <div>Loading...</div>;
  }



  const handleSearch = (query: string) => {  
    console.log(`Searching for: ${query}`);
  };

  const cinemasData = [
    {
      name: 'Cinema A',
      location: 'City A',
      showtimes: ['10:00 AM', '2:00 PM', '7:00 PM', '10:00 PM', '12:00 AM'],
      type: '|   ENG   |   SUB TH',
    },  
  ];


 

  return (
    <>
    <DateSelection></DateSelection>
      {/* Display movie details */}
      <Box p={4} boxShadow="md"
        borderRadius="md"
        backgroundColor="rgba(0, 0, 0, 0.3)"
        backdropBlur="50px"
        h={isDesktop ? '300px' : 'auto'}
        
        >
        <Box display="flex">
          <Image src={movie.imageUrl} alt={movie.title} 
            h={isDesktop ? '270px' : '80px'}
            w={isDesktop ? '180px' : '54px'}
          />
          <Box ml={{ md: 4 }}>            
            <Text fontSize={isDesktop ? '40px' : '10px'} fontWeight="bold" mb={2} m="5px">
              {movie.title}
            </Text>
            <Text fontSize={isDesktop ? '20px' : '6px'} fontWeight="light" mb={2} m="5px">
              Genre : {movie.genre}
            </Text>
            <Text fontSize={isDesktop ? '20px' : '6px'} fontWeight="light" mb={2} m="5px">
              Rated : {movie.rate} | {movie.duration} min
            </Text>
            
          </Box>
        </Box>
      </Box>
    <SearchBar onSearch={handleSearch} />
    <NearestCinemas cinemas={cinemasData}/>
    </>
    
  )
}
