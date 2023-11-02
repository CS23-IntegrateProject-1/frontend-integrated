import { SelectPayment } from "./pages/Payment/SelectPayment";
import { QrCodeScan } from "./pages/QrCode/QrCodeScan";

export const Feature08Routes = () => {
  return [
    { path: "/venue/:venueId/payment", element: <SelectPayment /> },
    { path: "/venue/:venueId/receipt", element: "ElementPlaceHolder" },
    { path: "/venue/:venueId/qr-payment", element: <QrCodeScan /> },
    { path: "/venue/:venueId/waiting", element: "ElementPlaceHolder" },
  ];
};
