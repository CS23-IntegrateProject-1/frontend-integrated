import { Axios } from "../../AxiosInstance";

export const GetMyprivilege = () => {
  try {
    const response = Axios.get(`/feature5/MembertierPrivilleges/`);
    return response;
  } catch (e) {
    console.log(e);
  }
};
