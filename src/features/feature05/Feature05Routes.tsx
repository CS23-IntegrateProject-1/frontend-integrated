import { Advertisement } from "./pages/AdvertisementPage";
import { Recommendation } from "./pages/RecommendationPage";

export const Feature05Routes = () => {
  return [
    {
      path: "/advertisement",
      element: <Advertisement />,
    },
    {
      path: "/list/recommendation",
      element: <Recommendation />,
    },
  ];
};
