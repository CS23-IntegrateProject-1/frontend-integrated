import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import { PublicRoutes } from "./routes/PublicRoutes";
import { checkAuth } from "./functions/checkAuth";
import { RootLayout } from "./layouts/RootLayout";
import { Feature3Routes } from "./features/feature03-overview/Feature3Routes";
import { Test } from "./pages/Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      
      ...Feature3Routes(),
      
    ],
  },
]);

function App() {
  const userType = "customer";

  return <RouterProvider router={router} />;
}

export default App;
