export const Feature14Routes = () => {
  return [
    { path: "/admin/dashboard", element: "ElementPlaceHolder" },
    { path: "/admin/account/edit", element: "ElementPlaceHolder" },
    { path: "/admin/account/setup", element: "ElementPlaceHolder" },
    { path: "/admin/approval", element: "ElementPlaceHolder" },
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
