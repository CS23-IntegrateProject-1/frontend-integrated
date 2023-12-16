import { RecommendationPage } from "./pages/RecommendationPage";

import { MemberShipPage } from "./pages/membership/MembershipPage";
import { RedeemPage } from "./pages/membership/RedeemPage";
import { VoucherPage } from "./pages/membership/VoucherPage";

import { PromotionPage } from "./pages/promotion/PromotionPage";

import { MyprivilegePage } from "./pages/membership/myprivilegePage";
import { MyRewardsPage } from "./pages/membership/MyRewardsPage";

export const Feature05Routes = () => {
  return [
    // Recommendation ( customer )
    { path: "/list/recommendation", element: <RecommendationPage /> },

    // Membership & Promotion ( customer )
    { path: "/my-rewards", element: <MyRewardsPage /> },

    { path: "/membership", element: <MemberShipPage /> },
    { path: "/redeem", element: <RedeemPage /> },
    { path: "/my-privilege", element: <MyprivilegePage /> },

    { path: "/voucher/:voucherId", element: <VoucherPage /> },

    // Promotion ( Customer )
    { path: "/promotion", element: <PromotionPage /> },
    { path: "/promotion/:promotionId", element: "ElementPlaceHolder" },
  ];
};
