import React from 'react';
import Ticket from '../components/Ticket';

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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
      {ticketHistory.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketHistory;
