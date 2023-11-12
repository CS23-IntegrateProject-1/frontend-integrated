import {
  Box,
  Button,
  Checkbox,
  Divider,
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
  useDisclosure,
} from "@chakra-ui/react";
import { AdvertisementCard } from "../components/AdvertisementCard";
import { Search2Icon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export const AdvertisementPage = () => {
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

          {/* Filter  and Sort */}
          <RadioGroup defaultValue="2" paddingLeft={3} paddingTop={2}>
            <Stack spacing={5} direction="row">
              <Box onClick={onOpen}>
                <Radio colorScheme="purple" value="1">
                  Filter
                </Radio>
              </Box>

              <Box onClick={onOpen}>
                <Radio colorScheme="purple" value="2">
                  Sort
                </Radio>
              </Box>
            </Stack>
          </RadioGroup>
        </InputGroup>
      </Box>

      {/* Filter */}
      <Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            bgColor={"#FFFFFF"}
            color={"#200944"}
            height={"40%"}
            borderRadius={20}
          >
            <ModalHeader
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              Filter By
            </ModalHeader>
            <ModalCloseButton />
            <Divider />

            {/* Filter-checkbox */}
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
              <Checkbox
                borderColor="#5F0DBB"
                fontWeight="bold"
                color="#5F0DBB"
                colorScheme="purple"
                paddingBottom={2}
              >
                Special Offers/ Promotions
              </Checkbox>
              <Checkbox
                borderColor="#5F0DBB"
                fontWeight="bold"
                color="#5F0DBB"
                colorScheme="purple"
              >
                SpecialEvents
              </Checkbox>
            </Box>

            {/* Filter-Button */}
            <ModalFooter
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Button
                border="1px solid "
                borderColor={"#5F0DBB"}
                bgColor={"#FFFFFF"}
                color={"#5F0DBB"}
                width="30%"
                _hover={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }} // Add shadow on hover
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.3)" // Add initial shadow
              >
                Done
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>

      <AdvertisementCard />
      
    </Box>
  );
};

