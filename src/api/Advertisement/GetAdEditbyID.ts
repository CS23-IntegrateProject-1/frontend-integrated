import { Axios } from "../../AxiosInstance";

export const GetAdvertisementEditById = async () => {
    try {
      const response = await Axios.post(`/feature5/UpdateAdvertisementEditId/`);
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  