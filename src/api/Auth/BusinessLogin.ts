// import axios from "axios";
import { Axios } from "../../AxiosInstance";

export const BusinessLogin = async (username: string, password: string) => {
	try {
		return await Axios.post("/auth/business/Login", {
			username,
			password,
		});
	} catch (e) {
		return {
			status: 401,
		};
	}
};
