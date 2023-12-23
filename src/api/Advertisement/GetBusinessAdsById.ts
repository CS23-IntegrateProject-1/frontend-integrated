import { Axios } from "../../AxiosInstance";

export const GetBusinessAdsById = (id: number) => {
	try {
		const response = Axios.get(`/feature5/AdBSN/${id}`);
		return response;
	} catch (e) {
		console.log(e);
	}
};
