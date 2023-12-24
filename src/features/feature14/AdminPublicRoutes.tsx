import AdminLoginPage from "./pages/AdminLoginPage";

export const AdminPublicRoutes = () => {
	return [
		{ path: "/admin/login", element: <AdminLoginPage /> },
	];
};
