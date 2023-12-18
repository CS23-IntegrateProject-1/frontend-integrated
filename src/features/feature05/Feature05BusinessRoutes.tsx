import { AdvertisementCriteriaPage } from "./pages/businessAdvertisement/AdvertisementCriteriaPage";
import { AdvertisementIDEditPage } from "./pages/businessAdvertisement/AdvertisementIDEditPage";
import { AdvertisementRequestPage } from "./pages/businessAdvertisement/AdvertisementRequestPage";
import { AdvertisementStatusPage } from "./pages/businessAdvertisement/AdvertisementStatusPage";
import { VoucherCreatePage } from "./pages/businessVoucher/VoucherCreatePage";
import { VoucherEditPage } from "./pages/businessVoucher/VoucherEditPage";
import { VoucherStatusPage } from "./pages/businessVoucher/VoucherStatusPage";
import { PromotionCreatePage } from "./pages/promotion/PromotionCreatePage";
import { PromotionEditPage } from "./pages/promotion/PromotionEdit";
import { PromotionStatusPage } from "./pages/promotion/PromotionStatusPage";
import { RedeemPageStatus } from "./pages/redeem/RedeemPageStatus";
import { CreateNewRedeemPage } from "./pages/redeem/CreateNewRedeemPage";
import { RedeemEditPage } from "./pages/redeem/RedeemEditPage";

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
    { path: "/business/redeem/status", element: <RedeemPageStatus /> },
    { path: "/business/redeem/create", element: <CreateNewRedeemPage /> },
    { path: "/business/redeem/edit/:redeemId", element: <RedeemEditPage /> },

    // Promotion ( Business )
    { path: "/business/promotion/status", element: <PromotionStatusPage/> },
    { path: "/business/promotion/create", element: <PromotionCreatePage/> },
    {
      path: "/business/promotion/edit/:promotionId",
      element: <PromotionEditPage/>,
    },
  ];
};
