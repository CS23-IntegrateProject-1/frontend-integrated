import { AdvertiseNoti } from "./pages/Notification (Business side)/AdvertiseNoti";
import { CheckOutNoti } from "./pages/Notification (Business side)/CheckOutNoti";
import { NewReserveNoti } from "./pages/Notification (Business side)/NewReserveNoti";
import { Notification } from "./pages/Notification (Business side)/Notification";
import { OrderUpdateNoti } from "./pages/Notification (Business side)/OrderUpdateNoti";
import { UpdateNoti } from "./pages/Notification (Business side)/UpdateNoti";
import { SelectPayment } from "./pages/Payment/SelectPayment";
import { QrCodeScan } from "./pages/QrCode/QrCodeScan";
import { AddCard } from "./pages/Notification (Business side)/AddCard";
import { EnterCode } from "./pages/Notification (Business side)/EnterCode";
import { PromotionNoti } from "./pages/Notification (Business side)/PromotionNoti";

export const Feature08Routes = () => {
  return [
    { path: "/venue/:venueId/payment", element: <SelectPayment /> },
    { path: "/venue/:venueId/receipt", element: "ElementPlaceHolder" },
    { path: "/venue/:venueId/qr-payment", element: <QrCodeScan /> },
    { path: "/venue/:venueId/waiting", element: "ElementPlaceHolder" },
    { path: "/Notification/BusinessNoti", element: <Notification /> },
    { path: "/Notification/Advertisement", element: <AdvertiseNoti /> },
    { path: "/Notification/Promotion", element: <PromotionNoti /> },
    { path: "/Notification/Checkout", element: <CheckOutNoti /> }, 
    { path: "/Notification/NewReservation", element: <NewReserveNoti /> }, 
    { path: "/Notification/OrderUpdate", element: <OrderUpdateNoti /> }, 
    { path: "/Notification/Update", element: <UpdateNoti /> },
    { path: "/Notification/addcard", element: <AddCard /> },
    { path: "/Notification/entercode", element: <EnterCode /> },
  ];
};
