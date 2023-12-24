import AdminLoginPage from "./pages/AdminLoginPage";
import Dashboard from './admin/dashboard'
import AccountEditPage from './admin/account/editaccount'
import AccountSetupPage from './admin/account/setupaccount'
import { VoucherListPage } from './admin/voucher/VoucherListPage'
import { PromotionListPage } from './admin/promotion/PromotionPage'
import { VoucherRejectPage } from './admin/voucher/VoucherRejectPage'
import { ReportListPage } from './admin/reportAd/ReportListPage'

export const AdminPublicRoutes = () => {
	return [
		{ path: "/admin/login", element: <AdminLoginPage /> },
		{ path: '/admin/dashboard', element: <Dashboard /> },
		{ path: '/admin/account/edit', element: <AccountEditPage /> },
		{ path: '/admin/account/setup', element: <AccountSetupPage /> },
		{ path: '/admin/ticket', element: <ReportListPage /> },
		{ path: '/admin/voucher', element: <VoucherListPage /> },
		{ path: '/admin/voucher/:voucherId/reject', element: <VoucherRejectPage /> },
		{ path: '/admin/promotion', element: <PromotionListPage /> },
	];
};
