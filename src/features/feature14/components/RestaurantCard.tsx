import { FC } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

interface RestaurantCardProps {
	filterOptions: {
		Restaurant: boolean;
		Club: boolean;
		Bar: boolean;
	};
	name: string;
	businessType: string;
	monthlyRevenue: number;
	commission: number;
	img: string;
	id: number;
	searchTerm: string;
}

const RestaurantCard: FC<RestaurantCardProps> = ({
	filterOptions,
	name,
	businessType,
	monthlyRevenue,
	commission,
	img,
	id,
	searchTerm,
}) => {
	const navigate = useNavigate();
	const handleClickSetup = () => {
		navigate(`/admin/account/${id}`);
	};
	console.log(filterOptions);
	console.log(businessType);
	const isRestaurant = businessType === "Restaurant";
	const isBar = businessType === "Bar";
	const isFilter = isRestaurant
		? filterOptions.Restaurant
		: isBar
		? filterOptions.Bar
		: filterOptions.Club;
	console.log(isFilter);
	if (
		!(
			searchTerm.toLocaleLowerCase() === "" ||
			searchTerm.toLocaleLowerCase() ===
				"Search...".toLocaleLowerCase() ||
			name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
		)
	)
		return <></>;
	if (!isFilter) return <></>;
	return (
		<Box
			backgroundColor="#200944"
			color="white"
			padding="20px"
			margin="10px 0"
			borderRadius="8px"
			border="1px solid #763FAF"
			display="flex"
			w={"90%"}
			justifyContent={"space-between"}
			alignItems="center">
			<Box onClick={handleClickSetup}>
				<Box display={"flex"}>
					<Image
						src={`${import.meta.env.VITE_BACKEND_URL}${img}`}
						alt="Restaurant Image"
						style={{
							width: "100px",
							height: "100px",
							marginRight: "20px",
						}}
					/>

					<Box>
						<Text>{name}</Text>
						<Text
							style={{
								fontSize: "14px",
								marginBottom: "5px",
							}}>{`Business - ${businessType}`}</Text>
						<Text
							style={{
								fontSize: "12px",
								marginBottom: "5px",
							}}>{`Monthly revenue - ${monthlyRevenue} Baht`}</Text>
						<Text
							style={{
								fontSize: "12px",
								marginBottom: "5px",
							}}>{`Commission (10%) - ${
							commission !== undefined ? commission : 0
						} Baht`}</Text>
					</Box>
				</Box>
			</Box>
			<Box onClick={handleClickSetup}>
				<FaAngleRight style={{ marginLeft: "auto" }} />
			</Box>
		</Box>
	);
};

export default RestaurantCard;
