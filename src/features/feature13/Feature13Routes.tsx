import DashboardPage from "./pages/DashboardPage";
import MenuStockPage from "./pages/MenuStockPage";
import OrderPage from "./pages/OrderPage";
export const Feature13Routes = () => {
    return [
        {
            path: "/business/dashboard",
            element: <DashboardPage />,
        },
        {
            path: "/business/check-in",
            element: "ElementPlaceHolder",
        },
        {
            path: "/business/qr",
            element: "ElementPlaceHolder",
        },
        {
            path: "/business/code",
            element: "ElementPlaceHolder",
        },
        {
            path: "/business/menu",
            element: <MenuStockPage />,
        },
        {
            path: "/business/queue",
            element: "ElementPlaceHolder",
        },
        {
            path: "/business/queue/reservation",
            element: "ElementPlaceHolder",
        },
        {
            path: "/business/queue/order",
            element: "ElementPlaceHolder",
        },
        {
            path: "/business/table",
            element: "ElementPlaceHolder",
        },
        {
            path: "/business/table/:tableSize",
            element: "ElementPlaceHolder",
        },
        {
            path: "/business/order",
            element: <OrderPage />,
        },
        {
            path: "/business/reservation",
            element: "ElementPlaceHolder",
        },
        {
            path: "/business/reservation/offline",
            element: "ElementPlaceHolder",
        },
        {
            path: "/business/voucher",
            element: "ElementPlaceHolder",
        },
        {
            path: "/business/profile",
            element: "ElementPlaceHolder",
        },
        {
            path: "/business/notification",
            element: "ElementPlaceHolder",
        },
        {
            path: "/business/notification/:notificationId",
            element: "ElementPlaceHolder",
        },
    ];
};
