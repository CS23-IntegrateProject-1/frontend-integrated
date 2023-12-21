import { Axios } from "../../AxiosInstance";

export const getSeatByShowId = async (id: number) => {
	try {
		const response = await Axios.post(`/feature10/getSeatByShowId`, {
			id: id,
		});

		return response.data[0];
	} catch (error) {
		console.error("Error can't post:", error);
	}
};
