import { Box, Center, Image, Text } from "@chakra-ui/react";
import textStyles from "../../../../theme/foundations/textStyles";
import RedSeat from "../../images/redSeat.png";
import PurpleSeat from "../../images/purpleSeat.png";
import YellowSeat from "../../images/yellowSeat.png";
import Chair from "../../images/chair.png";

export const TypeOfSeatCard: React.FC<{ type: string; price: number }> = ({
	type,
	price,
}) => {
	const getSeatImage = () => {
		switch (type) {
			case "Regular":
				return <Image src={RedSeat} alt="red chair" w="7vh" />;
			case "Premium":
				return <Image src={PurpleSeat} alt="purple chair" w="7vh" />;
			case "Honeymoon":
				return <Image src={YellowSeat} alt="purple chair" w="7vh" />;
			default:
				return <Image src={Chair} alt="chair" w="7vh" />;
		}
	};

	return (
		<Box>
			<Center
				style={textStyles.body1}
				mt={10}
				mb={10}
				borderWidth="0.2vw"
				borderColor="gold"
				display="flex"
				flexDirection="column"
				borderRadius="15"
				p="4"
				w="20vh"
				bg={"#2d2d2d"}>
				{getSeatImage()}
				<Text mt="2" mb="2">
					{type}
				</Text>
				<Text>{price} THB</Text>
			</Center>
		</Box>
	);
};
