import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Card,
    Heading,
    CardBody,
    Stack,
    StackDivider,
    Box,
    Center,
    Text
  } from "@chakra-ui/react";
  
  export const Accounting = () => {
    return (
      <Center>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          margin={[3, 5, 7]}
          width={["100%", "80%", "70%"]}
          gap={4}
        >
          {/* Card one */}
          <Card width={"100%"} backgroundColor={"#5F0DBB"} color={"#C5C4C7"}  marginBottom={[4, 6, 8]}>
            <CardBody>
              <Stack divider={<StackDivider />} spacing={[2, 4]}>
                <Box>
                  <TableContainer>
                    <Table width="100%" variant="unstyled">
                      <Thead>
                        <Tr borderBottom="none">
                          <Th textAlign="center" borderRight="1px solid white" fontSize="lg" color="white">Date</Th>
                          <Th textAlign="center" fontSize="lg" color="white">Amount</Th>
                        </Tr>
                      </Thead>
                    </Table>
                  </TableContainer>
                </Box>
              </Stack>
            </CardBody>
          </Card>
  
          {/* Card two */}
          <Card width={"100%"} backgroundColor={"white"} color={"#C5C4C7"} >
            <CardBody textAlign="center">
              <Stack divider={<StackDivider />} spacing={[2, 4]}>
                <Box>
                  <TableContainer>
                    <Table width="100%" variant="unstyled">
                      <Thead>
                        <Tr borderBottom="none">
                          <Th textAlign="center" borderRight="1px solid white" fontSize="sm" color="black">01 Nov 2023</Th>
                          <Th textAlign="center" fontSize="md" color="black">
                            5000
                            <Text textAlign="center" display="inline-block" marginLeft={2} fontSize="xs" color="black">
                              Baht
                            </Text>
                          </Th>
                        </Tr>
                      </Thead>
                    </Table>
                  </TableContainer>
                </Box>
              </Stack>
            </CardBody>
          </Card>
  
          {/* Card three */}
          <Card width={"100%"} backgroundColor={"white"} color={"#C5C4C7"} >
            <CardBody textAlign="center">
              <Stack divider={<StackDivider />} spacing={[2, 4]}>
                <Box>
                  <TableContainer>
                    <Table width="100%" variant="unstyled">
                      <Thead>
                        <Tr borderBottom="none" >
                          <Th  textAlign="center" borderRight="1px solid white" fontSize="sm" color="black">01 Nov 2023</Th>
                          <Th textAlign="center" fontSize="md" color="black">
                            7000
                            <Text display="inline-block" marginLeft={2} fontSize="xs" color="black">
                              Baht
                            </Text>
                          </Th>
                        </Tr>
                      </Thead>
                    </Table>
                  </TableContainer>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </Box>
      </Center>
    );
  };