import { Box, Text, Button, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { FilterContext } from "../VenuePage";

const buttonStyle = {
  bgColor: "brand.200",
  textColor: "white",
  _hover: { bgColor: "brand.100", textColor: "black" },
  fontSize: "sm",
};

export const FilterCap = () => {
  const context = useContext(FilterContext);

  const isActiveCap = (cap: string) => {
    return context.filter.capacity.includes(cap);
  }

  const handleCapClick = (cap: string) => {
    if (isActiveCap(cap)) {
      context.setFilter(filter => ({
        ...filter,
        capacity: filter.capacity.split(',').filter((c) => c !== cap).join(',')
      }));
    } else {
      context.setFilter(filter => ({
        ...filter,
        capacity: [...filter.capacity.split(','), cap].filter((c) => c !== '').join(',')
      }));
    }
  }

  console.log(context.filter.capacity)

  return (
    <Flex direction="column" mb="1">
      <Text fontWeight={"semibold"} mb="3">Capacity</Text>
      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)">
        <Button sx={{...buttonStyle, backgroundColor: isActiveCap("1-4") ? "brand.200" : "brand.400" }} mb="2" mr="2"  onClick={() => handleCapClick('1-4')}>
          1 - 4 people
        </Button>
        <Button sx={{...buttonStyle, backgroundColor: isActiveCap("4-6") ? "brand.200" : "brand.400" }}  onClick={() => handleCapClick('4-6')}>4 - 6 people</Button>
        <Button sx={{...buttonStyle, backgroundColor: isActiveCap("6-10") ? "brand.200" : "brand.400" }} mr="2" onClick={() => handleCapClick('6-10')} >
          6 - 10 people
        </Button>
        <Button sx={{...buttonStyle, backgroundColor: isActiveCap("10M") ? "brand.200" : "brand.400" }} onClick={() => handleCapClick('10M')}>10+ people</Button>
      </Box>
    </Flex>
  );
};
