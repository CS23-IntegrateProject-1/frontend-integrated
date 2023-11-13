import { Box, Input } from "@chakra-ui/react";
import textStyles from "../../../theme/foundations/textStyles";

const SignupPage = () => {
	return (
		<Box
			w="100%"
			height="100vh"
			borderRadius={"125px 0 0 0 "}
			position="absolute"
			left="-2px"
            boxShadow={"0px 0px 20px 10px rgba(95, 13, 187, 1) "}
            display={"flex"}
            flexDir={"row"}
            
        >
            <Box marginTop={"60px"} />
			<Input
				w="243px"
				borderRadius="7px"
				p="7px 15px"
				boxSizing="border-box"
				mb="5vh"
				bg="brand.100"
				type="text"
				placeholder="Username"
				_placeholder={{ color: "white" }}
				style={textStyles.h4}
			/>
		</Box>
	);
};

export default SignupPage;
