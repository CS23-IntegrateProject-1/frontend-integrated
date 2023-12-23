import { Box, Text, Button, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { FilterContext } from "../VenuePage";

const buttonStyle = {
  bgColor: "red.300",
  textColor: "white",
  _hover: { bgColor: "brand.100", textColor: "black" },
  fontSize: "sm",
};

export const FilterCap = () => {
  const context = useContext(FilterContext);
  // console.log(context)

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

  // console.log(context.filter.capacity)

  return (
    <Flex direction="column" mb="1">
      <Text fontWeight={"semibold"} mb="3">Capacity</Text>
      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)">
        <Button sx={{...buttonStyle, backgroundColor: isActiveCap("1TO4") ? "brand.400" : "brand.200" }} mb="2" mr="2"  onClick={() => handleCapClick('1TO4')}>
          1 - 4 people
        </Button>
        <Button sx={{...buttonStyle, backgroundColor: isActiveCap("5TO6") ? "brand.400" : "brand.200" }}  onClick={() => handleCapClick('5TO6')}>
          5 - 6 people
        </Button>
        <Button sx={{...buttonStyle, backgroundColor: isActiveCap("7TO10") ? "brand.400" : "brand.200" }} mr="2" onClick={() => handleCapClick('7TO10')} >
          7 - 10 people
        </Button>
        <Button sx={{...buttonStyle, backgroundColor: isActiveCap("11M") ? "brand.400" : "brand.200" }} onClick={() => handleCapClick('11M')}>
          11+ people
        </Button>
      </Box>
    </Flex>
  );
};
