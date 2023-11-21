import { MenuAll } from "./pages/MenuAll";
import { MenuDetail } from "./pages/MenuDetail";
import { CartPage } from "./pages/CartPage";
import {ReceiptPage} from "./pages/ReceiptPage";
import { OrderStatusPage } from "./pages/OrderStatusPage";
import { CartMenuDetail } from "./pages/CartMenuDetail";
import { MenuAllBusiness } from "./pages/MenuAllBusiness";
import { EditMenu } from "./pages/EditMenu";
import { AddMenu } from "./pages/AddMenu";
import { AddSetMenu } from "./pages/AddSetMenu";
import { ChooseMenu } from "./pages/ChooseMenu";
import { BusinessMenuDetail } from "./pages/BusinessMenuDetail";
import { EditSetMenu } from "./pages/EditSetMenu";
export const Feature07Routes = () => {
  return [
    { path: "/venue/:venueId/menu", element: <MenuAll /> },
    { path: "/venue/:venueId/menudetail/:type/:menuid", element: <MenuDetail /> },
    { path: "/venue/:venueId/cart", element: <CartPage /> },
    { path: "/venue/:venueId/cartdetail/:type/:menuid", element: <CartMenuDetail /> },
    { path: "/venue/:venueId/receipt", element: <ReceiptPage /> },
    { path: "/venue/:venueId/order", element: <OrderStatusPage /> },
    { path: "/venue/:venueId/menubusiness", element: <MenuAllBusiness /> },
    { path: "/venue/:venueId/editmenu", element: <EditMenu /> },
    { path: "/venue/:venueId/editsetmenu", element: <EditSetMenu /> },
    { path: "/venue/:venueId/addmenu", element: <AddMenu /> },
    { path: "/venue/:venueId/addsetmenu", element: <AddSetMenu /> },
    { path: "/venue/:venueId/choosemenu", element: <ChooseMenu /> },
    { path: "/venue/:venueId/bmenudetail", element: <BusinessMenuDetail /> },
  ];
};
