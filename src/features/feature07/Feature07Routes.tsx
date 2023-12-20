import { MenuAll } from "./pages/MenuAll";
import { MenuDetail } from "./pages/MenuDetail";
import { CartPage } from "./pages/CartPage";
import {ReceiptPage} from "./pages/ReceiptPage";
import { OrderStatusPage } from "./pages/OrderStatusPage";
import { CartMenuDetail } from "./pages/CartMenuDetail";
import { VoucherPage } from "./pages/VoucherPage";
// import { MenuAllBusiness } from "./pages/BusinessSidePage/MenuAllBusiness";
// import { EditMenu } from "./pages/BusinessSidePage/EditMenu";
// import { AddMenu } from "./pages/BusinessSidePage/AddMenu";
// import { AddSetMenu } from "./pages/BusinessSidePage/AddSetMenu";
// import { BusinessMenuDetail } from "./pages/BusinessSidePage/BusinessMenuDetail";
// import { EditSetMenu } from "./pages/BusinessSidePage/EditSetMenu";
// import { BusOrderStat } from "./pages/BusinessSidePage/BusOrderStat";
export const Feature07Routes = () => {
  return [
    { path: "/venue/menu", element: <MenuAll /> },
    { path: "/venue/menudetail/:type/:menuid", element: <MenuDetail /> },
    { path: "/venue/cart", element: <CartPage /> },
    { path: "/venue/cartdetail/:type/:menuid", element: <CartMenuDetail /> },
    { path: "/venue/receipt", element: <ReceiptPage /> },
    { path: "/venue/order", element: <OrderStatusPage /> },
    { path: "/venue/voucherpage", element: <VoucherPage/> },
    // { path: "/venue/:venueId/menubusiness", element: <MenuAllBusiness /> },
    // { path: "/venue/:venueId/editmenu/:menuid", element: <EditMenu /> },
    // { path: "/venue/:venueId/editsetmenu/:menuid", element: <EditSetMenu /> },
    // { path: "/venue/:venueId/addmenu", element: <AddMenu /> },
    // { path: "/venue/:venueId/addsetmenu", element: <AddSetMenu /> },
    // { path: "/venue/:venueId/bmenudetail/:type/:menuid", element: <BusinessMenuDetail /> },
    // { path: "/venue/:venueId/orderstat", element: <BusOrderStat />}
  ];
};
