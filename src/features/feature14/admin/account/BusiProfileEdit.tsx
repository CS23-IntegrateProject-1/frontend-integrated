import { AddIcon, TimeIcon } from "@chakra-ui/icons";
import {
	Box,
	Input,
	Select,
	Flex,
	Text,
	Avatar,
	Stack,
	Tab,
	TabList,
	TabIndicator,
	TabPanel,
	Tabs,
	TabPanels,
	InputGroup,
	InputRightElement,
	Center,
	ButtonGroup,
	Button,
	FormControl,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { TextStyle } from "../../../../theme/TextStyle";
import { NavLink, useParams } from "react-router-dom";

// import { AddCard } from "./AddCard";
import { Axios } from "../../../../AxiosInstance";
import { CreditCard } from "./interface/ICreditCard.interface";

interface Availability {
	openingDay: OpeningDay;
}

interface OpeningDay {
	Mon: AvailabilityTime;
	Tue: AvailabilityTime;
	Wed: AvailabilityTime;
	Thu: AvailabilityTime;
	Fri: AvailabilityTime;
	Sat: AvailabilityTime;
	Sun: AvailabilityTime;
}

interface AvailabilityTime {
	openingTime: string;
	closingTime: string;
}

const defaultAvailability: Availability = {
	openingDay: {
		Mon: {
			openingTime: "00:00",
			closingTime: "00:00",
		},
		Tue: {
			openingTime: "00:00",
			closingTime: "00:00",
		},
		Wed: {
			openingTime: "00:00",
			closingTime: "00:00",
		},
		Thu: {
			openingTime: "00:00",
			closingTime: "00:00",
		},
		Fri: {
			openingTime: "00:00",
			closingTime: "00:00",
		},
		Sat: {
			openingTime: "00:00",
			closingTime: "00:00",
		},
		Sun: {
			openingTime: "00:00",
			closingTime: "00:00",
		},
	},
};

export const BusiProfileEdit = () => {
	const [selectedFile, setSelectedFile] = useState("");
	const [tabIndex, setTabIndex] = useState(0);
	const [name, setName] = useState("");
	const [aboutUs, setAboutUs] = useState("");
	const [address, setAddress] = useState("");
	const [phNo, setphNo] = useState("");
	const [promptNo, setpromptNo] = useState("");
	const [category, setCategory] = useState("");
	const [capacity, setCapacity] = useState("");
	const [website, setWebsite] = useState("");
	const [cardInfo] = useState<string>("");
	const [cardData] = useState<CreditCard[]>([]);
	const venueId = Number(useParams<{ id: string }>().id);
	if (cardData) console.log(cardData);
	const [availability, setAvailability] =
		useState<Availability>(defaultAvailability);

	const handleCancel = () => {
		window.history.back();
	};
	console.log(tabIndex + " index no from tab");
	console.log(name + " name");
	console.log(aboutUs + " about us");
	console.log(address + " address");
	console.log(phNo + " ph no");
	console.log(promptNo + " prompt no");
	console.log(category + " category");
	//check the data of Opening Day date and time

	//load the data when the page is loaded
	useEffect(() => {
		//venue data
		const url = `/feature1/admin/venue/${venueId}`;
		Axios.get(url, { withCredentials: true }).then((response) => {
			if (response.status === 200) {
				console.log(response.data);
				setName(response.data.name);
				setAboutUs(response.data.description);
				setAddress(response.data.address);
				setCategory(response.data.category);
				setCapacity(response.data.capacity);
				setWebsite(response.data.website);
			}
		});
		//prompt pay and phno
		const url1 = `/feature1/admin/venue/promptpay/${venueId}`;
		Axios.get(url1, { withCredentials: true }).then((response) => {
			if (response.status === 200) {
				console.log(response.data);
				setpromptNo(response.data.prompt_pay_number);
				setphNo(response.data.business_phone_number);
			}
		});
	}, []);
	const handleProfileImageChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		if (!e.target.files) {
			return;
		}
		const selectedFile = e.target.files[0];
		console.log("selected file: ", selectedFile);
		//create url
		const objectUrl = URL.createObjectURL(selectedFile);
		console.log(objectUrl);
		setSelectedFile(objectUrl);
	};

	const handleSave = async (e: { preventDefault: () => void }) => {
		//check the data of Opening Day date and time
		e.preventDefault();
		const venueImage = new FormData();
		venueImage.append("image_url", selectedFile);

		//Venue Data
		const venueDataUrl = `/feature1/admin/venue/info/${venueId}`;
		//send a put request to the backend to update a new payment method
		Axios.put(
			venueDataUrl,
			{
				name: name,
				description: aboutUs,
				address: address,
				category: category,
				capacity: capacity,
				website: website,
			},
			{ withCredentials: true }
		)
			.then((response) => {
				if (response.status === 200) {
					console.log(" venue data updated");
				}
			})
			.catch((error) => {
				console.error("Error saving data :", error);
			});

		//venue opening time
		const venueTime = `/feature1admin/venue/opening_hours/${venueId}`;
		Axios.put(
			venueTime,
			{
				Mon: {
					open: availability.openingDay.Mon.openingTime + ":00",
					close: availability.openingDay.Mon.closingTime + ":00",
				},
				Tue: {
					open: availability.openingDay.Tue.openingTime + ":00",
					close: availability.openingDay.Tue.closingTime + ":00",
				},
				Wed: {
					open: availability.openingDay.Wed.openingTime + ":00",
					close: availability.openingDay.Wed.closingTime + ":00",
				},
				Thu: {
					open: availability.openingDay.Thu.openingTime + ":00",
					close: availability.openingDay.Thu.closingTime + ":00",
				},
				Fri: {
					open: availability.openingDay.Fri.openingTime + ":00",
					close: availability.openingDay.Fri.closingTime + ":00",
				},
				Sat: {
					open: availability.openingDay.Sat.openingTime + ":00",
					close: availability.openingDay.Sat.closingTime + ":00",
				},
				Sun: {
					open: availability.openingDay.Sun.openingTime + ":00",
					close: availability.openingDay.Sun.closingTime + ":00",
				},
			},
			{ withCredentials: true }
		)
			.then((response) => {
				if (response.status === 200) {
					console.log(response.data);
					//setAvailability(response.data);
				}
			})
			.catch((error) => {
				console.error("Error saving data :", error);
			});
		//venue prompt pay
		const promptpay = `/feature1/admin/venue/promptpay/${venueId}`;
		Axios.put(
			promptpay,
			{
				promptpay_number: parseInt(promptNo),
			},
			{ withCredentials: true }
		)
			.then((response) => {
				if (response.status === 200) {
					console.log(response.data);
					setpromptNo(response.data);
				}
			})
			.catch((error) => {
				console.error("Error saving data :", error);
			});
	};

	// function setButtonClick(arg0: boolean): void {
	//     throw new Error("Function not implemented.");
	// }

	return (
		<FormControl>
			{/* <Stack direction={{ lg: 'row', base: 'column' }}>
                <Box ml={{ lg: '-2' }} width={{ lg: '45%' }}> */}
			<Flex mt={8} alignItems={"center"} justifyContent={"center"}>
				{/* Img Upload */}
				<Box cursor={"pointer"}>
					<Box position={"relative"} cursor={"pointer"}>
						<Avatar
							size={"xl"}
							src={
								selectedFile
									? selectedFile
									: "https://bit.ly/broken-link"
							}
						/>
						{/* button to change image */}
						<Box position={"absolute"} top={51} left={20}>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<circle
									cx="12"
									cy="12"
									r="11"
									fill="white"
									stroke="#A0AEC0"
									stroke-width="2"
								/>
								<path
									d="M13.3733 10.0133L13.9867 10.6267L7.94667 16.6667H7.33333V16.0533L13.3733 10.0133ZM15.7733 6C15.6067 6 15.4333 6.06667 15.3067 6.19333L14.0867 7.41333L16.5867 9.91333L17.8067 8.69333C17.8685 8.63166 17.9175 8.5584 17.951 8.47775C17.9844 8.3971 18.0016 8.31065 18.0016 8.22333C18.0016 8.13602 17.9844 8.04957 17.951 7.96892C17.9175 7.88827 17.8685 7.81501 17.8067 7.75333L16.2467 6.19333C16.1133 6.06 15.9467 6 15.7733 6ZM13.3733 8.12667L6 15.5V18H8.5L15.8733 10.6267L13.3733 8.12667Z"
									fill="#A0AEC0"
								/>
							</svg>
						</Box>
						<Input
							type="file"
							height="100%"
							width="100%"
							position="absolute"
							top="0"
							left="0"
							opacity="0"
							aria-hidden="true"
							accept="image/*"
							onChange={handleProfileImageChange}
						/>
					</Box>
				</Box>
			</Flex>
			<Stack direction={{ lg: "row", base: "column" }}>
				<Box ml={{ lg: "100" }} width={{ lg: "60%" }}></Box>
				<Box width={{ lg: "50%", sm: "100%" }}></Box>
			</Stack>

			{/* Input Name */}
			<Box mt={5}>
				<Text
					fontSize={TextStyle.h2.fontSize}
					fontWeight={TextStyle.h1.fontWeight}>
					Name
				</Text>
				<Input
					focusBorderColor="brand.300"
					_hover={{ borderColor: "brand.300" }}
					size="md"
					bg={"brand.300"}
					borderColor={"brand.300"}
					value={name}
					onChange={(e) => setName(e.target.value)}></Input>
			</Box>
			<Box mt={5}>
				<Text
					fontSize={TextStyle.h2.fontSize}
					fontWeight={TextStyle.h1.fontWeight}>
					About Us
				</Text>
				<Input
					focusBorderColor="brand.300"
					_hover={{ borderColor: "brand.300" }}
					size="md"
					bg={"brand.300"}
					borderColor={"brand.300"}
					value={aboutUs}
					onChange={(e) => setAboutUs(e.target.value)}></Input>
			</Box>
			<Box mt={5}>
				<Text
					fontSize={TextStyle.h2.fontSize}
					fontWeight={TextStyle.h1.fontWeight}>
					Address
				</Text>
				<Input
					focusBorderColor="brand.300"
					_hover={{ borderColor: "brand.300" }}
					size="md"
					bg={"brand.300"}
					borderColor={"brand.300"}
					value={address}
					onChange={(e) => setAddress(e.target.value)}></Input>
			</Box>
			{/* {JSON.stringify(availability, null, 2)} */}
			{/* Open Hours and Date */}
			<Tabs
				mt={5}
				position="relative"
				variant="unstyled"
				onChange={(index) => setTabIndex(index)}>
				<TabList
					fontSize={TextStyle.h2.fontSize}
					fontWeight={TextStyle.h1.fontWeight}>
					<Tab>Mon</Tab>
					<Tab>Tue</Tab>
					<Tab>Wed</Tab>
					<Tab>Thu</Tab>
					<Tab>Fri</Tab>
					<Tab>Sat</Tab>
					<Tab>Sun</Tab>
				</TabList>
				<TabIndicator
					mt="-1.5px"
					height="2px"
					bg="brand.100"
					borderRadius="1px"
				/>
				<TabPanels>
					{/* Monday */}
					<TabPanel>
						<Flex
							ml={{ lg: "55" }}
							mr={{ lg: "155" }}
							flexDirection={"row"}
							justifyContent={"space-between"}>
							<InputGroup
								size="sm"
								width={{ base: "45%", lg: "25%" }}>
								<Input
									size="m"
									type="time"
									value={
										availability.openingDay.Mon.openingTime
									}
									onChange={(e) =>
										setAvailability({
											...availability,
											openingDay: {
												...availability.openingDay,
												Mon: {
													...availability.openingDay
														.Mon,
													openingTime: e.target.value,
												},
											},
										})
									}
								/>
								<InputRightElement>
									<TimeIcon />
								</InputRightElement>
							</InputGroup>
							<InputGroup
								size="sm"
								width={{ base: "45%", lg: "25%" }}>
								<Input
									size="m"
									type="time"
									value={
										availability.openingDay.Mon.closingTime
									}
									onChange={(e) =>
										setAvailability({
											...availability,
											openingDay: {
												...availability.openingDay,
												Mon: {
													...availability.openingDay
														.Mon,
													closingTime: e.target.value,
												},
											},
										})
									}
								/>
								<InputRightElement>
									<TimeIcon />
								</InputRightElement>
							</InputGroup>
						</Flex>
					</TabPanel>
					{/* Tuesday */}
					<TabPanel>
						<Flex
							ml={{ lg: "55" }}
							mr={{ lg: "155" }}
							flexDirection={"row"}
							justifyContent={"space-between"}>
							<InputGroup
								size="sm"
								width={{ base: "45%", lg: "25%" }}>
								<Input
									size="m"
									type="time"
									value={
										availability.openingDay.Tue.openingTime
									}
									onChange={(e) =>
										setAvailability({
											...availability,
											openingDay: {
												...availability.openingDay,
												Tue: {
													...availability.openingDay
														.Tue,
													openingTime: e.target.value,
												},
											},
										})
									}
								/>
								<InputRightElement>
									<TimeIcon />
								</InputRightElement>
							</InputGroup>
							<InputGroup
								size="sm"
								width={{ base: "45%", lg: "25%" }}>
								<Input
									size="m"
									type="time"
									value={
										availability.openingDay.Tue.closingTime
									}
									onChange={(e) =>
										setAvailability({
											...availability,
											openingDay: {
												...availability.openingDay,
												Tue: {
													...availability.openingDay
														.Tue,
													closingTime: e.target.value,
												},
											},
										})
									}
								/>
								<InputRightElement>
									<TimeIcon />
								</InputRightElement>
							</InputGroup>
						</Flex>
					</TabPanel>
					{/* Wednesday */}
					<TabPanel>
						<Flex
							ml={{ lg: "55" }}
							mr={{ lg: "155" }}
							flexDirection={"row"}
							justifyContent={"space-between"}>
							<InputGroup
								size="sm"
								width={{ base: "45%", lg: "25%" }}>
								<Input
									size="m"
									type="time"
									value={
										availability.openingDay.Wed.openingTime
									}
									onChange={(e) =>
										setAvailability({
											...availability,
											openingDay: {
												...availability.openingDay,
												Wed: {
													...availability.openingDay
														.Wed,
													openingTime: e.target.value,
												},
											},
										})
									}
								/>
								<InputRightElement>
									<TimeIcon />
								</InputRightElement>
							</InputGroup>
							<InputGroup
								size="sm"
								width={{ base: "45%", lg: "25%" }}>
								<Input
									size="m"
									type="time"
									value={
										availability.openingDay.Wed.closingTime
									}
									onChange={(e) =>
										setAvailability({
											...availability,
											openingDay: {
												...availability.openingDay,
												Wed: {
													...availability.openingDay
														.Wed,
													closingTime: e.target.value,
												},
											},
										})
									}
								/>
								<InputRightElement>
									<TimeIcon />
								</InputRightElement>
							</InputGroup>
						</Flex>
					</TabPanel>
					{/* Thursday */}
					<TabPanel>
						<Flex
							ml={{ lg: "55" }}
							mr={{ lg: "155" }}
							flexDirection={"row"}
							justifyContent={"space-between"}>
							<InputGroup
								size="sm"
								width={{ base: "45%", lg: "25%" }}>
								<Input
									size="m"
									type="time"
									value={
										availability.openingDay.Thu.openingTime
									}
									onChange={(e) =>
										setAvailability({
											...availability,
											openingDay: {
												...availability.openingDay,
												Thu: {
													...availability.openingDay
														.Thu,
													openingTime: e.target.value,
												},
											},
										})
									}
								/>
								<InputRightElement>
									<TimeIcon />
								</InputRightElement>
							</InputGroup>
							<InputGroup
								size="sm"
								width={{ base: "45%", lg: "25%" }}>
								<Input
									size="m"
									type="time"
									value={
										availability.openingDay.Thu.closingTime
									}
									onChange={(e) =>
										setAvailability({
											...availability,
											openingDay: {
												...availability.openingDay,
												Thu: {
													...availability.openingDay
														.Thu,
													closingTime: e.target.value,
												},
											},
										})
									}
								/>
								<InputRightElement>
									<TimeIcon />
								</InputRightElement>
							</InputGroup>
						</Flex>
					</TabPanel>
					{/* Friday */}
					{/* Tuesday */}
					<TabPanel>
						<Flex
							ml={{ lg: "55" }}
							mr={{ lg: "155" }}
							flexDirection={"row"}
							justifyContent={"space-between"}>
							<InputGroup
								size="sm"
								width={{ base: "45%", lg: "25%" }}>
								<Input
									size="m"
									type="time"
									value={
										availability.openingDay.Fri.openingTime
									}
									onChange={(e) =>
										setAvailability({
											...availability,
											openingDay: {
												...availability.openingDay,
												Fri: {
													...availability.openingDay
														.Fri,
													openingTime: e.target.value,
												},
											},
										})
									}
								/>
								<InputRightElement>
									<TimeIcon />
								</InputRightElement>
							</InputGroup>
							<InputGroup
								size="sm"
								width={{ base: "45%", lg: "25%" }}>
								<Input
									size="m"
									type="time"
									value={
										availability.openingDay.Fri.closingTime
									}
									onChange={(e) =>
										setAvailability({
											...availability,
											openingDay: {
												...availability.openingDay,
												Fri: {
													...availability.openingDay
														.Fri,
													closingTime: e.target.value,
												},
											},
										})
									}
								/>
								<InputRightElement>
									<TimeIcon />
								</InputRightElement>
							</InputGroup>
						</Flex>
					</TabPanel>
					{/* Saturday */}
					<TabPanel>
						<Flex
							ml={{ lg: "55" }}
							mr={{ lg: "155" }}
							flexDirection={"row"}
							justifyContent={"space-between"}>
							<InputGroup
								size="sm"
								width={{ base: "45%", lg: "25%" }}>
								<Input
									size="m"
									type="time"
									value={
										availability.openingDay.Sat.openingTime
									}
									onChange={(e) =>
										setAvailability({
											...availability,
											openingDay: {
												...availability.openingDay,
												Sat: {
													...availability.openingDay
														.Sat,
													openingTime: e.target.value,
												},
											},
										})
									}
								/>
								<InputRightElement>
									<TimeIcon />
								</InputRightElement>
							</InputGroup>
							<InputGroup
								size="sm"
								width={{ base: "45%", lg: "25%" }}>
								<Input
									size="m"
									type="time"
									value={
										availability.openingDay.Sat.closingTime
									}
									onChange={(e) =>
										setAvailability({
											...availability,
											openingDay: {
												...availability.openingDay,
												Sat: {
													...availability.openingDay
														.Sat,
													closingTime: e.target.value,
												},
											},
										})
									}
								/>
								<InputRightElement>
									<TimeIcon />
								</InputRightElement>
							</InputGroup>
						</Flex>
					</TabPanel>
					{/* Sunday */}
					<TabPanel>
						<Flex
							ml={{ lg: "55" }}
							mr={{ lg: "155" }}
							flexDirection={"row"}
							justifyContent={"space-between"}>
							<InputGroup
								size="sm"
								width={{ base: "45%", lg: "25%" }}>
								<Input
									size="m"
									type="time"
									value={
										availability.openingDay.Sun.openingTime
									}
									onChange={(e) =>
										setAvailability({
											...availability,
											openingDay: {
												...availability.openingDay,
												Sun: {
													...availability.openingDay
														.Sun,
													openingTime: e.target.value,
												},
											},
										})
									}
								/>
								<InputRightElement>
									<TimeIcon />
								</InputRightElement>
							</InputGroup>
							<InputGroup
								size="sm"
								width={{ base: "45%", lg: "25%" }}>
								<Input
									size="m"
									type="time"
									value={
										availability.openingDay.Sun.closingTime
									}
									onChange={(e) =>
										setAvailability({
											...availability,
											openingDay: {
												...availability.openingDay,
												Sun: {
													...availability.openingDay
														.Sun,
													closingTime: e.target.value,
												},
											},
										})
									}
								/>
								<InputRightElement>
									<TimeIcon />
								</InputRightElement>
							</InputGroup>
						</Flex>
					</TabPanel>
					<TabPanel>
						<Flex
							ml={{ lg: "55" }}
							mr={{ lg: "155" }}
							flexDirection={"row"}
							justifyContent={"space-between"}>
							<InputGroup
								size="sm"
								width={{ base: "45%", lg: "25%" }}>
								<Input size="m" type="time" />
								<InputRightElement>
									<TimeIcon />
								</InputRightElement>
							</InputGroup>
							<InputGroup
								size="sm"
								width={{ base: "45%", lg: "25%" }}>
								<Input size="m" type="time" />
								<InputRightElement>
									<TimeIcon />
								</InputRightElement>
							</InputGroup>
						</Flex>
					</TabPanel>
				</TabPanels>
			</Tabs>
			{/* </Box> */}
			{/* <Box ml={{ lg: '10' }} width={{ lg: '50%', sm: '100%' }}> */}
			{/* DropDown Category */}
			<Text>Category</Text>
			<Select
				onChange={(e) => setCategory(e.target.value)}
				value={category}
				placeholder="Select option"
				bg={"brand.300"}
				borderColor={"brand.300"}>
				<option value="restaurant">Restaurant</option>
				<option value="club">Club</option>
				<option value="bar">Bar</option>
			</Select>
			{/* Input Name */}
			<Box mt={5}>
				<Text
					fontSize={TextStyle.h2.fontSize}
					fontWeight={TextStyle.h1.fontWeight}>
					Capacity
				</Text>
				<Input
					onChange={(e) => setCapacity(e.target.value)}
					value={capacity}
					focusBorderColor="brand.300"
					_hover={{ borderColor: "brand.300" }}
					size="md"
					bg={"brand.300"}
					borderColor={"brand.300"}></Input>
			</Box>
			{/* <Box mt={5}>
                        <Text fontSize={TextStyle.h2.fontSize} fontWeight={TextStyle.h1.fontWeight}>Deposite</Text>
                        <Input onChange={(e) => setDeposite(e.target.value)} value={deposite} focusBorderColor='brand.300' _hover={{ borderColor: 'brand.300' }} size='md' bg={'brand.300'} borderColor={'brand.300'}></Input>
                    </Box> */}
			<Box mt={5}>
				<Text
					fontSize={TextStyle.h2.fontSize}
					fontWeight={TextStyle.h1.fontWeight}>
					Website
				</Text>
				<Input
					onChange={(e) => setWebsite(e.target.value)}
					value={website}
					focusBorderColor="brand.300"
					_hover={{ borderColor: "brand.300" }}
					size="md"
					bg={"brand.300"}
					borderColor={"brand.300"}></Input>
			</Box>
			{/* {phNo} */}
			<Box mt={8}>
				<Text
					fontSize={TextStyle.h2.fontSize}
					fontWeight={TextStyle.h3.fontWeight}>
					Payment
				</Text>
			</Box>
			<Box my={4}>
				<Text mb={1}>Phone Number</Text>
				<Input
					w="100%"
					borderRadius="7px"
					borderColor={"brand.300"}
					p="7px 15px"
					boxSizing="border-box"
					mb="5vh"
					bg="brand.300"
					type="phone"
					_placeholder={{ color: "white" }}
					_hover={{ borderColor: "brand.300" }}
					id="one"
					value={phNo}
					onChange={(e) => setphNo(e.target.value)}
				/>
			</Box>
			{/* PromptPay Number */}
			<Box mt={-7}>
				<Text mb={1}>Prompt pay Number</Text>
				<Input
					w="100%"
					borderRadius="7px"
					borderColor={"brand.300"}
					p="7px 15px"
					boxSizing="border-box"
					mb="5vh"
					bg="brand.300"
					type="phone"
					_placeholder={{ color: "white" }}
					_hover={{ borderColor: "brand.300" }}
					id="two"
					value={promptNo}
					onChange={(e) => setpromptNo(e.target.value)}
				/>
			</Box>
			{/* Credit Cards */}
			<Box
				bg={"brand.300"}
				fontSize={TextStyle.h2.fontSize}
				fontWeight={TextStyle.h3.fontWeight}
				py={4}
				px={4}
				mx={-4}
				mt={15}>
				To Add Credit Card
			</Box>
			{/* {cardInfo} */}
			<Box
				mt={15}
				border={"1px solid white"}
				borderRadius={"5"}
				px={25}
				py={8}
				pt={25}
				cursor={"pointer"}>
				{/* radio group */}
				<NavLink to={"/business/BusiAddCard"} state={cardInfo}>
					<Flex
						py={5}
						border={"1px solid"}
						borderColor={"brand.100"}
						borderRadius={"7"}
						width={"100%"}
						// onClick={handleAddCard}
					>
						<Box pl={10}>
							<AddIcon
								border="1.2px solid white"
								borderRadius="50%"
								padding={0.5}
							/>
						</Box>
						<Text pl={35}>Add Card</Text>
					</Flex>
				</NavLink>
			</Box>
			{/* </Box>
            </Stack> */}
			{/* two buttons */}
			<Center pb={5}>
				<ButtonGroup pt={2} spacing="6">
					<Button
						// onClick={handleCancel}
						bg="white"
						color="brand.200"
						width="30vw"
						display="block"
						margin="auto"
						marginTop="5vh"
						onClick={() => handleCancel}>
						Cancel
					</Button>
					<Button
						_hover={{ bg: "brand.200" }}
						bg="brand.200"
						color="white"
						width="30vw"
						display="block"
						margin="auto"
						marginTop="5vh"
						onClick={handleSave}>
						Save
					</Button>
				</ButtonGroup>
			</Center>
		</FormControl>
	);
};
