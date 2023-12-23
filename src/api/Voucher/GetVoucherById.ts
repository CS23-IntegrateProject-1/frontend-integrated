import { Axios } from "../../AxiosInstance";

export const GetVoucherById = async (voucherId: number) => {
  try {
    const response = await Axios.get(`/feature14/getInProgressVoucher`, {
      params: {
        voucherId: voucherId,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
