import { Box, Flex, Text } from "@chakra-ui/react";
import { StarGraph } from "./StarGraph";

export const Ratings = () => {
  return (
    <Box width={"100%"} mb="3">
      Ratings
      <Box mt="1" backgroundColor="brand.200" borderRadius="5" padding="4">
        <Flex direction="row" align="center">
          <Flex direction="column" align="center" mr="8" ml="4">
            <Text fontSize="250%">4.7</Text>
            <Text fontSize="80%">2934 reviews</Text>
          </Flex>
          <StarGraph />
        </Flex>
      </Box>
    </Box>
  );
};
