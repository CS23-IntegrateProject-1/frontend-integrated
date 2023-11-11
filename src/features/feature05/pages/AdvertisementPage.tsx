import { Box, Button, Input, InputGroup, InputLeftElement, InputRightAddon, Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Stack, useDisclosure } from "@chakra-ui/react";
import { AdvertisementCard } from "../components/AdvertisementCard";
import { Search2Icon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export const AdvertisementPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
    >
      {/* Search */}
      <Box
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
        paddingBottom={5}
      >
        <InputGroup borderRadius={5}>
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.600" />}
            bgColor={"white"}
          />
          <Input
            type="text"
            placeholder="Search..."
            border="1px solid white"
            bgColor={"white"}
            color={"black"}
          />
          <InputRightAddon p={0} border="none"></InputRightAddon>
          <RadioGroup defaultValue="2" paddingLeft={3} paddingTop={2}>
            <Stack spacing={5} direction="row">
              <Box onClick={onOpen}>
              <Radio colorScheme="red" value="1">
                Filter
              </Radio>
              </Box>

              <Box onClick={onOpen}>
              <Radio colorScheme="green" value="2">
                Sort
              </Radio>
              </Box>

            </Stack>
          </RadioGroup>
        </InputGroup>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor={"#DEBEF6"} color={"#200944"}>
          <ModalHeader mt={3}>The request has been approved</ModalHeader>
          <ModalCloseButton />
          <ModalFooter>
            <Button bgColor={"white"} color={"#200944"} mr={5} width="30%">
              Print
            </Button>
            <Button
              bgColor={"#A533C8"}
              mr={3}
              onClick={onClose}
              color={"white"}
              width="30%"
            >
              Send Mail
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
      <AdvertisementCard />
    </Box>
  );
};

