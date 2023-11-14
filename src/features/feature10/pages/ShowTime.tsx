import React from 'react'
import DateSelection from '../components/DateSelection'
import MovieBanner from '../components/MovieBanner'
import poster1 from '../assets/img/poster1.jpg'
import SearchBar from '../components/SearchBar'
import NearestCinemas from '../components/NearestCinemas'

export const ShowTime = () => {
  const movie = {
    title: 'Shawshank redemption',
    imageUrl: poster1,
  };

  const handleSearch = (query: string) => {  
    console.log(`Searching for: ${query}`);
  };

  const cinemasData = [
    {
      name: 'Cinema A',
      location: 'City A',
      showtimes: ['10:00 AM', '2:00 PM', '7:00 PM'],
    },  
  ];

  return (
    <>
    <DateSelection/>
    <MovieBanner movie={movie}/>
    <SearchBar onSearch={handleSearch} />
    <NearestCinemas cinemas={cinemasData}/>
    </>
    
  )
}
