import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";

export const AuthRoutes = () => {
	return [
		{
			path: "/login",
			element: <LoginPage />
		},
		{ path: "/signup", element: <SignupPage /> }
	];
};
