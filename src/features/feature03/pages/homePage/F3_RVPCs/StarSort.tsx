import { NavLink } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const starSortBox = {
  backgroundColor: "brand.300",
  px: { base: "2", lg: "3" },
  py: { base: "1", lg: "2" },
  mr: "2",
  borderRadius: "xl",
};

const starPlacement = {
  ml: "2",
  mt: "0.5",
  fontSize: "lg",
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
