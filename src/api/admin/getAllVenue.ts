import { Axios } from "../../AxiosInstance";

export const getAllVenue = async () => {
	try {
		const response = await Axios.get("/feature14/getAllVenue");
		return response.data;
	} catch (e) {
		console.log(e);
	}
};
