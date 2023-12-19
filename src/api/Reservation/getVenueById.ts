import { Axios } from "../../AxiosInstance";
export const getVenueById = async (branchId: number, venueId: number) => {
  try {
    console.log("branchId", branchId);
    console.log("venueId", venueId);
    const response = await Axios.get(`/feature6/venue/${venueId}/${branchId}`);
    console.log("response", response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};