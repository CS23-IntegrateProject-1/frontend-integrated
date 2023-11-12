import { Box, Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const starGraph = {
  direction: "row",
  mb: "2",
  align: "center",
};

export const StarGraph = () => {
  return (
    <Flex direction="column" align="flex-start" mr="2">
      <Flex sx={starGraph}>
        <StarIcon boxSize="3" />
        <StarIcon boxSize="3" />
        <StarIcon boxSize="3" />
        <StarIcon boxSize="3" />
        <StarIcon boxSize="3" />
        <Box
          backgroundColor="white"
          w="120px"
          h="9px"
          ml="0.5rem"
          borderRadius="10"
        />
      </Flex>
      <Flex sx={starGraph}>
        <StarIcon boxSize="3" />
        <StarIcon boxSize="3" />
        <StarIcon boxSize="3" />
        <StarIcon boxSize="3" />
        <Box
          backgroundColor="white"
          w="90px"
          h="9px"
          ml="1.25rem"
          borderRadius="10"
        />
      </Flex>
      <Flex sx={starGraph}>
        <StarIcon boxSize="3" />
        <StarIcon boxSize="3" />
        <StarIcon boxSize="3" />
        <Box
          backgroundColor="white"
          w="40px"
          h="9px"
          ml="2rem"
          borderRadius="10"
        />
      </Flex>
      <Flex sx={starGraph}>
        <StarIcon boxSize="3" />
        <StarIcon boxSize="3" />
        <Box
          backgroundColor="white"
          w="20px"
          h="9px"
          ml="2.75rem"
          borderRadius="10"
        />
      </Flex>
      <Flex sx={starGraph}>
        <StarIcon boxSize="3" />
        <Box
          backgroundColor="white"
          w="30px"
          h="9px"
          ml="3.5rem"
          borderRadius="10"
        />
      </Flex>
    </Flex>
  );
};
