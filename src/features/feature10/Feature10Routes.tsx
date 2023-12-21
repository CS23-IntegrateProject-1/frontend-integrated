import CinemaDetailPage from "./pages/CinemaDetails";
import { CinemaMain } from "./pages/CinemaMain";
import PaymentPage from "./pages/Payment";
import { ShowTime } from "./pages/ShowTime";
import PaymentSuccess from "./pages/PaymentSuccess";
import ScreenPage from "./pages/ScreenPage";
import TicketHistory from "./pages/TicketHistory";

interface Ticket {
  id: number;
  movieName: string;
  dateAndTime: string;
  theatreName: string;
  cinemaName: string;
  seatAmount: number;
  // Add more fields as needed
}

const ticketMock: Ticket[] = [
  {
    id: 1,
    movieName: "Interstellar",
    dateAndTime: "15 November 2023 | 12:00 PM",
    theatreName: "Harmoni Cineplex KMUTT",
    cinemaName: "Cinema 9 | ENG",
    seatAmount: 5,
    // Add more fields as needed
  },
  // Add more ticket objects as needed
];

export const Feature10Routes = () => {
  return [
    {
      path: "/cinemaMainPage",
      element: <CinemaMain />,
    },
    {
      path: "/showtimes/:movieId",
      element: <ShowTime />,
    },
    {
      path: "/event/:eventId",
      element: "ElementPlaceHolder",
    },
    {
      path: "/cinemaDetails/:theaterId",
      element: <CinemaDetailPage />,
    },
    {
      path: "/payment",
      element: <PaymentPage />,
    },
    {
      path: "/paymentSuccess",
      element: <PaymentSuccess />,
    },
    {
      path: "/screen/:theaterId/:filmId/:showId",
      element: <ScreenPage />,
    },
    {
      path: "/ticketHistory",
      element: <TicketHistory ticketHistory={ticketMock} />,
    },
  ];
};
