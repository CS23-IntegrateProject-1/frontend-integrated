import { Axios } from "../../AxiosInstance";

export const getDashboard = async () => {
	try {
		const response = await Axios.get("/feature14/getDashboard");
		return response.data;
	} catch (e) {
		console.log(e);
	}
};
