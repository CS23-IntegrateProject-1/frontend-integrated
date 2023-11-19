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
 
export const Feature05Routes = () => {
  return [

    // Admin side
    {
      path: "/advertisement",
      element: <AdvertisementListPage />,
    },
    {
      path: "/advertisement/:id",
      element: <AdvertisementIDPage />,
    },
    {
      path: "/advertisement/:id/reject",
      element: <AdvertisementRejectPage />,
    },

    // User side
    {
      path: "/list/recommendation",
      element: <RecommendationPage />,
    },

    // Business
    {
      path: "/advertisement/criteria",
      element: <AdvertisementCriteriaPage />,
    },
    {
      path: "/advertisement/request",
      element: <AdvertisementRequestPage />,
    },
    {
      path: "/advertisement/status",
      element: <AdvertisementStatusPage/>,
    },
    {
      path: "/advertisement/edit/:id",
      element: <AdvertisementIDEditPage />,
    },

    // Business (voucher)
    {
      path: "/voucher/create",
      element: <VoucherCreatePage />,
    },
    {
      path: "/voucher/edit/:voucherId",
      element: <VoucherEditPage />,
    },
    {
      path: "/voucher",
      element: <VoucherStatusPage />,
    },
  ];
};
