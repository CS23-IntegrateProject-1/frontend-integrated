import { MyReservation } from "./pages/MyReservation";
import { TablePage } from "./pages/TablePage";
import { TableType } from "./pages/TableType";

export const Feature06Routes = () => {
  return [
    { path: "/venue/:venueId/reserve", element: "ElementPlaceHolder" }, //page for choosing the table type
    {
      path: "/venue/:venueId/reserve/:reserveId",
      element: "ElementPlaceHolder",
    }, //page for choose the reservation details (date, time, etc.)
    { path: "/check-in", element: "ElementPlaceHolder" },
    { path: "/my-reservation", element: "ElementPlaceHolder" },
    { path: "/table" , element: <TablePage/> },
    { path: "/tabletype" , element: <TableType/> }
    { path: "/tabletype" , element: <TableType/> },
    { path: "/myreservation", element: <MyReservation/>}
  ];
};
