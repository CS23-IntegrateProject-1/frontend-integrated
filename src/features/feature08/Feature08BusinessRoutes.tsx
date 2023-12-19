import { QrCodeScan } from "./pages/QrCode/QrCodeScan";
import { PaymentHistory } from "./pages/Payment/PaymentHistory";
import { DeliveryPayment } from "./pages/Customer/DeliveryPayment";
import { SelectPaymentForCheckout } from "./pages/Business/SelectPaymentForCheckout";
import { Accounting } from "./pages/Account/Accounting";
import { Checkbill } from "./pages/Account/Checkbill";
import { Timestamp } from "./pages/Account/Timestamp";
import { AccountingMain } from "./pages/Account/AccountingMain";
import { AddCardVenue } from "./pages/AddCard/AddCardVenue";
import { Notification } from "./pages/NotificationBusinessSide/Notification";
import { AdvertiseNoti } from "./pages/NotificationBusinessSide/AdvertiseNoti";
import { PromotionNoti } from "./pages/NotificationBusinessSide/PromotionNoti";
import { CheckOutNoti } from "./pages/NotificationBusinessSide/CheckOutNoti";
import { NewReserveNoti } from "./pages/NotificationBusinessSide/NewReserveNoti";
import { OrderUpdateNoti } from "./pages/NotificationBusinessSide/OrderUpdateNoti";
import { UpdateNoti } from "./pages/NotificationBusinessSide/UpdateNoti";
import { AddCardNoti } from "./pages/NotificationBusinessSide/AddCardNoti";
import { EnterCode } from "./pages/NotificationBusinessSide/EnterCode";

export const FeatureBusiness08Routes = () => {
	return [
		//delivery side
		{
			path: "/delivery_payment/:userId",
			element: <DeliveryPayment />,
		},

		//Business side
		{
			path: "/business/checkout/:venueId",
			element: <SelectPaymentForCheckout />,
		},
		{
			path: "/business/qr-payment/:venueId",
			element: <QrCodeScan />,
		},
		{ path: "/business/addcard/:venueId", element: <AddCardVenue /> },
		{
			path: "/business/paymenthistory/:venueId/",
			element: <PaymentHistory />,
		},
		{
			path: "/business/Account/eachmonth/:venueId",
			element: <AccountingMain />,
		},
		{
			path: "/business/Account/:year/:month/:venueId",
			element: <Accounting />,
		},
		{
			path: "/business/Account/datexpand/:venueId/:year/:month/:day",
			element: <Timestamp />,
		},
		{
			path: "/business/Account/Checkbill/:venueId/:appTransactionDetailId",
			element: <Checkbill />,
		},
		{
			path: "/Notification/BusinessNoti/:venueId",
			element: <Notification />,
		},
		{
			path: "/venue/:venueId/admin/checkbill/:orderId",
			element: <Checkbill />,
		},
		{
			path: "/Notification/advertisement/:advertisementId",
			element: <AdvertiseNoti />,
		},
		{ path: "/Notification/Promotion", element: <PromotionNoti /> },
		{
			path: "/Notification/Checkout/:venueId/:reservationId",
			element: <CheckOutNoti />,
		},
		{
			path: "/Notification/NewReservation/:venueId/:reservationId",
			element: <NewReserveNoti />,
		},
		{
			path: "/Notification/OrderUpdate/:orderId",
			element: <OrderUpdateNoti />,
		},
		{ path: "/Notification/Update", element: <UpdateNoti /> },
		{ path: "/Notification/addcard", element: <AddCardNoti /> },
		{ path: "/Notification/entercode", element: <EnterCode /> },
	];
};
