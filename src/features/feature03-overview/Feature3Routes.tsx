import { Route } from "react-router-dom";
import { Test } from "../../pages/Test";
import { HomePage } from "./pages/HomePage";
import { ClubPage } from "./pages/ClubPage";
import { BarPage } from "./pages/BarPage";
import { RestaurantPage } from "./pages/RestaurantPage";

export const Feature3Routes = () => {
  return [
    { path: "/", element: <HomePage/>},
    { path: "restaurant", element: <RestaurantPage /> },
    { path: "club", element: <ClubPage /> },
    { path: "bar", element: <BarPage /> },
  ];
};
