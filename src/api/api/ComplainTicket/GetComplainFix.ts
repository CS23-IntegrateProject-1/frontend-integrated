import { Axios } from "../../AxiosInstance";

export const ApproveCom = async (ComplainTicketId: number) => {
	try {
		const response = await Axios.patch(`/feature14/fixedComplainTicket/${ComplainTicketId}`, {
			status: "Completed",
		});
		return response;
	} catch (e) {
		console.log(e);
	}
};
