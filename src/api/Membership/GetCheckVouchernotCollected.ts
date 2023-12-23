import { Axios } from "../../AxiosInstance";

export const GetCheckVouchernotCollected = async (voucherId: string) => {
  try {
    const response = await Axios.get(`/feature5/CheckVoucher/${parseInt(voucherId)}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
