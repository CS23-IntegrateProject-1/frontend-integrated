import { Axios } from "../../AxiosInstance";

export const GetRedeem = async () => {
  try {
    const response = await Axios.get(`/feature5/GetRedeem`);
    return response.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};
