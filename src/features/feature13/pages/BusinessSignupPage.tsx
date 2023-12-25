import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import textStyles from "../../../theme/foundations/textStyles";
import { BusinessSignup } from "../../../api/Auth/BusinessSignup";
// import google from "../images/google.png";

const BusinessSignupPage: FC = () => {
	const navigate = useNavigate();
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [isPassMatch, setIsPassMatch] = useState(true);
	const marginTop = "1.5vh";
	const handleLogin = () => {
		navigate("/business/login");
	};
	const handlePrivacyPolicy = () => {};
	const handleTermOfService = () => {};
	const handleSignup = async () => {
		if (password !== confirmPassword) {
			setIsPassMatch(false);
			return;
		}
		const response = await BusinessSignup(username, phone, email, password);

		if (response?.status === 201) {
			alert("Sign up successfully");
			navigate("/business/login");
		} else if (response?.status === 401) {
			alert("Sign up failed");
		} else if (response?.status === 409) {
			alert("Username already exists");
		}
	};
	return (
		<Box>
			{/* Back ground shadow*/}
			<Box
				w="100%"
				borderRadius={"100px 0 0 0 "}
				position="absolute"
				left={"0px"}
				top={"17vh"}
				boxShadow={"0px 0px 20px 10px rgba(95, 13, 187, 1) "}>
				<Box padding={"35px"} marginTop={"1.5vh"}>
					<Box
						display={"flex"}
						flexDir={"column"}
						alignItems={"center"}
						justifyContent={"center"}>
						<Box w={"90%"} marginTop={marginTop}>
							<Text
								style={textStyles.h3}
								fontWeight={"bold"}
								marginBottom={"5px"}>
								Username
							</Text>
							<Input
								borderRadius="7px"
								boxSizing="border-box"
								bg="brand.100"
								type="text"
								placeholder="Username"
								onChange={(e) => {
									setUsername(e.target.value);
								}}
								_placeholder={{ color: "white" }}
								style={textStyles.h4}
							/>
						</Box>
						<Box w={"90%"} marginTop={marginTop}>
							<Text
								style={textStyles.h3}
								fontWeight={"bold"}
								marginBottom={"5px"}>
								Phone number
							</Text>
							<Input
								borderRadius="7px"
								boxSizing="border-box"
								bg="brand.100"
								type="text"
								placeholder="Phone number"
								onChange={(e) => {
									setPhone(e.target.value);
								}}
								_placeholder={{ color: "white" }}
								style={textStyles.h4}
							/>
						</Box>
						<Box w={"90%"} marginTop={marginTop}>
							<Text
								style={textStyles.h3}
								fontWeight={"bold"}
								marginBottom={"5px"}>
								Email
							</Text>
							<Input
								borderRadius="7px"
								boxSizing="border-box"
								bg="brand.100"
								type="text"
								placeholder="Email"
								onChange={(e) => {
									setEmail(e.target.value);
								}}
								_placeholder={{ color: "white" }}
								style={textStyles.h4}
							/>
						</Box>
						<Box w={"90%"} marginTop={marginTop}>
							<Text
								style={textStyles.h3}
								fontWeight={"bold"}
								marginBottom={"5px"}>
								Password
							</Text>
							<Input
								borderRadius="7px"
								boxSizing="border-box"
								bg="brand.100"
								type="password"
								placeholder="Password"
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								_placeholder={{ color: "white" }}
								style={textStyles.h4}
							/>
						</Box>
						<Box w={"90%"} marginTop={marginTop}>
							<Text
								style={textStyles.h3}
								fontWeight={"bold"}
								marginBottom={"5px"}>
								Confirm password
							</Text>
							<Input
								borderRadius="7px"
								boxSizing="border-box"
								bg="brand.100"
								type="password"
								placeholder="Confirm password"
								onChange={(e) => {
									setConfirmPassword(e.target.value);
								}}
								_placeholder={{ color: "white" }}
								style={textStyles.h4}
							/>
							<Box display={"flex"} marginTop={"2vh"}>
								<Text style={textStyles.h4}>
									By clicking signup, you agree to
									our&nbsp;&nbsp;
								</Text>

								<Text
									style={textStyles.h4}
									color={"brand.100"}
									onClick={handlePrivacyPolicy}
									textDecor={"underline"}>
									{" "}
									privacy policy
								</Text>
							</Box>
							<Box display={"flex"}>
								<Text style={textStyles.h4}>
									&nbsp;&nbsp;and&nbsp;&nbsp;
								</Text>
								<Text
									style={textStyles.h4}
									color={"brand.100"}
									onClick={handleTermOfService}
									textDecor={"underline"}>
									terms of service
								</Text>
							</Box>

							{!isPassMatch ? (
								<Text
									style={textStyles.h4}
									color="red"
									marginTop="5px">
									Password does not match
								</Text>
							) : (
								<></>
							)}
						</Box>
					</Box>
					{/* Button*/}
					<Button
						// type="submit"
						bg="brand.200"
						color="white"
						width="30vw"
						display="block"
						margin="auto"
						marginTop="2vh"
						style={textStyles.h2}
						onClick={handleSignup}>
						Sign up
					</Button>
					<br />
					{/* <Text textAlign="center" style={textStyles.h4}>
						Sign up with
					</Text>
					<Image
						src={google}
						alt="google"
						boxSize="24px"
						margin="auto"
						marginBottom="3vh"
						marginTop="3vh"
					/> */}
					<Box>
						<Text textAlign="center" style={textStyles.h4}>
							Don't have an account?{" "}
							<Text
								as={"u"}
								style={textStyles.h4}
								onClick={handleLogin}
								textDecor={"underline"}>
								Login
							</Text>
						</Text>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default BusinessSignupPage;
