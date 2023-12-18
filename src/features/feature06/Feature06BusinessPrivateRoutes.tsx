import { Reservation } from "./pages/Business/Reservation";
import { TableList } from "./pages/Business/TableList";
import { WalkInDetail } from "./pages/Business/WalkInDetail";
import { WalkInPeople } from "./pages/Business/WalkInPeople";
import { CreateTable1 } from "./pages/Business/CreateTable1";
import { CreateTable2 } from "./pages/Business/CreateTable2";
import { ViewTable } from "./pages/Business/ViewTable";
import { QrcodeConfirm } from "./pages/Business/QrcodeConfirm";

export const Feature06BusinessPrivateRoutes = () => {
  return [
    {
      path: "/business/tablelist",
      element: <TableList />,
    },
    { path: "business/Reservation", element: <Reservation /> },
    { path: "business/WalkInDetail", element: <WalkInDetail /> },
    { path: "business/WalkInPeople", element: <WalkInPeople /> },
    // { path: "business/viewtable", element: <ViewTable /> },
    { path: "business/viewtable/:tableId", element: <ViewTable /> },
    { path: "business/createtable1", element: <CreateTable1 /> },
    { path: "business/createtable2", element: <CreateTable2 /> },
    { path: "business/qrcodeconfirm", element: <QrcodeConfirm /> },
    // {
    //   path:
    // }
  ];
};
