import { HomePage } from "./pages/homePage/HomePage";
import { ReviewPage } from "./pages/homePage/ReviewPage";

export const Feature03Routes = () => {
  return [
    { path: "/", element: <HomePage /> },
    { path: "/venue-list", element: "ElementPlaceHolder" },
    { path: "/venue-list/:venueId", element: "ElementPlaceHolder" },
    { path: "/review", element: <ReviewPage /> },
    // { path: "/venue-list/", element: <RestaurantPage /> },
    // { path: "/venue-list", element: <RestaurantPage /> },
    // { path: "/venue-list", element: <RestaurantPage /> },
  ];
};
