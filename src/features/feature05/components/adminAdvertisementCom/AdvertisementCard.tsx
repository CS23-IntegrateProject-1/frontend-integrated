import { Box, Card, CardBody, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { GrView } from "react-icons/gr";

interface AdvertisementCardProps {
  name: string;
  description: string;
  advertisementId: number;
  isApprove: string;
}

export const AdvertisementCard: React.FC<AdvertisementCardProps> = ({
  name,
  description,
  advertisementId,
  isApprove,
}: AdvertisementCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(isApprove);
    if (isApprove === "In_progress") {
      navigate(`/admin/advertisement/${advertisementId}`);
    } else{
      navigate(`/admin/advertisement/view/${advertisementId}`);
    } 
  };

  return (
    <Card
      width="90%"
      minWidth="250px"
      maxWidth="400px"
      display="flex"
      flexDirection={"column"}
      border={"1px solid"}
      borderColor={"brand.100"}
      bg={"rgba(0, 0, 0, 0)"}
      color={"white"}
      onClick={handleClick}
      mb={"10px"}
    >
				<Box
					pos={"absolute"}
					top={2}
					right={1}
					borderRadius={10}
					px={"10px"}
				>
      <GrView/>
      </Box>
      <CardBody>
        <Box>
          <Text pt="2" fontSize="md">
            Name: {name}
            <br/>
            Description: {description}
          </Text>
        </Box>
      </CardBody>
    </Card>
  );
};
