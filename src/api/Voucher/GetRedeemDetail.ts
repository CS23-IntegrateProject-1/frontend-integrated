import { Axios } from "../../AxiosInstance";

export const GetRedeemDetail = async (redeemId: string) => {
  try {
    const response = await Axios.get(`/feature5/GetRedeembyId/${parseInt(redeemId)}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
