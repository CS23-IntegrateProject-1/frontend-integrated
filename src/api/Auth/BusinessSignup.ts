import { Axios } from "../../AxiosInstance";

export const BusinessSignup = async (
	username: string,
	phone: string,
	email: string,
	password: string
) => {
	try {
		const response = await Axios.post("/auth/business/signup", {
			username,
			phone,
			email,
			password,
		});
		console.log(response);
		return response;
	} catch (e) {
		return {
			status: 401,
		};
	}
};
