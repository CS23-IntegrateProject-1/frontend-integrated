import { Axios } from "../../AxiosInstance";

const checkIn = async (reservationId: number, authToken: string) => {
  try {
    const response = await Axios.post(`/feature6/checkIn/${reservationId}`, {
      authToken: authToken,
    });
    console.log(response.data);

    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export default checkIn;
