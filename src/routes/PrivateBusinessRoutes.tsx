import { Navigate, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { NotFoundPage } from "../pages/fallbackPages/NotFoundPage";

export const PrivateBusinessRoutes = createBrowserRouter([
	{ path: "/", element: <Navigate to={"/business/dashboard"} /> },
	{
		path: "/",
		element: <RootLayout />,
		children: [
			// ...DemoRoutes(),
		]
	},
	{ path: "/*", element: <NotFoundPage /> }
]);
