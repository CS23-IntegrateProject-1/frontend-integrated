import { NavLink } from "react-router-dom";
import { Box, Flex, Text, Grid, Icon, Center } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export const Ratings = () => {
  return (
    <Box width={"100%"} mb="3">
      Ratings
      <Box mt="3" backgroundColor={"brand.200"} borderRadius="5" padding="4">
        <Flex direction="row" align="center">
          <Flex direction="column" align="center" mr="8" ml="4">
            <Text fontSize="225%">4.7</Text>
            <Text fontSize="80%">2934 reviews</Text>
          </Flex>
          <Flex direction="column" align="flex-start" mr="2">
            <Flex direction="row" mb="2" align="center">
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
            <Flex direction="row" mb="2" justify="center" align="center">
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
            <Flex direction="row" mb="2" justify="center" align="center">
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
            <Flex direction="row" mb="2" justify="center" align="center">
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
            <Flex direction="row" mb="2" justify="center" align="center">
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
        </Flex>
      </Box>
    </Box>
  );
};
