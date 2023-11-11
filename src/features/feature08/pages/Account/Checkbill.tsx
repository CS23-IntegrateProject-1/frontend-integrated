import {
  Table,
  Thead,
  Th,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Card,
  Heading,
  CardBody,
  Stack,
  StackDivider,
  Box,
  Text,
  Divider,
  Center,
  HStack,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const Checkbill = () => {
  return (
    <Center>
      <Box
        display={"flex"}
        flexDirection={"column"}
        margin={[3, 5, 7]}
        width={["100%", "80%", "70%"]}
        fontWeight={"bold"}
      >
        <Text fontSize={"lg"} fontWeight={"bold"} marginBottom={3}>
          Order #0001
        </Text>
        <Text fontSize={"lg"} fontWeight={"bold"} marginBottom={2}>
          Thursday, November 1, 2023
        </Text>
        <Divider variant={"dashed"} />

        <TableContainer>
          <Table variant="unstyled">
            <Thead>
              <Tr borderBottom="none">
                <Th textAlign="center" fontSize="lg" color="white">
                  QTY
                </Th>
                <Th textAlign="center" fontSize="lg" color="white">
                  ITEM
                </Th>
                <Th textAlign="center" fontSize="lg" color="white">
                  AMT
                </Th>
              </Tr>
            </Thead>
            <Divider variant={"dashed"} width={"365%"}/>
            <Tbody>
              {[...Array(12)].map((_, index) => (
                <Tr key={index}>
                  <Td textAlign="center" fontSize="lg" color="white">
                    {index + 1}
                  </Td>
                  <Td textAlign="center" fontSize="lg" color="white">
                    Beef Steak
                  </Td>
                  <Td textAlign="center" fontSize="lg" color="white">
                    2
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        <Divider width={"100%"} variant={"dashed"} />

        <TableContainer>
          <Table variant="unstyled">
            <Tbody>
              <Tr borderBottom="none">
                <Td fontSize="lg" color="white">
                  ITEM COUNT:
                </Td>
                <Td></Td>
                <Td textAlign="center" fontSize="lg" color="white">
                  12
                </Td>
              </Tr>
              <Tr borderBottom="none">
                <Td fontSize="lg" color="white">
                  TOTAL:
                </Td>
                <Td></Td>
                <Td textAlign="center" fontSize="lg" color="white">
                  24
                </Td>
              </Tr>
              <Tr borderBottom="none">
                <Td fontSize="lg" color="white">
                  PRICE:
                </Td>
                <Td></Td>
                <Td textAlign="center" fontSize="lg" color="white">
                  2200
                </Td>
              </Tr>
              <Divider width={"300%"} variant={"dashed"} marginTop={3} />
              <Tr borderBottom="none">
                <Td fontSize="lg" color="white">
                  Payment method
                </Td>
                <Td></Td>
                <Td textAlign="center" fontSize="lg" color="white">
                  <HStack justifyContent="center" alignItems="center">
                    <ChevronRightIcon boxSize={6} />
                  </HStack>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Center>
  );
};
