import { Axios } from "../../AxiosInstance";
export const getAllTableTypeByVenueId = async () => {
  try {
    const response = await Axios.get(`/feature6/allTableType`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};