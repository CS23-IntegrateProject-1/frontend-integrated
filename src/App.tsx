import { IVerifyResponse } from "./api/Auth/Verify";
import { useEffect, useState } from "react";
import { Axios } from "./AxiosInstance";
import { IUser } from "./interfaces/IUsers/IUser.interface";
import { IAdminUser } from "./interfaces/IUsers/IAdminUser.interface";
import { IBusinessUser } from "./interfaces/IUsers/IBusinessUser.interface";
import { UserContext as CUserContext } from "./contexts/userContext/UserContext";
import { BusinessUserContext as CBusinessUserContext } from "./contexts/userContext/BusinessUserContext";
import { AdminUserContext as CAdminUserContext } from "./contexts/userContext/AdminUserContext";
import VerifyProvider from "./VerifyProvider";

const Contexts = {
	UserContext: CUserContext,
	BusinessUserContext: CBusinessUserContext,
	AdminUserContext: CAdminUserContext,
};

const App = () => {
	const mockUser: IUser = {
		userId: -1,
		username: "",
		fname: "",
		lname: "",
		email: "",
		addId: "",
		phone: "",
		profile_picture: "",
	};
	const mockAdminUser: IAdminUser = {
		adminId: -1,
		username: "",
	};
	const mockBusinessUser: IBusinessUser = {
		businessId: -1,
		username: "",
		email: "",
		phone_num: "",
		profile_picture: "",
	};
	const [isLogin, setIsLogin] = useState<IVerifyResponse>();
	const [user, setUser] = useState<IUser>(mockUser);
	const [adminUser, setAdminUser] = useState<IAdminUser>(mockAdminUser);
	const [businessUser, setBusinessUser] =
		useState<IBusinessUser>(mockBusinessUser);

	useEffect(() => {
		if (isLogin) {
			switch (isLogin.userType) {
				case "user": {
					Axios.get("/auth/getUser")
						.then((res) => {
							setUser(res.data);
						})
						.catch((err) => {
							console.error("Error verifying user:", err);
						});
					break;
				}
				case "admin": {
					Axios.get("/auth/getUser/admin")
						.then((res) => {
							setAdminUser(res.data);
						})
						.catch((err) => {
							console.error("Error verifying admin:", err);
						});
					break;
				}
				case "business": {
					Axios.get("/auth/getUser/business")
						.then((res) => {
							setBusinessUser(res.data);
						})
						.catch((err) => {
							console.error("Error verifying business:", err);
						});
					break;
				}
				default: {
					setUser(mockUser);
				}
			}
		} else {
			setUser(mockUser);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLogin]);
	if (!isLogin || isLogin.status !== 200) {
		return (
			<Contexts.UserContext.Provider value={user}>
				<VerifyProvider setIsLogin={setIsLogin} />
			</Contexts.UserContext.Provider>
		);
	} else if (isLogin.userType === "user") {
		return (
			<Contexts.UserContext.Provider value={user}>
				<VerifyProvider setIsLogin={setIsLogin} />
			</Contexts.UserContext.Provider>
		);
	} else if (isLogin.userType === "admin") {
		return (
			<Contexts.AdminUserContext.Provider value={adminUser}>
				<VerifyProvider setIsLogin={setIsLogin} />
			</Contexts.AdminUserContext.Provider>
		);
	} else if (isLogin.userType === "business") {
		return (
			<Contexts.BusinessUserContext.Provider value={businessUser}>
				<VerifyProvider setIsLogin={setIsLogin} />
			</Contexts.BusinessUserContext.Provider>
		);
	} else {
		return (
			<Contexts.UserContext.Provider value={user}>
				<VerifyProvider setIsLogin={setIsLogin} />
			</Contexts.UserContext.Provider>
		);
	}
};

export default App;
