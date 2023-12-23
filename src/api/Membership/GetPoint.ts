import { Axios } from "../../AxiosInstance";

export const GetPoint = () => {
  try {
    const response = Axios.get(`/feature5/pointUsed/`);
    // console.log("gg",response.data);
    return response;
  } catch (e) {
    console.log(e);
  }
};
