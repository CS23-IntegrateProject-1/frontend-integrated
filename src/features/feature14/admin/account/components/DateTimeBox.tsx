import { Box, Input, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import textStyles from "../../../../../theme/foundations/textStyles";
import { DayCheck as Dc } from "./DayCheck";
import { IOpeningDayState } from "../../../../../interfaces/business/IOpeningDay.interface";

const DateTimeBox: FC<{
	index: number;
	handleDaySelect: (day: keyof IOpeningDayState, index: number) => void;
	handleTimeChange: (
		startTime: string,
		endTime: string,
		index: number
	) => void;
	dayStatus: (day: keyof IOpeningDayState) => number | undefined;
}> = ({ handleDaySelect, dayStatus, index, handleTimeChange }) => {
	const [startTime, setStartTime] = useState("");
	const [endTime, setEndTime] = useState("");
	const [timeRequired, setTimeRequired] = useState(true);
	const [timeChangeCnt, setTimeChangeCnt] = useState(0);

	const handleTimeRequired = () => {
		setTimeChangeCnt((prev) => prev + 1);
		if (timeChangeCnt >= 1) {
			setTimeRequired(false);
		}
	};

	const handleTimeOnChange = (time: string, timeType: string) => {
		handleTimeRequired();
		switch (timeType) {
			case "start":
				handleTimeChange(time, "", index);
				setStartTime(time || "");
				return;
			case "end":
				handleTimeChange("", time, index);
				setEndTime(time || "");
				return;
		}
	};
	return (
		<Box w={"98%"} px={"5%"} mt={"1.5vh"}>
			<Box borderRadius={"10px"} border={"1px"} borderColor={"grey.300"}>
				<Box display={"flex"}>
					<Text
						pb={"5px"}
						pl={"20px"}
						pt={"10px"}
						style={textStyles.h3}>
						Opening Hour
					</Text>
					{timeRequired && (
						<Text
							pb={"5px"}
							pl={"20px"}
							pt={"10px"}
							color={"red"}
							style={textStyles.h4}>
							* Time Required
						</Text>
					)}
				</Box>
				<Box>
					<Box
						display={"flex"}
						flexDir={"row"}
						px={"5px"}
						alignItems={"center"}
						justifyContent={"space-evenly"}>
						<Input
							width={"40%"}
							border={0}
							bgColor={"brand.300"}
							type="time"
							onChange={(e) => {
								handleTimeOnChange(e.target.value, "start");
							}}
						/>
						<Input
							width={"40%"}
							border={0}
							bgColor={"brand.300"}
							type="time"
							onChange={(e) => {
								handleTimeOnChange(e.target.value, "end");
							}}
						/>
					</Box>
					<Box
						px={"10px"}
						py={"10px"}
						display={"flex"}
						justifyContent={"space-around"}>
						<Dc
							timeRequired={timeRequired}
							handleTimeChange={handleTimeChange}
							startTime={startTime || ""}
							endTime={endTime || ""}
							index={index}
							dayStatus={dayStatus}
							handleDaySelect={handleDaySelect}
							Day={"Sun"}
						/>
						<Dc
							timeRequired={timeRequired}
							handleTimeChange={handleTimeChange}
							startTime={startTime || ""}
							endTime={endTime || ""}
							index={index}
							dayStatus={dayStatus}
							handleDaySelect={handleDaySelect}
							Day={"Mon"}
						/>
						<Dc
							timeRequired={timeRequired}
							handleTimeChange={handleTimeChange}
							startTime={startTime || ""}
							endTime={endTime || ""}
							index={index}
							dayStatus={dayStatus}
							handleDaySelect={handleDaySelect}
							Day={"Tue"}
						/>
						<Dc
							timeRequired={timeRequired}
							handleTimeChange={handleTimeChange}
							startTime={startTime || ""}
							endTime={endTime || ""}
							index={index}
							dayStatus={dayStatus}
							handleDaySelect={handleDaySelect}
							Day={"Wed"}
						/>
						<Dc
							timeRequired={timeRequired}
							handleTimeChange={handleTimeChange}
							startTime={startTime || ""}
							endTime={endTime || ""}
							index={index}
							dayStatus={dayStatus}
							handleDaySelect={handleDaySelect}
							Day={"Thu"}
						/>
						<Dc
							timeRequired={timeRequired}
							handleTimeChange={handleTimeChange}
							startTime={startTime || ""}
							endTime={endTime || ""}
							index={index}
							dayStatus={dayStatus}
							handleDaySelect={handleDaySelect}
							Day={"Fri"}
						/>
						<Dc
							timeRequired={timeRequired}
							handleTimeChange={handleTimeChange}
							startTime={startTime || ""}
							endTime={endTime || ""}
							index={index}
							dayStatus={dayStatus}
							handleDaySelect={handleDaySelect}
							Day={"Sat"}
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default DateTimeBox;
