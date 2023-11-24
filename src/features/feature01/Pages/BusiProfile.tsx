import { Box, Avatar, Stack, Flex, Text } from "@chakra-ui/react";
import { TextStyle } from "../../../theme/TextStyle";
import { NavLink } from "react-router-dom";
export const BusiProfile = () => {
    return (
        <Box>
            <Flex mt={10} alignItems={'center'} justifyContent={'space-between'}>
                <Box></Box>
                <Box pl={8}>
                    <Avatar src='https://bit.ly/broken-link' size={'xl'} />
                </Box>
                <NavLink to="/business/busiProfileEdit">
                    <Box fontSize={"xx-large"}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.06 9.02L14.98 9.94L5.92 19H5V18.08L14.06 9.02ZM17.66 3C17.41 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C20.8027 6.94749 20.8762 6.8376 20.9264 6.71662C20.9766 6.59565 21.0024 6.46597 21.0024 6.335C21.0024 6.20403 20.9766 6.07435 20.9264 5.95338C20.8762 5.8324 20.8027 5.72251 20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3ZM14.06 6.19L3 17.25V21H6.75L17.81 9.94L14.06 6.19Z" fill="#A533C8" />
                        </svg>
                    </Box>
                </NavLink>

            </Flex>
            <Box px={6} py={10} pt={10} mt={-8} bg={'brand.300'} borderRadius={'5'}>
                <Stack direction={{ lg: 'row', base: 'column' }}>
                    <Box ml={{lg:'100'}} width={{lg:'60%'}}>
                        <Flex gap={3} my={2}>
                            <Box fontSize={TextStyle.h2.fontSize} fontWeight={TextStyle.h1.fontWeight}>Name</Box>
                            <Box pt={0.5} fontSize={TextStyle.h3.fontSize}> Mix Restaurant</Box>
                        </Flex>
                        <Box my={3}>
                            <Text fontSize={TextStyle.h2.fontSize} fontWeight={TextStyle.h1.fontWeight}>About Us</Text>
                            <Text fontSize={TextStyle.h3.fontSize} width={{lg:'40%', sm:'100%'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime blanditiis quaerat vel illo delectus eligendi alias distinctio iure vitae aut.</Text>
                        </Box>
                        <Box my={3}>
                            <Text fontSize={TextStyle.h2.fontSize} fontWeight={TextStyle.h1.fontWeight}>Address</Text>
                            <Text fontSize={TextStyle.h3.fontSize}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                        </Box>
                        <Flex gap={3} my={2}>
                            <Text fontSize={TextStyle.h2.fontSize} fontWeight={TextStyle.h1.fontWeight}>Status</Text>
                            <Text fontSize={TextStyle.h3.fontSize}>Open</Text>
                            <Text fontSize={TextStyle.h3.fontSize}>From</Text>
                            <Text fontSize={TextStyle.h3.fontSize}>00 : 00</Text>
                            <Text fontSize={TextStyle.h3.fontSize}>To</Text>
                            <Text fontSize={TextStyle.h3.fontSize}>00 : 00</Text>
                        </Flex>
                    </Box>
                    <Box width={{lg:'50%', sm:'100%'}}>
                        <Flex gap={3} my={2}>
                            <Box fontSize={TextStyle.h2.fontSize} fontWeight={TextStyle.h1.fontWeight}>Category</Box>
                            <Box pt={0.5} fontSize={TextStyle.h3.fontSize}>Restaurant</Box>
                        </Flex>
                        <Flex gap={3} my={2}>
                            <Box fontSize={TextStyle.h2.fontSize} fontWeight={TextStyle.h1.fontWeight}>Capacity</Box>
                            <Box pt={0.5} fontSize={TextStyle.h3.fontSize}>100 people</Box>
                        </Flex>
                        <Flex gap={3} my={2}>
                            <Box fontSize={TextStyle.h2.fontSize} fontWeight={TextStyle.h1.fontWeight}>Price range</Box>
                            <Box pt={0.5} fontSize={TextStyle.h3.fontSize}> 50 - 500 Baht</Box>
                        </Flex>
                        <Flex gap={3} my={2}>
                            <Box fontSize={TextStyle.h2.fontSize} fontWeight={TextStyle.h1.fontWeight}>Deposite</Box>
                            <Box pt={0.5} fontSize={TextStyle.h3.fontSize}> 30 Baht</Box>
                        </Flex>
                        <Box fontSize={TextStyle.h2.fontSize} fontWeight={TextStyle.h1.fontWeight}>Payment option</Box>
                        <Flex  gap={3} my={2}>
                            <Box pt={0.5} fontSize={TextStyle.h3.fontSize}> Cash</Box>
                            <Box pt={0.5} fontSize={TextStyle.h3.fontSize}> Scan QR code</Box>
                            <Box pt={0.5} fontSize={TextStyle.h3.fontSize}> Credit cards</Box>
                            <Box pt={0.5} fontSize={TextStyle.h3.fontSize}> Debit card</Box>
                        </Flex>
                    </Box>

                </Stack>

            </Box>
        </Box>
    )
}