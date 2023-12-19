import { Axios } from "../../AxiosInstance";

export const GetExpire = () => {
  try {
    const response = Axios.get(`/feature5/ExpireDate/`);
    return response;
  } catch (e) {
    console.log(e);
  }
};
