import { HomePage } from "./pages/homePage/HomePage";
import { PromotionsPage } from "./pages/homePage/PromotionsPage";
import { RecommendedPlacesPage } from "./pages/homePage/RecommendedPlacesPage";
import { RestaurantPage } from "./pages/homePage/RestaurantPage";
import { ReviewPage } from "./pages/homePage/ReviewPage";
import { VenueDetail } from "./pages/homePage/VenueDetail";
import { VenueBranches } from "./pages/homePage/VenueBranches";
import { ReviewDelivery } from "./pages/homePage/F3_RVPCs/ReviewDelivery"
import { ReviewReservation } from "./pages/homePage/F3_RVPCs/ReviewReservation"

export const Feature03Routes = () => {
  return [
    { path: "/", element: <HomePage /> },
    { path: "/Reviews", element: <ReviewPage /> },
    { path: "/Restaurants", element: <RestaurantPage /> },
    { path: "/RecommendedPlaces", element: <RecommendedPlacesPage /> },
    { path: "/Promotions", element: <PromotionsPage /> },
    { path: "/venue-list", element: "ElementPlaceHolder" },
    { path: "/venuevenue-branch/:branchId", element: <VenueDetail /> },
    { path: "/Branches/:venueId", element: <VenueBranches /> },
    { path: "/ReviewDel", element: <ReviewDelivery /> },
    { path: "/ReviewRes", element: <ReviewReservation /> }
  ];
};
