import Dashboard from "./admin/dashboard";
import AccountEditPage from "./admin/account/editaccount";
import AccountSetupPage from "./admin/account/setupaccount";
import RequestPage from "./admin/account/requestapproval";
export const Feature14Routes = () => {
  return [
    { path: "/admin/dashboard", element: <Dashboard />},
    { path: "/admin/account/edit", element: <AccountEditPage /> },
    { path: "/admin/account/setup", element: <AccountSetupPage /> },
    { path: "/admin/approval", element: <RequestPage /> },
    { path: "/admin/approval/:approvalId", element: "ElementPlaceHolder" },
    {
      path: "/admin/approval/:approvalId/reject",
      element: "ElementPlaceHolder",
    },
    { path: "/admin/survey", element: "ElementPlaceHolder" },
    { path: "/admin/survey/:surveyId", element: "ElementPlaceHolder" },
    { path: "/admin/advertisement", element: "ElementPlaceHolder" },
    {
      path: "/admin/advertisement/:advertisementId",
      element: "ElementPlaceHolder",
    },
    {
      path: "/admin/advertisement/:advertisementId/reject",
      element: "ElementPlaceHolder",
    },
    {
      path: "/admin/notification/:notificationId",
      element: "ElementPlaceHolder",
    },
  ];
};
