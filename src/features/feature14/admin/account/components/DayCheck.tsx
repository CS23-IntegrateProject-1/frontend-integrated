import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";
import textStyles from "../../../../../theme/foundations/textStyles";
import { IOpeningDayState } from "../../../../../interfaces/business/IOpeningDay.interface";

export const DayCheck: FC<{
	Day: string;
	startTime: string;
	endTime: string;
	index: number;
	timeRequired: boolean;
	dayStatus: (day: keyof IOpeningDayState) => number | undefined;
	handleDaySelect: (day: keyof IOpeningDayState, index: number) => void;
	handleTimeChange: (
		startTime: string,
		endTime: string,
		index: number
	) => void;
}> = ({
	Day,
	index,
	startTime,
	endTime,
	timeRequired,
	dayStatus,
	handleDaySelect,
	handleTimeChange,
}) => {
	return (
		<Box
			px={"5px"}
			onClick={() => {
				if (timeRequired) return;
				handleDaySelect(Day as keyof IOpeningDayState, index);

				handleTimeChange(startTime, endTime, index);
			}}>
			<Text
				style={
					index === dayStatus(Day as keyof IOpeningDayState)
						? textStyles.h3
						: textStyles.h4
				}
				color={
					index === dayStatus(Day as keyof IOpeningDayState)
						? "brand.200"
						: dayStatus(Day as keyof IOpeningDayState) === 0
						? "grey.300"
						: "white"
				}>
				{Day}
			</Text>
		</Box>
	);
};
