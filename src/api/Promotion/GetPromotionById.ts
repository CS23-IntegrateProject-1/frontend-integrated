import { Axios } from "../../AxiosInstance";

export const GetPromotionById = (id: number) => {
	try {
		const response = Axios.get(`/feature5/promotion/${id}`);
		return response;
	} catch (e) {
		console.log(e);
	}
};
