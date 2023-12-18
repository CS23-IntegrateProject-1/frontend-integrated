import { Box, Divider,Button, Text, Textarea, useDisclosure, Drawer, DrawerContent, DrawerOverlay, DrawerCloseButton, DrawerHeader, DrawerBody, } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { useState } from "react";
export const HelpDesk = () => {
    const [data, setData] = useState("");
    //For Drawer Sign out
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleOpen = () => {
        onOpen();
    }
    console.log(data);
    const handleTicket = () => {
        console.log("ticket submitted");
    }
  return (
    <Box>
      {/* Create Ticket */}
      <Box
        fontWeight={TextStyle.h1.fontWeight}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box>
          <Text>Create a Ticket</Text>
        </Box>
        <Divider color={"brand.100"} />
      </Box>
      {/* Textare Box and button */}
      <Box mt={3} >
        <Box pt={2} px={5} bg={'grey.100'} borderRadius={15}>
            <Textarea 
                placeholder="Help Desk"
                size="sm"
                bg={"grey.300"}
                color={'black'}
                borderRadius={15}
                height={150}
                onChange={(e) => setData(e.target.value)}
            />
            <Box py={3} position={'relative'} left={"40%"}>
                <Button onClick={handleTicket} px={20} _hover={{ bg:'brand.300'}} color={'white'} bg={'brand.200'}>Submit</Button>
            </Box>
        </Box>
      </Box>
      
      {/* Ticket History */}
      
      <Box mt={15} fontWeight={TextStyle.h1.fontWeight}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}>
         <Box><Text mb={10}>Ticket History</Text></Box>
         <Divider color={'brand.100'}/>
      </Box>
      {/* loop ticker hsitory here */}
        {/* Pending color = yellow compeleted = green */}
        <Box onClick={handleOpen} key={"test"} cursor={'pointer'} bg={'grey.100'} display={'flex'} w={'50%'} py={5} borderRadius={15} justifyContent={'space-between'}>
            <Box><Text color={'brand.300'} pl={2}>Receive Wrong Order</Text></Box>
            <Box color={'yellow'} pr={2}>Pending</Box> 
         </Box>

        {/* Drawer for history deatil*/}
        <Drawer
        isOpen={isOpen}
        placement='bottom'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent  bg={'brand.400'} borderRadius={20}> 
          <DrawerCloseButton color={'brand.200'} />
          <DrawerHeader>Can't Update Address</DrawerHeader>
          <Divider color={'brand.200'}/>
          <DrawerBody>
            <Box display={'flex'}>
                <Box px={2}>
                    <Text>Status</Text>
                </Box>
                <Box px={2} color={'green'}>
                    <Text>Completed</Text>
                </Box>
            </Box>
            <Textarea 
                size="sm"
                bg={"grey.300"}
                color={'black'}
                borderRadius={15}
                height={50}
                value={'I can not update my address'}
                disabled
                mt={3}
            />
            <Box mt={3}>
                <Text mb={2}>Response</Text>
                <Textarea 
                size="sm"
                bg={"grey.300"}
                color={'black'}
                borderRadius={15}
                height={50}
                value={'I can not update my address'}
                disabled
            />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
