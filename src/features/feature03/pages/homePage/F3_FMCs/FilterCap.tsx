import { Box, Text, Button, Flex } from "@chakra-ui/react";

const buttonStyle = {
  bgColor: "brand.200",
  textColor: "white",
  _hover: { bgColor: "brand.100", textColor: "black" },
  fontSize: "sm",
};

export const FilterCap = () => {
  return (
    <Flex direction="column" mb="1">
      <Text fontWeight={"semibold"} mb="3">Capacity</Text>
      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)">
        <Button sx={buttonStyle} mb="2" mr="2">
          1 - 4 people
        </Button>
        <Button sx={buttonStyle}>4 - 6 people</Button>
        <Button sx={buttonStyle} mr="2">
          6 - 10 people
        </Button>
        <Button sx={buttonStyle}>10+ people</Button>
      </Box>
    </Flex>
  );
};
