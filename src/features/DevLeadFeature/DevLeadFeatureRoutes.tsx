import { BusinessLoginPage } from "./AuthenPage/BusinessLoginPage";
import { CustomerLoginPage } from "./AuthenPage/CustomerLoginPage";
import { LoginPage } from "./AuthenPage/LoginPage";
import { SavedPlacePage } from "./SavedPlacePage/SavedPlacePage";

export const DevLeadFeatureRoutes = () => {
  return [
    {
      path: "/saved-place",
      element: <SavedPlacePage />,
    },
    {
      path: "/customer-login",
      element: <CustomerLoginPage />,
    },
    {
      path: "/business-login",
      element: <BusinessLoginPage />,
    },
    {
      path: "/admin-login",
      element: <SavedPlacePage />,
    },
  ];
};
