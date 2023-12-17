import { Axios } from "../../AxiosInstance";

const fetchMovieDetails = async (setMovie) => {
    try {
      const response = await Axios.get(`/feature10//getFilmsById/${movieId}`);
      setMovie({
        title: response.data.name,
        imageUrl: response.data.poster_img,
        id: response.data.filmId,
        rate: response.data.rate,
        genre: response.data.genre,
        duration: response.data.duration,
      });
      console.log(response.data.film);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
    
    
  };

  export default fetchMovieDetails;