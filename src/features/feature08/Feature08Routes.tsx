import { SelectPayment } from "./pages/Customer/SelectPayment";
import { SelectPaymentD } from "./pages/Customer/SelectPaymentD";
import { SelectPaymentS } from "./pages/Customer/SelectPaymentS";
import { SelectPaymentDe } from "./pages/Customer/SelectPaymentDe";
import { QrCodeScan } from "./pages/QrCode/QrCodeScan";
import { AddCard } from "./pages/AddCard/AddCard";
import { PaymentHistory } from "./pages/Payment/PaymentHistory";
import { ProductDisplay } from "./pages/Customer/ProductDisplay";
import CheckoutCancel from "./pages/Customer/CheckoutCancel";
import CheckoutSuccess from "./pages/Customer/CheckoutSuccess";
import DepositCancel from "./pages/Customer/DepositCancel";
import DepositSuccess from "./pages/Customer/DepositSuccess";
import SeatCancel from "./pages/Customer/SeatCancel";
import SeatSuccess from "./pages/Customer/SeatSuccess";
import OnlineOrderSuccess from "./pages/Customer/onlineOrderSuccess";
import OnlineOrderCancel from "./pages/Customer/onlineOrderCancel";


export const Feature08Routes = () => {
	return [
		//customer side
		{ path: "/venue/payment", element: <SelectPayment /> },
		{
			path: "/venue/paymentD/:reservationId",
			element: <SelectPaymentD />,
		},
		{
			path: "/venue/paymentS",
			element: <SelectPaymentS />,
		},
		{
			path: "/venue/paymentDe/:onlineOrderId",
			element: <SelectPaymentDe />,
		},
		{
			path: "/venue/:venueId/payment/checkout",
			element: <ProductDisplay />,
		},
		{ path: "/customer/history", element: <PaymentHistory /> },
		{ path: "/customer/:userId/addcard", element: <AddCard /> },
		{ path: "/checkout-cancel", element: <CheckoutCancel /> },
		{ path: "/checkout-success", element: <CheckoutSuccess /> },
		{ path: "/deposit-cancel", element: <DepositCancel /> },
		{ path: `/deposit-success/:reservationId/:sessionId`, element: <DepositSuccess /> },
		{ path: "/onlineorder-success", element: <OnlineOrderSuccess />},
		{ path: "/onlineorder-cancel", element: <OnlineOrderCancel />},
		
    { path: "/seat-cancel", element: <SeatCancel /> },
    { path: "/seat-success", element: <SeatSuccess /> },
		//payment to venue by using venueId?
		{ path: ":userId/venue/:venueId/qr-payment", element: <QrCodeScan /> },
		//Action
		{ path: "/venue/:venueId/receipt", element: "ElementPlaceHolder" },
		{ path: "/waiting", element: "ElementPlaceHolder" },
		{ path: "/venue/:userId/delivery_addcard", element: <AddCard /> },
	];
};
