import { MyReservation } from "./pages/MyReservation";
import { ReservationDetail } from "./pages/ReservationDetail";
import { TablePage } from "./pages/TablePage";
import { TableType } from "./pages/TableType";
import { Dashboard } from "./pages/Dashboard";
import { ViewTable } from "./pages/ViewTable";
import { Reservation } from "./pages/Business/Reservation";
import { WalkInPeople } from "./pages/Business/WalkInPeople";
import { WalkInDetail } from "./pages/Business/WalkInDetail";


export const Feature06Routes = () => {
  return [
    { path: "/venue/:venueId/reserve", element: "ElementPlaceHolder" }, //page for choosing the table type
    {
      path: "/venue/:venueId/reserve/:reserveId",
      element: "ElementPlaceHolder",
    }, //page for choose the reservation details (date, time, etc.)
    { path: "/check-in", element: "ElementPlaceHolder" },
    { path: "/my-reservation", element: <MyReservation /> },
    { path: "/table", element: <TablePage /> },
    { path: "/tabletype", element: <TableType /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/reservation-detail", element: <ReservationDetail/>},
    { path: "/Reservation", element: <Reservation />},
    { path: "/WalkInDetail", element: <WalkInDetail />},
    { path: "/WalkInPeople", element: <WalkInPeople />}
  ];
};
