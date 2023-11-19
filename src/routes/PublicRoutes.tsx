import { Navigate, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { AuthRoutes } from "../features/feature02/AuthRoutes";

export const PublicRoutes = createBrowserRouter([
	{ path: "/", element: <Navigate to={"/login"} /> },
	{
		path: "/",
		element: <RootLayout />,
		children: [...AuthRoutes()]
	},
	{ path: "/*", element: <Navigate to={"/login"} /> }
]);
