
import { Axios } from "../../AxiosInstance";

export const GetAllComplain = async () => {
  try {
    const response = await Axios.get("/feature14/getAllReportTicket");

    return response.data;
  } catch (error) {
    console.error("Failed to fetch complain ticket", error);
    return [];
  }
};
