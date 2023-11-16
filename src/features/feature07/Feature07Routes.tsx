import { MenuAll } from "./pages/MenuAll";
export const Feature07Routes = () => {
  return [
    { path: "/venue/:venueId/menu", element: <MenuAll /> },
    { path: "/venue/:venueId/order", element: "ElementPlaceHolder" },
  ];
};
