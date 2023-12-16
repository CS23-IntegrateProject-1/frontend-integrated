import { Box, Card, CardBody, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import IPromotionCardListProp from "../../../../interfaces/Promotion/IPromotionCardListProp.interface";

export const PromotionListCard: React.FC<IPromotionCardListProp> = ({
    promotionId,
    image_url,
}) => {
	const navigate = useNavigate();
	const handleClick = () => {
        navigate(`/promotion/${promotionId}`);
        
    };
    
	return (
		// <Box
		//   display={"flex"}
		//   flexDirection={"column"}
		//   justifyContent={"center"}
		//   alignItems={"center"}
		//   width={"100%"}

		//   paddingBottom={4}
		// >
		//   {/* AdvertisementCard */}
		<Card
			width="90%"
			minWidth="250px"
            maxWidth="400px"
			display="flex"
			flexDirection={"column"}
			bg={"rgba(0, 0, 0, 0)"}
			color={"white"}
			onClick={handleClick}
		>
			<CardBody mb = {"-20px"}>
				<Box>
                    <Image borderRadius="7px"
                        w={"400px"}
                        h={"130px"}
                        objectFit={"cover"}
			        src={image_url} />
				</Box>
			</CardBody>
		</Card>
		// </Box>
	);
};
