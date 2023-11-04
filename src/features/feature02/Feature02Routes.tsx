import { LoginPage } from "./pages/LoginPage";

export const Feature02Routes = () => {
  return [
    {
      path: "/login",
      element: <LoginPage/>,
    },
    { path: "/signup", element: "ElementPlaceHolder" },
    {
      path: "/create-account",
      element: "ElementPlaceHolder",
    },
    {
      path: "/saved-place",
      element: "ElementPlaceHolder",
    },
    {
      path: "/profile-overview",
      element: "ElementPlaceHolder",
    }
  ];
};
