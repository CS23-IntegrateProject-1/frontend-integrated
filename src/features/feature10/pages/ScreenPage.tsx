/* eslint-disable react-hooks/exhaustive-deps */
import {
	Box,
	Center,
	Image,
	Text,
	Grid,
	Flex,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from "@chakra-ui/react";
import { TextStyle } from "../../../theme/TextStyle";
import React, { useEffect, useState } from "react";
import { MovieSeat } from "../components/movieSeat/MovieSeat";
import { TypeOfSeatCard } from "../components/movieSeat/TypeOfSeat";
import { useNavigate, useParams } from "react-router-dom";
import { getSeatByShowId } from "../../../api/movie/getSeatByShowId";
import {
	IScreenDatas,
	ISeat,
	ISeatType,
	initialStateScreenDatas,
} from "../../../interfaces/Movie/IScreenDatas.interface";
import getTheaterDetail from "../../../api/movie/getTheaterDetail";
import {
	ITheaterDetail,
	initialStateTheaterDetail,
} from "../../../interfaces/Movie/ITheaterDetail.interface";
import { getReservedSeat } from "../../../api/movie/getReservedSeat";
import { Axios } from "../../../AxiosInstance";
import { AxiosError } from "axios";

const ScreenPage: React.FC = () => {
	const posterWidth = "25vh"; // Replace with your desired movie poster width
	const posterHeight = "40vh"; // Replace with your desired movie poster height
	const theaterId = parseInt(
		useParams<{ theaterId: string }>().theaterId || "0"
	);
	const showId = parseInt(useParams<{ showId: string }>().showId || "0");

	const [data, setData] = useState<IScreenDatas>(initialStateScreenDatas);
	const [theaterInfo, setTheaterInfo] = useState<ITheaterDetail>(
		initialStateTheaterDetail
	);
	const navigate = useNavigate();
	const [date, setDate] = useState<string>("");
	const [startTime, setStartTime] = useState<string>("");
	const [reservedSeats, setReservationSeats] = useState<number[]>([]);
	const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
	const [seatType, setSeatType] = useState<ISeatType[]>([]);
	const [defaultPrice, setDefaultPrice] = useState<number>(0);
	const [totalPrice, setTotalPrice] = useState<number>(0);
	const {
		isOpen: isOpenNoSeatSelectBuy,
		onOpen: onOpenNoSeatSelectBuy,
		onClose: onCloseNoSeatSelectBuy,
	} = useDisclosure();

	const {
		isOpen: isOpenErrorBuyingSeats,
		onOpen: onOpenErrorBuyingSeats,
		onClose: onCloseErrorBuyingSeats,
	} = useDisclosure();

	const handleBuy = async () => {
		if (selectedSeats.length === 0) {
			onOpenNoSeatSelectBuy();
		} else {
			try {
				const sortedSeatId = selectedSeats.sort();
				console.log(sortedSeatId);
				await Axios.post("/feature10/bookMovieSeat", {
					showId,
					seatId: sortedSeatId,
				});
				navigate(`/`);
			} catch (error: AxiosError | any) {
				if (error instanceof AxiosError) {
					console.log(error.response?.data);
				} else console.error("Error buying movie : ", error);
				onOpenErrorBuyingSeats();
			}
		}
	};

	const handleOnSeatClick = (seatId: number, price: number) => {
		if (selectedSeats.includes(seatId)) {
			setSelectedSeats((prev) => prev.filter((id) => id !== seatId));
			setTotalPrice((prev) => prev - price);
		} else {
			setSelectedSeats((prev) => [...prev, seatId]);
			setTotalPrice((prev) => prev + price);
		}
		console.log(selectedSeats);
	};

	const setDateFunc = (response: IScreenDatas) => {
		let date = response.date.slice(8, 10);
		date += " ";
		date += response.date.slice(5, 7);
		date += " ";
		date += response.date.slice(0, 4);
		setDate(date);
		setStartTime(response.start_time.slice(11, 16));
	};
	const fetchMovieToday = async () => {
		try {
			const response = await getSeatByShowId(showId);
			setData(response);
			setDateFunc(response);
			const seatTypes = getSeatTypeFromData(response);
			setSeatType(seatTypes);
			setDefaultPrice(response.price);
		} catch (error) {
			console.error("Error fetching movie details:", error);
		}
	};

	const getSeatTypeFromData = (data: IScreenDatas): ISeatType[] => {
		// Use Set to store unique seat type IDs
		const uniqueSeatTypeIds = new Set<number>();

		// Use an array to store the resulting seat types
		const seatTypesArray: ISeatType[] = [];

		data.Screens.Seats.forEach((seat) => {
			// Check if the seatTypeId is not already in the set
			if (!uniqueSeatTypeIds.has(seat.Seat_types.seatTypeId)) {
				// Add the seat type to the result array
				seatTypesArray.push(seat.Seat_types);

				// Add the seatTypeId to the set
				uniqueSeatTypeIds.add(seat.Seat_types.seatTypeId);
			}
		});

		return seatTypesArray;
	};

	// Example usage

	const fetchTheaterDetail = async () => {
		try {
			const response = await getTheaterDetail(theaterId);
			setTheaterInfo(response.data);
		} catch (e) {
			console.error("Error fetching theater details:", e);
		}
	};

	const fetchReservedSeat = async () => {
		try {
			const response = await getReservedSeat(showId);
			for (const reservationlog of response) {
				setReservationSeats((prev) => [...prev, reservationlog.seatId]);
			}
		} catch (error) {
			console.error("Error fetching movie details:", error);
		}
	};

	useEffect(() => {
		fetchMovieToday();
		fetchTheaterDetail();
		fetchReservedSeat();
	}, []);

	return (
		<>
			{/* Movie Info at top*/}
			<Box display={"flex"} flexDirection={"row"} paddingBottom={"7"}>
				<Box>
					<Image
						src={data?.Films.poster_img}
						alt={data?.Films.name}
						borderRadius="lg"
						width={posterWidth}
						height={posterHeight}
					/>
				</Box>
				<Box display={"flex"} flexDirection={"column"} padding={"4"}>
					<Text color={"gold"} style={TextStyle.h1} mb={2}>
						{data?.Films.name}
					</Text>
					<Text style={TextStyle.body1} mb={2}>
						{data?.Films.rate}
					</Text>
					<Text style={TextStyle.body1} mb={2}>
						{data?.Films.duration} minutes
					</Text>
				</Box>
			</Box>
			{/* Place + Theater name and time  */}
			<Box>
				<Text style={TextStyle.body1} mb={2}>
					{theaterInfo.name}
				</Text>
				<Box display="flex" flexDirection="row">
					<Center style={TextStyle.body1} mb={2} mr={20}>
						Screen {data.Screens.screen_no}
					</Center>
					<Center style={TextStyle.body1} mb={2} mr={2}>
						{date}
					</Center>
					<Center
						style={TextStyle.body1}
						ml={20}
						backgroundColor={"gold"}
						padding="0.5%"
						borderRadius="10%">
						{startTime + ""}
					</Center>
				</Box>
			</Box>
			{/* Screen */}
			<Center
				style={TextStyle.h2}
				mt={10}
				mb={10}
				borderWidth="0.2vw"
				borderColor="gold"
				p={1} // Padding to make the border visible
			>
				screen
			</Center>

			{/* seat */}
			<Center flexDir="column">
				{data.Screens.Seats.reduce((acc: ISeat[][], seat) => {
					const row = seat.seat_row; // Assuming there's a property 'row' in your seat object
					if (!acc[row]) {
						acc[row] = [];
					}
					acc[row].push(seat);
					return acc;
				}, [])
					.reverse() // Reverse the array of seat rows
					.map((seatRow, index: number) => (
						<Flex key={index}>
							{seatRow.map((seat, index: number) => (
								<MovieSeat
									isNotAvailable={reservedSeats}
									seat={seat}
									defaultPrice={defaultPrice}
									key={index}
									isSelected={selectedSeats}
									onSeatClick={handleOnSeatClick}
								/>
							))}
						</Flex>
					))}
			</Center>

			{/* TypeCard */}
			<Center>
				<Grid templateColumns="repeat(3, 1fr)" gap={20}>
					{seatType.map((type, index: number) => (
						<Box key={index}>
							<TypeOfSeatCard
								type={type.type_name}
								price={type.price_modifier * defaultPrice}
							/>
						</Box>
					))}
				</Grid>
			</Center>
			<Flex justifyContent="center" marginTop="20px">
				<Text>
					Selected Seat No:{" "}
					{selectedSeats.length > 0
						? selectedSeats.join(", ")
						: "None"}
				</Text>
				<Text marginLeft="20px">Total Price: {totalPrice} THB</Text>
			</Flex>

			{/* Buy buton */}
			<Center marginTop={6}>
				<Button
					bg="gold"
					_hover={{ bg: "gold" }}
					size="md"
					width="15rem"
					onClick={handleBuy} // Trigger function on button click
				>
					BUY
				</Button>
			</Center>

			{/* Modal for displaying the message */}
			<Modal
				isOpen={isOpenNoSeatSelectBuy}
				onClose={onCloseNoSeatSelectBuy}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader color="black">
						Please select a seat
					</ModalHeader>
					<ModalBody color="black">
						You haven't selected a seat yet. Please select a seat
						before proceeding.
					</ModalBody>
					<ModalFooter>
						<Button
							bg="gold"
							_hover={{ bg: "gold" }}
							mr={3}
							onClick={onCloseNoSeatSelectBuy}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
			<Modal
				isOpen={isOpenErrorBuyingSeats}
				onClose={onCloseErrorBuyingSeats}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader color="black">Error buying seats</ModalHeader>
					<ModalBody color="black">
						There are some errors while buying seats. Please try
						again
					</ModalBody>
					<ModalFooter>
						<Button
							bg="gold"
							_hover={{ bg: "gold" }}
							mr={3}
							onClick={onCloseErrorBuyingSeats}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ScreenPage;
