import { Axios } from "../../AxiosInstance";

export const ApproveVou = async (voucherId: number) => {
	try {
		const response = await Axios.patch(`/feature14/approveVoucher/${voucherId}`, {
			isApprove: "Completed",
		});
		return response;
	} catch (e) {
		console.log(e);
	}
};
