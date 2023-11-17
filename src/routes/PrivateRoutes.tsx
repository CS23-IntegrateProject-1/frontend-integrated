import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { ExampleFeatureRoutes } from "../features/exampleFeature/ExampleFeatureRoutes";
import { Feature01Routes } from "../features/feature01/Feature01Routes";
import { Feature02Routes } from "../features/feature02/Feature02Routes";
import { Feature03Routes } from "../features/feature03/Feature03Routes";
import { Feature04Routes } from "../features/feature04/Feature04Routes";
import { Feature05Routes } from "../features/feature05/Feature05Routes";
import { Feature06Routes } from "../features/feature06/Feature06Routes";
import { Feature07Routes } from "../features/feature07/Feature07Routes";
import { Feature08Routes } from "../features/feature08/Feature08Routes";
import { Feature09Routes } from "../features/feature09/Feature09Routes";
import { Feature10Routes } from "../features/feature10/Feature10Routes";
import { Feature11Routes } from "../features/feature11/Feature11Routes";
import { Feature12Routes } from "../features/feature12/Feature12Routes";
import { Feature13Routes } from "../features/feature13/Feature13Routes";
import { Feature14Routes } from "../features/feature14/Feature14Routes";
import { NotFoundPage } from "../pages/fallbackPages/NotFoundPage";
import { AuthRoutes } from "../features/feature02/AuthRoutes";

export const PrivateRoutes = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			...AuthRoutes(),
			...Feature01Routes(),
			...Feature02Routes(),
			...Feature03Routes(),
			...Feature04Routes(),
			...Feature05Routes(),
			...Feature06Routes(),
			...Feature07Routes(),
			...Feature08Routes(),
			...Feature09Routes(),
			...Feature10Routes(),
			...Feature11Routes(),
			...Feature12Routes(),
			...Feature13Routes(),
			...Feature14Routes(),
			...ExampleFeatureRoutes()
		]
	},
	{ path: "/*", element: <NotFoundPage /> }
]);
