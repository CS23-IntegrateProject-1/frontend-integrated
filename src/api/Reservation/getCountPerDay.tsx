import { Axios } from "../../AxiosInstance"
export const getCountPerDay = async (venueId: number) => {
  try {
    const response = await Axios.get(
      `/feature6/Dashboard/${venueId}`
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};