import { Axios } from "../../AxiosInstance";

export const ApprovePro = async (promotionId: number) => {
	try {
		const response = await Axios.patch(`/feature14/approvePromotion/${promotionId}`, {
			isApprove: "Completed",
		});
		return response;
	} catch (e) {
		console.log(e);
	}
};