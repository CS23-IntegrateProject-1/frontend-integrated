import { Axios } from "../../AxiosInstance";

export const GetMyrewards = async () => {
  try {
    const response = await Axios.get(`/feature5/AllCollectedVoucher/`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
