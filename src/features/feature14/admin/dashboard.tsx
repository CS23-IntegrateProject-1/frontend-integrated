import { useState, useEffect, FC } from "react";
import { Text, Box, Input, Button, useMediaQuery } from "@chakra-ui/react";
import SortingModal from "../components/SortingModal";
import FilteringModal from "../components/FilteringModal";
import { IChartData } from "../../../interfaces/Dashboard/IChartData.interface";
import { Axios } from "../../../AxiosInstance";
import { TextStyle } from "../../../theme/TextStyle";
import RestaurantCard from "../components/RestaurantCard";
import { Charts } from "../components/Charts";
import { RevenueCard } from "../components/RevenueCard";

const buttonWidthPercentage = "90%";

const Dashboard: FC = () => {
	const [selectedRestaurant, setSelectedRestaurant] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [chartData, setChartData] = useState<IChartData | undefined>(
		undefined
	);

	const fetchChartData = async () => {
		const response = await Axios.get("/feature14/getDashboard");
		const { data } = response;
		setChartData(data);
		console.log(data);
	};

	useEffect(() => {
		fetchChartData();
	}, []);

	// Dummy restaurant data
	const restaurants = [
		{
			name: "Restaurant1",
			businessType: "Type1",
			monthlyRevenue: 10000,
			commission: 1000,
		},
		{
			name: "Restaurant2",
			businessType: "Type2",
			monthlyRevenue: 8000,
			commission: 800,
		},
		// Add more restaurant data as needed
	];

	const openModal = (restaurant) => {
		setSelectedRestaurant(restaurant);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setSelectedRestaurant(null);
		setIsModalOpen(false);
	};

	const [isSmallerScreen] = useMediaQuery("(max-width: 767px)");
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [showSortingModal, setShowSortingModal] = useState<boolean>(false);
	const [showFilteringModal, setShowFilteringModal] =
		useState<boolean>(false);

	const baseFontSize = isSmallerScreen ? 16 : 10;
	const fontSize = `calc(${buttonWidthPercentage} / ${baseFontSize})`;

	return (
		<Box
			backgroundColor="#200944"
			padding="20px"
			display="flex"
			flexDirection="column"
			alignItems="center"
			height="100vh">
			<Box
				color="#D9D9D9"
				mb="20px"
				alignSelf="flex-start"
				fontSize={"medium"}>
				<Text style={TextStyle.h2}>
					Total Business - {chartData?.businessCount}
				</Text>
			</Box>

			<Charts chartData={chartData} />

			{/* Static information and filter button */}

			<RevenueCard />

			<Box
				width={buttonWidthPercentage}
				mb="20px"
				display="flex"
				justifyContent="space-between"
				alignItems="center">
				<Input
					value={searchTerm}
					onChange={(e) => {
						setSearchTerm(e.target.value);
					}}
					placeholder="Search..."
					marginRight="10px"
					style={{ backgroundColor: "white", color: "black" }} // Styles for white background
				/>

				<Button
					variant="link"
					colorScheme="white"
					fontSize={fontSize}
					onClick={() => {
						setShowSortingModal(!showSortingModal);
					}}
					marginBottom="10px">
					Sort
				</Button>

				<Button
					variant="link"
					colorScheme="white"
					fontSize={fontSize}
					onClick={() => {
						setShowFilteringModal(!showFilteringModal);
					}}
					marginBottom="10px">
					Filter
				</Button>

				<SortingModal
					isOpen={showSortingModal}
					onClose={() => {
						setShowSortingModal(false);
					}}
				/>

				<FilteringModal
					isOpen={showFilteringModal}
					onClose={() => {
						setShowFilteringModal(false);
					}}
				/>
			</Box>

			<RestaurantCard
				name="Restaurant Name 1"
				businessType="Restaurant"
				monthlyRevenue={50000}
				commission={5000}
			/>

			<RestaurantCard
				name="Restaurant Name 2"
				businessType="Bar"
				monthlyRevenue={30000}
				commission={3000}
			/>
		</Box>
	);
};

export default Dashboard;
