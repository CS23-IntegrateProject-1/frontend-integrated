import { Axios } from "../../AxiosInstance";

export const RejectPro = async (promotionId: number) => {
	try {
		const response = await Axios.patch(`/feature14/rejectPromotion/${promotionId}`, {
			isApprove: "Rejected",
		});
		return response;
	} catch (e) {
		console.log(e);
	}
};
