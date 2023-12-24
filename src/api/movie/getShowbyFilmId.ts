import {Axios} from "../../AxiosInstance";

const getShowbyFilmId = async (
    id: number,
    date: number,
    month: number,
    year: number
  ) => {
    try {
      const response = await Axios.post(
        `/feature10/getShowsByTheaterIdandScreenIdandDate`,
        {
          filmId: id,
          date: date,
          month: month,
          year: year,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error can't post:", error);
    }
  };

  export default getShowbyFilmId;