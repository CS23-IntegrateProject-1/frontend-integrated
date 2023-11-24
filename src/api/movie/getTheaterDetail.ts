import { Axios } from "../../AxiosInstance";

const getTheaterDetail = async (theaterId: number):Promise<any> => {
  try {
    const response = await Axios.get(`/feature10/getTheaterById/${theaterId}`);
    return response;
  } catch (error) {
    console.error("Error fetching", error);
    return {status: 500};
  }
};

export default getTheaterDetail;
