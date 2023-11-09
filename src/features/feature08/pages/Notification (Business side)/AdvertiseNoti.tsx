import {
  Table,
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
  Center
} from "@chakra-ui/react";

import { ButtonComponent } from "../../../../components/buttons/ButtonComponent";

export const AdvertiseNoti = () => {
  return (
    <Center>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        margin={[3, 5, 7]} // Responsive margin for different screen sizes
        width={["100%", "80%", "70%"]} // Responsive width for different screen sizes
      >
        <Card width={"100%"} backgroundColor={"#5F0DBB"} color={"#C5C4C7"}>
          <CardBody>
            <Stack divider={<StackDivider />} spacing={[2, 4]}>
              <Box>
                <Heading size="md" textAlign="center">
                  Title: Advertisement approved
                </Heading>
                <Text textAlign="center">
                  This email is to notify you that your advertisement has been improved,
                  and this is the total amount that you have to pay.
                </Text>
                <Heading size="md" textAlign="center">
                  Payment Information
                </Heading>
                <TableContainer>
                  <Table
                    className="striped-table"
                    variant={'striped'}
                    colorScheme="pink"
                    width="100%"
                  >
                    <Tbody>
                      <Tr>
                        <Td>Discription</Td>
                        <Td>Amount</Td>
                      </Tr>
                      <Tr>
                        <Td>Advertisement</Td>
                        <Td>1000 baht</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
                <Text textAlign="right">
                  Total cost: 1000 baht
                </Text>
                <Text textAlign="center">
                  <ButtonComponent text="Pay now" />
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Box>
    </Center>
  );
};
