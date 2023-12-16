import { MyReservation } from "./pages/MyReservation";
import { ReservationDetailConfirm } from "./pages/RDConfirm";
import { TablePage } from "./pages/TablePage";
import { TableType } from "./pages/TableType";
import { GetReservationDetail } from "./pages/GetReservationDetail";
import { CreateTable1 } from "./pages/CreateTable1";
import { CreateTable2 } from "./pages/CreateTable2";
import { QrcodeConfirm } from "./pages/QrcodeConfirm";
import { ReservationDetailQrcode } from "./pages/RDQrcode";

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
    // { path: "/dashboard", element: <Dashboard /> },
    { path: "/reservation-detail-confirm", element: <ReservationDetailConfirm /> },
    { path: "/reservation-detail-qrcode", element: <ReservationDetailQrcode /> },
    { path: "/getreservation-detail", element: <GetReservationDetail /> },
    { path: "/createtable1", element: <CreateTable1 /> },

    
  ];
};
