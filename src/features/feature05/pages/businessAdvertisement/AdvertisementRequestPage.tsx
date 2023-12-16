6
import {
	Box,
	Button,
	Center,
	FormControl,
	FormLabel,
	Icon,
	Select,
	Stack,
	Image,
	IconButton,
	useDisclosure,
	Modal,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Axios } from "../../../../AxiosInstance";

interface AdvertisementProps {
	name: string;
	description: string;
	start_date: Date | null;
	end_date: Date | null;
	images: string;
	customer_type: string;
	target_group: string;
	cost: number;
}
export const AdvertisementRequestPage = () => {
	const navigate = useNavigate();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [file, setFile] = useState<File | null>(null);
	const [imagePreview, setImagePreview] = useState<string | null>(null);
	const [advertise, setAdvertise] = useState<AdvertisementProps>({
		name: "",
		description: "",
		images: "",
		start_date: null,
		end_date: null,
		customer_type: "All",
		target_group: "Teen",
		cost: 300,
	});
	const [formattedStartDate, setFormattedStartDate] = useState<string | null>(
		null
	);
	const [formattedEndDate, setFormattedEndDate] = useState<string | null>(
		null
	);
	// const handleChange = (
	// 	e: React.ChangeEvent<
	// 		HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
	// 	>
	// ) => {
	// 	const { name, value } = e.target;
	// 	const formattedValue = name.includes("date")
	// 		? new Date(value).toISOString()
	// 		: value;
	// 	setAdvertise((prevAdvertise) => ({
	// 		...prevAdvertise,
	// 		[name]: formattedValue,
	// 	}));
	// 	console.log(advertise);
	// };

	//gpt
	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		const { name, value } = e.target;
		const formattedValue = name.includes("date")
			? new Date(value).toISOString().replace("T", " ").replace("Z", "")
			: value;

		  if (
				name === "start_date" &&
				!isNaN(new Date(formattedValue).getTime())
			) {
				setFormattedStartDate(formattedValue);
			}

			if (
				name === "end_date" &&
				!isNaN(new Date(formattedValue).getTime())
			) {
				setFormattedEndDate(formattedValue);
			}

		setAdvertise((prevAdvertise) => ({
			...prevAdvertise,
			[name]: formattedValue,
		}));
	};

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			setFile(e.target.files[0]);
			const previewURL = URL.createObjectURL(e.target.files[0]);
			setImagePreview(previewURL);
		}
	};
	const handleCloseImage = () => {
		setImagePreview(null);
	};
	useEffect(() => {
		return () => {
			if (imagePreview) {
				URL.revokeObjectURL(imagePreview);
			}
		};
	}, [imagePreview]);

	const handleSubmit = async () => {
		console.log(advertise);

		try {
			// Ensure this ID is valid
			console.log("Formatted Start Date:", formattedStartDate);
			console.log("Formatted End Date:", formattedEndDate);
			console.log(advertise);
			console.log(`Sending request to /AdBSN`);
			const response = await Axios.post(`feature5/AdBSN`, {
				...advertise,
				// advertisementPlan: Number(advertise.cost),
				Tags: [],
				start_date: formattedStartDate,
				end_date: formattedEndDate,
			});
			console.log(response.data); // Log the response data
			navigate("/business/advertisement/status");
		} catch (err: any) {
			console.error("Error submitting advertisement:", err);
			// You can add more detailed error handling here
			console.log("Request data:", err.config.data); // Log the request payload
			console.log("Response data:", err.response.data); // Log the response data
		}
	};
	console.log(advertise);

	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			justifyContent={"center"}
			alignItems={"center"}
			width={"100%"}
		>
			{/* Name * */}
			<FormControl
				isRequired
				paddingBottom={3}
				width="50%"
				minWidth="250px"
				maxWidth="400px"
				display="flex"
				flexDirection={"column"}
			>
				<FormLabel style={TextStyle.h2} color={"white"}>
					{" "}
					Name
				</FormLabel>
				<Input
					name="name"
					onChange={handleChange}
					variant="name"
					style={{ width: "auto" }}
					color={"white"}
					bgColor={"#5F0DBB"}
					borderColor={"#5F0DBB"}
					type="email"
				/>
			</FormControl>

			{/* Description * */}
			<FormControl
				isRequired
				paddingBottom={3}
				width="50%"
				minWidth="250px"
				maxWidth="400px"
				display="flex"
				flexDirection={"column"}
			>
				<FormLabel style={TextStyle.h2} color={"white"}>
					{" "}
					Description
				</FormLabel>
				<Input
					name="description"
					onChange={handleChange}
					variant="name"
					style={{ width: "auto" }}
					color={"white"}
					bgColor={"#5F0DBB"}
					borderColor={"#5F0DBB"}
					type="text"
				/>
			</FormControl>

			{/* Starting Date * & Ending Date * */}
			<FormControl
				isRequired
				paddingBottom={3}
				width={"50%"}
				minWidth={"250px"}
				maxWidth={"400px"}
				display={"flex"}
				flexDirection={"row"}
				justifyContent={"center"}
			>
				<Box mr={"20px"} flex={"1"}>
					<FormLabel style={TextStyle.h2} color={"white"}>
						{" "}
						Starting Date
					</FormLabel>
					<Input
						name="start_date"
						onChange={handleChange}
						size={"xs"}
						type="date"
						color="white"
						bgColor={"#5F0DBB"}
						borderRadius={5}
						borderColor={"#5F0DBB"}
						isRequired
					/>
				</Box>

				<Box flex={"1"}>
					<FormLabel style={TextStyle.h2} color={"white"}>
						{" "}
						Ending Date
					</FormLabel>
					<Input
						name="end_date"
						onChange={handleChange}
						id="fileInput"
						size={"xs"}
						type="date"
						color="white"
						bgColor={"#5F0DBB"}
						borderRadius={5}
						borderColor={"#5F0DBB"}
					/>
				</Box>
			</FormControl>

			{/* Image */}

			{imagePreview ? (
				<FormControl
					// isRequired
					width="50%"
					minWidth="250px"
					maxWidth="400px"
					display="flex"
					flexDirection={"column"}
					paddingBottom={3}
				>
					<FormLabel style={TextStyle.h2} color={"white"}>
						Image
					</FormLabel>

					<Box
						position={"relative"}
						overflow={"hidden"}
						width={"100%"}
						minWidth={"250px"}
						maxWidth={"400px"}
						height={"auto"}
						alignSelf={"center"}
					>
						<IconButton
							aria-label="close"
							minWidth={"15px"}
							height={"15px"}
							position={"absolute"}
							top={0}
							right={0}
							as={AiOutlineClose}
							onClick={handleCloseImage}
						></IconButton>
						<Image
							src={imagePreview}
							alt={"image"}
							width={"100%"}
						></Image>
					</Box>
				</FormControl>
			) : (
				<FormControl
					isRequired
					width="50%"
					minWidth="250px"
					maxWidth="400px"
					display="flex"
					flexDirection={"column"}
					paddingBottom={3}
				>
					<FormLabel
						style={TextStyle.h2}
						color={"white"}
						paddingBottom={1}
					>
						{" "}
						Image
					</FormLabel>
					<Stack spacing={2} direction="column">
						{}
						<Center
							width={"auto"}
							height={"100"}
							bg={"#5F0DBB"}
							borderRadius={5}
							cursor={"pointer"}
						>
							<Input
								onChange={handleFileChange}
								type="file"
								opacity={0}
								height={"100%"}
								w={"100%"}
								pos={"absolute"}
							></Input>
							<Icon
								as={BiImageAdd}
								color={"#FFFFFF"}
								width={"auto"}
								height={"8"}
							></Icon>
						</Center>
					</Stack>
				</FormControl>
			)}

			{/* Target customer */}
			<FormControl
				isRequired
				width="50%"
				minWidth="250px"
				maxWidth="400px"
				display="flex"
				flexDirection={"column"}
				paddingBottom={3}
			>
				<FormLabel
					style={TextStyle.h2}
					color={"white"}
					paddingBottom={1}
				>
					{" "}
					Target customer
				</FormLabel>
				<Select
					name="customer_type"
					onChange={handleChange}
					bgColor={"#5F0DBB"}
					borderColor={"#5F0DBB"}
					placeholder=""
					defaultValue={"All"}
				>
					<option value="All">All</option>
					<option value="Member">Member</option>
				</Select>
			</FormControl>

			{/* Target group */}
			<FormControl
				isRequired
				width="50%"
				minWidth="250px"
				maxWidth="400px"
				display="flex"
				flexDirection={"column"}
				paddingBottom={3}
			>
				<FormLabel
					style={TextStyle.h2}
					color={"white"}
					paddingBottom={1}
				>
					{" "}
					Target group
				</FormLabel>
				<Select
					name="target_group"
					onChange={handleChange}
					bgColor={"#5F0DBB"}
					borderColor={"#5F0DBB"}
					defaultValue={"Teen"}
				>
					<option value="Teen">Teen</option>
					<option value="Young_adult">Young Adult</option>
					<option value="Adult">Adult</option>
					<option value="Elder">Elder</option>
				</Select>
			</FormControl>

			{/* Advertisement plan */}
			<FormControl
				isRequired
				width="50%"
				minWidth="250px"
				maxWidth="400px"
				display="flex"
				flexDirection={"column"}
				paddingBottom={3}
			>
				<FormLabel
					style={TextStyle.h2}
					color={"white"}
					paddingBottom={1}
				>
					{" "}
					Advertisement plan
				</FormLabel>
				<Select
					name="cost"
					onChange={handleChange}
					bgColor={"#5F0DBB"}
					borderColor={"#5F0DBB"}
					defaultValue={"300"}
				>
					<option value="100">100 Baht/Week</option>
					<option value="300">300 Baht/Month</option>
					<option value="3600">3600 Baht/Year</option>
				</Select>
			</FormControl>
			{/* <FormControl
				isRequired
				width="50%"
				minWidth="250px"
				maxWidth="400px"
				display="flex"
				flexDirection={"column"}
				paddingBottom={6}
			>
				<FormLabel style={TextStyle.h2} color={"white"}>
					{" "}
					Advertisement plan
				</FormLabel>
				<RadioGroup
					defaultValue="2"
					name="advertisementPlan"
					onChange={(value) => handleChange(value)}
				>
					<Stack spacing={1} direction="column">
						<Radio value="1">100 Baht/Week</Radio>
						<Radio value="2">300 Baht/Month</Radio>
						<Radio value="3">3600 Baht/Year</Radio>
					</Stack>
				</RadioGroup>
			</FormControl> */}

			{/* Submit */}
			<Box
				width="50%"
				minWidth="250px"
				maxWidth="400px"
				display="flex"
				flexDirection={"row"}
				paddingBottom={3}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<Button
					backgroundColor="#A533C8"
					variant="solid"
					width="40%"
					color="white"
					onClick={() => {
						if (
							advertise.start_date == null ||
							advertise.end_date == null
						) {
							alert("Please fill the date");
							return;
						}
						onOpen();
					}}
				>
					Submit
				</Button>
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent bgColor={"#DEBEF6"} color={"#200944"}>
						<ModalHeader mt={3}>Submit advertisement</ModalHeader>
						<ModalCloseButton />
						<ModalFooter>
							<Button
								bgColor={"white"}
								color={"#200944"}
								mr={5}
								width="30%"
								onClick={onClose}
							>
								Cancel
							</Button>
							<Button
								bgColor={"#A533C8"}
								mr={3}
								onClick={handleSubmit}
								color={"white"}
								width="30%"
							>
								Confirm
							</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</Box>
		</Box>
	);
};
