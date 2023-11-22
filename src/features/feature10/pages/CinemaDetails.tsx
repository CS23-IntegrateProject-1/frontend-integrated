import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import DateSelection from '../components/DateSelection';
import MovieBanner from '../components/MovieBanner';
import NearestCinemas from '../components/NearestCinemas';
import CinemaName from '../components/CinemaName'; // Correct import
import { center } from '../../feature04/components/Maps/setting';
import TimeSelection from '../components/TimeSelection';

const CinemaDetailPage = () => {
  const [cinemaName, setCinemaName] = useState([
    {
      name: 'Cinema A',
    },
  ]);

  const [movies, setMovies] = React.useState([
    {
      id: 1,
      title: 'Movie 1',
      genre: 'Action',
      rate: 'PG-13',
      imageUrl: 'path/to/image1.jpg',
    },
  ]);

  // Dummy data for nearest cinemas
  const [nearestCinemas, setNearestCinemas] = React.useState([
    {
      name: 'Cinema A',
      location: 'City Center',
      showtimes: ['10:30 AM', '3:00 PM', '8:30 PM'],
      type: 'IMAX',
    },
    {
      name: 'Cinema B',
      location: 'Downtown',
      showtimes: ['11:15 AM', '4:30 PM', '9:00 PM'],
      type: 'Standard',
    },
    {
      name: 'Cinema C',
      location: 'Suburbia',
      showtimes: ['9:00 AM', '1:45 PM', '7:15 PM'],
      type: 'Premium',
    },
  ]);

  return (
    <Box marginLeft={'0px'} alignItems={'center'}>
      {/* Assuming CinemaName component takes 'name' prop */}
      <CinemaName name={cinemaName[0].name} />

      {/* Integrate DateSelection component here */}
      <DateSelection />

      {/* Integrate a single MovieBanner component based on the first movie in the array */}
      <MovieBanner key={movies[0].id} movie={movies[0]} />

      {/* Integrate NearestCinemas component with only cinema names */}
      {/* <NearestCinemas cinemas={nearestCinemas} /> */}
      
      {/* Pass showtimes to TimeSelection component */}
      <TimeSelection cinemas={nearestCinemas} />

      {/* Continue with Showtimes or any other content */}
      {/* ... */}
    </Box>
  );
};

export default CinemaDetailPage;
