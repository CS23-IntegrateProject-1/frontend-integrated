import { AdvertisementID } from "./pages/AdvertisementID";
import { AdvertisementPage } from "./pages/AdvertisementPage";
import { AdvertisementReject } from "./pages/AdvertisementReject";
import { RecommendationCard } from "./components/RecommendationCard";
import { AdvertisementCriteria } from "./pages/AdvertisementCriteria";
import { AdvertisementRequest } from "./pages/AdvertisementRequest";

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
      element: <RecommendationCard />,
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
  ];
};
