import { Axios } from "../../AxiosInstance";

export const RejectVou = async (voucherId: number) => {
	try {
		const response = await Axios.patch(`/feature14/rejectVoucher/${voucherId}`, {
			isApprove: "Rejected",
		});
		return response;
	} catch (e) {
		console.log(e);
	}
};
