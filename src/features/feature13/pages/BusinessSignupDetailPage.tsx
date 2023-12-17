import { FC, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Box, Button, Select, Text } from "@chakra-ui/react";
import textStyles from "../../../theme/foundations/textStyles";
import SignupInput from "../components/DetailedSignupComponents/Input";
import OpeningContainer from "../components/DetailedSignupComponents/OpeningContainer";
import { IoAddCircleOutline } from "react-icons/io5";

const BusinessSignupDetailPage: FC = () => {
	// const navigate = useNavigate();
	const [name, setName] = useState("");
	const [aboutUs, setAboutUs] = useState("");
	const [address, setAddress] = useState("");
	// const [openTime, setOpenTime] = useState("");
	// const [closeTime, setCloseTime] = useState("");
	const [category, setCategory] = useState("");
	const [capacity, setCapacity] = useState("");
	const [deposite, setDeposite] = useState("");
	const [website, setWebsite] = useState("");
	const [phone, setPhone] = useState("");
	const [promptpay, setPromptpay] = useState("");

	name;
	aboutUs;
	address;
	category;
	capacity;
	deposite;
	website;
	phone;
	promptpay;

	const marginTop = "1.5vh";
	const px = "35px";
	return (
		<Box>
			{/* Back ground shadow*/}
			<Box
				// background={"rgba(0, 0, 0, 0.5)"}
				w="100%"
				borderRadius={"100px 0 0 0 "}
				position="absolute"
				left={"0px"}
				top={"17vh"}
				boxShadow={"0px 0px 20px 10px rgba(95, 13, 187, 1) "}>
				<Box
					marginTop={"1.5vh"}
					pt={"35px"}
					display={"flex"}
					flexDir={"column"}
					justifyContent={"center"}>
					<Box
						display={"flex"}
						flexDir={"column"}
						alignItems={"center"}
						justifyContent={"center"}>
						<SignupInput
							px={px}
							marginTop={marginTop}
							setter={setName}
							title={"Name"}
						/>
						<SignupInput
							px={px}
							marginTop={marginTop}
							setter={setAboutUs}
							title={"About us"}
						/>
						<SignupInput
							px={px}
							marginTop={marginTop}
							setter={setAddress}
							title={"Address"}
						/>
						<Box marginTop={marginTop} w={"90%"}>
							<Box
								px={"35px"}
								display={"flex"}
								justifyContent={"start"}
								alignItems={"start"}>
								<Text style={textStyles.h3}>
									Opening date and time
								</Text>
							</Box>
							<OpeningContainer />
						</Box>
						<Box marginTop={marginTop} w={"90%"} px={"35px"}>
							<Text
								style={textStyles.h3}
								fontWeight={"bold"}
								marginBottom={"5px"}>
								Category
							</Text>
							<Select
								backgroundColor={"brand.300"}
								border={0}
								onChange={(e) => {
									setCategory(e.target.value);
								}}>
								<option value=""></option>
								<option value="Club">Club</option>
								<option value="Bar">Bar</option>
								<option value="Restaurant">Restaurant</option>
							</Select>
						</Box>
						<SignupInput
							px={px}
							marginTop={marginTop}
							setter={setCapacity}
							title={"Capacity"}
						/>
						<SignupInput
							px={px}
							marginTop={marginTop}
							setter={setDeposite}
							title={"Deposite"}
						/>
						<SignupInput
							px={px}
							marginTop={marginTop}
							setter={setWebsite}
							title={"Website"}
						/>
						<Box
							py={"10px"}
							w={"75%"}
							display={"flex"}
							flexDir={"row"}
							justifyContent={"start"}
							alignItems={"start"}>
							<Text style={textStyles.h3}>Payment</Text>
						</Box>
						<Box
							border={"1px"}
							borderRadius={"10px"}
							borderColor={"grey.300"}
							w={"80%"}
							p={0}
							display={"flex"}
							flexDir={"row"}
							justifyContent={"center"}
							alignItems={"center"}>
							<Box
								pt={"5px"}
								pb={"20px"}
								w={"100%"}
								display={"flex"}
								flexDir={"column"}
								justifyContent={"center"}
								alignItems={"center"}>
								<SignupInput
									px={"0"}
									marginTop={marginTop}
									setter={setPhone}
									title={"Phone number"}
								/>
								<SignupInput
									px={"0"}
									marginTop={marginTop}
									setter={setPromptpay}
									title={"Prompt pay number"}
								/>
							</Box>
						</Box>
						<Box
							border={"1px"}
							borderRadius={"10px"}
							borderColor={"grey.300"}
							w={"80%"}
							p={0}
							display={"flex"}
							flexDir={"row"}
							justifyContent={"center"}
							alignItems={"center"}>
							<Box
								pt={"5px"}
								pb={"20px"}
								w={"100%"}
								display={"flex"}
								flexDir={"column"}
								justifyContent={"center"}
								alignItems={"center"}>
								<Box w={"90%"} marginTop={marginTop}>
									<Text
										style={textStyles.h3}
										fontWeight={"bold"}
										marginBottom={"5px"}>
										Credit Cards
									</Text>
									<Box
										display={"flex"}
										flexDir={"row"}
										justifyContent={"start"}
										alignItems={"center"}
										borderRadius="7px"
										border={"1px"}
										px={"30px"}
										w={"281px"}
										h={"50px"}
										style={textStyles.h4}>
										<IoAddCircleOutline size={"20px"} />
										<Text
											marginLeft={"10px"}
											style={textStyles.h4}>
											Add Card
										</Text>
									</Box>
								</Box>
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
							onClick={() => {}}>
							Sign up
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default BusinessSignupDetailPage;
