import { Box, Card, CardBody, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import IAdvertisementCardProp from "../../../../interfaces/Advertisement/IAdvertisementCardProp.interface";

export const AdvertisementCard: React.FC<IAdvertisementCardProp> = ({
  name,
  description,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/advertisement/:id");
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
        border={"1px solid"}
        borderColor={"brand.100"}
        bg={"rgba(0, 0, 0, 0)"}
        color={"white"}
        onClick={handleClick}
        mb={"10px"}
      >
        <CardBody>
          <Box>
            <Text pt="2" fontSize="md">
              Name: {name}
              <br />
              Description: {description}
            </Text>
          </Box>
        </CardBody>
      </Card>
    // </Box>
  );
};
