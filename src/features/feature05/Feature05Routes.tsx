
import { MemberShipPage } from "./pages/membership/MembershipPage";
import { RedeemPage } from "./pages/membership/RedeemPage";

//import { PromotionPage } from "./pages/promotion/PromotionPage";
import { PromotionListPage } from "./pages/promotion/PromotionListPage";
import { PromotionDetail } from "./pages/promotion/PromotionDetail";

import { MyprivilegePage } from "./pages/membership/MyprivilegePage";
import { MyRewardsPage } from "./pages/membership/MyRewardsPage";
import { VoucherPage } from "./pages/membership/VoucherPage";

export const Feature05Routes = () => {
  return [
    // Membership & Promotion ( customer )
    { path: "/my-rewards", element: <MyRewardsPage /> },

    { path: "/membership", element: <MemberShipPage /> },
    { path: "/redeem", element: <RedeemPage /> },
    { path: "/my-privilege", element: <MyprivilegePage /> },

    // Promotion ( Customer )
    { path: "/promotion", element: <PromotionListPage /> },
    { path: "/promotion/:promotionId", element: <PromotionDetail /> },

    //Voucher ( Customer )
    { path: "/voucher/:voucherId", element: <VoucherPage /> },
  ];
};
