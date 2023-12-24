// GetAllPromotion function
import { Axios } from "../../AxiosInstance";

export const GetAllPromotion = async () => {
  try {
    const response = await Axios.get("/feature5/AllPromotion/");

    return response.data;
  } catch (error) {
    console.error("Failed to fetch promotions", error);
    return [];
  }
};
