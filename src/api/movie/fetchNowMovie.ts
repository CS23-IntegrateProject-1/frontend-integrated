import axios from "axios";

const fetchMovies = async (setState) => {
    try {
      const response = await axios.get('http://localhost:8080/feature10/getNowshowingFilms');
      setState(
        response.data.map((film) => ({
          title: film.name,
          imageUrl: film.poster_img,
          id: film.filmId,
        }))
      );
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
    }
  };

  export default fetchMovies;