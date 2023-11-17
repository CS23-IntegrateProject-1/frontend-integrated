import { CinemaMain } from "./pages/CinemaMain";
import { ShowTime } from "./pages/ShowTime";
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
    { path: "/event/:eventId", element: "ElementPlaceHolder" },
  ];
};
