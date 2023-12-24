/* eslint-disable react-hooks/exhaustive-deps */
//import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Text,
  Image,
  useMediaQuery,
  Flex,
  Button,
} from "@chakra-ui/react";
import DateSelection from "../components/DateSelection";
import getTheaterDetail from "../../../api/movie/getTheaterDetail";
import getMovieToday from "../../../api/movie/getMovieToday";
import { ITheaterDetail } from "../../../interfaces/Movie/ITheaterDetail.interface";

interface Movie {
  name: string;
  poster_img: string;
  filmId: number;
  rate: string;
  genre: string;
  duration: number;
  Shows: {
    showId: number;
    date: string;
    start_time: string;
    screen: {
      screen_type: string;
    };
  }[];
}

const CinemaDetailPage = () => {
  const navigate = useNavigate();
  const { theaterId } = useParams<{ theaterId: string }>();
  const [theater, setTheater] = useState<ITheaterDetail | null>(null);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isDesktop] = useMediaQuery("(min-width: 768px)");
  const thisDate = new Date();
  const day = thisDate.getDate();
  const month = thisDate.getMonth() + 1; // Months are zero-based, so add 1
  const year = thisDate.getFullYear();

  const [selectedDate] = useState<number>(day);

  const fetchTheaterDetails = async () => {
    const response: { status: number; data: ITheaterDetail | null } =
      await getTheaterDetail(Number(theaterId));
    if (response.status != 200 || !response.data) {
      setTheater(null);
    } else {
      setTheater({
        name: response.data.name,
      });
    }
  };
  const fetchMovieToday = async () => {
    try {
      if (!theaterId) throw new Error("Theater ID is not defined");
      const response = await getMovieToday(
        Number(theaterId),
        selectedDate,
        month,
        year
      );

      // Update the state to include all movies
      setMovies(response);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };
  useEffect(() => {
    fetchTheaterDetails();
    fetchMovieToday();
  }, [theaterId]);

  const handleDateChange = async (selectedDate: string) => {
    try {
      const numericDate = parseInt(selectedDate, 10);
      // Make a request to the server to get movie details for the selected date
      const response = await getMovieToday(
        Number(theaterId),
        numericDate,
        month,
        year
      );

      // Update the state to include movies for the selected date
      setMovies(response);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  return (
    <Box alignItems={"center"}>
      <Box
        backgroundColor={"#5f0DBB"}
        h={"50px"}
        display={"flex"}
        alignItems={"center"}
        padding={"5px"}
        marginTop={"-20px"}
      >
        <Text>{theater?.name}</Text>
      </Box>

      <DateSelection onDateSelect={handleDateChange} />

{movies
  .filter((movie) =>
    movie.Shows.some((show) => {
      const showStartTime = new Date(show.start_time).toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'UTC' });
      const currentTime = new Date().toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false, });
      return showStartTime >= currentTime;
    })
  )
  .map((movie, index) => (
    <Box key={movie.filmId} display="flex" flexDirection={"column"}>
      <Box
        display={"flex"}
        p={2}
        boxShadow="md"
        borderRadius="md"
        backgroundColor="rgba(0, 0, 0, 0.3)"
        backdropBlur="50px"
      >
        <Image
          src={movie.poster_img}
          alt={movie.name}
          h={isDesktop ? "270px" : "80px"}
          w={isDesktop ? "180px" : "54px"}
        />
        <Box ml={{ md: 4 }}>
          <Text
            fontSize={isDesktop ? "40px" : "10px"}
            fontWeight="bold"
            mb={2}
            m="5px"
          >
            {movie.name}
          </Text>
          <Text
            fontSize={isDesktop ? "20px" : "6px"}
            fontWeight="light"
            mb={2}
            m="5px"
          >
            Genre : {movie.genre}
          </Text>
          <Text
            fontSize={isDesktop ? "20px" : "6px"}
            fontWeight="light"
            mb={2}
            m="5px"
          >
            Rated : {movie.rate} | {movie.duration} min
          </Text>
        </Box>
      </Box>
      <Box boxShadow="md" backgroundColor={"#D9D9D9"} p={1} mb={5}>
        <Box
          key={index}
          maxWidth="100%"
          maxHeight="256px"
          justifyContent={"center"}
        >
          <Text
            fontSize="10px"
            fontWeight="bold"
            ml={"5px"}
            color={"#000000"}
            mt={"15px"}
          >
            {movie.Shows &&
              movie.Shows[0] &&
              movie.Shows[0].screen &&
              movie.Shows[0].screen.screen_type}{" "}
            | ENG | SUB
          </Text>
          <Flex overflowX="auto">
            {movie.Shows
              .filter((show) => {
                const showStartTime = new Date(show.start_time).toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'UTC' });
                const currentTime = new Date().toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false, });
                return showStartTime >= currentTime;
              })
              .map((show, showIndex) => (
                <Button
                  key={showIndex}
                  borderColor="#200944"
                  borderWidth={1}
                  borderRadius="2px"
                  fontSize="10px"
                  fontWeight="bold"
                  mt={2}
                  ml={1}
                  mr={2}
                  mb={4}
                  p="1"
                  width="81px"
                  height="22px"
                  boxShadow="md"
                  onClick={() => {
                    navigate(
                      `/screen/${theaterId}/${movie.filmId}/${movie.Shows[0].showId}`
                    );
                  }}
                >
                  {`${new Date(show.start_time).getUTCHours()}:${String(
                    new Date(show.start_time).getUTCMinutes()
                  ).padStart(2, "0")}`}
                </Button>
              ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  ))}


    </Box>
  );
};

export default CinemaDetailPage;
