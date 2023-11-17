import { Box, Flex, Text } from "@chakra-ui/react";
import { StarGraph } from "./StarGraph";

export const Ratings = () => {
  return (
    <Box width={"100%"} pb="30px">
      <Text fontSize={"20px"} fontWeight="bold">Ratings</Text>
      <Box mt="1" backgroundColor="brand.200" borderRadius="5" p="4" display={"flex"} justifyContent={"center"}>
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
