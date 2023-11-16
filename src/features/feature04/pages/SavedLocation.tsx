import {
  Box,
  Text,
  InputGroup,
  Input,
  InputLeftElement,
  Flex,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  Divider,
  Stack,
} from "@chakra-ui/react";
import SavedLocationCard from "../components/SavedLocationCard";
import Header from "../components/Header";
import { color } from "framer-motion";
import textStyles from "../../../theme/foundations/textStyles";
import colors from "../../../theme/foundations/colors";
export const SavedLocation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const savedLocationData = [
    {
      address: "Lorem ipsum dolor sit amet consectetur",
      city: "Lorem ipsum dolor",
    },
    {
      address: "Lorem ipsum dolor sit amet consectetur",
      city: "Lorem ipsum dolor",
    },
    {
      address: "Lorem ipsum dolor sit amet consectetur",
      city: "Lorem ipsum dolor",
    },
    {
      address: "Lorem ipsum dolor sit amet consectetur",
      city: "Lorem ipsum dolor",
    },
    {
      address: "Lorem ipsum dolor sit amet consectetur",
      city: "Lorem ipsum dolor",
    }, {
      address: "Lorem ipsum dolor sit amet consectetur",
      city: "Lorem ipsum dolor",
    },
  ];

  const savedLocation = savedLocationData.map((savedplace, index) => (
    <SavedLocationCard
      key={index}
      address={savedplace.address}
      city={savedplace.city}
    />
  ));
  const PinIcon: React.FC<{ fillColor: string }> = (props) => {
    return (
      <svg
        width="30"
        height="30"
        viewBox="0 0 19 17"
        fill={colors.brand[100]}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 0C2.68286 0 0 2.504 0 5.6C0 9.8 6 16 6 16C6 16 12 9.8 12 5.6C12 2.504 9.31714 0 6 0ZM6 7.6C5.43168 7.6 4.88663 7.38929 4.48477 7.01421C4.08291 6.63914 3.85714 6.13043 3.85714 5.6C3.85714 5.06957 4.08291 4.56086 4.48477 4.18579C4.88663 3.81071 5.43168 3.6 6 3.6C6.56832 3.6 7.11337 3.81071 7.51523 4.18579C7.91709 4.56086 8.14286 5.06957 8.14286 5.6C8.14286 6.13043 7.91709 6.63914 7.51523 7.01421C7.11337 7.38929 6.56832 7.6 6 7.6Z"
          fill={props.fillColor}
        />
      </svg>
    );
  };
  return (
    <Box>
      <Header />

      <Flex flexDir={"column"} alignItems="center">
        <Flex flexWrap="wrap" justifyContent="center" maxW="800px">
          {savedLocation}
        </Flex>
      </Flex>

      <br />
      <Flex flexDir={"row"} justifyContent={"center"}>
        <Button
          variant={"unstyled"}
          backgroundColor={colors.brand[200]}
          color={colors.white}
          p={2}
          pl={10}
          pr={10}
          height={"50px"}
          width={"300px"}
          onClick={onOpen}
        >
          Add New Address
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bg={colors.brand[400]}>
            <ModalHeader>Add new address</ModalHeader>
            <ModalCloseButton pt={5} />
            <Divider borderColor={colors.brand[200]} />
            <ModalBody>
              <Flex flexDir={"row"}>
                <PinIcon fillColor={colors.brand[100]} />
                ...
              </Flex>
              <br />
              <Text
                color={colors.white}
                fontSize={textStyles.h3.fontSize}
                fontWeight={textStyles.h3.fontWeight}
              >
                Address Information
              </Text>
              <Stack spacing={3} mt={2}>
                <Input variant="outline" placeholder="Address" />
                <Input variant="outline" placeholder="Province" />
                <Input variant="outline" placeholder="District" />
                <Input variant="outline" placeholder="Subdistrict" />
                <Input variant="outline" placeholder="Postcode" />
              </Stack>
            </ModalBody>
            <Divider borderColor={colors.brand[200]} />
            <Flex justifyContent={"center"} m={5}>
              <Button
                variant={"unstyled"}
                backgroundColor={colors.brand[200]}
                color={colors.white}
                p={2}
                pl={10}
                pr={10}
                height={"50px"}
                width={"300px"}
              >
                Save and Continue
              </Button>
            </Flex>
          </ModalContent>
        </Modal>
      </Flex>
    </Box>
  );
};
