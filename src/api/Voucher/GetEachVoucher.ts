import { Axios } from "../../AxiosInstance";

export const GetEachVoucher = async (voucherId: number) => {
	try {
		const response = await Axios.get(
			`/feature5/InfoOfVoucher/${voucherId}`
		);
		return response;
	} catch (error) {
		console.log(error);
	}
};
