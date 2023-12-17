import { Axios } from "../../AxiosInstance";

// export const GetAdsBusinessById = async () => {
// 	try {
// 		const response = await Axios.get(`/feature5/AllAdBSN/${businessId}`);
// 		return response.data;
// 	} catch (error) {
// 		console.log(error);
// 		return;
// 	}
// };

//GPT
export const GetAllAdsBusiness = async () => {
  try {
    const response = await Axios.get(`/feature5/AllAdBSN/`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
