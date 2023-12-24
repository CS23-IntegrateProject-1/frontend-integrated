//import React from 'react'
import { useState, useEffect } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import DateSelection from '../components/DateSelection'
import { Box, Image, Text , useMediaQuery , Button , Flex} from '@chakra-ui/react';
import { Axios } from '../../../AxiosInstance';
import getShowbyFilmId from '../../../api/movie/getShowbyFilmId';


interface Movie {
  title: string;
  imageUrl: string;
  id: number;
  rate: string;
  genre: string;
  duration: number;
}

interface Theater {
  theaterId: number;
  name: string;
  address: string;
  phone_num: string;
  promptpay_num: string;
  latitude: string;
  longitude: string;
  Screens: Screen[];
}

interface Screen {
  screenId: number;
  theaterId: number;
  capacity: number;
  screen_type: string;
  screen_no: number;
  price: string;
  Shows: Show[];
}

interface Show {
  showId: number;
  screenId: number;
  filmId: number;
  date: string;
  start_time: string;
  end_time: string;
  price: string;
  
}

export const ShowTime = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  // const [show, setShows] = useState<Show[]>([]);
  const [theatres, setTheatres] = useState<Theater[]>([]);
  const [isDesktop] = useMediaQuery('(min-width: 768px)');
  const thisDate = new Date();
  const day = thisDate.getDate();
  const month = thisDate.getMonth() + 1; // Months are zero-based, so add 1
  const year = thisDate.getFullYear();
  const navigate = useNavigate();

  const [selectedDate] = useState<number>(day);

    

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await Axios.get(`/feature10/getFilmsById/${movieId}`);
        setMovie({
          title: response.data.name,
          imageUrl: response.data.poster_img,
          id: response.data.filmId,
          rate: response.data.rate,
          genre: response.data.genre,
          duration: response.data.duration,
        });
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
      
      
    };
    
    fetchMovieDetails();    
  }, [movieId]);




  if (!movie) {
    return <div>Loading...</div>;
  }



  const handleDateChange = async (selectedDate: string) => {
    try {
      const numericDate = parseInt(selectedDate, 10);
      // Make a request to the server to get movie details for the selected date
      const response = await getShowbyFilmId(
        Number(movieId),
        numericDate,
        month,
        year
      );      
      setTheatres(response);

    
      // Update the state to include movies for the selected date
      // setMovies(response);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };




  return (
    <>    
    <DateSelection onDateSelect={handleDateChange}></DateSelection>
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
            <Text color="rgba(0,0,0,0)">{selectedDate}</Text>            
          </Box>
        </Box>
      </Box>

    
      {theatres
  .filter(theatre => theatre.Screens.some(screen => screen.Shows.length > 0 && screen.Shows.some(show => {
    const showStartTime = new Date(show.start_time).toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'UTC' });
    const currentTime = new Date().toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false, });
    return showStartTime >= currentTime;
  }))) // Filter theaters based on shows with ongoing or future shows
  .map((theatre, index) => (
    <Box key={index} mt={4} boxShadow="md" backgroundColor="#A533C8" borderRadius={5}>
      <Text fontSize="20px" fontWeight="bold" mb={4} ml={3}>
        {theatre.name}
      </Text>
      <Box backgroundColor="#D9D9D9" color="#200944" w="100%" p={3} borderBottomLeftRadius={5} borderBottomRightRadius={5}>
        {theatre.Screens
          .filter(screen => screen.Shows.length > 0 && screen.Shows.some(show => {
            const showStartTime = new Date(show.start_time).toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'UTC' });
            const currentTime = new Date().toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false, });
            return showStartTime >= currentTime;
          })) // Filter screens based on shows with ongoing or future shows
          .map((screen, screenIndex) => (
            <Box key={screenIndex} mb={4}>
              <Text fontSize="12px" fontWeight="bold">
                Type: {screen.screen_type} | ENG | SUB TH
              </Text>
              {/* Button for each show's start_time */}
              <Flex overflowX="auto">
                {screen.Shows.filter(show => {
                  const showStartTime = new Date(show.start_time).toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'UTC' });
                  const currentTime = new Date().toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false, });

                  return showStartTime >= currentTime;
                }).map((show, showIndex) => (
                  <Button
                    key={showIndex}
                    mt={2}
                    mr={2}
                    fontSize={10}
                    borderRadius="2px"
                    width="81px"
                    height="22px"
                    flexShrink="0"
                    borderColor="#200944"
                    borderWidth={1}
                    onClick={() => navigate(`/screen/${theatre.theaterId}/${movie.id}/${show.showId}`)}
                  >
                    {new Date(show.start_time).toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'UTC' })}
                  </Button>
                ))}
              </Flex>
            </Box>
          ))}
      </Box>
    </Box>
  ))}



    </>
    
  )
}
