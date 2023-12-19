import { QrCodeScan } from "./pages/QrCode/QrCodeScan";
import { PaymentHistory } from "./pages/Payment/PaymentHistory";
import { DeliveryPayment } from "./pages/Customer/DeliveryPayment";
import { SelectPaymentForCheckout } from "./pages/Business/SelectPaymentForCheckout";
import { Accounting } from "./pages/Account/Accounting";
import { Checkbill } from "./pages/Account/Checkbill";
import { Timestamp } from "./pages/Account/Timestamp";
import { AccountingMain } from "./pages/Account/AccountingMain";
import { AddCardVenue } from "./pages/AddCard/AddCardVenue";

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
	];
};
