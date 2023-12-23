import { Axios } from "../../AxiosInstance";

export const getStatistic = async () => {
	try {
		const response = await Axios.get("/feature14/getStatistic");
		return response.data;
	} catch (e) {
		console.log(e);
	}
};
