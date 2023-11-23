import { Axios } from "../../AxiosInstance";

export const GetUser = async (userType: string) => {
	switch (userType) {
		case "user": {
			const response = await Axios.get("/auth/getUser");
			return response;
		}
		case "admin": {
			const response = await Axios.get("/auth/getUser/admin");
			return response;
		}
		case "business": {
			const response = await Axios.get("/auth/getUser/business");
			return response;
		}
		default: {
			return false;
		}
	}
};
