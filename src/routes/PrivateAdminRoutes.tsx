import { Navigate, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { Feature14Routes } from "../features/feature14/Feature14Routes";
import { AdminPublicRoutes } from "../features/feature14/AdminPublicRoutes";
import { NotFoundPage } from "../pages/fallbackPages/NotFoundPage";
import { Feature05AdminRoutes } from "../features/feature05/Feature5AdminRoutes";
import { FeatureAdmin08Routes } from "../features/feature08/Feature08AdminRoutes";

export const PrivateAdminRoutes = createBrowserRouter([
	{ path: "/", element: <Navigate to={"/admin/dashboard"} /> },
	{
		path: "/",
		element: <RootLayout role="admin" />,
		children: [
			...Feature14Routes(),
			...Feature05AdminRoutes(),
			...AdminPublicRoutes(),
			...FeatureAdmin08Routes(),
		],
	},
	{ path: "/*", element: <NotFoundPage /> },
]);
