import { Axios } from "../../AxiosInstance";

export const signup = async (
	firstname: string,
	lastname: string,
	username: string,
	phone: string,
	email: string,
	password: string
) => {
	try {
		const response = await Axios.post("/auth/signup", {
			firstname,
			lastname,
			username,
			phone,
			email,
			password
		});
		console.log(response);
		return response;
	} catch (e) {
		return {
			status: 401
		};
	}
};
