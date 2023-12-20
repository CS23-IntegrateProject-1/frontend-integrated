import { Checkbill } from "./pages/Account/Checkbill";
import { AddCard } from "./pages/AddCard/AddCard";
import { AllData } from "./pages/Admin/AllData";
import { BusinessInsight } from "./pages/Admin/BusinessInsight";
import { FoodDelivery } from "./pages/Admin/FoodDelivery";
import { FoodOrder } from "./pages/Admin/FoodOrder";
import { Receipt } from "./pages/Admin/Receipt";
import { Reservation } from "./pages/Admin/Reservation";
import { SelectPaymentForCheckout } from "./pages/Business/SelectPaymentForCheckout";
import { QrCodeScan } from "./pages/QrCode/QrCodeScan";

export const FeatureAdmin08Routes = () => {
	return [
		{
			path: "/admin/checkout/:userId",
			element: <SelectPaymentForCheckout />,
		},
		{ path: "/admin/qr-payment/venue/:userId", element: <QrCodeScan /> },
		{ path: "/admin/addcard/venue/:userId", element: <AddCard /> },
		{ path: "/admin/insight/venue/:venueId", element: <BusinessInsight /> },
		{ path: "/admin/insight/all/venue/:venueId", element: <AllData /> },
		{ path: "/admin/reservation/:venueId", element: <Reservation /> },
		{ path: "/admin/FoodOrder/:venueId", element: <FoodOrder /> },
		{
			path: "/admin/FoodDelivery/:venueId",
			element: <FoodDelivery />,
		},
		{ path: "/admin/receipt/:venueId", element: <Receipt /> },
		{
			path: "/admin/checkbill/:orderId/:venueId",
			element: <Checkbill />,
		},
	];
};
