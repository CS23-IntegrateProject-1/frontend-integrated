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
    { path: "/RecommendedPlaces", element: <RecommendedPlacesPage /> },
    { path: "/Promotions", element: <PromotionsPage /> },

    // { path: "/Temp_RestaurantDetail", element: <Temp_ResturantDetail /> },

    { path: "/venue-list", element: "ElementPlaceHolder" },
    { path: "/venuevenue-branch/:branchId", element: <Temp_ResturantDetail /> },
  ];
};
