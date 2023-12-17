import { Axios } from "../../AxiosInstance";
export const getCountPerDay = async () => {
  try {
    const response = await Axios.get(`/feature6/Dashboard`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
