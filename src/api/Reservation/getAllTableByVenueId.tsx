import { Axios } from "../../AxiosInstance";
export const getAllTableByVenue = async () => {
  try {
    const response = await Axios.get(`/feature6/allTableByVenueId`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
