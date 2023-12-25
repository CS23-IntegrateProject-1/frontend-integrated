import Dashboard from "./admin/dashboard";
import { BusiProfileEdit } from "./admin/account/BusiProfileEdit";
import { VoucherListPage } from "./admin/voucher/VoucherListPage";
import RejectPage from "./admin/voucher/reviewrejected";
// import { VoucherDetailPage } from './admin/voucher/VoucherDetailPage'
import { PromotionListPage } from "./admin/promotion/PromotionPage";
import FilterPage from "./admin/promotion/FilterPage";
import ReportPage from "./admin/notification/ReportPage";
import FixReportPage from "./admin/notification/FixReport";
import ReviewPromotPage from "./admin/promotion/ReviewPromotPage";
export const Feature14Routes = () => {
	return [
		{ path: "/admin/dashboard", element: <Dashboard /> },
		{ path: "/admin/account/:id", element: <BusiProfileEdit /> },
		{ path: "/admin/voucher", element: <VoucherListPage /> },
		// { path: '/admin/voucher/:voucherId', element: <VoucherDetailPage /> },
		{
			path: "/admin/promotion/:promotionId",
			element: <ReviewPromotPage />,
		},
		// { path: '/admin/promotion/:promotionId/reject', element: <ReviewPromotPage /> },
		{ path: "/admin/promotion", element: <PromotionListPage /> },
		{ path: "/admin/promotion/filter", element: <FilterPage /> },
		{
			path: "/admin/approval/:approvalId/reject",
			element: <RejectPage />,
		},
		{ path: "/admin/survey", element: "ElementPlaceHolder" },
		{ path: "/admin/survey/:surveyId", element: "ElementPlaceHolder" },
		//{ path: "/admin/advertisement", element: "ElementPlaceHolder" },
		//{
		//	path: "/admin/advertisement/:advertisementId",
		//	element: "ElementPlaceHolder",
		//},
		//{
		//	path: "/admin/advertisement/:advertisementId/reject",
		//	element: "ElementPlaceHolder",
		//},
		{ path: "/admin/notification", element: <ReportPage /> },
		{
			path: "/admin/notification/:notificationId",
			element: <FixReportPage />,
		},
	];
};
