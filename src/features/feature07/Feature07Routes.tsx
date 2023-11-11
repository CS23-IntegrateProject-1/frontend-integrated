import { MenuAll } from "./pages/MenuAll";
import { MenuDetail } from "./pages/MenuDetail";
export const Feature07Routes = () => {
  return [
    { path: "/venue/:venueId/menu", element: <MenuAll /> },
    { path: "/venue/:venueId/menudetail", element: <MenuDetail /> },
    { path: "/venue/:venueId/order", element: "ElementPlaceHolder" },
  ];
};
