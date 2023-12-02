import { Maps } from "./pages/Restaurants";
import { SavedLocation } from "./pages/SavedLocation";
import { Cinemas } from "./pages/Cinemas";
import { Bars } from "./pages/Bars";
import { CartMenuDetail } from "./pages/CartMenuDetail";
import FoodDelivery from "./pages/FoodDelivery";
import OngoingPage from "./pages/Mydelivery/MyDelivery";
import { CompletedStatusPage } from "./pages/Mydelivery/CompletedStatusPage";
import { CanceledMyDelivery } from "./pages/Mydelivery/CanceledDelivery";
import { CartDetail } from "./pages/OrderProcessing/CartDetail";
import { Checkout } from "./pages/OrderProcessing/Checkout";
import { YourOrder } from "./pages/OrderProcessing/YourOrder";
export const Feature04Routes = () => {
  return [
    { path: "/map", element: <Maps /> },
    { path: "/map/savedlocation", element: <SavedLocation /> },
    { path: "/map/cinemas", element: <Cinemas /> },
    { path: "/map/bars", element: <Bars /> },
    { path: "/map/bars", element: <Bars /> },
    {path:"/map/food-delivery", element:<FoodDelivery/>},
    {path:"/map/food-delivery/food-detail", element:<CartMenuDetail/>},
    {path:"/map/food-delivery/ongoing",element:<OngoingPage/>},
    {path:"/map/food-delivery/completed",element:<CompletedStatusPage/>},
    {path:"/map/food-delivery/canceled",element:<CanceledMyDelivery/>},
    {path:"/map/food-delivery/cart-detail",element:<CartDetail/>},
    {path:"/map/food-delivery/checkout",element:<Checkout/>},
    {path:"/map/food-delivery/your-order",element:<YourOrder/>}






  ];
};
