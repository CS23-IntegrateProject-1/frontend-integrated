import { Axios } from "../../AxiosInstance";

const fetchMovies = async (setState) => {
    try {
      const response = await Axios.get('/feature10/getUpcomingFilms');
      setState(
			response.data.map(
				(film: {
					name: string;
					poster_img: string;
					filmId: number;
				}) => ({
					title: film.name,
					imageUrl: film.poster_img,
					id: film.filmId,
				})
			)
		);
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
    }
  };

  export default fetchMovies;