// import axios from "axios";
import { Axios } from "../../AxiosInstance";

export const login = async (username: string, password: string) => {
	try {
		return await Axios.post("/auth/login", {
			username,
			password
		});
	} catch (e) {
		console.log(e);
	}
};
