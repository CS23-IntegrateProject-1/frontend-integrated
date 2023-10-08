import {
  // Route,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import { PublicRoutes } from "./routes/PublicRoutes";
import { checkAuth } from "./functions/checkAuth";

const router = createBrowserRouter([
  checkAuth() ? PrivateRoutes() : {},
  ...PublicRoutes(),
]);

function App() {

  return <RouterProvider router={router} />;

}

export default App
