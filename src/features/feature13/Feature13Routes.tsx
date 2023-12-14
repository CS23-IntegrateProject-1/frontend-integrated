import { BusinessLoginPage } from "./pages/BusinessLoginPage";
import BusinessSignupPage from "./pages/BusinessSignupPage";
import { DashboardPage } from "./pages/DashboardPage";
export const Feature13Routes = () => {
	return [
		{
			path: "/business/dashboard",
			element: <DashboardPage />
		},
		{
			path: "/business/login",
			element: <BusinessLoginPage />
		},
		{
			path: "/business/signup",
			element: <BusinessSignupPage />
		},
		{
			path: "/business/check-in",
			element: "ElementPlaceHolder"
		},
		{
			path: "/business/qr",
			element: "ElementPlaceHolder"
		},
		{
			path: "/business/code",
			element: "ElementPlaceHolder"
		},
		{
			path: "/business/menu",
			element: "ElementPlaceHolder"
		},
		{
			path: "/business/queue",
			element: "ElementPlaceHolder"
		},
		{
			path: "/business/queue/reservation",
			element: "ElementPlaceHolder"
		},
		{
			path: "/business/queue/order",
			element: "ElementPlaceHolder"
		},
		{
			path: "/business/table",
			element: "ElementPlaceHolder"
		},
		{
			path: "/business/table/:tableSize",
			element: "ElementPlaceHolder"
		},
		{
			path: "/business/order",
			element: "ElementPlaceHolder"
		},
		{
			path: "/business/menu",
			element: "ElementPlaceHolder"
		},
		{
			path: "/business/reservation",
			element: "ElementPlaceHolder"
		},
		{
			path: "/business/reservation/offline",
			element: "ElementPlaceHolder"
		},
		{
			path: "/business/profile",
			element: "ElementPlaceHolder"
		},
		{
			path: "/business/notification",
			element: "ElementPlaceHolder"
		},
		{
			path: "/business/notification/:notificationId",
			element: "ElementPlaceHolder"
		}
	];
};
