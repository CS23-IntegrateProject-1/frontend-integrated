import { Box, Text } from '@chakra-ui/react';
import React from 'react';

interface TicketProps {
  ticket: {
    movieName: string;
    dateAndTime: string;
    theatreName: string;
    cinemaName: string;
    seatAmount: number;
    // Add more fields as needed
  };
}

const Ticket: React.FC<TicketProps> = ({ ticket }) => {
  return (
    <Box className="ticket-box" bg={"#D9D9D9"} display={"flex"} width={"348px"} height={"141px"} borderRadius={"16px"}>
      <Box marginLeft={'10px'} marginTop={'14px'}> 
        <img src="https://www.themoviedb.org/t/p/w440_and_h660_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" alt="Image of the ticket" width={"74px"} height={"108px"} />
      </Box>
      <Box marginLeft={'13px'} marginTop={'15px'}>
      <div>
        <Text color={'#200944'} fontSize={'14px'} fontWeight={'bold'}>{ticket.movieName}</Text>
      </div>
      <div>
        <Text color={'#200944'} fontSize={'14px'} fontWeight={'bold'}>{ticket.dateAndTime}</Text>
      </div>
      <div>
        <Text color={'#19191999'} fontSize={'10px'} fontWeight={'bold'}>{ticket.theatreName}</Text>
      </div>
      <div>
        <Text color={'#19191999'} fontSize={'10px'} fontWeight={'bold'}>{ticket.cinemaName}</Text>
      </div>
      <div>
        <Text color={'#200944'} fontSize={'10px'} fontWeight={'bold'}> {ticket.seatAmount} Seats</Text>
      </div>
      
      {/* Add more details as needed */}
      </Box>
    </Box>
  );
};

export default Ticket;
