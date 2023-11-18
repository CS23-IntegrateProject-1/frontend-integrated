import { Axios } from "../../AxiosInstance";

export const Verify = async () => {
	try {
		const response = await Axios.post("/auth/verify");
		return response.status === 200;
	} catch (e) {
		return false;
	}
};
