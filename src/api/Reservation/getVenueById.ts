import { Axios } from "../../AxiosInstance";
export const getVenueById = async (venueId: number, branchId: number) => {
  try {
    const response = await Axios.get(`/feature6/venue/${venueId}/${branchId}`);
    console.log("response", response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};