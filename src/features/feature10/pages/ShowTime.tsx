//import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import DateSelection from '../Components/DateSelection'
import { Box, Image, Text, useMediaQuery } from "@chakra-ui/react";
import SearchBar from "../components/SearchBar";
import NearestCinemas from "../components/NearestCinemas";
import { Axios } from "../../../AxiosInstance";

interface Movie {
	title: string;
	imageUrl: string;
	id: number;
	rate: string;
	genre: string;
	duration: number;
}

export const ShowTime = () => {
	const { movieId } = useParams<{ movieId: string }>();
	const [movie, setMovie] = useState<Movie | null>(null);
	const [isDesktop] = useMediaQuery("(min-width: 768px)");

	useEffect(() => {
		const fetchMovieDetails = async () => {
			try {
				const response = await Axios.get(
					`/feature10/getFilmsById/${movieId}`
				);
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
				console.error("Error fetching movie details:", error);
			}
		};

		fetchMovieDetails();
	}, [movieId]);

	if (!movie) {
		return <div>Loading...</div>;
	}

	const handleSearch = (query: string) => {
		console.log(`Searching for: ${query}`);
	};

	const cinemasData = [
		{
			name: "Cinema A",
			location: "City A",
			showtimes: [
				"10:00 AM",
				"2:00 PM",
				"7:00 PM",
				"10:00 PM",
				"12:00 AM",
			],
			type: "|   ENG   |   SUB TH",
		},
	];

	return (
		<>
			{/* <DateSelection onDateSelect={handleDateSelect}></DateSelection> */}
			{/* Display movie details */}
			<Box
				p={4}
				boxShadow="md"
				borderRadius="md"
				backgroundColor="rgba(0, 0, 0, 0.3)"
				backdropBlur="50px"
				h={isDesktop ? "300px" : "auto"}>
				<Box display="flex">
					<Image
						src={movie.imageUrl}
						alt={movie.title}
						h={isDesktop ? "270px" : "80px"}
						w={isDesktop ? "180px" : "54px"}
					/>
					<Box ml={{ md: 4 }}>
						<Text
							fontSize={isDesktop ? "40px" : "10px"}
							fontWeight="bold"
							mb={2}
							m="5px">
							{movie.title}
						</Text>
						<Text
							fontSize={isDesktop ? "20px" : "6px"}
							fontWeight="light"
							mb={2}
							m="5px">
							Genre : {movie.genre}
						</Text>
						<Text
							fontSize={isDesktop ? "20px" : "6px"}
							fontWeight="light"
							mb={2}
							m="5px">
							Rated : {movie.rate} | {movie.duration} min
						</Text>
					</Box>
				</Box>
			</Box>
			<SearchBar onSearch={handleSearch} />
			<NearestCinemas cinemas={cinemasData} />
		</>
	);
};
