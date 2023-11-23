import CinemaDetailPage from "./pages/CinemaDetails";
import { CinemaMain } from "./pages/CinemaMain";
import PaymentPage from "./pages/Payment";
import { ShowTime } from "./pages/ShowTime";
import PaymentSuccess from "./pages/PaymentSuccess";
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
      path: "/cinemaDetails", 
      element: <CinemaDetailPage /> 
    },
    {
      path: "/payment",
      element: <PaymentPage />
    },
    {
      path: "/paymentSuccess",
      element: <PaymentSuccess />
    }
  ];
};
