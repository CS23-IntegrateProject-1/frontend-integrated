import {
	Box,
	Button,
	Divider,
	Input,
	InputGroup,
	InputLeftElement,
	Modal,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Radio,
	RadioGroup,
	Text,
	Stack,
	useDisclosure,
	Icon,
} from "@chakra-ui/react";

import { GetAllPromotion } from "../../../../api/Promotion/GetAllPromotion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PromotionListCard } from "../../components/PromotionComponent/PromotionListCard";

export const PromotionListPage = () => {
	//const { isOpen, onOpen, onClose } = useDisclosure();
	const navigate = useNavigate();
	//เอาไว้เปลี่ยน sort
	const [sort, setSort] = useState("");
	const [datas, setDatas] = useState([]);

	const handleChangeSort = (sort: string) => {
		console.log(sort);
		setSort(sort);
	};

	const fetchPromotion = async () => {
		const res = await GetAllPromotion();

		setDatas(res);
	};

	useEffect(() => {
		fetchPromotion();
	}, []);

	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			justifyContent={"center"}
			alignItems={"center"}
			width={"100%"}
		>
			{datas?.map((data: any) => (
				<PromotionListCard
					key={data?.promotionId}
					promotionId={data?.promotiontId}
					image_url={data?.image_url}
				/>
			))}
		</Box>
	);
};
