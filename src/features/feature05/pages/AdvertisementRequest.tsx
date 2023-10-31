import { Box, Button, Select, Stack, Text, useDisclosure} from "@chakra-ui/react";
import { TextStyle } from "../../../theme/TextStyle";
import { Input } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

export const AdvertisementRequest = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
    >

      {/* Name * */}
      <Box
        paddingBottom={3}
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
      >
        <Text style={TextStyle.h2} color={"white"}>
          {" "}
          Name *
        </Text>
        <Input
          variant="name"
          placeholder="Filled"
          style={{ width: "auto" }}
          color={"black"}
        />
      </Box>

      {/* Description * */}
      <Box
        paddingBottom={3}
        width={"50%"}
        minWidth={"250px"}
        maxWidth={"400px"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Text style={TextStyle.h2} color={"white"}>
          {" "}
          Description *
        </Text>
        <Textarea
          variant="name"
          placeholder="Filled"
          width="auto"
          color={"black"}
        />
      </Box>

      {/* Starting Date * & Ending Date * */}
      <Box
        paddingBottom={3}
        width={"50%"}
        minWidth={"250px"}
        maxWidth={"400px"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
      >
        <Box mr={"20px"} flex={"1"}>
          <Text style={TextStyle.h2} color={"white"}>
            {" "}
            Starting Date *
          </Text>
          <Input size={"xs"} type="date" color="black" bg={"white"}></Input>
        </Box>
        <Box flex={"1"}>
          <Text style={TextStyle.h2} color={"white"}>
            {" "}
            Ending Date *
          </Text>
          <Input size={"xs"} type="date" color="black" bg={"white"}></Input>
        </Box>
      </Box>

      {/* Type */}
      <Box
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
        paddingBottom={3}
      >
        <Text style={TextStyle.h2} color={"white"}>
          {" "}
          Type
        </Text>
        <RadioGroup defaultValue="2">
          <Stack spacing={1} direction="column">
            <Radio value="1">Special offers/ promotions</Radio>
            <Radio value="2">Special events</Radio>
          </Stack>
        </RadioGroup>
      </Box>

      <Box
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
        paddingBottom={10}
      >
        <Text style={TextStyle.h2} color={"white"} paddingBottom={1}>
          {" "}
          Images (mobile & desktop view)
        </Text>
        <Stack spacing={2} direction="column">
          <Box width={"auto"} height={"100"} bg={"white"} />
          <Box width={"200"} height={"100"} bg={"white"} />
        </Stack>
      </Box>

      <Box
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
        paddingBottom={5}
      >
        <Text style={TextStyle.h2} color={"white"}>
          {" "}
          Advertisement plan
        </Text>
        <RadioGroup defaultValue="2">
          <Stack spacing={1} direction="column">
            <Radio value="1">100 Baht/Week</Radio>
            <Radio value="2">300 Baht/Month</Radio>
            <Radio value="3">3,600 Baht/Year</Radio>
          </Stack>
        </RadioGroup>
      </Box>

      <Box
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
        paddingBottom={8}
      >
        <Select placeholder="Payment method" style={TextStyle.h1}>
          <option value="option1">Prompt pay</option>
          <option value="option2">Cash</option>
        </Select>
      </Box>

      <Box
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"row"}
        paddingBottom={3}
        justifyContent={"space-evenly"}
      >
        <Button 
        colorScheme="gray" 
        variant="solid" 
        width="40%" 
        color="#A533C8"
        >
          Reject
        </Button>

        <Button 
          backgroundColor="#A533C8"
          variant="solid"
          width="40%"
          color="white"
          onClick={onOpen}
        >
          Accept
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
