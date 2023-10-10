import { HomePage } from "./pages/homePage/HomePage";

export const Feature03Routes = () => {
  return [
    { path: "/", element: <HomePage /> },
    { path: "/venue-list", element: "ElementPlaceHolder" },
    { path: "/venue-list/:venueId", element: "ElementPlaceHolder" },
    // { path: "/venue-list/", element: <RestaurantPage /> },
    // { path: "/venue-list", element: <RestaurantPage /> },
    // { path: "/venue-list", element: <RestaurantPage /> },
  ];
};
