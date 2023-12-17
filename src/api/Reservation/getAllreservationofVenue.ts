import { Axios } from "../../AxiosInstance";
export const getAllReservationOfVenue = async () => {
  try {
    const response = await Axios.get(`/feature6/allReservationOfVenue`);
    console.log("get all reservation successfully")
    return response.data;
  } catch (e) {
    console.log(e);
  }
};