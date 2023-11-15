import {
    Table,
    Thead,
    Tr,
    Th,
    TableContainer,
    Card,
    CardBody,
    Stack,
    StackDivider,
    Box,
    Center,
    Text
  } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { TextStyle } from "../../../../theme/TextStyle";
  
  export const Accounting = () => {
    return (
      <Center>
        <Box
          display={"flex"}
          flexDirection={"column"}
          margin={[3, 5, 7]}
          width={["100%", "80%", "70%"]}
          gap={4}
        >
          <Text style={TextStyle.h1} fontWeight={"bold"}>
              Accounting information 
          </Text>
          {/* Card header */}
          <Card width={"100%"}  backgroundColor={"#5F0DBB"} color={"#C5C4C7"}  marginBottom={[4, 6, 8]}>
            <CardBody textAlign={"center"}>
              <Stack divider={<StackDivider />} color={"#C5C4C7"} spacing={[2, 4]}>
                <Box>
                  <TableContainer>
                    <Table variant="unstyled">
                      <Thead>
                        <Tr borderBottom="none">
                          <Th textAlign="center" borderRight="1px solid white" style={TextStyle.h4} color="white">Date</Th>
                          <Th textAlign="center" style={TextStyle.h4} color="white">Amount</Th>
                        </Tr>
                      </Thead>
                    </Table>
                  </TableContainer>
                </Box>
              </Stack>
            </CardBody>
          </Card>
  
          {/* Card one */}
          <Link to={"/venue/Account/timestamp"}>
            <Card width={"100%"} backgroundColor={"#D9D9D9"} color={"black"} >
              <CardBody textAlign="center">
                <Stack divider={<StackDivider />} color={"#C5C4C7"}>
                  <Box>
                    <TableContainer>
                      <Table variant="unstyled">
                        <Thead>
                          <Tr borderBottom="none">
                            <Th textAlign="center" borderRight="1px solid white" style={TextStyle.h4} color="black">01 Nov 2023</Th>
                            <Th textAlign="center" style={TextStyle.h1} color="black">
                              5000
                              <Text textAlign="center" display="inline-block" marginLeft={2} style={TextStyle.h4} color="black">
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
          </Link>
  
          {/* Card two */}
          <Card width={"100%"} backgroundColor={"#D9D9D9"} color={"black"} >
            <CardBody textAlign="center">
              <Stack divider={<StackDivider />} color={"#C5C4C7"} spacing={[2, 4]}>
                <Box>
                  <TableContainer>
                    <Table width="100%" variant="unstyled">
                      <Thead>
                        <Tr borderBottom="none" >
                          <Th  textAlign="center" borderRight="1px solid white" style={TextStyle.h4} color="black">02 Nov 2023</Th>
                          <Th textAlign="center" style={TextStyle.h1} color="black">
                            7000
                            <Text display="inline-block" marginLeft={2} style={TextStyle.h4} color="black">
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
          <Card width={"100%"} backgroundColor={"#D9D9D9"} color={"black"} >
            <CardBody textAlign="center">
              <Stack divider={<StackDivider />} color={"#C5C4C7"} spacing={[2, 4]}>
                <Box>
                  <TableContainer>
                    <Table width="100%" variant="unstyled">
                      <Thead>
                        <Tr borderBottom="none" >
                          <Th  textAlign="center" borderRight="1px solid white" style={TextStyle.h4} color="black">03 Nov 2023</Th>
                          <Th textAlign="center" style={TextStyle.h1} color="black">
                            4000
                            <Text display="inline-block" marginLeft={2} style={TextStyle.h4} color="black">
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

          {/* Card four */}
          <Card width={"100%"} backgroundColor={"#D9D9D9"} color={"black"} >
            <CardBody textAlign="center">
              <Stack divider={<StackDivider />} color={"#C5C4C7"} spacing={[2, 4]}>
                <Box>
                  <TableContainer>
                    <Table width="100%" variant="unstyled">
                      <Thead>
                        <Tr borderBottom="none" >
                          <Th  textAlign="center" borderRight="1px solid white" style={TextStyle.h4} color="black">04 Nov 2023</Th>
                          <Th textAlign="center" style={TextStyle.h1} color="black">
                            5000
                            <Text display="inline-block" marginLeft={2} style={TextStyle.h4} color="black">
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