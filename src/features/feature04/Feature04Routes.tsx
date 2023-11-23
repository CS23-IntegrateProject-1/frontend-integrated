import { Maps } from "./pages/Restaurants";
import { SavedLocation } from "./pages/SavedLocation";
import { Cinemas } from "./pages/Cinemas";
import { Bars } from "./pages/Bars";
import { CartMenuDetail } from "./pages/CartMenuDetail";
import FoodDelivery from "./pages/FoodDelivery";

export const Feature04Routes = () => {
  return [
    { path: "/map", element: <Maps /> },
    { path: "/map/savedlocation", element: <SavedLocation /> },
    { path: "/map/cinemas", element: <Cinemas /> },
    { path: "/map/bars", element: <Bars /> },
    { path: "/map/bars", element: <Bars /> },
    {path:"/map/food-delivery", element:<FoodDelivery/>},
    {path:"/map/food-delivery/food-detail", element:<CartMenuDetail/>},


  ];
};
