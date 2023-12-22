import { Box, Image, Button, Input, Text } from "@chakra-ui/react";
import textStyles from "../../../theme/foundations/textStyles";
import google from "../img/google.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signup } from "../../../api/Auth/Signup";

export const SignupPage = () => {
	const navigate = useNavigate();
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [addId, setAddId] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [isPassMatch, setIsPassMatch] = useState(true);
	const marginTop = "2vh";
	const handleLogin = () => {
		navigate("/login");
	};
	const handleSignup = async () => {
		if (password !== confirmPassword) {
			setIsPassMatch(false);
			return;
		}
		const response = await signup(
			firstname,
			lastname,
			username,
			phone,
			email,
			password,
			addId
		);

		if (response?.status === 201) {
			alert("Sign up successfully");
			navigate("/login");
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
				left="-2px"
				top={"10vh"}
				boxShadow={"0px 0px 20px 10px rgba(95, 13, 187, 1) "}>
				<Box padding={"35px"} marginTop={"1.5vh"}>
					<Box
						display={"flex"}
						flexDirection={"row"}
						justifyContent={"space-between"}>
						<Box w={"47%"}>
							<Text
								style={textStyles.h3}
								fontWeight={"bold"}
								marginBottom={"5px"}>
								First name
							</Text>
							<Input
								borderRadius="7px"
								boxSizing="border-box"
								bg="brand.100"
								type="text"
								placeholder="First Name"
								onChange={(e) => {
									setFirstname(e.target.value);
								}}
								_placeholder={{ color: "white" }}
								style={textStyles.h4}
							/>
						</Box>
						<Box w={"47%"}>
							<Text
								style={textStyles.h3}
								fontWeight={"bold"}
								marginBottom={"5px"}>
								Last name
							</Text>
							<Input
								borderRadius="7px"
								boxSizing="border-box"
								bg="brand.100"
								type="text"
								placeholder="Last Name"
								onChange={(e) => {
									setLastname(e.target.value);
								}}
								_placeholder={{ color: "white" }}
								style={textStyles.h4}
							/>
						</Box>
					</Box>
					<Box w={"100%"} marginTop={marginTop}>
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
					<Box w={"100%"} marginTop={marginTop}>
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
					<Box w={"100%"} marginTop={marginTop}>
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
					<Box w={"100%"} marginTop={marginTop}>
						<Text
							style={textStyles.h3}
							fontWeight={"bold"}
							marginBottom={"5px"}>
							Add ID
						</Text>
						<Input
							borderRadius="7px"
							boxSizing="border-box"
							bg="brand.100"
							type="text"
							placeholder="Add ID"
							onChange={(e) => {
								setAddId(e.target.value);
							}}
							_placeholder={{ color: "white" }}
							style={textStyles.h4}
						/>
					</Box>
					<Box w={"100%"} marginTop={marginTop}>
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
					<Box w={"100%"} marginTop={marginTop}>
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
					{/* Button*/}
					<Button
						// type="submit"
						bg="brand.200"
						color="white"
						width="30vw"
						display="block"
						margin="auto"
						marginTop="5vh"
						style={textStyles.h2}
						onClick={handleSignup}>
						Sign up
					</Button>
					<br />
					<Text textAlign="center" style={textStyles.h4}>
						Sign up with
					</Text>
					<Image
						src={google}
						alt="google"
						boxSize="24px"
						margin="auto"
						marginBottom="3vh"
						marginTop="3vh"
					/>
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
