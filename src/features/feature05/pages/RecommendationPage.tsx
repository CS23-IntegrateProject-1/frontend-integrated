import { Box, Button, Input, Text, useDisclosure } from "@chakra-ui/react";
import { TextStyle } from "../../../theme/TextStyle";
import { Textarea } from '@chakra-ui/react'
import {
     Modal,
     ModalOverlay,
     ModalContent,
     ModalHeader,
     ModalFooter,
     ModalBody,
     ModalCloseButton,
   } from '@chakra-ui/react'

export const Recommendation = () => {
     const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
    >
      <Box
        paddingBottom={3}
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
      >
        <Text style={TextStyle.h2} color={"white"} paddingBottom={2}>
          {" "}
          Why is the request rejected?
        </Text>
        <Textarea placeholder='Description' variant='filled' height={"150px"}/>
      </Box>

      <Box
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"row"}
        paddingBottom={3}
        justifyContent={"right"}
      >
        <Button 
          backgroundColor="#A533C8"
          variant="solid"
          width="150px"
          color="white"
          onClick={onOpen}
        >
          Send Feedback
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor={"#DEBEF6"} color={"#200944"} >
          <ModalHeader mt={3}>The request has been approved</ModalHeader>
          <ModalCloseButton />
          <ModalFooter>
            <Button bgColor={"white"} color={"#200944"} mr={5} width="30%">Print</Button>
            <Button bgColor={"#A533C8"} mr={3} onClick={onClose} color={"white"} width="30%">
              Send Mail
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Box>

    </Box>
  );
};
