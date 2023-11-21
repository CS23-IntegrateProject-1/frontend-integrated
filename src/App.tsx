import { RouterProvider } from "react-router-dom";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import { PublicRoutes } from "./routes/PublicRoutes";
import { Verify } from "./api/Auth/Verify";

const privateRouter = PrivateRoutes;
const publicRouter = PublicRoutes;
const isLogin = await Verify();

function App() {
	return <RouterProvider router={isLogin ? privateRouter : publicRouter} />;
}

export default App;
