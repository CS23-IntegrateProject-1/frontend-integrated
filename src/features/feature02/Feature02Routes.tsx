import { LoginPage } from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

export const Feature02Routes = () => {
	return [
		{
			path: "/login",
			element: <LoginPage />
		},
		{ path: "/signup", element: <SignupPage /> },
		{
			path: "/create-account",
			element: "ElementPlaceHolder"
		},
		{
			path: "/saved-place",
			element: "ElementPlaceHolder"
		},
		{
			path: "/profile-overview",
			element: "ElementPlaceHolder"
		}
	];
};
