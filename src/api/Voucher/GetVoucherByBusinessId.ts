import { Axios } from "../../AxiosInstance";

export const GetVoucherByBusinessId = async () => {
  try {
    const response = await Axios.get(`/feature14/getInProgressVoucher`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
