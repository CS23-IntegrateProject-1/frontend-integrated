import { Axios } from "../../AxiosInstance";

export const RejectAds = async (id: number) => {
	try {
		const response = await Axios.patch(`/feature5/AdminApprove/${id}`, {
			isApprove: "Rejected",
		});
		return response;
	} catch (e) {
		console.log(e);
	}
};
