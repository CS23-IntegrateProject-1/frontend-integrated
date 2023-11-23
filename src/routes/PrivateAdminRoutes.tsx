import { Navigate, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { Feature14Routes } from "../features/feature14/feature14/Feature14Routes";
import { AdminPublicRoutes } from "../features/feature14/AdminPublicRoutes";
import { NotFoundPage } from "../pages/fallbackPages/NotFoundPage";

export const PrivateAdminRoutes = createBrowserRouter([
	{ path: "/", element: <Navigate to={"/admin/dashboard"} /> },
	{
		path: "/",
		element: <RootLayout />,
		children: [...Feature14Routes(), ...AdminPublicRoutes()]
	},
	{ path: "/*", element: <NotFoundPage /> }
]);
