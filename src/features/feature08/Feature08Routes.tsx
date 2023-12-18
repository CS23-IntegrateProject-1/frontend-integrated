import { AdvertiseNoti } from "./pages/NotificationBusinessSide/AdvertiseNoti";
import { CheckOutNoti } from "./pages/NotificationBusinessSide/CheckOutNoti";
import { NewReserveNoti } from "./pages/NotificationBusinessSide/NewReserveNoti";
import { Notification } from "./pages/NotificationBusinessSide/Notification";
import { OrderUpdateNoti } from "./pages/NotificationBusinessSide/OrderUpdateNoti";
import { UpdateNoti } from "./pages/NotificationBusinessSide/UpdateNoti";
import { SelectPayment } from "./pages/Customer/SelectPayment";
import { QrCodeScan } from "./pages/QrCode/QrCodeScan";
import { AddCardNoti } from "./pages/NotificationBusinessSide/AddCardNoti";
import { AddCard } from "./pages/AddCard/AddCard";
import { EnterCode } from "./pages/NotificationBusinessSide/EnterCode";
import { PromotionNoti } from "./pages/NotificationBusinessSide/PromotionNoti";
import { PaymentHistory } from "./pages/Payment/PaymentHistory";
import { DeliveryPayment } from "./pages/Customer/DeliveryPayment";
import { SelectPaymentForCheckout } from "./pages/Business/SelectPaymentForCheckout";
import { Accounting } from "./pages/Account/Accounting";
import { Checkbill } from "./pages/Account/Checkbill";
import { Timestamp } from "./pages/Account/Timestamp";
import { AccountingMain } from "./pages/Account/AccountingMain";
import { AddCardVenue } from "./pages/AddCard/AddCardVenue";
import { BusinessInsight } from "./pages/Admin/BusinessInsight";
import { AllData } from "./pages/Admin/AllData";
import { Reservation } from "./pages/Admin/Reservation";
import { FoodOrder } from "./pages/Admin/FoodOrder";
import { FoodDelivery } from "./pages/Admin/FoodDelivery";
import { Receipt } from "./pages/Admin/Receipt";
import { ProductDisplay } from "./pages/Customer/ProductDisplay";
import CheckoutCancel from "./pages/Customer/CheckoutCancel";
import CheckoutSuccess from "./pages/Customer/CheckoutSuccess";

// import { SelectPaymentForPromotionOrAdvertisement } from "./pages/Notification (Business side)/SelectPaymentForPromotionOrAdvertisement";

export const Feature08Routes = () => {
  return [
    //customer side
    { path: ":userId/venue/:venueId/payment", element: <SelectPayment /> },
    { path: ":userId/venue/:venueId/payment/checkout", element: <ProductDisplay /> },
    { path: "/customer/history", element: <PaymentHistory /> },
    { path: "/customer/:userId/addcard", element: <AddCard /> },
    { path: "/checkout-cancel", element: <CheckoutCancel /> },
    { path: "/checkout-success", element: <CheckoutSuccess /> },
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
    { path: "/:venueId/Account/eachmonth", element: <AccountingMain /> },
    { path: "/:venueId/Account/:year/:month", element: <Accounting /> },
    { path: "/:venueId/Account/datexpand/:year/:month/:day", element: <Timestamp /> },
    { path: "/:venueId/Account/Checkbill/:appTransactionDetailId", element: <Checkbill />,},

    // admin side
    {
      path: "/venue/:userId/admin/checkout",
      element: <SelectPaymentForCheckout />,
    },
    { path: "/venue/:userId/admin/qr-payment", element: <QrCodeScan /> },
    { path: "/venue/:userId/admin/addcard", element: <AddCard /> },
    { path: "/venue/:venueId/admin/insight", element: <BusinessInsight /> },
    { path: "/venue/:venueId/admin/dashboard", element: <AllData /> },
    { path: "/venue/:venueId/admin/reservation", element: <Reservation /> },
    { path: "/venue/:venueId/admin/FoodOrder", element: <FoodOrder /> },
    { path: "/venue/:venueId/admin/FoodDelivery", element: <FoodDelivery /> },
    { path: "/venue/:venueId/admin/receipt", element: <Receipt /> },
    { path: "/venue/:venueId/admin/checkbill/:orderId", element: <Checkbill />,},
    
    { path: "/Notification/BusinessNoti/:venueId", element: <Notification /> },
    { path: "/Notification/advertisement/:advertisementId", element: <AdvertiseNoti /> },
    { path: "/Notification/Promotion", element: <PromotionNoti /> },
    { path: "/Notification/Checkout/:venueId/:reservationId", element: <CheckOutNoti /> },
    { path: "/Notification/NewReservation/:venueId/:reservationId", element: <NewReserveNoti /> },
    { path: "/Notification/OrderUpdate/:orderId", element: <OrderUpdateNoti /> },
    { path: "/Notification/Update", element: <UpdateNoti /> },
    { path: "/Notification/addcard", element: <AddCardNoti /> },
    { path: "/Notification/entercode", element: <EnterCode /> },
  
  ];
};
