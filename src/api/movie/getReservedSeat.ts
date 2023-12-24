import { Axios } from "../../AxiosInstance";

export const getReservedSeat = async (showId: number) => {
	try {
		const response = await Axios.post(`/MajorAPI/getReserveSeatFromMajor`, {
			showId,
		});

		return response.data;
	} catch (error) {
		console.error("Error can't post:", error);
	}
};
