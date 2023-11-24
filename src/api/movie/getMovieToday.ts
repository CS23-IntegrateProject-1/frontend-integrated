import {Axios} from "../../AxiosInstance";

const getMovieToday = async (
    id: number,
    date: number,
    month: number,
    year: number
  ) => {
    try {
      const response = await Axios.post(
        `/feature10/getFilmsByTheaterId`,
        {
          id: id,
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

  export default getMovieToday;