import { Flex, Box, Text, Spacer, } from "@chakra-ui/react";

export const Receipt = () => {
  return (
    <Flex
      bg="blackAlpha.300"
      h="75px"
      align="center"
      borderRadius="10px"
      transition="background-color 0.3s ease-in-out"
      _hover={{ bg: "blackAlpha.400" }}
      _active={{ bg: "blackAlpha.200" }}
      marginBottom="10px"
    >
      <Box ml="3">
        <Text fontWeight="bold">Order ID #0001</Text>
        <Text fontSize="sm">2200 Baht</Text>
      </Box>
      <Spacer />
      <Box>
        <Text fontSize="md" textAlign="right" paddingRight={3}>
            NOV 1, 2023
        </Text>
      </Box>
    </Flex>
  );
};
