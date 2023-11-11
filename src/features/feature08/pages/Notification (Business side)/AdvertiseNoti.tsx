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
        margin={[3, 5, 7]} // Responsive margin for different screen sizes
        width={["100%", "80%", "70%"]} // Responsive width for different screen sizes
      >
        <Card width={"100%"} backgroundColor={""} color={"white"} border={"1px solid #DEBEF6"}> 
          <CardBody>
            <Stack divider={<StackDivider />} spacing={[2, 4]}>
              <Box>
                <Heading size="md" marginBottom={3}>
                  Title: Advertisement approved
                </Heading>
                <Text marginBottom={5}>
                  This email is to notify you that your advertisement has been improved,
                  and this is the total amount that you have to pay.
                </Text>
                <Heading size="md" marginBottom={2}>
                  Payment Information
                </Heading>
                <TableContainer>
                  <Table
                    className="striped-table"
                    variant={'striped'}
                    colorScheme=""
                    width="100%"
                  >
                    <Tbody>
                      <Tr backgroundColor={"#A533C8"}>
                        <Td>Discription</Td>
                        <Td textAlign={"right"}>Amount</Td>
                      </Tr>
                      <Tr>
                        <Td>Advertisement</Td>
                        <Td textAlign={"right"}>1000 baht</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
                <Text marginTop={2} textAlign={"right"}>
                  Total cost: 1000 baht
                </Text>
                <Text marginTop={5} textAlign={"center"}>
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
