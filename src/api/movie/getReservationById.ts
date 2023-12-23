import {Axios} from "../../AxiosInstance";

const getReservationById = async (

  ) => {
    try {
      const response = await Axios.get(
        `/feature10/getReservationByUserId`

      );
      return response.data;
    } catch (error) {
      console.error("Error can't post:", error);
    }
  };

  export default getReservationById;