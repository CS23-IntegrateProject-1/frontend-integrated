import { Axios } from "../../AxiosInstance";

export const GetAdsBusinessById = async (businessId: number) => {
	try {
		const response = await Axios.get(`/feature5/AllAdBSN/${businessId}`);
		return response.data;
	} catch (error) {
		console.log(error);
		return;
	}
};
