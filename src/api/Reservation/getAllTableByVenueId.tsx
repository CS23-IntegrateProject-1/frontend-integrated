import { Axios } from "../../AxiosInstance";
export const getAllTableByVenue = async (venueId: number) => {
  try {
    const response = await Axios.get(`/feature6/allTable/${venueId}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
