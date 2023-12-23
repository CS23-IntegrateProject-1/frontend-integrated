import { Axios } from "../../AxiosInstance";

export const GetAllAds = async () => {
	try {
		const response = await Axios.get("/feature5/AllAdBSN");
		return response.data;
	} catch (error) {
		console.log(error);
		return;
	}
};
