/* eslint-disable no-mixed-spaces-and-tabs */
import { FC, useState } from "react";
import DateTimeBox from "./DateTimeBox";
import {
	IOpeningDayState,
	OpeningDayInitialState,
} from "../../../../interfaces/business/IOpeningDay.interface";
import { Box, Text } from "@chakra-ui/react";
import textStyles from "../../../../theme/foundations/textStyles";

const OpeningContainer: FC = () => {
	const [days, setDays] = useState<IOpeningDayState>(OpeningDayInitialState);
	const [objCnt, setObjCnt] = useState(1);
	const dayStatus = (day: keyof IOpeningDayState) => {
		return days[day].isSelected;
	};

	const handleDaySelect = (day: keyof IOpeningDayState, index: number) => {
		setDays((prev) => ({
			...prev,
			[day]:
				prev[day].isSelected === index
					? {
							isSelected: 0,
					  }
					: {
							...prev[day],
							isSelected: index,
					  },
		}));
	};

	const handleTimeChange = (
		startTime: string,
		endTime: string,
		index: number
	) => {
		setDays((prev) => {
			const updatedDays: IOpeningDayState = {} as IOpeningDayState;

			for (const day in prev) {
				if (Object.prototype.hasOwnProperty.call(prev, day)) {
					const currentDay = prev[day as keyof IOpeningDayState];

					// Check if isSelected is equal to objCnt
					if (currentDay.isSelected === index) {
						if (startTime !== "" && endTime !== "") {
							updatedDays[day as keyof IOpeningDayState] = {
								isSelected: currentDay.isSelected,
								startTime: startTime,
								endTime: endTime,
							};
						} else if (startTime !== "") {
							updatedDays[day as keyof IOpeningDayState] = {
								isSelected: currentDay.isSelected,
								startTime: startTime,
							};
						} else if (endTime !== "") {
							updatedDays[day as keyof IOpeningDayState] = {
								isSelected: currentDay.isSelected,
								endTime: endTime,
							};
						}
					} else {
						updatedDays[day as keyof IOpeningDayState] = currentDay;
					}
				}
			}

			return updatedDays;
		});
	};

	const handleClearData = () => {
		setDays((prev) => {
			const updatedDays: IOpeningDayState = {} as IOpeningDayState;

			for (const day in prev) {
				if (Object.prototype.hasOwnProperty.call(prev, day)) {
					const currentDay = prev[day as keyof IOpeningDayState];

					// Check if isSelected is equal to objCnt
					if (currentDay.isSelected === objCnt) {
						updatedDays[day as keyof IOpeningDayState] = {
							isSelected: 0,
							startTime: "",
							endTime: "",
						};
					} else {
						updatedDays[day as keyof IOpeningDayState] = currentDay;
					}
				}
			}

			return updatedDays;
		});
	};

	return (
		<>
			{objCnt > 0 && (
				<DateTimeBox
					handleTimeChange={handleTimeChange}
					index={1}
					dayStatus={dayStatus}
					handleDaySelect={handleDaySelect}
				/>
			)}
			{objCnt > 1 && (
				<DateTimeBox
					handleTimeChange={handleTimeChange}
					index={2}
					dayStatus={dayStatus}
					handleDaySelect={handleDaySelect}
				/>
			)}
			{objCnt > 2 && (
				<DateTimeBox
					handleTimeChange={handleTimeChange}
					index={3}
					dayStatus={dayStatus}
					handleDaySelect={handleDaySelect}
				/>
			)}
			{objCnt > 3 && (
				<DateTimeBox
					handleTimeChange={handleTimeChange}
					index={4}
					dayStatus={dayStatus}
					handleDaySelect={handleDaySelect}
				/>
			)}
			{objCnt > 4 && (
				<DateTimeBox
					handleTimeChange={handleTimeChange}
					index={5}
					dayStatus={dayStatus}
					handleDaySelect={handleDaySelect}
				/>
			)}
			{objCnt > 5 && (
				<DateTimeBox
					handleTimeChange={handleTimeChange}
					index={6}
					dayStatus={dayStatus}
					handleDaySelect={handleDaySelect}
				/>
			)}
			{objCnt > 6 && (
				<DateTimeBox
					handleTimeChange={handleTimeChange}
					index={7}
					dayStatus={dayStatus}
					handleDaySelect={handleDaySelect}
				/>
			)}
			<Box
				display={"flex"}
				justifyContent={"space-around"}
				alignItems={"center"}>
				<Box
					onClick={() => {
						if (objCnt > 6) return;
						setObjCnt((prev) => prev + 1);
					}}>
					<Text
						style={textStyles.h4}
						color={objCnt > 6 ? "grey.300" : "white"}
						textDecor={"underline"}>
						+ Add more
					</Text>
				</Box>
				<Box
					onClick={() => {
						if (objCnt <= 1) return;
						handleClearData();
						setObjCnt((prev) => prev - 1);
						console.log(days);
					}}>
					<Text
						style={textStyles.h4}
						color={objCnt <= 1 ? "grey.300" : "white"}
						textDecor={"underline"}>
						- Remove
					</Text>
				</Box>
			</Box>
		</>
	);
};

export default OpeningContainer;
