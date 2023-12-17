import CinemaDetailPage from "./pages/CinemaDetails";
import { CinemaMain } from "./pages/CinemaMain";
import PaymentPage from "./pages/Payment";
import { ShowTime } from "./pages/ShowTime";
import PaymentSuccess from "./pages/PaymentSuccess";
import ScreenPage from "./pages/ScreenPage";
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
      element: "ElementPlaceHolder" 
    },
    { 
      path: "/cinemaDetails/:theaterId", 
      element: <CinemaDetailPage /> 
    },
    {
      path: "/payment",
      element: <PaymentPage />
    },
    {
      path: "/paymentSuccess",
      element: <PaymentSuccess />
    },
    {
      path: '/screen/:filmId/:date/:showId/:theaterId',
      element: <ScreenPage />
    }
  ];
};
