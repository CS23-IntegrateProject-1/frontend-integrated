import { MenuAll } from "./pages/MenuAll";
import { MenuDetail } from "./pages/MenuDetail";
import { CartPage } from "./pages/CartPage";
import {ReceiptPage} from "./pages/ReceiptPage";
import { OrderStatusPage } from "./pages/OrderStatusPage";
import { CartMenuDetail } from "./pages/CartMenuDetail";
export const Feature07Routes = () => {
  return [
    { path: "/venue/:venueId/menu", element: <MenuAll /> },
    { path: "/venue/:venueId/menudetail/:type/:menuid", element: <MenuDetail /> },
    { path: "/venue/:venueId/cart", element: <CartPage /> },
    { path: "/venue/:venueId/cartdetail/:type/:menuid", element: <CartMenuDetail /> },
    { path: "/venue/:venueId/receipt", element: <ReceiptPage /> },
    { path: "/venue/:venueId/order", element: <OrderStatusPage /> },
  ];
};
