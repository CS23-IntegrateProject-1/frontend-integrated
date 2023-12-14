import { AdvertisementIDPage } from "./pages/adminAdvertisement/AdvertisementIDPage";
import { AdvertisementListPage } from "./pages/adminAdvertisement/AdvertisementListPage";
import { AdvertisementRejectPage } from "./pages/adminAdvertisement/AdvertisementRejectPage";

export const Feature05AdminRoutes = () => {
	return [
		// Advertisement ( admin )
		{ path: "/admin/advertisement", element: <AdvertisementListPage /> },
		{ path: "/admin/advertisement/:id", element: <AdvertisementIDPage /> },
		{
			path: "/admin/advertisement/:id/reject",
			element: <AdvertisementRejectPage />,
		},
	];
};
