import { Axios } from "../../AxiosInstance";
export const deleteTableId = async (tableId:number) => {
  try {
    const response = await Axios.delete(`/feature6/deleteTable/${tableId}`);
    console.log("deleteTable successfully")
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
