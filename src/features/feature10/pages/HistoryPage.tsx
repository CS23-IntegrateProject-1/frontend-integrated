import{ useEffect, useState } from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import getReservationById from '../../../api/movie/getReservationById';

interface Reservation {
  reservationId: number;
  Shows: {
    Films: {
      poster_img: string;
      name: string;
    };
    date: string;
    start_time: string;
    Screens: {
      Theaters: {
        name: string;
      };
      screen_no: number;
    };
  };
  Seats: {
    seat_row: number;
    seat_no: number;
  };
}

const HistoryPage = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await getReservationById();
        setReservations(response);
        console.log(response);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    fetchReservations();
  }, []);



  return (
    <Box>
      <Heading mb={4}>Reservation History</Heading>
      {reservations.length === 0 ? (
        <Box display="flex" justifyContent="center" alignItems="center"><Text fontSize={80}>No reservation history</Text></Box>        
      ) : (
        reservations.reverse().map((reservation) => (
          <Box
            key={reservation.reservationId}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={4}
            mb={4}
            display="flex"
            alignItems="center"
            backgroundColor="#D9D9D9"
          >
          <Image
            src={reservation.Shows.Films.poster_img}
            alt="Movie Poster"
            width="100px"
            objectFit="cover"
            mr={4}
          />
          <Box>
            <Heading as="h2" size="md" color="#200944">
              {reservation.Shows.Films.name}
            </Heading>
            <Text color="#200944">{new Date(reservation.Shows.date).toLocaleDateString()} | {new Date(reservation.Shows.start_time).toLocaleTimeString(undefined, {timeZone: 'UTC',hour12: false,})}</Text>
            <Text color="#19191999">{reservation.Shows.Screens.Theaters.name}</Text>
            <Text color="#19191999">Cinema {reservation.Shows.Screens.screen_no}</Text>
            <Text color="#5F0DBB">row : {reservation.Seats.seat_row} Number : {reservation.Seats.seat_no}</Text>
          </Box>
        </Box>
      )))}
    </Box>
  );
};

export default HistoryPage;
