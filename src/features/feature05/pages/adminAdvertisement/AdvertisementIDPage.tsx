3
import {
	Box,
	Button,
	Center,
	FormControl,
	FormLabel,
	Icon,
	IconButton,
	Stack,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { Input } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalCloseButton,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

import { ChangeEvent, useEffect, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { GetBusinessAdsById } from "../../../../api/Advertisement/GetBusinessAdsById";
import IAd_business from "../../../../interfaces/Advertisement/IAd_business.interface";
import { ApproveAds } from "../../../../api/Advertisement/AdminApproveAdvertisement";

export const AdvertisementIDPage = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [data, setData] = useState<IAd_business>();
	const id = Number(useParams<{ id: string }>().id);
	const fetchDatas = async () => {
		const result = await GetBusinessAdsById(id);
		setData(result?.data);
	};
	useEffect(() => {
		fetchDatas();
	},[]);
	const navigate = useNavigate();
	const handleClickReject = () => {
		navigate(`/admin/advertisement/${id}/reject`);
	};
	const handleClickConfirm = () => {
		ApproveAds(id);
		navigate("/admin/advertisement");
		location.reload();
	};

	const [files, setFile] = useState<File | null>(null);
	const [imagePreview, setImagePreview] = useState<string | null>(null);
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

	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			justifyContent={"center"}
			alignItems={"center"}
			width={"100%"}
		>
			{/* Name * */}
			<Box
				paddingBottom={3}
				width="50%"
				minWidth="250px"
				maxWidth="400px"
				display="flex"
				flexDirection={"column"}
			>
				<Text style={TextStyle.h2} color={"white"}>
					{" "}
					Name *
				</Text>
				{/* <Input
          variant="name"
          placeholder="Filled"
          style={{ width: "auto" }}
          color={"black"}
        /> */}
				<Box bgColor={"white"} padding={"5px"} borderRadius={"5px"}>
					<Text color={"#000000"} paddingLeft={"5px"}>
						{data?.name}
					</Text>
				</Box>
			</Box>

			{/* Description * */}
			<Box
				paddingBottom={3}
				width={"50%"}
				minWidth={"250px"}
				maxWidth={"400px"}
				display={"flex"}
				flexDirection={"column"}
			>
				<Text style={TextStyle.h2} color={"white"}>
					{" "}
					Description *
				</Text>
				{/* <Textarea
          variant="name"
          placeholder="Filled"
          width="auto"
          color={"black"}
        /> */}
				<Box bgColor={"white"} padding={"5px"} borderRadius={"5px"}>
					<Text color={"#000000"} paddingLeft={"5px"}>
						{data?.description}
					</Text>
				</Box>
			</Box>

			{/* Starting Date * & Ending Date * */}
			<Box
				paddingBottom={3}
				width={"50%"}
				minWidth={"250px"}
				maxWidth={"400px"}
				display={"flex"}
				flexDirection={"row"}
				justifyContent={"center"}
			>
				<Box mr={"20px"} flex={"1"}>
					<Text style={TextStyle.h2} color={"white"}>
						{" "}
						Starting Date *
					</Text>
					{/* <Input size={"xs"} type="date" color="black" bg={"white"}></Input> */}
					<Box bgColor={"white"} padding={"5px"} borderRadius={"5px"}>
						<Text color={"#000000"} paddingLeft={"5px"}>
							{data?.start_date.substring(0, 10)}
						</Text>
					</Box>
				</Box>
				<Box flex={"1"}>
					<Text style={TextStyle.h2} color={"white"}>
						{" "}
						Ending Date *
					</Text>
					{/* <Input size={"xs"} type="date" color="black" bg={"white"}></Input> */}
					<Box bgColor={"white"} padding={"5px"} borderRadius={"5px"}>
						<Text color={"#000000"} paddingLeft={"5px"}>
							{data?.end_date.substring(0, 10)}
						</Text>
					</Box>
				</Box>
			</Box>

			{/* Image */}
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
					Images
				</FormLabel>
				<Stack spacing={2} direction="column">
					<Center
						width={"auto"}
						height={"100"}
						bg={"#FFFFFF"}
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
							color={"#000000"}
							width={"auto"}
							height={"8"}
						></Icon>
					</Center>
				</Stack>
			</FormControl>
			{imagePreview ? (
				<Box
					position={"relative"}
					overflow={"hidden"}
					minWidth={"50%"}
					maxWidth={"50%"}
					height={"auto"}
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
			) : (
				<></>
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
				<FormLabel style={TextStyle.h2} color={"white"}>
					{" "}
					Target customer
				</FormLabel>
				{/* <Select
          bgColor={"#FFFFFF"}
          borderColor={"#FFFFFF"}
          placeholder=" "
          iconColor="black"
        >
          <option value="option1">All</option>
          <option value="option2">Member</option>
        </Select> */}
				<Box bgColor={"white"} padding={"5px"} borderRadius={"5px"}>
					<Text color={"#000000"} paddingLeft={"5px"}>
						{data?.customer_type}
					</Text>
				</Box>
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
				<FormLabel style={TextStyle.h2} color={"white"}>
					{" "}
					Target group
				</FormLabel>
				{/* <Select
          bgColor={"#FFFFFF"}
          borderColor={"#FFFFFF"}
          placeholder=" "
          iconColor="black"
        >
          <option value="option1">Teen</option>
          <option value="option2">young Adult</option>
          <option value="option3">adult</option>
          <option value="option4">elder</option>
        </Select> */}
				<Box bgColor={"white"} padding={"5px"} borderRadius={"5px"}>
					<Text color={"#000000"} paddingLeft={"5px"}>
						{data?.target_group}
					</Text>
				</Box>
			</FormControl>

			<Box
				width="50%"
				minWidth="250px"
				maxWidth="400px"
				display="flex"
				flexDirection={"column"}
				paddingBottom={5}
			>
				<Text style={TextStyle.h2} color={"white"}>
					{" "}
					Advertisement plan
				</Text>
				{/* <RadioGroup defaultValue="2">
          <Stack spacing={1} direction="column">
            <Radio value="1">100 Baht/Week</Radio>
            <Radio value="2">300 Baht/Month</Radio>
            <Radio value="3">3,600 Baht/Year</Radio>
          </Stack>
        </RadioGroup> */}
				<Box bgColor={"white"} padding={"5px"} borderRadius={"5px"}>
					<Text color={"#000000"} paddingLeft={"5px"}>
						{data?.cost}
					</Text>
				</Box>
			</Box>

			<Box
				width="50%"
				minWidth="250px"
				maxWidth="400px"
				display="flex"
				flexDirection={"row"}
				paddingBottom={3}
				justifyContent={"space-evenly"}
			>
				<Button
					colorScheme="gray"
					variant="solid"
					width="40%"
					color="#A533C8"
					onClick={handleClickReject}
				>
					Reject
				</Button>

				<Button
					backgroundColor="#A533C8"
					variant="solid"
					width="40%"
					color="white"
					onClick={onOpen}
				>
					Accept
				</Button>
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent bgColor={"#DEBEF6"} color={"#200944"}>
						<ModalHeader mt={3}>
							The request has been approved
						</ModalHeader>
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
								onClick={handleClickConfirm}
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
