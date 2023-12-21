import { BusinessLoginPage } from "./pages/BusinessLoginPage";
import BusinessSignupPage from "./pages/BusinessSignupPage";
import { DashboardPage } from "./pages/DashboardPage";
export const Feature13Routes = () => {
	return [
		{
			path: "/business/dashboard",
			element: <DashboardPage />,
		},
		{
			path: "/business/login",
			element: <BusinessLoginPage />,
		},
		{
			path: "/business/signup",
			element: <BusinessSignupPage />,
		},
	];
};
