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
      <CardBody mb={"-20px"}>
        <Box>
          <Image
            cursor={"pointer"}
            borderRadius="7px"
            w={"400px"}
            h={"130px"}
            objectFit={"cover"}
            src={`${import.meta.env.VITE_BACKEND_URL}${image_url}`}
          />
        </Box>
      </CardBody>
    </Card>
    // </Box>
  );
};
