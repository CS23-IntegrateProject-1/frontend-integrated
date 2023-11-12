import { NavLink } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const starSortBox = {
  backgroundColor: "brand.300",
  p: "1.5",
  mr: "2",
  borderRadius: "14",
};

const starPlacement = {
  ml: "1",
  transform: "translateY(2px)",
};

export const StarSort = () => {
  return (
    <Flex direction="row" mt="2">
      <Flex direction="row" sx={starSortBox}>
        5
        <StarIcon sx={starPlacement} />
      </Flex>
      <Flex direction="row" sx={starSortBox}>
        4
        <StarIcon sx={starPlacement} />
      </Flex>
      <Flex direction="row" sx={starSortBox}>
        3
        <StarIcon sx={starPlacement} />
      </Flex>
      <Flex direction="row" sx={starSortBox}>
        2
        <StarIcon sx={starPlacement} />
      </Flex>
      <Flex direction="row" sx={starSortBox}>
        1
        <StarIcon sx={starPlacement} />
      </Flex>
    </Flex>
  );
};
