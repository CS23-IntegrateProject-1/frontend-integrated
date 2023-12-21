import { Axios } from "../../AxiosInstance";

export const getSeatByShowId = async (id: number) => {
    try {
        const response = await Axios.post(`/feature10/getSeatByShowId`, {
        id: id,
        });
        console.log(response.data);
        
        return response.data;
    } catch (error) {
        console.error("Error can't post:", error);
    }
}