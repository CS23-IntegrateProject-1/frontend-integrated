import {
  Box,
  Card,
  CardBody,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const AdvertisementCard = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/advertisement/:id");
  };
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      paddingBottom={4}
    >
      {/* AdvertisementCard */}
      <Card
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
        border={"1px solid"}
        borderColor={"brand.100"}
        bg={"rgba(0, 0, 0, 0)"}
        color={"white"}
        onClick={handleClick}
      > 
        <CardBody>
          <Box>
            <Text pt="2" fontSize="md">
              Name: Product 'z' launch
              <br />
              Description: Loremipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Box>
        </CardBody>
      </Card>

    </Box>
  );
};
