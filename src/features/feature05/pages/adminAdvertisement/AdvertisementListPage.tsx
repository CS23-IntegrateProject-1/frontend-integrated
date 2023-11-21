import {
  Box,
  Button,
  Checkbox,
  Divider,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Tab,
  Tabs,
  useDisclosure,
} from "@chakra-ui/react";
import { AdvertisementCard } from "../../components/adminAdvertisementCom/AdvertisementCard";
import { Search2Icon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export const AdvertisementListPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.600" />}
            bgColor={"white"}
            borderRadius={10}
          />
          <Input
            type="text"
            placeholder="Search..."
            border="1px solid white"
            bgColor={"white"}
            color={"black"}
            borderRadius={10}
          />
          {/* <InputRightElement p={0} borderRadius={10}></InputRightElement> */}

          {/* Sort */}
          <RadioGroup defaultValue="2" paddingLeft={3} paddingTop={2}>
            <Stack spacing={5} direction="row">
              <Box onClick={onOpen}>
                <Radio colorScheme="purple" value="1">
                  Sort
                </Radio>
              </Box>
            </Stack>
          </RadioGroup>
        </InputGroup>
      </Box>

      {/* Sort */}
      <Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            bgColor={"#FFFFFF"}
            color={"#200944"}
            height={"250px"}
            width={"30%"}
            minWidth={"300px"}
            borderRadius={20}
          >
            <ModalHeader
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
             Sort By
            </ModalHeader>
            <ModalCloseButton />
            <Divider />

            {/* Sort-checkbox */}
            <Box
              width="50%"
              minWidth="250px"
              maxWidth="400px"
              display="flex"
              flexDirection={"column"}
              paddingLeft={5}
              paddingTop={5}
              paddingBottom={8}
            >
              <Tabs
                fontWeight="bold"
                color="black"
                paddingBottom={2}
                _selected={{color: "#5F0DBB"}}
              >
                A to Z
              </Tabs>
              <Box
                fontWeight="bold"
                color="black"
              >
                Z to A
              </Box>

            </Box>

            {/* Sort-Button */}
            <ModalFooter
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Button
                border="1px solid "
                borderColor={"Red"}
                bgColor={"#FFFFFF"}
                color={"red"}
                width="100px"
                _hover={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }} // Add shadow on hover
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.3)" // Add initial shadow
              >
                Reset
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>

        <AdvertisementCard />
        <AdvertisementCard />
        <AdvertisementCard />


    </Box>
  );
};
