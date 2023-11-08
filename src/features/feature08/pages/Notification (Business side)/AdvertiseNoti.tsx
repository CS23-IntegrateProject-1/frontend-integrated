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
    Text
  } from "@chakra-ui/react";

import { ButtonComponent } from "../../../../components/buttons/ButtonComponent";

export const AdvertiseNoti = () => {
    return (
        <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      margin={5}
      width={"50%"}
    >
      <Card width={"70%"} backgroundColor={"#5F0DBB"} color={"#C5C4C7"}>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="md">
                Title : Advertisement approved
              </Heading>
              <Text>
                This email is to notify you that your 
                advertisement has been improved and 
                this is the total amount that you have to pay. 
              </Text>
              <Heading size="md">
                Payment Information
              </Heading>
              <TableContainer>
                <Table variant={'striped'} colorScheme="pink">
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
              <Text align={"right"}>
                Total cost : 1000 baht
              </Text>
              <Text align={"center"}>
                <ButtonComponent text="Pay now" />
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
    )
}