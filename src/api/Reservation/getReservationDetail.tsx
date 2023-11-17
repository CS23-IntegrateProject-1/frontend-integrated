import { Axios } from "../../AxiosInstance"
export const getReservationDetail = async(userId:number) => {
    try {
        const response = await Axios.post("/MyReservation/:venueId/:reservationId");
        return response.data;
    }
    catch (e) {
        console.log(e);
    }
}