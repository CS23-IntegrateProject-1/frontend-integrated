import { Axios } from "../../AxiosInstance";

const checkIn = async (reservationId: number, authToken: string) => {
  const response = await Axios.post(`/feature6/checkIn/${reservationId}`, {
    authToken: authToken,
  });
  console.log(response.data);

  return response.data;
};

export default checkIn;
