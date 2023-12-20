import { HomePage } from "./pages/homePage/HomePage";
import { RecommendedPlacesPage } from "./pages/homePage/RecommendedPlacesPage";
import { VenuePage } from "./pages/homePage/VenuePage";
import { ReviewPage } from "./pages/homePage/ReviewPage";
import { VenueDetail } from "./pages/homePage/VenueDetail";
import { VenueBranches } from "./pages/homePage/VenueBranches";
import { ReviewDelivery } from "./pages/homePage/ReviewDelivery"
import { ReviewReservation } from "./pages/homePage/ReviewReservation"
import { MyReviews } from "./pages/homePage/MyReviewPage"
import { AvaliableVouchers } from "./pages/homePage/AvaliableVouchers"

export const Feature03Routes = () => {
  return [
    { path: "/", element: <HomePage /> },
    { path: "/Venues", element: <VenuePage /> },
    { path: "/RecommendedPlaces", element: <RecommendedPlacesPage /> },

    { path: "/Branches/:venueId", element: <VenueBranches /> },
    { path: "/VenueDetail/:branchId", element: <VenueDetail /> },
    { path: "/AvaliableVouchers/:branchId", element: <AvaliableVouchers />},

    { path: "/Reviews/:branchId", element: <ReviewPage /> },
    { path: "/ReviewDelivery/:branchId", element: <ReviewDelivery /> },
    { path: "/ReviewReservation/:branchId", element: <ReviewReservation /> },
    { path: "/MyReviews", element: <MyReviews /> }
  ];
};
