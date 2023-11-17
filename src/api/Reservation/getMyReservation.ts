import { Axios } from "../../AxiosInstance"
export const getMyReservation = async(userId:number, status:string ) => {
    try {
        const response = await Axios.post("/feature6/MyReservation");
        return response.data;
    }
    catch (e) {
        console.log(e);
    }

}