import { Navigate, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { NotFoundPage } from "../pages/fallbackPages/NotFoundPage";
import { Feature13Routes } from "../features/feature13/Feature13Routes";
import { Feature13PublicRoutes } from "../features/feature13/Feature13PublicRoutes";
import { Feature06BusinessPrivateRoutes } from "../features/feature06/Feature06BusinessPrivateRoutes";
import { Feature07PrivateBusinessRoutes } from "../features/feature07/Feature07PrivateBusinessRoutes";

export const PrivateBusinessRoutes = createBrowserRouter([
  { path: "/", element: <Navigate to={"/business/dashboard"} /> },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      ...Feature13Routes(),
      ...Feature13PublicRoutes(),
      ...Feature06BusinessPrivateRoutes(),
      ...Feature07PrivateBusinessRoutes(),
    ],
  },
  { path: "/*", element: <NotFoundPage /> },
]);
