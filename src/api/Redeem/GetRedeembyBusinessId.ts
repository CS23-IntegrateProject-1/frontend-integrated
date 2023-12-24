import { Axios } from "../../AxiosInstance";

export const GetRedeembyBusinessId = async () => {
  try {
    const response = await Axios.get(`/feature5/GetRedeembyBusinessId/`);
    return response.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};
