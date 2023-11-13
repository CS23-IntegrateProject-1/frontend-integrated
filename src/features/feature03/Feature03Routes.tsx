import { BarsPage } from "./pages/homePage/BarsPage";
import { ClubsPage } from "./pages/homePage/ClubsPage";
import { HomePage } from "./pages/homePage/HomePage";
import { PromotionsPage } from "./pages/homePage/PromotionsPage";
import { RecommendedPlacesPage } from "./pages/homePage/RecommendedPlacesPage";
import { RestaurantPage } from "./pages/homePage/RestaurantPage";
import { ReviewPage } from "./pages/homePage/ReviewPage";
import { Temp_ResturantDetail } from "./pages/homePage/Temp_ResturantDetail";

export const Feature03Routes = () => {
  return [
    { path: "/", element: <HomePage /> },
    { path: "/Reviews", element: <ReviewPage /> },
    { path: "/Restaurants", element: <RestaurantPage /> },
    { path: "/Clubs", element: <ClubsPage /> },
    { path: "/Bars", element: <BarsPage /> },
    { path: "/RecommendedPlaces", element: <RecommendedPlacesPage /> },
    { path: "/Promotions", element: <PromotionsPage /> },

    { path: "/Temp_ResturantDetail", element: <Temp_ResturantDetail /> },

    { path: "/venue-list", element: "ElementPlaceHolder" },
    { path: "/venue-list/:venueId", element: "ElementPlaceHolder" },
  ];
};
