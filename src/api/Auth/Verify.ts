import { Axios } from "../../AxiosInstance";

export const Verify = async () => {
	try {
		const response = await Axios.post("/auth/verify");
		console.log(response);

		return { userType: response.data, status: response.status };
	} catch (e) {
		return false;
	}
};
