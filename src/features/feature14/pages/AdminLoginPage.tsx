import { Box, Heading, Input, Image, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextStyle } from "../../../theme/TextStyle";
import LogoLoginPage from "../Images/LogoLoginPage.png";
import { Adminlogin } from "../../../api/Auth/AdminLogin";

const AdminLoginPage = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isValid, setIsValid] = useState(true);
	const handleLogin = async () => {
		const response = await Adminlogin(username, password);
		if (response?.status === 200) {
			navigate("/admin/dashboard");
			location.reload();
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
						Login
					</Heading>

					<Box>
						{/* Username*/}
						<Input
							w="100%"
							borderRadius="7px"
							p="7px 15px"
							boxSizing="border-box"
							bg="brand.100"
							type="text"
							mb="2vh"
							placeholder="Username"
							onChange={(e) => {
								setUsername(e.target.value);
							}}
							_placeholder={{ color: "white" }}
							style={TextStyle.h4}
						/>
						{/* Password*/}
						<Input
							w="100%"
							borderRadius="7px"
							p="7px 15px"
							boxSizing="border-box"
							bg="brand.100"
							type="password"
							placeholder="Password"
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							_placeholder={{ color: "white" }}
							style={TextStyle.h4}
						/>
						{!isValid && (
							<Text
								style={TextStyle.h4}
								color="red"
								marginTop="5px">
								Password does not match
							</Text>
						)}
						{/* Button*/}
						<Button
							// type="submit"
							bg="brand.200"
							color="white"
							width="30vw"
							display="block"
							margin="auto"
							marginTop="2vh"
							style={TextStyle.h2}
							onClick={handleLogin}>
							Login
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default AdminLoginPage;
