import { Navigate, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { AuthRoutes } from "../features/feature02/AuthRoutes";
import { AdminPublicRoutes } from "../features/feature14/AdminPublicRoutes";

export const PublicRoutes = createBrowserRouter([
	{ path: "/", element: <Navigate to={"/login"} /> },
	{
		path: "/",
		element: <RootLayout />,
		children: [...AuthRoutes(), ...AdminPublicRoutes()]
	},
	{ path: "/*", element: <Navigate to={"/login"} /> }
]);
