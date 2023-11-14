import { CinemaMain } from "./pages/CinemaMain";
import { ShowTime } from "./pages/ShowTime";
export const Feature10Routes = () => {
  return [
    {
      path: "/cinemaMainPage",
      element: <CinemaMain />,
    },
    {
      path: "/showtime",
      element: <ShowTime />,
    },
    { path: "/event/:eventId", element: "ElementPlaceHolder" },
  ];
};
