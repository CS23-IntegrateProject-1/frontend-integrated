import { Axios } from "../../AxiosInstance";
export const getReservationDetail = async (
  venueId: number,
  reservationId: number
) => {
  try {
    const response = await Axios.get(
      `/feature6/Myreservation/${venueId}/${reservationId}`
    );
    console.log(response);
    
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
