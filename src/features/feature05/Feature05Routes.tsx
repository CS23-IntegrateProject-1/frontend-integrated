import { RecommendationPage } from "./pages/RecommendationPage";

import { MemberShipPage } from "./pages/membership/MembershipPage";
import { RedeemPage } from "./pages/membership/RedeemPage";
import { VoucherPage } from "./pages/membership/VoucherPage";
import { TodayVoucherPage } from "./pages/membership/TodayVoucherPage";

export const Feature05Routes = () => {
	return [
		// Recommendation ( customer )
		{ path: "/list/recommendation", element: <RecommendationPage /> },

		// Membership & Promotion ( customer )
		{ path: "/membership", element: <MemberShipPage /> },
		{ path: "/voucher/redeem", element: <RedeemPage /> },
		{ path: "/voucher/:voucherId", element: <VoucherPage /> },
		{ path: "/voucher/my-rewards", element: "ElementPlaceHolder" },
		{ path: "/membership/my-privilege", element: "ElementPlaceHolder" },
		{ path: "/voucher-today", element: <TodayVoucherPage /> },
		// { path: "/voucher-seasonally", element: "ElementPlaceHolder" },
		// { path: "/voucher-recently", element: "ElementPlaceHolder" },
		{ path: "/voucher-history", element: "ElementPlaceHolder" },
		{ path: "/promotion", element: "ElementPlaceHolder" },
	];
};
