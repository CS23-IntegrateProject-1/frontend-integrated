import { RouterProvider } from "react-router-dom";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import { PrivateAdminRoutes } from "./routes/PrivateAdminRoutes";
import { PrivateBusinessRoutes } from "./routes/PrivateBusinessRoutes";
import { PublicRoutes } from "./routes/PublicRoutes";
import { Verify } from "./api/Auth/Verify";
import { createContext, useContext, useEffect, useState } from "react";
import { Axios } from "./AxiosInstance";

const UserContext = createContext(0);

const privateRouter = PrivateRoutes;
const publicRouter = PublicRoutes;
const privateAdminRouter = PrivateAdminRoutes;
const privateBusinessRouter = PrivateBusinessRoutes;
const isLogin = await Verify();

function App() {
	const [userId, setUserId] = useState(-1);
	const [userType, setUserType] = useState<string>();

	useEffect(() => {
		if (isLogin) {
			setUserType(isLogin.userType);
			switch (userType) {
				case "user": {
					Axios.get("/auth/getUser")
						.then((res) => {
							setUserId(res.data.userId);
						})
						.catch((err) => {
							console.error("Error verifying user:", err);
						});
					break;
				}
				case "admin": {
					Axios.get("/auth/getUser/admin")
						.then((res) => {
							setUserId(res.data.adminId);
						})
						.catch((err) => {
							console.error("Error verifying admin:", err);
						});
					break;
				}
				case "business": {
					Axios.get("/auth/getUser/business")
						.then((res) => {
							setUserId(res.data.businessId);
						})
						.catch((err) => {
							console.error("Error verifying business:", err);
						});
					break;
				}
				default: {
					setUserId(-1);
				}
			}
		} else {
			setUserId(-1);
		}
	}, [userType]);

	return (
		<UserContext.Provider value={userId}>
			<RouterProvider
				router={
					!isLogin || isLogin.status !== 200
						? publicRouter
						: isLogin.userType === "user"
						? privateRouter
						: isLogin.userType === "admin"
						? privateAdminRouter
						: isLogin.userType === "business"
						? privateBusinessRouter
						: publicRouter
				}
			/>
			;
		</UserContext.Provider>
	);
}

export default App;

export function useUser() {
	return useContext(UserContext);
}
