import { Flex, VStack } from "@chakra-ui/react";
import { VoucherCard } from "./VoucherCard";

export const VoucherPage = () => {
  return (
    <Flex direction="column" align="center" justify="center">
      <VStack mt={4} overflowY="auto" maxHeight="calc(100vh - 100px)">
        <VoucherCard />
        <VoucherCard />
      </VStack>
    </Flex>
  );
};
