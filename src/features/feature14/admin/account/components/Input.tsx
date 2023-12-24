import { Box, Text, Input } from "@chakra-ui/react";
import textStyles from "../../../../../theme/foundations/textStyles";
import { FC } from "react";

const SignupInput: FC<{
	marginTop: string;
	setter: (value: string) => void;
	title: string;
	px: string;
}> = ({ marginTop, setter, title, px }) => {
	return (
		<Box w={"90%"} marginTop={marginTop} px={px}>
			<Text
				style={textStyles.h3}
				fontWeight={"bold"}
				marginBottom={"5px"}>
				{title}
			</Text>
			<Input
				borderRadius="7px"
				border={0}
				bg="brand.300"
				type="text"
				onChange={(e) => {
					setter(e.target.value);
				}}
				style={textStyles.h4}
			/>
		</Box>
	);
};

export default SignupInput;
