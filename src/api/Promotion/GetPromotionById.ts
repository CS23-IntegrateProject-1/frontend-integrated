import { Axios } from "../../AxiosInstance";

export const GetPromotionById = async (id: number) => {
	try {
		const response = await Axios.get(`/feature5/AllPromotion/${id}`);
		return response.data;
	} catch (e) {
		console.log(e);
	}
};
