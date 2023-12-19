import { Axios } from "../../AxiosInstance";

export const GetTierNameByTierId = () => {
  try {
    const response = Axios.get(`/feature5/tierName/`);
    return response;
  } catch (e) {
    console.log(e);
  }
};
