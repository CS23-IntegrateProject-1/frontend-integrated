import { AdvertisementID } from "./pages/AdvertisementID";
import { AdvertisementPage } from "./pages/AdvertisementPage";
import { AdvertisementReject } from "./pages/AdvertisementReject";
import { RecommendationPage } from "./pages/RecommendationPage";
import { AdvertisementCriteria } from "./pages/AdvertisementCriteria";
import { AdvertisementRequest } from "./pages/AdvertisementRequest";
import { AdvertisementStatus } from "./pages/advertisementStatus";

export const Feature05Routes = () => {
  return [

    // Admin side
    {
      path: "/advertisement",
      element: <AdvertisementPage />,
    },
    {
      path: "/advertisement/:id",
      element: <AdvertisementID />,
    },
    {
      path: "/advertisement/:id/reject",
      element: <AdvertisementReject />,
    },

    // User side
    {
      path: "/list/recommendation",
      element: <RecommendationPage />,
    },

    // Business
    {
      path: "/advertisement/criteria",
      element: <AdvertisementCriteria />,
    },
    {
      path: "/advertisement/request",
      element: <AdvertisementRequest />,
    },
    {
      path: "/advertisement/status",
      element: <AdvertisementStatus />,
    },
  ];
};
