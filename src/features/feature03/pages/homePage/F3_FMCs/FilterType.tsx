import { Text, Button, Flex } from "@chakra-ui/react";

const buttonStyle = {
  bgColor: "brand.200",
  textColor: "white",
  _hover: { bgColor: "brand.100", textColor: "black" },
};

export const FilterType = () => {
  return (
    <Flex direction="column" mb="4">
      <Text mb="3">Type of place</Text>
      <Flex direction="row" justify="space-between">
        <Button sx={buttonStyle}>Restaurants</Button>
        <Button sx={buttonStyle} ml="2" mr="2">
          Bars
        </Button>
        <Button sx={buttonStyle}>Clubs</Button>
      </Flex>
    </Flex>
  );
};
