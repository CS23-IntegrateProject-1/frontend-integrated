import { Navigate, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { AuthRoutes } from "../features/feature02/AuthRoutes";
import { AdminPublicRoutes } from "../features/feature14/AdminPublicRoutes";
import { Feature13PublicRoutes } from "../features/feature13/Feature13PublicRoutes";
export const PublicRoutes = createBrowserRouter([
	{ path: "/", element: <Navigate to={"/login"} /> },
	{
		path: "/",
		element: <RootLayout />,
		children: [
			...AuthRoutes(),
			...AdminPublicRoutes(),
			...Feature13PublicRoutes(),
		],
	},
	{ path: "/*", element: <Navigate to={"/login"} /> },
]);
