import { AdvertisementListPage } from "./pages/adminAdvertisement/AdvertisementListPage";
import { AdvertisementIDPage } from "./pages/adminAdvertisement/AdvertisementIDPage";
import { AdvertisementRejectPage } from "./pages/adminAdvertisement/AdvertisementRejectPage";
import { AdvertisementViewPage } from "./pages/adminAdvertisement/AdvertisementViewPage";

export const Feature05AdminRoutes = () => {
  return [
    // Advertisement ( admin )
    { path: "/admin/advertisement", element: <AdvertisementListPage /> },
    { path: "/admin/advertisement/:id", element: <AdvertisementIDPage /> },
    { path: "/admin/advertisement/:id/reject", element: <AdvertisementRejectPage />  },
    { path: "/admin/advertisement/view/:id", element: <AdvertisementViewPage /> },
  ];
};

