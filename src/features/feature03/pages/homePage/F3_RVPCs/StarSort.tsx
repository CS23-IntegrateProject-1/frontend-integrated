import { NavLink } from "react-router-dom";
import { Flex, Button, Text } from "@chakra-ui/react";
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
  fontSize: "lg",
};

export const StarSort = () => {
  return (
    <Flex direction="row" mt="2">
      <Button
        sx={starSortBox}
        textColor={"white"}
        _hover={{
          backgroundColor: "brand.200",
        }}
      >
        <Text mt={0.5} ml={1}>
          5
        </Text>
        <StarIcon sx={starPlacement} />
      </Button>
      {/* ///////////////////////////////////////////////// */}
      <Button
        sx={starSortBox}
        textColor={"white"}
        _hover={{
          backgroundColor: "brand.200",
        }}
      >
        <Text mt={0.5} ml={1}>
          4
        </Text>
        <StarIcon sx={starPlacement} />
      </Button>
      {/* ///////////////////////////////////////////////// */}
      <Button
        sx={starSortBox}
        textColor={"white"}
        _hover={{
          backgroundColor: "brand.200",
        }}
      >
        <Text mt={0.5} ml={1}>
          3
        </Text>
        <StarIcon sx={starPlacement} />
      </Button>
      {/* ///////////////////////////////////////////////// */}
      <Button
        sx={starSortBox}
        textColor={"white"}
        _hover={{
          backgroundColor: "brand.200",
        }}
      >
        <Text mt={0.5} ml={1}>
          2
        </Text>
        <StarIcon sx={starPlacement} />
      </Button>
      {/* ///////////////////////////////////////////////// */}
      <Button
        sx={starSortBox}
        textColor={"white"}
        _hover={{
          backgroundColor: "brand.200",
        }}
      >
        <Text mt={0.5} ml={1}>
          1
        </Text>
        <StarIcon sx={starPlacement} />
      </Button>
      {/************************************************************ */}
      <Flex pl={5}>
      <Button
        sx={starSortBox}
        textColor={"white"}
        _hover={{
          backgroundColor: "brand.200",
        }}
      >
        <Text mx={1}>
          Reservation
        </Text>
      </Button>
      <Button
        sx={starSortBox}
        textColor={"white"}
        _hover={{
          backgroundColor: "brand.200",
        }}
      >
        <Text mx={1}>
        Delivery
        </Text>
      </Button>
      </Flex>
    </Flex>
  );
};
