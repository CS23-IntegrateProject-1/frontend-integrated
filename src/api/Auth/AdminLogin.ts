// import axios from "axios";
import { Axios } from "../../AxiosInstance";

export const Adminlogin = async (username: string, password: string) => {
	try {
		return await Axios.post("/auth/AdminLogin", {
			username,
			password
		});
	} catch (e) {
		return {
			status: 401
		};
	}
};
