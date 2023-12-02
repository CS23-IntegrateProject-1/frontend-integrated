import { Axios } from "../../AxiosInstance";
export const getTableByTableId = async (tableId: number) => {
  try {
    const response = await Axios.get(`/feature6/MyTable/${tableId}`);
    console.log("response", response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};