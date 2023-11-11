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
  } from '@chakra-ui/react'

export const OrderUpdateNoti = () => {
    return (
        <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      margin={[3, 5, 7]} // Responsive margin for different screen sizes
      width={["100%", "80%", "70%"]} // Responsive width for different screen sizes
    >
      <Card width={"70%"} backgroundColor={""} color={"white"} border={"1px solid #DEBEF6"}>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="md" marginBottom={3}>
                Order update
              </Heading>
              <Text>
                Kevin Table no.7
              </Text>
              <TableContainer>
                <Table variant={'simple'}>
                    <Tbody>
                        <Tr>
                            <Td>Soup</Td>
                            <Td>3</Td>
                        </Tr>
                        <Tr>
                            <Td>Salad</Td>
                            <Td>1</Td>
                        </Tr>
                        <Tr>
                            <Td>Super pasta</Td>
                            <Td>1</Td>
                        </Tr>
                        <Tr>
                            <Td>Total</Td>
                            <Td>670</Td>
                        </Tr>
                    </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
    )
}