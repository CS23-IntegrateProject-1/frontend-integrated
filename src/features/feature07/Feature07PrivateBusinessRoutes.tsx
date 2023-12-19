import { AddMenu } from "./pages/BusinessSidePage/AddMenu";
import { AddSetMenu } from "./pages/BusinessSidePage/AddSetMenu";
import { BusinessMenuDetail } from "./pages/BusinessSidePage/BusinessMenuDetail";
import { EditMenu } from "./pages/BusinessSidePage/EditMenu";
import { EditSetMenu } from "./pages/BusinessSidePage/EditSetMenu";
import { MenuAllBusiness } from "./pages/BusinessSidePage/MenuAllBusiness";
import { BusOrderStat } from "./pages/BusinessSidePage/BusOrderStat";

export const Feature07PrivateBusinessRoutes = () => {
    return [
        {
            path: "/business/venue/menubusiness", 
            element: <MenuAllBusiness />
        },
        {
            path: "/business/venue/addmenu",
            element: <AddMenu />
        },
        {
            path: "/business/venue/addsetmenu",
            element: <AddSetMenu />
        },
        {
            path: "/business/venue/editmenu/:menuid",
            element: <EditMenu />
        },
        {
            path: "/business/venue/editsetmenu/:menuid",
            element: <EditSetMenu />
        },
        {
            path: "/business/venue/bmenudetail/:type/:menuid", 
            element: <BusinessMenuDetail /> 
        },
        {
            path: "/business/venue/orderstat", 
            element: <BusOrderStat />
        }
    ];
};