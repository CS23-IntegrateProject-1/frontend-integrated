/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from "react";
import { IVerifyResponse, Verify } from "./api/Auth/Verify";
import { RouterProvider } from "react-router-dom";
import { PublicRoutes } from "./routes/PublicRoutes";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import { PrivateBusinessRoutes } from "./routes/PrivateBusinessRoutes";
import { PrivateAdminRoutes } from "./routes/PrivateAdminRoutes";

const publicRoutes = PublicRoutes;
const userRoutes = PrivateRoutes;
const businessRoutes = PrivateBusinessRoutes;
const adminRoutes = PrivateAdminRoutes;
let deliveredRoutes = PublicRoutes;

const VerifyProvider: FC<{
	setIsLogin: (isLogin: IVerifyResponse) => void;
}> = ({ setIsLogin }) => {
	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const fetchVerifyStatus = async () => {
		const response = await Verify();
		setIsLogin(response);
		switch (response.userType) {
			case "user":
				deliveredRoutes = userRoutes;
				break;
			case "business":
				deliveredRoutes = businessRoutes;
				break;
			case "admin":
				deliveredRoutes = adminRoutes;
				break;
			default:
				deliveredRoutes = publicRoutes;
				break;
		}
		setIsLoaded(true);
	};

	useEffect(() => {
		fetchVerifyStatus();
	}, []);

	return isLoaded ? <RouterProvider router={deliveredRoutes} /> : <></>;
};

export default VerifyProvider;
