import { Axios } from "../../AxiosInstance";

export const GetVoucherDetail = async (voucherId: string) => {
  try {
    const response = await Axios.get(
      `/feature5/GetVoucherforuser/${parseInt(voucherId)}`
    );
    console.log(response)
    return response;
  } catch (error) {
    console.log(error);
  }
};
