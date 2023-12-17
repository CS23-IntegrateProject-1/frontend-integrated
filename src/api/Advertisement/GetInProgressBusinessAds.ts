import { Axios } from "../../AxiosInstance";

export const GetInProgressBusinessAds = async () => {
	try {
		const response = await Axios.get("/feature5/AllInprogressAdBSN");
		return response.data;
	} catch (error) {
		console.log(error);
		return;
	}
};
