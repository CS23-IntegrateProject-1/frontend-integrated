import { AdvertisementIDPage } from "./pages/adminAdvertisement/AdvertisementIDPage";
import { AdvertisementListPage } from "./pages/adminAdvertisement/AdvertisementListPage";
import { AdvertisementRejectPage } from "./pages/adminAdvertisement/AdvertisementRejectPage";

import { AdvertisementCriteriaPage } from "./pages/businessAdvertisement/AdvertisementCriteriaPage";
import { AdvertisementIDEditPage } from "./pages/businessAdvertisement/AdvertisementIDEditPage";
import { AdvertisementRequestPage } from "./pages/businessAdvertisement/AdvertisementRequestPage";
import { AdvertisementStatusPage } from "./pages/businessAdvertisement/AdvertisementStatusPage";

import { VoucherCreatePage } from "./pages/businessVoucher/VoucherCreatePage";
import { VoucherEditPage } from "./pages/businessVoucher/VoucherEditPage";
import { VoucherStatusPage } from "./pages/businessVoucher/VoucherStatusPage";

import { RecommendationPage } from "./pages/RecommendationPage";

import { MemberShipPage } from "./pages/membership/MembershipPage";
import { RedeemPage } from "./pages/membership/RedeemPage"
import { VoucherPage } from "./pages/membership/VoucherPage";
import { TodayVoucherPage } from "./pages/membership/TodayVoucherPage";

export const Feature05Routes = () => {
  return [
    // Advertisement ( admin )
    { path: "/admin/advertisement", element: <AdvertisementListPage /> },
    { path: "/admin/advertisement/:id", element: <AdvertisementIDPage />,},
    { path: "/admin/advertisement/:id/reject", element: <AdvertisementRejectPage />,},

    // Recommendation ( customer )
    { path: "/list/recommendation", element: <RecommendationPage />,},

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
    { path: "/membership", element: <MemberShipPage /> },
    { path: "/voucher/redeem", element: <RedeemPage /> },
    { path: "/voucher/:voucherId", element: <VoucherPage /> },
    { path: "/voucher/my-rewards", element: "ElementPlaceHolder" },
    { path: "/membership/my-privilege", element: "ElementPlaceHolder" },
    { path: "/voucher-today", element: <TodayVoucherPage/> },
    // { path: "/voucher-seasonally", element: "ElementPlaceHolder" },
    // { path: "/voucher-recently", element: "ElementPlaceHolder" },
    { path: "/voucher-history", element: "ElementPlaceHolder" },
    { path: "/promotion", element: "ElementPlaceHolder" },
  ];
};
