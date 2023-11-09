import { Box,Avatar, Stack, Flex} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { TextStyle } from "../../../theme/TextStyle";
import { NavLink }  from "react-router-dom";
export const BusiProfile = () => {
  return (
      <Box>
            <Flex mt={10} alignItems={'center'} justifyContent={'space-between'}>
                <Box></Box>
                <Box pl={8}>
                    <Avatar src='https://bit.ly/broken-link' size={'xl'}/>
                </Box>
                <NavLink to="/business/busiProfileEdit">
                    <Box>
                        <ChevronRightIcon fontSize={"xx-large"}/>
                    </Box>
                </NavLink>
                
            </Flex>
            <Box px={6} py={5} pt={10} mt={-8} bg={'brand.300'} borderRadius={'5'}>
                <Stack>
                    <Flex gap={3}>
                        <Box fontSize={TextStyle.h2.fontSize} fontWeight={TextStyle.h1.fontWeight}>Name</Box>
                        <Box pt={0.5} fontSize={TextStyle.h3.fontSize}>Mix Restaurant</Box>
                    </Flex>
                    <Box fontSize={TextStyle.h2.fontSize} fontWeight={TextStyle.h1.fontWeight}>About Us</Box>
                    <Box mt={-1} fontSize={TextStyle.h3.fontSize}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus numquam eligendi inventore laboriosam temporibus. Eius ex architecto molestias harum nam, quam nihil consequuntur! Quaerat, voluptatibus!</Box>
                    <Box fontSize={TextStyle.h2.fontSize} fontWeight={TextStyle.h1.fontWeight}>Address</Box>
                    <Box mt={-1} fontSize={TextStyle.h3.fontSize}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus numquam eligendi inventore laboriosam temporibus. Eius ex architecto molestias harum nam, quam nihil consequuntur! Quaerat, voluptatibus!</Box>
                    <Flex gap={3}>
                        <Box fontSize={TextStyle.h2.fontSize} fontWeight={TextStyle.h1.fontWeight}>Status</Box>
                        <Box pt={0.5} fontSize={TextStyle.h3.fontSize}>Open</Box>
                        <Box pt={0.5} fontSize={TextStyle.h3.fontSize} fontWeight={TextStyle.h3.fontWeight}>From OO:OO  To  OO:OO</Box>
                    </Flex>
                    <Flex gap={3}>
                        <Box fontSize={TextStyle.h2.fontSize} fontWeight={TextStyle.h1.fontWeight}>Type</Box>
                        <Box pt={0.5} fontSize={TextStyle.h3.fontSize}>Restaurant</Box>
                    </Flex>
                    <Flex gap={3}>
                        <Box fontSize={TextStyle.h2.fontSize} fontWeight={TextStyle.h1.fontWeight}>Category</Box>
                        <Box pt={0.5} fontSize={TextStyle.h3.fontSize}>Fast food</Box>
                    </Flex>
                    <Flex gap={3}>
                        <Box fontSize={TextStyle.h2.fontSize} fontWeight={TextStyle.h1.fontWeight}>Capacity</Box>
                        <Box pt={0.5} fontSize={TextStyle.h3.fontSize}>100 people</Box>
                    </Flex>
                    <Flex gap={3}>
                        <Box fontSize={TextStyle.h2.fontSize} fontWeight={TextStyle.h1.fontWeight}>Price range</Box>
                        <Box pt={0.5} fontSize={TextStyle.h3.fontSize}> 50 - 500 Baht</Box>
                    </Flex>
                    <Flex gap={3}>
                        <Box fontSize={TextStyle.h2.fontSize} fontWeight={TextStyle.h1.fontWeight}>Deposite</Box>
                        <Box pt={0.5} fontSize={TextStyle.h3.fontSize}> 30 Baht</Box>
                    </Flex>
                    <Box fontSize={TextStyle.h2.fontSize} fontWeight={TextStyle.h1.fontWeight}>Payment Option</Box>
                    <Flex gap={3}>
                        <Box pt={0.5} fontSize={TextStyle.h3.fontSize}> Cash</Box>
                        <Box pt={0.5} fontSize={TextStyle.h3.fontSize}> Scan QR code</Box>
                        <Box pt={0.5} fontSize={TextStyle.h3.fontSize}> Credit cards</Box>
                        <Box pt={0.5} fontSize={TextStyle.h3.fontSize}> Debit card</Box>
                    </Flex>
                </Stack>
            </Box>
      </Box>
  )
}