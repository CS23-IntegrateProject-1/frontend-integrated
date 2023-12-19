import { Axios } from "../../AxiosInstance";
export const getVenueById = async (branchId: number, venueId: number) => {
  try {
    const response = await Axios.get(`/feature6/venue/${branchId}/${venueId}`);
    console.log("response", response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};