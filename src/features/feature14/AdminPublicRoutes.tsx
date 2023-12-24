import AdminLoginPage from "./feature14/pages/AdminLoginPage";

export const AdminPublicRoutes = () => {
	return [
		{ path: "/admin/login", element: <AdminLoginPage /> },
	];
};
