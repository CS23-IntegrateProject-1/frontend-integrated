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
import { SelectPaymentForCheckout } from "./pages/Business/SelectPaymentForCheckout";
import { Accounting } from "./pages/Account/Accounting";
import { Checkbill } from "./pages/Account/Checkbill";
import { Timestamp } from "./pages/Account/Timestamp";
import { AccountingMain } from "./pages/Account/AccountingMain";
import { AddCardVenue } from "./pages/AddCard/AddCardVenue";
// import { SelectPaymentForPromotionOrAdvertisement } from "./pages/Notification (Business side)/SelectPaymentForPromotionOrAdvertisement";

export const Feature08Routes = () => {
  return [
    //customer side
    { path: ":userId/venue/:venueId/payment", element: <SelectPayment /> },
    { path: "/customer/history", element: <PaymentHistory /> },
    { path: "/customer/:userId/addcard", element: <AddCard /> },
    //payment to venue by using venueId?
    { path: ":userId/venue/:venueId/qr-payment", element: <QrCodeScan /> },
    //Action
    { path: "/venue/:venueId/receipt", element: "ElementPlaceHolder" },
    { path: "/waiting", element: "ElementPlaceHolder" },

    //venue ?
    // { path: "/venue/:venueId/payment", element: <SelectPayment /> },
    // { path: "/venue/:venueId/receipt", element: "ElementPlaceHolder" },
    // { pathh: "/venue/:venueId/qr-payment", element: <QrCodeScan /> },
    // { path: "/venue/:venueId/waiting", element: "ElementPlaceHolder" },
    // { path: "/venue/:venueId/history", element: <PaymentHistory/> },

    //delivery side
    { path: "/venue/:userId/delivery_addcard", element: <AddCard /> },
    { path: "/venue/:userId/delivery_payment", element: <DeliveryPayment /> },

    //Business side
    {
      path: "/venue/:venueId/business/checkout",
      element: <SelectPaymentForCheckout />,
    },
    { path: "/venue/:venueId/business/qr-payment", element: <QrCodeScan /> },
    { path: "/venue/:venueId/business/addcard", element: <AddCardVenue /> },
    { path: "/venue/:venueId/business/history", element: <PaymentHistory /> },

    // admin side
    {
      path: "/venue/:userId/admin/checkout",
      element: <SelectPaymentForCheckout />,
    },
    { path: "/venue/:userId/admin/qr-payment", element: <QrCodeScan /> },
    { path: "/venue/:userId/admin/addcard", element: <AddCard /> },

    { path: "/Notification/BusinessNoti/:venueId", element: <Notification /> },
    { path: "/Notification/Advertisement/:venueId", element: <AdvertiseNoti /> },
    { path: "/Notification/Promotion", element: <PromotionNoti /> },
    { path: "/Notification/Checkout/:venueId/:reservationId", element: <CheckOutNoti /> },
    { path: "/Notification/NewReservation/:venueId/:reservationId", element: <NewReserveNoti /> },
    { path: "/Notification/OrderUpdate/:orderId", element: <OrderUpdateNoti /> },
    { path: "/Notification/Update", element: <UpdateNoti /> },
    { path: "/Notification/addcard", element: <AddCardNoti /> },
    { path: "/Notification/entercode", element: <EnterCode /> },
    { path: "/:venueId/Account/eachmonth", element: <AccountingMain /> },
    { path: "/:venueId/Account/:year/:month", element: <Accounting /> },
    { path: "/:venueId/Account/datexpand/:year/:month/:day", element: <Timestamp /> },
    {
      path: "/venue/Accounting/Checkbill/:transactionId",
      element: <Checkbill />,
    },
  ];
};
