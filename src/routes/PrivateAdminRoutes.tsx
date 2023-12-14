import { Navigate, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { Feature14Routes } from "../features/feature14/feature14/Feature14Routes";
import { AdminPublicRoutes } from "../features/feature14/AdminPublicRoutes";
import { NotFoundPage } from "../pages/fallbackPages/NotFoundPage";
import { Feature05AdminRoutes } from "../features/feature05/Feature5AdminRoutes";

export const PrivateAdminRoutes = createBrowserRouter([
	{ path: "/", element: <Navigate to={"/admin/dashboard"} /> },
	{
		path: "/",
		element: <RootLayout />,
		children: [
			...Feature14Routes(),
			...Feature05AdminRoutes(),
			...AdminPublicRoutes(),
		],
	},
	{ path: "/*", element: <NotFoundPage /> },
]);
