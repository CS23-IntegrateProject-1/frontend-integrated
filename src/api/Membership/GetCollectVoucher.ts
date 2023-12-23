import { Axios } from "../../AxiosInstance";

export const GetCollectVoucher = (voucherId: string) => {
  try {
    const response = Axios.post(`feature5/CollectVoucher/${parseInt(voucherId)}/`);
    return response;
  } catch (e) {
    console.log(e);
  }
};
