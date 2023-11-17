import {
	Box,
	Image,
	Button,
	Checkbox,
	Heading,
	Input,
	Text
} from "@chakra-ui/react";
import { TextStyle } from "../../../theme/TextStyle";
import LogoLoginPage from "../img/LogoLoginPage.png";
import textStyles from "../../../theme/foundations/textStyles";
import google from "../img/google.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../../api/Auth/Login";

export const LoginPage = () => {
	const navigate = useNavigate();
	const [rememberMe, setRememberMe] = useState(false);
	rememberMe;
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isValid, setIsValid] = useState(true);
	const handleSignUp = () => {
		navigate("/signup");
	};
	const handleLogin = async () => {
		const response = await login(username, password);
		if (response?.status === 200) {
			navigate("/");
		} else if (response?.status === 401) {
			setIsValid(false);
		}
	};
	return (
		<Box>
			<Image
				boxSize="150px"
				display="block"
				margin="auto"
				borderRadius="10px"
				src={LogoLoginPage}
				alt="Logo"
				marginBottom={"8vh"}
			/>
			{/* Back ground shadow*/}
			<Box
				w="100%"
				h="65%"
				borderRadius={"125px 0 0 0 "}
				position="absolute"
				left="-2px"
				boxShadow={"0px 0px 20px 10px rgba(95, 13, 187, 1) "}>
				<Box as="form" w="70%" m="auto" mt="7vh">
					{/* Headings for the form*/}
					<Heading
						style={TextStyle.h1}
						color={"white"}
						fontFamily={"Matiott Elegant"}
						textAlign={"center"}
						marginBottom={"5vh"}>
						LOGIN
					</Heading>

					<Box>
						{/* Username*/}
						<Input
							w="100%"
							borderRadius="7px"
							p="7px 15px"
							boxSizing="border-box"
							mb="5vh"
							bg="brand.100"
							type="text"
							placeholder="Username"
							onChange={(e) => {
								setUsername(e.target.value);
							}}
							_placeholder={{ color: "white" }}
							style={textStyles.h4}
						/>
						{/* Password*/}
						<Input
							w="100%"
							borderRadius="7px"
							p="7px 15px"
							boxSizing="border-box"
							mb="3vh"
							bg="brand.100"
							type="password"
							placeholder="Password"
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							_placeholder={{ color: "white" }}
							style={textStyles.h4}
						/>
						{!isValid && (
							<Text
								style={textStyles.h4}
								color="red"
								marginTop="5px">
								Password does not match
							</Text>
						)}

						<Box textStyle={"h4"}>
							<Checkbox
								onChange={(e) => {
									setRememberMe(e.target.checked);
								}}>
								Remember me Not working rn
							</Checkbox>
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
							onClick={handleLogin}>
							Login
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
									onClick={handleSignUp}
									textDecor={"underline"}>
									Sign up
								</Text>
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
