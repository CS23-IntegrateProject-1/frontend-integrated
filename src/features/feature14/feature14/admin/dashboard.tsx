import React, { useState, useEffect } from "react";
import {
	Box,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	Input,
	Button,
	useMediaQuery,
} from "@chakra-ui/react";
import Chart from "chart.js/auto";

import SortingModal from "../components/SortingModal";
import FilteringModal from "../components/FilteringModal";
import RestaurantCard from "../components/RestaurantCard";

const buttonWidthPercentage = "90%";
const chartWidthPercentage = "30%";
const cutoutPercentage = 25;
const chartMarginPercentage = "15%";

const Dashboard: React.FC = () => {
	const [selectedRestaurant, setSelectedRestaurant] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [data, setData] = useState([]);

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
	const [sortBy, setSortBy] = useState<string>("");
	const [showLoyalCustomers, setShowLoyalCustomers] = useState<boolean>(true);
	const [showNormalCustomers, setShowNormalCustomers] =
		useState<boolean>(true);
	const [date1, setDate1] = useState("2023-01-01"); // Replace with your start date
	const [date2, setDate2] = useState("2023-01-31"); // Replace with your end date
	const [showSortingModal, setShowSortingModal] = useState<boolean>(false);
	const [showFilteringModal, setShowFilteringModal] =
		useState<boolean>(false);

	const baseFontSize = isSmallerScreen ? 16 : 10;
	const fontSize = `calc(${buttonWidthPercentage} / ${baseFontSize})`;

	const RestaurantCard = ({
		name,
		businessType,
		monthlyRevenue,
		commission,
	}) => {
		const cardFontSize = isSmallerScreen ? "14px" : "16px";

		useEffect(() => {
			const fetchData = async () => {
				try {
					const result = await axios.get("/");
					setData(result.data);
				} catch (error) {
					console.error("Error fetching data:", error);
				}
			};

			fetchData();
		}, []);

		return (
			<Box
				backgroundColor="#200944"
				color="white"
				padding="20px"
				margin="10px 0"
				borderRadius="8px"
				border="1px solid #763FAF"
				display="flex"
				alignItems="center"
				fontSize={cardFontSize}>
				<img
					src="url_to_your_image"
					alt="Restaurant Image"
					style={{
						width: "100px",
						height: "100px",
						marginRight: "20px",
					}}
				/>
				<div>
					<h2>{name}</h2>
					<p>Business - {businessType}</p>
					<p>Monthly Revenue - {monthlyRevenue} Baht</p>
					<p>Commission (10%) - {commission} Baht</p>
				</div>
			</Box>
		);
	};

	useEffect(() => {
		let customersChart: Chart;
		let businessesChart: Chart;

		const customersChartCanvas = document.getElementById(
			"customersChart"
		) as HTMLCanvasElement;
		const businessesChartCanvas = document.getElementById(
			"businessesChart"
		) as HTMLCanvasElement;

		if (customersChartCanvas && businessesChartCanvas) {
			const buttonWidth = businessesChartCanvas.offsetWidth;

			customersChart = new Chart(customersChartCanvas, {
				type: "doughnut",
				data: {
					labels: ["Loyal Customers", "Normal Customers"],
					datasets: [
						{
							data: [70, 30],
							backgroundColor: ["#5F0DBB", "#D9D9D9"],
						},
					],
				},
				options: {
					cutout: cutoutPercentage,
					plugins: {
						legend: {
							display: false,
						},
					},
				},
			});

			businessesChart = new Chart(businessesChartCanvas, {
				type: "doughnut",
				data: {
					labels: ["Restaurant", "Bar", "Club"],
					datasets: [
						{
							data: [50, 30, 20],
							backgroundColor: ["#5F0DBB", "#763FAF", "#D9D9D9"],
						},
					],
				},
				options: {
					cutout: cutoutPercentage,
					plugins: {
						legend: {
							display: false,
						},
					},
				},
			});
		}

		return () => {
			customersChart?.destroy();
			businessesChart?.destroy();
		};
	}, [isSmallerScreen]);

	return (
		<Box
			backgroundColor="#200944"
			padding="20px"
			display="flex"
			flexDirection="column"
			alignItems="center"
			height="100vh">
			{/* <Box
        width={buttonWidthPercentage}
        display="flex"
        justifyContent="space-between"
        mb="10px"
      >
        <Button
          width="33.33%"
          variant={isSmallerScreen ? ('solid' || 'outline') : undefined}
          colorScheme={isSmallerScreen ? 'whiteAlpha' : 'purple'}
          borderRadius={isSmallerScreen ? '20px' : 'full'}
          fontSize={fontSize}
          my="1%"
          mx="1%"
          py={isSmallerScreen ? '12px' : '0'}
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          border="1px solid white"
          backgroundColor={'#200944'}
          _hover={{ backgroundColor: '#763FAF', border: '1px solid #763FAF' }}
          _active={{ backgroundColor: '#763FAF', border: '1px solid #763FAF' }}
        >
          Business
        </Button>

        <Button
          width="33.33%"
          variant={isSmallerScreen ? ('solid' || 'outline') : undefined}
          colorScheme={isSmallerScreen ? 'whiteAlpha' : 'purple'}
          borderRadius={isSmallerScreen ? '20px' : 'full'}
          fontSize={fontSize}
          my="1%"
          mx="1%"
          py={isSmallerScreen ? '12px' : '0'}
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          border="1px solid white"
          backgroundColor={'#200944'}
          _hover={{ backgroundColor: '#763FAF', border: '1px solid #763FAF' }}
          _active={{ backgroundColor: '#763FAF', border: '1px solid #763FAF' }}
        >
          Customer
        </Button>

        <Button
          width="33.33%"
          variant={isSmallerScreen ? ('solid' || 'outline') : undefined}
          colorScheme={isSmallerScreen ? 'whiteAlpha' : 'purple'}
          borderRadius={isSmallerScreen ? '20px' : 'full'}
          fontSize={fontSize}
          my="1%"
          mx="1%"
          py={isSmallerScreen ? '12px' : '0'}
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          border="1px solid white"
          backgroundColor={'#200944'}
          _hover={{ backgroundColor: '#763FAF', border: '1px solid #763FAF' }}
          _active={{ backgroundColor: '#763FAF', border: '1px solid #763FAF' }}
        >
          Reservation
        </Button>
      </Box> */}

			<Box
				color="#D9D9D9"
				mb="20px"
				alignSelf="flex-start"
				fontSize={fontSize}
				marginLeft={isSmallerScreen ? "14%" : "0"}>
				Total Business - 245
			</Box>

			<Box
				display="flex"
				justifyContent="center"
				width={buttonWidthPercentage}
				mb="20px">
				<Box
					textAlign="left"
					width={chartWidthPercentage}
					marginRight={chartMarginPercentage}>
					<canvas
						id="customersChart"
						width={chartWidthPercentage}
						height={chartWidthPercentage}></canvas>
					<span
						style={{
							backgroundColor: "#5F0DBB",
							borderRadius: "50%",
							display: "inline-block",
							width: "6px",
							height: "6px",
							marginTop: "5px",
							marginRight: "8px",
						}}></span>
					<span
						style={{
							fontSize: isSmallerScreen ? "8px" : "10px",
							lineHeight: "1",
							verticalAlign: "middle",
							marginLeft: "2px",
						}}>
						Loyal Customers - 70%
					</span>
					<br />
					<span
						style={{
							backgroundColor: "#D9D9D9",
							borderRadius: "50%",
							display: "inline-block",
							width: "6px",
							height: "6px",
							marginTop: "4px",
							marginRight: "8px",
						}}></span>
					<span
						style={{
							fontSize: isSmallerScreen ? "8px" : "10px",
							lineHeight: "1",
							verticalAlign: "middle",
							marginLeft: "2px",
						}}>
						Normal Customers - 30%
					</span>
				</Box>
				<Box textAlign="left" width={chartWidthPercentage}>
					<canvas
						id="businessesChart"
						width={chartWidthPercentage}
						height={chartWidthPercentage}></canvas>
					<span
						style={{
							backgroundColor: "#5F0DBB",
							borderRadius: "50%",
							display: "inline-block",
							width: "6px",
							height: "6px",
							marginTop: "5px",
							marginRight: "8px",
						}}></span>
					<span
						style={{
							fontSize: isSmallerScreen ? "8px" : "10px",
							lineHeight: "1",
							verticalAlign: "middle",
							marginLeft: "2px",
						}}>
						Restaurant - 50%
					</span>
					<br />
					<span
						style={{
							backgroundColor: "#763FAF",
							borderRadius: "50%",
							display: "inline-block",
							width: "6px",
							height: "6px",
							marginTop: "4px",
							marginRight: "8px",
						}}></span>
					<span
						style={{
							fontSize: isSmallerScreen ? "8px" : "10px",
							lineHeight: "1",
							verticalAlign: "middle",
							marginLeft: "2px",
						}}>
						Bar - 30%
					</span>
					<br />
					<span
						style={{
							backgroundColor: "#D9D9D9",
							borderRadius: "50%",
							display: "inline-block",
							width: "6px",
							height: "6px",
							marginTop: "4px",
							marginRight: "8px",
						}}></span>
					<span
						style={{
							fontSize: isSmallerScreen ? "8px" : "10px",
							lineHeight: "1",
							verticalAlign: "middle",
							marginLeft: "2px",
						}}>
						Club - 20%
					</span>
				</Box>
			</Box>
			{/* Static information and filter button */}
			<Box
				backgroundColor="#763FAF"
				color="white"
				padding="20px"
				margin="10px 0"
				borderRadius="8px"
				border="1px solid #763FAF"
				display="flex"
				flexDirection="column"
				width={buttonWidthPercentage}>
				<p
					style={{
						fontSize: `calc(${baseFontSize} * 2)`,
					}}>{`Static from ${date1} to ${date2}`}</p>
				<div
					style={{
						borderBottom: "1px solid white",
						paddingBottom: "10px",
					}}>
					<p style={{ fontSize: `calc(${baseFontSize} * 1.5)` }}>
						Number of Receipts
					</p>
				</div>
				<div
					style={{
						borderBottom: "1px solid white",
						paddingBottom: "10px",
					}}>
					<p style={{ fontSize: `calc(${baseFontSize} * 1.5)` }}>
						Revenue
					</p>
				</div>
				<div
					style={{
						borderBottom: "1px solid white",
						paddingBottom: "10px",
					}}>
					<p style={{ fontSize: `calc(${baseFontSize} * 1.5)` }}>
						Harmony to Partners
					</p>
				</div>
				<div
					style={{
						borderBottom: "1px solid white",
						paddingBottom: "10px",
					}}>
					<p style={{ fontSize: `calc(${baseFontSize} * 1.5)` }}>
						Net Profit
					</p>
				</div>
				<Button
					variant="link"
					colorScheme="white"
					fontSize={fontSize}
					onClick={() => {
						setShowFilteringModal(!showFilteringModal);
					}}>
					Filter
				</Button>
			</Box>
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
