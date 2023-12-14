import { RecommendationPage } from "./pages/RecommendationPage";

import { MemberShipPage } from "./pages/membership/MembershipPage";
import { RedeemPage } from "./pages/membership/RedeemPage";
import { VoucherPage } from "./pages/membership/VoucherPage";
import { TodayVoucherPage } from "./pages/membership/TodayVoucherPage";
import { PromotionPage } from "./pages/promotion/PromotionPage";
import { VoucherStatusPage } from "./pages/businessVoucher/VoucherStatusPage";
import { VoucherEditPage } from "./pages/businessVoucher/VoucherEditPage";
import { VoucherCreatePage } from "./pages/businessVoucher/VoucherCreatePage";

import { AdvertisementIDEditPage } from "./pages/businessAdvertisement/AdvertisementIDEditPage";
import { AdvertisementStatusPage } from "./pages/businessAdvertisement/AdvertisementStatusPage";
import { AdvertisementRequestPage } from "./pages/businessAdvertisement/AdvertisementRequestPage";
import { AdvertisementCriteriaPage } from "./pages/businessAdvertisement/AdvertisementCriteriaPage";

export const Feature05Routes = () => {
	return [
		// Recommendation ( customer )
		{ path: "/list/recommendation", element: <RecommendationPage /> },

    // Advertisement ( business )
    { path: "/business/advertisement/criteria", element: <AdvertisementCriteriaPage />,},
    { path: "/business/advertisement/request", element: <AdvertisementRequestPage />,},
    { path: "/business/advertisement/status", element: <AdvertisementStatusPage />,},
    { path: "/business/advertisement/edit/:id", element: <AdvertisementIDEditPage />,},

    // Voucher ( business )
    { path: "/business/voucher/create", element: <VoucherCreatePage />,},
    { path: "/business/voucher/edit/:voucherId", element: <VoucherEditPage />,},
    { path: "/business/voucher", element: <VoucherStatusPage />,},

    // Membership & Promotion ( customer )
    { path: "/voucher-today", element: <TodayVoucherPage/> },
    { path: "/voucher/history", element: "ElementPlaceHolder" },
    { path: "/my-rewards", element: "ElementPlaceHolder" },

    { path: "/membership", element: <MemberShipPage /> },
    { path: "/redeem", element: <RedeemPage /> },
    { path: "/my-privilege", element: "ElementPlaceHolder" },

    { path: "/voucher/:voucherId", element: <VoucherPage /> },

    // Promotion ( Customer )
    { path: "/promotion", element: <PromotionPage /> },
    { path: "/promotion/:promotionId", element: "ElementPlaceHolder" },

    // Redeem ( Business )
    { path: "/business/redeem/status", element: "ElementPlaceHolder" },
    { path: "/business/redeem/create", element: "ElementPlaceHolder" },
    { path: "/business/redeem/edit/:redeemId", element: "ElementPlaceHolder" },

    // Promotion ( Business )
    { path: "/business/promotion/status", element: "ElementPlaceHolder" },
    { path: "/business/promotion/create", element: "ElementPlaceHolder" },
    { path: "/business/promotion/edit/:redeemId", element: "ElementPlaceHolder" },
  
    // { path: "/voucher-seasonally", element: "ElementPlaceHolder" },
    // { path: "/voucher-recently", element: "ElementPlaceHolder" },
  ];
};
