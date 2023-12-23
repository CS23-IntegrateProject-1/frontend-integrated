import { Axios } from "../../AxiosInstance";

export const GetPoint = () => {
  try {
    const response = Axios.get(`/feature5/pointUsed/`);
    return response;
  } catch (e) {
    console.log(e);
  }
};
