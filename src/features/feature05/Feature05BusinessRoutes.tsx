import { AdvertisementCriteriaPage } from "./pages/businessAdvertisement/AdvertisementCriteriaPage";
import { AdvertisementIDEditPage } from "./pages/businessAdvertisement/AdvertisementIDEditPage";
import { AdvertisementRequestPage } from "./pages/businessAdvertisement/AdvertisementRequestPage";
import { AdvertisementStatusPage } from "./pages/businessAdvertisement/AdvertisementStatusPage";
import { VoucherCreatePage } from "./pages/businessVoucher/VoucherCreatePage";
import { VoucherEditPage } from "./pages/businessVoucher/VoucherEditPage";
import { VoucherStatusPage } from "./pages/businessVoucher/VoucherStatusPage";

export const Feature05BusinessRoutes = () => {
  return [
    // Advertisement ( business )
    {
      path: "/business/advertisement/criteria",
      element: <AdvertisementCriteriaPage />,
    },
    {
      path: "/business/advertisement/request",
      element: <AdvertisementRequestPage />,
    },
    {
      path: "/business/advertisement/status",
      element: <AdvertisementStatusPage />,
    },
    {
      path: "/business/advertisement/edit/:id",
      element: <AdvertisementIDEditPage />,
    },

    // Voucher ( business )
    { path: "/business/voucher/create", element: <VoucherCreatePage /> },
    { path: "/business/voucher/edit/:voucherId", element: <VoucherEditPage /> },
    { path: "/business/voucher", element: <VoucherStatusPage /> },

    // Redeem ( Business )
    { path: "/business/redeem/status", element: "ElementPlaceHolder" },
    { path: "/business/redeem/create", element: "ElementPlaceHolder" },
    { path: "/business/redeem/edit/:redeemId", element: "ElementPlaceHolder" },

    // Promotion ( Business )
    { path: "/business/promotion/status", element: "ElementPlaceHolder" },
    { path: "/business/promotion/create", element: "ElementPlaceHolder" },
    {
      path: "/business/promotion/edit/:promotionId",
      element: "ElementPlaceHolder",
    },
  ];
};
