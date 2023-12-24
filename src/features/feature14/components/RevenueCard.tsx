import { FC, useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { TextStyle } from "../../../theme/TextStyle";
import { getStatistic } from "../../../api/admin/getStatistic";
import { IStatistic } from "../../../interfaces/AdminDashboard/IStatistic.interface";

export const RevenueCard: FC = () => {
	const [statistics, setStatistics] = useState<IStatistic | undefined>(
		undefined
	);
	const fetchStatistics = async () => {
		const response = await getStatistic();
		setStatistics(response);
	};

	useEffect(() => {
		fetchStatistics();
	}, []);
	if (statistics === undefined) {
		return (
			<Box
				backgroundColor="#763FAF"
				color="white"
				padding="20px"
				borderRadius="8px"
				display="flex"
				alignItems={"center"}
				w={"90%"}
				flexDirection="column">
				<Text style={TextStyle.h2}>Loading...</Text>
			</Box>
		);
	}
	return (
		<Box
			my={"20px"}
			backgroundColor="#763FAF"
			color="white"
			padding="20px"
			borderRadius="8px"
			display="flex"
			w={"90%"}
			flexDirection="column">
			<Box
				display={"flex"}
				justifyContent={"space-between"}
				alignItems={"center"}>
				<Text style={TextStyle.h2}>Number of Receipts</Text>
				<Text style={TextStyle.h3}>{statistics.receipt}</Text>
			</Box>
			<Box
				display={"flex"}
				justifyContent={"space-between"}
				alignItems={"center"}>
				<Text style={TextStyle.h2}>Revenue</Text>
				<Text style={TextStyle.h3}>{statistics.revenue}</Text>
			</Box>
			<Box
				display={"flex"}
				justifyContent={"space-between"}
				alignItems={"center"}>
				<Text style={TextStyle.h2}>Harmoni to Partners</Text>
				<Text style={TextStyle.h3}>{statistics.toPartners}</Text>
			</Box>
			<Box
				display={"flex"}
				justifyContent={"space-between"}
				alignItems={"center"}>
				<Text style={TextStyle.h2}>Net Profit</Text>
				<Text style={TextStyle.h3}>{statistics.netProfit}</Text>
			</Box>
		</Box>
	);
};
