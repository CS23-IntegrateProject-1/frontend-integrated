import { BarsPage } from "./pages/homePage/BarsPage";
import { ClubsPage } from "./pages/homePage/ClubsPage";
import { CommunityPage } from "./pages/homePage/CommunityPage";
import { HomePage } from "./pages/homePage/HomePage";
import { RestaurantsPage } from "./pages/homePage/RestaurantPage";
import { ReviewPage } from "./pages/homePage/ReviewPage";

export const Feature03Routes = () => {
  return [
    { path: "/", element: <HomePage /> },
    { path: "/review", element: <ReviewPage /> },
    { path: "/Restaurants", element: <RestaurantsPage /> },
    { path: "/Clubs", element: <ClubsPage /> },
    { path: "/Bars", element: <BarsPage /> },
    { path: "/Community", element: <CommunityPage /> },
    { path: "/venue-list", element: "ElementPlaceHolder" },
    { path: "/venue-list/:venueId", element: "ElementPlaceHolder" },
  ];
};
