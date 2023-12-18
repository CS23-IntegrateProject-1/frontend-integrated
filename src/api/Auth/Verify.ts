import { Axios } from "../../AxiosInstance";

export interface IVerifyResponse {
	userType: string;
	status: number;
}

export const initialVerifyResponse: IVerifyResponse = {
	userType: "none",
	status: 500,
};

export const Verify = async () => {
	try {
		const response = await Axios.post("/auth/verify");

		return { userType: response.data, status: response.status };
	} catch (e) {
		return { userType: "none", status: 500 };
	}
};
