import { Axios } from "../../AxiosInstance";
import { ITheaterDetail } from "../../interfaces/Movie/ITheaterDetail.interface";

const getTheaterDetail = async (theaterId: number) => {
	try {
		const response: { status: number; data: ITheaterDetail | null } =
			await Axios.get(`/feature10/getTheaterById/${theaterId}`);
		return response;
	} catch (error) {
		console.error("Error fetching", error);
		return { status: 500, data: null };
	}
};

export default getTheaterDetail;
