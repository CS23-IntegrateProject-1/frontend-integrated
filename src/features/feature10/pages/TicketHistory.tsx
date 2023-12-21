import React from 'react';
import Ticket from '../components/Ticket';
import { Box } from '@chakra-ui/react';

interface TicketHistoryProps {
  ticketHistory: {
    id: number;
    movieName: string;
    dateAndTime: string;
    theatreName: string;
    cinemaName: string;
    seatAmount: number;
    // Add more fields as needed
  }[];
}

const TicketHistory: React.FC<TicketHistoryProps> = ({ ticketHistory }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
      marginBottom={4}
      padding={4}
      borderRadius={16}
      width={['100%', '80%', '70%', '60%']} // Adjust the values for your specific needs
      maxWidth="800px" // Set a maximum width if needed
      margin="0 auto" // Center the box horizontally
    >
      {ticketHistory.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </Box>
  );
};

export default TicketHistory;
