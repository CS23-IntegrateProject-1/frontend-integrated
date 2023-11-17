import { Axios } from "../../AxiosInstance"
export const getReservationDetail = async(venueId:number) => {
    try {
        const response = await Axios.get("/MyReservation/:venueId/:reservationId");
        return response.data;
    }
    catch (e) {
        console.log(e);
    }
}