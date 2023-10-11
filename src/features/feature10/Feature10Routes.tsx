import { NotiBadge } from "./Components/notiBadge";
export const Feature10Routes = () => {
  return [
    {
      path: "/notification",
      element: <NotiBadge />,
      
    },
    {
      path: "/event",
      element: "ElementPlaceHolder",
    },
    { path: "/event/:eventId", element: "ElementPlaceHolder" },
  ];
};
