import { BusinessLoginPage } from "./pages/BusinessLoginPage";
import BusinessSignupPage from "./pages/BusinessSignupPage";

export const Feature13PublicRoutes = () => {
	return [
		{
			path: "/business/login",
			element: <BusinessLoginPage />
		},
		{
			path: "/business/signup",
			element: <BusinessSignupPage />
		}
	];
};
