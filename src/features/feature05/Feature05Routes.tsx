import { MyRewardsPage } from "./pages/membership/MyRewardsPage";
import { MemberShipPage } from "./pages/membership/MembershipPage";
import { MyprivilegePage } from "./pages/membership/MyprivilegePage";

import { PromotionListPage } from "./pages/promotion/PromotionListPage";
import { PromotionDetail } from "./pages/promotion/PromotionDetail";

import { VoucherPage } from "./pages/membership/VoucherPage";
import { VoucherDetailPage } from "./pages/membership/VoucherDetailPage";

import { RedeemDetailPage } from "./pages/membership/RedeemDetailPage";
import { AdvertisementListPage } from "./pages/adminAdvertisement/AdvertisementListPage";
import { AdvertisementIDPage } from "./pages/adminAdvertisement/AdvertisementIDPage";
import { AdvertisementRejectPage } from "./pages/adminAdvertisement/AdvertisementRejectPage";

export const Feature05Routes = () => {
  return [
    // Membership ( customer )
    { path: "/my-rewards", element: <MyRewardsPage /> }, //Show all rewards of user ( active rewards || past rewards )
    { path: "/membership", element: <MemberShipPage /> }, //Show membership page -> voucher || my-privilege
    { path: "/my-privilege", element: <MyprivilegePage /> }, //Show my privilege page -> Show detail

    // Promotion ( Customer )
    { path: "/promotion", element: <PromotionListPage /> }, //Show all promotion that harmoni have
    { path: "/promotion/:promotionId", element: <PromotionDetail /> }, //Show the promotion detail -> image and brach

    //Voucher ( Customer )
    { path: "/voucher", element: <VoucherPage /> }, //Show all vouchers of user
    { path: "/voucher/:voucherId", element: <VoucherDetailPage /> }, //Show the voucher detail -> image title and description and click redeem -> use now

    //Redeem ( Customer )
    { path: "/redeem/:redeemId", element: <RedeemDetailPage /> },
    { path: "/admin/advertisement", element: <AdvertisementListPage /> },
    { path: "/admin/advertisement/:id", element: <AdvertisementIDPage /> },
    {
      path: "/admin/advertisement/:id/reject",
      element: <AdvertisementRejectPage />,
    },
  ];
};
