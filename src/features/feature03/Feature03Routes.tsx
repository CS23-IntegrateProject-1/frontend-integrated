import { HomePage } from "./pages/homePage/HomePage";
import { PromotionsPage } from "./pages/homePage/PromotionsPage";
import { RecommendedPlacesPage } from "./pages/homePage/RecommendedPlacesPage";
import { VenuePage } from "./pages/homePage/VenuePage";
import { ReviewPage } from "./pages/homePage/ReviewPage";
import { VenueDetail } from "./pages/homePage/VenueDetail";
import { VenueBranches } from "./pages/homePage/VenueBranches";
import { ReviewDelivery } from "./pages/homePage/ReviewDelivery"
import { ReviewReservation } from "./pages/homePage/ReviewReservation"
import { MyReviews } from "./pages/homePage/MyReviewPage"

export const Feature03Routes = () => {
  return [
    { path: "/", element: <HomePage /> },
    { path: "/Venues", element: <VenuePage /> },
    { path: "/RecommendedPlaces", element: <RecommendedPlacesPage /> },
    { path: "/Promotions", element: <PromotionsPage /> },

    { path: "/VenueDetail/:branchId", element: <VenueDetail /> },
    { path: "/Branches/:venueId", element: <VenueBranches /> },

    { path: "/Reviews/:branchId", element: <ReviewPage /> },
    { path: "/ReviewDelivery", element: <ReviewDelivery /> },
    { path: "/ReviewReservation", element: <ReviewReservation /> },
    { path: "/MyReviews", element: <MyReviews /> }
  ];
};
