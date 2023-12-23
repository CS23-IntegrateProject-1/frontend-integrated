import { useState, useEffect, FC } from "react";
import { Text, Box, Input, Button } from "@chakra-ui/react";
import SortingModal from "../components/SortingModal";
import FilteringModal from "../components/FilteringModal";
import { IChartData } from "../../../interfaces/AdminDashboard/IChartData.interface";
import { Axios } from "../../../AxiosInstance";
import { TextStyle } from "../../../theme/TextStyle";
import RestaurantCard from "../components/RestaurantCard";
import { Charts } from "../components/Charts";
import { RevenueCard } from "../components/RevenueCard";
import { getAllVenue } from "../../../api/admin/getAllVenue";
import { IVenue } from "../../../interfaces/AdminDashboard/IVenue.interface";
import textStyles from "../../../theme/foundations/textStyles";

const Dashboard: FC = () => {
	const [chartData, setChartData] = useState<IChartData | undefined>(
		undefined
	);
	const [venueData, setVenueData] = useState<IVenue[]>([]);
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [showSortingModal, setShowSortingModal] = useState<boolean>(false);
	const [showFilteringModal, setShowFilteringModal] =
		useState<boolean>(false);
	const [options, setOptions] = useState<{
		Restaurant: boolean;
		Club: boolean;
		Bar: boolean;
	}>({
		Restaurant: true,
		Club: true,
		Bar: true,
	});

	const handleOptionChange = (option: string) => {
		setOptions((prevOptions) => ({
			...prevOptions,
			[option]: !prevOptions[option as keyof typeof options],
		}));
	};

	const handleApplyFilter = () => {
		setShowFilteringModal(false);
	};

	const fetchChartData = async () => {
		const response = await Axios.get("/feature14/getDashboard");
		const { data } = response;
		setChartData(data);
	};

	const fetchVenue = async () => {
		const response = await getAllVenue();
		setVenueData(response);
	};

	const RenderVenue: FC = () => {
		return venueData.map((venue: IVenue, index: number) => (
			<RestaurantCard
				filterOptions={options}
				key={index}
				searchTerm={searchTerm}
				businessType={venue.category}
				commission={venue.commission}
				monthlyRevenue={venue.revenue}
				name={venue.name}
				img={venue.venue_picture}
				id={venue.venueId}
			/>
		));
	};

	useEffect(() => {
		fetchChartData();
		fetchVenue();
	}, []);

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
					onClick={() => {
						setShowSortingModal(!showSortingModal);
					}}
					marginBottom="10px">
					<Text style={textStyles.h3}>Sort</Text>
				</Button>

				<Button
					variant="link"
					colorScheme="white"
					onClick={() => {
						setShowFilteringModal(!showFilteringModal);
					}}
					marginBottom="10px">
					<Text style={textStyles.h3}>Filter</Text>
				</Button>

				<SortingModal
					isOpen={showSortingModal}
					venueData={venueData}
					setVenueData={setVenueData}
					onClose={() => {
						setShowSortingModal(false);
					}}
				/>

				<FilteringModal
					handleApplyFilter={handleApplyFilter}
					handleOptionChange={handleOptionChange}
					options={options}
					isOpen={showFilteringModal}
					onClose={() => {
						setShowFilteringModal(false);
					}}
				/>
			</Box>
			<RenderVenue />
		</Box>
	);
};

export default Dashboard;
