import { AdvertiseNoti } from "./pages/Notification (Business side)/AdvertiseNoti";
import { CheckOutNoti } from "./pages/Notification (Business side)/CheckOutNoti";
import { NewReserveNoti } from "./pages/Notification (Business side)/NewReserveNoti";
import { Notification } from "./pages/Notification (Business side)/Notification";
import { OrderUpdateNoti } from "./pages/Notification (Business side)/OrderUpdateNoti";
import { UpdateNoti } from "./pages/Notification (Business side)/UpdateNoti";
import { SelectPayment } from "./pages/Customer/SelectPayment";
import { QrCodeScan } from "./pages/QrCode/QrCodeScan";
import { AddCardNoti } from "./pages/Notification (Business side)/AddCardNoti";
import { AddCard } from "./pages/AddCard/AddCard";
import { EnterCode } from "./pages/Notification (Business side)/EnterCode";
import { PromotionNoti } from "./pages/Notification (Business side)/PromotionNoti";
import { PaymentHistory } from "./pages/Payment/PaymentHistory";
import { DeliveryPayment } from "./pages/Customer/DeliveryPayment";
import { DeliveryAddCard } from "./pages/Customer/DeliveryAddCard";
import { SelectPaymentForCheckout } from "./pages/Business/SelectPaymentForCheckout";
import { Accounting } from "./pages/Account/Accounting";
import { Checkbill } from "./pages/Account/Checkbill";
import { Timestamp } from "./pages/Account/Timestamp";
import { AccountingMain } from "./pages/Account/AccountingMain";

export const Feature08Routes = () => {
  return [
    { path: "/venue/:venueId/payment", element: <SelectPayment /> },
    { path: "/venue/:venueId/receipt", element: "ElementPlaceHolder" },
    { path: "/venue/:venueId/qr-payment", element: <QrCodeScan /> },
    { path: "/venue/:venueId/waiting", element: "ElementPlaceHolder" },
    { path: "/venue/:venueId/history", element: <PaymentHistory/> },
    { path: "/venue/:venueId/addcard", element: <AddCard /> },
    { path: "/venue/:venueId/delivery_payment", element: <DeliveryPayment /> },
    { path: "/venue/:venueId/delivery_addcard", element: <DeliveryAddCard /> },
    { path: "/venue/:venueId/business/checkout", element: <SelectPaymentForCheckout /> },
    { path: "/venue/:venueId/business/qr-payment", element: <QrCodeScan /> },
    { path: "/venue/:venueId/business/delivery_addcard", element: <DeliveryAddCard /> },
    { path: "/venue/:venueId/business/history", element: <PaymentHistory /> },
    { path: "/venue/:venueId/admin/checkout", element: <SelectPaymentForCheckout /> },
    { path: "/venue/:venueId/admin/qr-payment", element: <QrCodeScan /> },
    { path: "/venue/:venueId/admin/delivery_addcard", element: <DeliveryAddCard /> },
    { path: "/Notification/BusinessNoti", element: <Notification /> },
    { path: "/Notification/Advertisement", element: <AdvertiseNoti /> },
    { path: "/Notification/Promotion", element: <PromotionNoti /> },
    { path: "/Notification/Checkout", element: <CheckOutNoti /> }, 
    { path: "/Notification/NewReservation", element: <NewReserveNoti /> }, 
    { path: "/Notification/OrderUpdate", element: <OrderUpdateNoti /> }, 
    { path: "/Notification/Update", element: <UpdateNoti /> },
    { path: "/Notification/addcard", element: <AddCardNoti /> },
    { path: "/Notification/entercode", element: <EnterCode /> },
    { path: "/venue/Account/main", element: <AccountingMain/>},
    { path: "/venue/Account/Accounting", element: <Accounting/>},
    { path: "/venue/Account/timestamp", element: <Timestamp/>},
    { path: "/venue/Accounting/Checkbill", element: <Checkbill/>},
  ];
};
