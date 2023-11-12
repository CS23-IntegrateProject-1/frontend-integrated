import {
  Box,
  Card,
  CardBody,
  Text,
} from "@chakra-ui/react";

export const AdvertisementCard = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
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
