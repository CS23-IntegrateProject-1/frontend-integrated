import { MyReservation } from "./pages/MyReservation";
import { ReservationDetail } from "./pages/ReservationDetail";
import { TablePage } from "./pages/TablePage";
import { TableType } from "./pages/TableType";
import { GetReservationDetail } from "./pages/GetReservationDetail";
import QrcodeGen from "./pages/QrcodeGen";
import { MIKForm } from "./pages/MIKForm";

export const Feature06Routes = () => {
  return [
    { path: "/venue/:venueId/reserve", element: "ElementPlaceHolder" }, //page for choosing the table type
    {
      path: "/venue/:venueId/reserve/:reserveId",
      element: "ElementPlaceHolder",
    }, //page for choose the reservation details (date, time, etc.)
    { path: "/check-in", element: "ElementPlaceHolder" },
    { path: "/reservation-detail/2/:branchId", element: <MIKForm /> },
    { path: "/my-reservation", element: <MyReservation /> },
    { path: "/table/:venueId/:branchId", element: <TablePage /> },
    { path: "/tabletype", element: <TableType /> },
    {
      path: "/reservation-detail/:venueId/:branchId",
      element: <ReservationDetail />,
    },
    {
      path: "/getreservation-detail/:venueId/:reservationId",
      element: <GetReservationDetail />,
    },
    { path: "/qrcode/display/:reservationId", element: <QrcodeGen /> },
  ];
};
