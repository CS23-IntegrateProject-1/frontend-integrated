import { FC, useEffect } from "react";
import { IChartData } from "../../../interfaces/AdminDashboard/IChartData.interface";
import { Chart, ChartType } from "chart.js";
import { Box, Text } from "@chakra-ui/react";
import { TextStyle } from "../../../theme/TextStyle";

export const Charts: FC<{ chartData: IChartData | undefined }> = ({
	chartData,
}) => {
	useEffect(() => {
		if (chartData === undefined) return;
		let customersChart: Chart;
		let businessesChart: Chart;

		const customersChartCanvas = document.getElementById(
			"customersChart"
		) as HTMLCanvasElement;
		const businessesChartCanvas = document.getElementById(
			"businessesChart"
		) as HTMLCanvasElement;

		if (customersChartCanvas && businessesChartCanvas) {
			// const buttonWidth = businessesChartCanvas.offsetWidth;

			customersChart = new Chart(customersChartCanvas, {
				type: "doughnut" as ChartType,
				data: {
					labels: ["Loyal Customers", "Normal Customers"],
					datasets: [
						{
							data: [
								chartData.userTiers.loyalCustomer,
								chartData.userTiers.normalCustomer,
							],
							backgroundColor: ["#5F0DBB", "#D9D9D9"],
						},
					],
				},
				options: {
					plugins: {
						legend: {
							display: false,
						},
					},
				},
			});

			businessesChart = new Chart(businessesChartCanvas, {
				type: "doughnut" as ChartType,
				data: {
					labels: ["Restaurant", "Bar", "Club"],
					datasets: [
						{
							data: [
								chartData.venueTypes.restaurantVenue,
								chartData.venueTypes.barVenue,
								chartData.venueTypes.clubVenue,
							],
							backgroundColor: ["#5F0DBB", "#763FAF", "#D9D9D9"],
						},
					],
				},
				options: {
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
	}, [chartData]);

	return (
		<Box display="flex" justifyContent="space-around" width={"100%"}>
			{/* Main Box */}
			<Box
				textAlign="left"
				width={"40%"}
				display={"flex"}
				flexDir={"column"}
				justifyContent={"start"}
				alignItems={"center"}>
				<canvas id="customersChart" />
				<Box
					display={"flex"}
					flexDir={"row"}
					alignItems={"center"}
					mt={"10px"}>
					<Box
						border={"1px"}
						borderRadius={"10px"}
						borderColor={"#5F0DBB"}
						bg={"#5F0DBB"}
						w={"10px"}
						h={"10px"}
						mr={"10px"}
					/>
					<Text style={TextStyle.h4}>
						Loyal - {chartData?.userTiers.loyalCustomer.toFixed(0)}{" "}
						%
					</Text>
				</Box>
				<br />
				<Box display={"flex"} flexDir={"row"} alignItems={"center"}>
					<Box
						border={"1px"}
						borderRadius={"10px"}
						borderColor={"#D9D9D9"}
						bg={"#D9D9D9"}
						w={"10px"}
						h={"10px"}
						mr={"10px"}
					/>
					<Text style={TextStyle.h4}>
						Normal -{" "}
						{chartData?.userTiers.normalCustomer.toFixed(0)}%
					</Text>
				</Box>
			</Box>
			<Box
				textAlign="left"
				width={"40%"}
				display={"flex"}
				flexDir={"column"}
				justifyContent={"start"}>
				<canvas id="businessesChart" />
				<Box
					display={"flex"}
					flexDir={"row"}
					alignItems={"center"}
					mt={"10px"}>
					<Box
						border={"1px"}
						borderRadius={"10px"}
						borderColor={"#5F0DBB"}
						bg={"#5F0DBB"}
						w={"10px"}
						h={"10px"}
						mr={"10px"}
					/>
					<Text style={TextStyle.h4}>
						Restaurant -
						{chartData?.venueTypes.restaurantVenue.toFixed(0)} %
					</Text>
				</Box>
				<br />
				<Box display={"flex"} flexDir={"row"} alignItems={"center"}>
					<Box
						border={"1px"}
						borderRadius={"10px"}
						borderColor={"#763FAF"}
						bg={"#763FAF"}
						w={"10px"}
						h={"10px"}
						mr={"10px"}
					/>
					<Text style={TextStyle.h4}>
						Bar - {chartData?.venueTypes.barVenue.toFixed(0)}%
					</Text>
				</Box>
				<br />
				<Box display={"flex"} flexDir={"row"} alignItems={"center"}>
					<Box
						border={"1px"}
						borderRadius={"10px"}
						borderColor={"#D9D9D9"}
						bg={"#D9D9D9"}
						w={"10px"}
						h={"10px"}
						mr={"10px"}
					/>
					<Text style={TextStyle.h4}>
						Club - {chartData?.venueTypes.clubVenue.toFixed(0)}%
					</Text>
				</Box>
			</Box>
		</Box>
	);
};
