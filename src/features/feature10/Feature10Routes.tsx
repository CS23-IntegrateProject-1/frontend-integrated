import {EventsPage} from "./pages/EventsPage"
import { NotiBadge } from "./Components/notiBadge";
export const Feature10Routes = () => {
  return [
    {
      path: "/notification",
      element: <NotiBadge />,
      
    },
    {
      path: "/event",
      element: <EventsPage />,
    },
    { path: "/event/:eventId", element: "ElementPlaceHolder" },
  ];
};
