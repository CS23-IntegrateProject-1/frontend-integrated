import { Axios } from "../../AxiosInstance";

export const ApproveAds = async (id: number) => {
	try {
		const response = await Axios.patch(`/feature5/AdminApprove/${id}`, {
			isApprove: "Completed",
		});
		return response;
	} catch (e) {
		console.log(e);
	}
};
