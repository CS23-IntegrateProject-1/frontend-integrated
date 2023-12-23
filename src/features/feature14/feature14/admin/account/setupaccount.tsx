import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Axios } from "../../../../../AxiosInstance";
import {
	Box,
	FormControl,
	FormLabel,
	Input,
	Textarea,
	Button,
	Radio,
	Stack,
	Image,
} from "@chakra-ui/react";

export const AccountSetupPage: React.FC = () => {
	const initialFormData = {
		businessName: "",
		description: "",
		phoneNo: "",
		email: "",
		fromTime: "08:00",
		toTime: "17:00",
		category: "",
		state: "",
		district: "",
		address: "",
		acceptPeople: 0,
		paymentmethod: "",
		photo: "",
		profilePhoto: null,
	};

	const [businessName, setBusinessName] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const [phoneNo, setPhoneNo] = useState<string>("");
	const [email, setemailName] = useState<string>("");
	const initialFromTime = new Date(`1970-01-01T${initialFormData.fromTime}`);
	const initialToTime = new Date(`1970-01-01T${initialFormData.toTime}`);
	const [fromTime, setFromTime] = useState<Date | null>(initialFromTime);
	const [toTime, setToTime] = useState<Date | null>(initialToTime);
	const [acceptPeople, setAcceptPeople] = useState<number | "">("");
	const [category, setCategory] = useState<string>(initialFormData.category);
	const [restaurantSubcategory, setRestaurantSubcategory] =
		useState<string>("");
	const [address, setAddress] = useState<string>("");
	const [paymentmethod, setPaymentMethod] = useState<string>("");
	const [photo, setPhoto] = useState<string>("");
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	const [profilePhoto, setProfilePhoto] = useState<File | null>(null);

	const handleReset = () => {
		setBusinessName(initialFormData.businessName);
		setDescription(initialFormData.description);
		setPhoneNo(initialFormData.phoneNo);
		setemailName(initialFormData.email);
		setFromTime(initialFromTime);
		setToTime(initialToTime);
		setCategory(initialFormData.category);
		setAddress(initialFormData.address);
		setAcceptPeople(initialFormData.acceptPeople);
		setPaymentMethod(initialFormData.paymentmethod);
		setPhoto(initialFormData.photo);
		setProfilePhoto(initialFormData.profilePhoto);
		setSelectedImage(null);
	};

	const customDatePickerStyles = {
		input: {
			backgroundColor: "white",
			color: "black",
			border: "1px solid #cbd5e0",
			borderRadius: "0.375rem",
			padding: "0.375rem 0.75rem",
		},
	};

	const handleProfilePhotoChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		if (event.target.files != null && event.target.files.length > 0) {
			const file = event.target.files[0];
			setProfilePhoto(file);
			setSelectedImage(URL.createObjectURL(file));
		}
	};

	const handleProfileClick = () => {
		// Trigger input file click when profile picture is clicked
		if (profilePhotoInputRef.current != null) {
			profilePhotoInputRef.current.click();
		}
	};

	const profilePhotoInputRef = React.useRef<HTMLInputElement | null>(null);

	const handleBusinessNameChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setBusinessName(event.target.value);
	};

	const handlePhoneNoChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setPhoneNo(event.target.value);
	};
	const handleemailNameChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setemailName(event.target.value);
	};

	const handleDateChange = (newDate: Date | null) => {
		setFromTime(newDate);
	};

	const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file != null) {
			setSelectedImage(URL.createObjectURL(file));
		}
	};

	const handleAddressChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setAddress(event.target.value);
	};

	const handleAcceptPeopleChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const value = event.target.value;
		setAcceptPeople((prevValue) => {
			const parsedValue = parseInt(value, 10);

			if (isNaN(parsedValue)) {
				return prevValue;
			}

			return parsedValue;
		});
	};

	const handlePaymentMethodChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setPaymentMethod(event.target.value);
	};

	const handleRestaurantSubcategoryChange = (newSubcategory: string) => {
		setRestaurantSubcategory(newSubcategory);
	};

	const handleCategoryChange = (newCategory: string) => {
		setCategory(newCategory);

		// If the selected category is "Restaurant", reset the subcategory
		if (newCategory === "restaurant") {
			setRestaurantSubcategory("");
		}
	};

	const handleFormSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		try {
			const formData = new FormData();
			formData.append("name", businessName);
			formData.append("description", description);
			formData.append("phone_num", phoneNo);
			formData.append("email", email);
			formData.append(
				"opening_hour",
				fromTime !== null && fromTime !== undefined
					? fromTime.toISOString()
					: ""
			); // Still don't have
			formData.append(
				"closing_hour",
				toTime !== null && toTime !== undefined
					? toTime.toISOString()
					: ""
			); // Still don't have

			// Append checkboxes (assuming category is an array of strings)
			formData.append("category", category); // Still don't have
			if (category === "restaurant") {
				formData.append("restaurantSubcategory", restaurantSubcategory);
			}
			formData.append("address", address);
			formData.append("capacity", String(acceptPeople));
			formData.append("method", String(paymentmethod));

			// Append profile photo (if any)
			if (profilePhoto != null) {
				formData.append("profile_picture", profilePhoto);
			}

			// Append business photos (assuming 'photo' is an array of files)
			if (Array.isArray(photo) && photo.length > 0) {
				photo.forEach((businessPhoto: string | Blob, index: any) => {
					formData.append(`venue_picture[${index}]`, businessPhoto);
				});
			}

			const response = await Axios.post("/feature14/account", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});

			console.log("Response from the server:", response.data);

			// Optionally, you can handle success and reset the form
			handleReset();
		} catch (error) {
			console.error("Error while submitting data:", error);
			// Handle error accordingly, e.g., show an error message to the user
		}
	};

	return (
		<Box
			p={4}
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center">
			<form
				onSubmit={(event) => {
					event.preventDefault();
					void handleFormSubmit(event); // Use the `void` operator to handle the Promise
				}}>
				<FormControl mt={4}>
					<FormLabel>Profile Photo</FormLabel>
					<Input
						type="file"
						accept="image/*"
						onChange={handleProfilePhotoChange}
						ref={profilePhotoInputRef}
						style={{ display: "none" }}
					/>
				</FormControl>
				<Box
					position="relative"
					onClick={handleProfileClick}
					cursor="pointer"
					borderRadius="full"
					overflow="hidden"
					boxSize="250px">
					<Image
						borderRadius="full"
						boxSize="100%"
						// Use the URL.createObjectURL to handle File type
						src={
							profilePhoto instanceof File
								? URL.createObjectURL(profilePhoto)
								: profilePhoto ?? "https://bit.ly/dan-abramov"
						}
						alt="Selected Photo"
					/>
				</Box>
				<FormLabel>Business Name*</FormLabel>
				<Input
					type="text"
					bg={"white"}
					textColor={"black"}
					value={businessName}
					onChange={handleBusinessNameChange}
					placeholder=" Business name"
					text-color={"black"}
				/>
				<FormControl mt={4}>
					<FormLabel>Description*</FormLabel>
					<Textarea
						bg={"white"}
						textColor={"black"}
						value={description}
						onChange={(e) => {
							setDescription(e.target.value);
						}}
					/>
				</FormControl>

				<FormControl mt={4}>
					<FormLabel>Phone No.*</FormLabel>
					<Input
						type="tel"
						bg={"white"}
						textColor={"black"}
						value={phoneNo}
						onChange={handlePhoneNoChange}
						placeholder="xxx-xxx-xxxx"
					/>
				</FormControl>
				<FormControl mt={4}>
					<FormLabel>Email*</FormLabel>
					<Input
						type="text"
						bg={"white"}
						textColor={"black"}
						value={email}
						onChange={handleemailNameChange}
						placeholder="Business Name"
					/>
				</FormControl>
				<FormControl mt={4}>
					<FormLabel>Open Hour*</FormLabel>
					<FormLabel>From</FormLabel>
					<DatePicker
						selected={fromTime}
						onChange={(date: any) => {
							handleDateChange(date);
						}}
						showTimeSelect
						showTimeSelectOnly
						timeIntervals={15}
						timeCaption="Time"
						dateFormat="h:mm aa"
						customInput={
							<Input style={customDatePickerStyles.input} />
						}
					/>
					<FormLabel>To</FormLabel>
					<DatePicker
						selected={toTime}
						onChange={(date: any) => {
							setToTime(date);
						}}
						showTimeSelect
						showTimeSelectOnly
						timeIntervals={15}
						timeCaption="Time"
						dateFormat="h:mm aa"
						customInput={
							<Input style={customDatePickerStyles.input} />
						}
					/>
				</FormControl>
				<Box>
					<FormControl mt={4}>
						<FormLabel>Category</FormLabel>
						<Stack direction="row" spacing={4}>
							<Radio
								value="club"
								isChecked={category === "club"}
								onChange={() => {
									handleCategoryChange("club");
								}}>
								Club
							</Radio>
							<Radio
								value="bar"
								isChecked={category === "bar"}
								onChange={() => {
									handleCategoryChange("bar");
								}}>
								Bar
							</Radio>
							<Radio
								value="restaurant"
								isChecked={category === "restaurant"}
								onChange={() => {
									handleCategoryChange("restaurant");
								}}>
								Restaurant
							</Radio>
						</Stack>
					</FormControl>

					{category === "restaurant" &&
						restaurantSubcategory != null && (
							<FormControl mt={4}>
								<FormLabel>Restaurant Subcategory</FormLabel>
								<Stack direction="row" spacing={4}>
									<Radio
										value="ala-carte"
										isChecked={
											restaurantSubcategory ===
											"ala-carte"
										}
										onChange={() => {
											handleRestaurantSubcategoryChange(
												"ala-carte"
											);
										}}>
										A La Carte
									</Radio>
									<Radio
										value="buffet"
										isChecked={
											restaurantSubcategory === "buffet"
										}
										onChange={() => {
											handleRestaurantSubcategoryChange(
												"buffet"
											);
										}}>
										Buffet
									</Radio>
								</Stack>
							</FormControl>
						)}
				</Box>
				<FormControl mt={4}>
					<FormControl mt={4}>
						<FormLabel>Address</FormLabel>
						<Input
							type="text"
							bg={"white"}
							textColor={"black"}
							value={address}
							onChange={handleAddressChange}
							placeholder=""
						/>
					</FormControl>
					<FormControl mt={4}>
						<FormLabel>Number of people that can accept</FormLabel>
						<Input
							type="text"
							bg={"white"}
							textColor={"black"}
							value={acceptPeople}
							onChange={handleAcceptPeopleChange}
							placeholder=""
						/>
					</FormControl>
					<FormControl mt={4}>
						<FormLabel>Payment Method*</FormLabel>
						<Input
							type="text"
							bg={"white"}
							textColor={"black"}
							value={paymentmethod}
							onChange={handlePaymentMethodChange}
							placeholder=""
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Photo of Business</FormLabel>
						<Input
							type="file"
							accept="image/*"
							onChange={handleImageChange}
						/>
					</FormControl>

					{selectedImage != null && (
						<Box mt={4} position="relative">
							<Image
								borderRadius="md"
								boxSize="250px"
								src={selectedImage}
								alt="Selected Photo"
							/>
						</Box>
					)}
					<Button
						mt={4}
						color="white"
						textColor={"purple"}
						marginRight={100}
						borderRadius="lg"
						type="button"
						onClick={handleReset}>
						Cancel
					</Button>
					<Button
						mt={4}
						bg={"brand.200"}
						textColor={"white"}
						type="submit">
						Submit
					</Button>
				</FormControl>
			</form>
		</Box>
	);
};

export default AccountSetupPage;
