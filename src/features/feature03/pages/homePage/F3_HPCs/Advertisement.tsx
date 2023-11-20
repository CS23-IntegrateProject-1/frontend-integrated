import {
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  ModalFooter,
  Image,
  Text,
} from "@chakra-ui/react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Advertisement extends ModalProps {
  id: number;
  name: string;
  location: string;
  numberOfEmployee: number;
}

export function Advertisement({ isOpen = false, onClose = () => {} }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: "xs", sm: "md", md: "lg" }}
      isCentered
    >
      <ModalOverlay />
      <ModalContent
        backgroundColor="brand.300"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <ModalHeader>Advertisement</ModalHeader>
        <ModalCloseButton />
        <ModalBody p={"2"}>
          <Image
            src="https://www.localguidesconnect.com/t5/image/serverpage/image-id/577026iC349F71B836713F5/image-size/large?v=v2&px=999"
            alt="Map_Pic not load"
            borderRadius="xl"
            w="100%"
            h="300px"
            objectFit={"cover"}
          />
          <Text>Placeholder text</Text>
        </ModalBody>
        <ModalFooter>
          <Flex direction="row" justify="space-between">
            <Button
              variant="outline"
              borderColor="red"
              textColor="red"
              _hover={{
                textColor: "white",
                borderColor: "red",
                bgColor: "red",
              }}
            >
              Dismiss
            </Button>
            <Button
              variant="solid"
              textColor="white"
              bgColor="brand.300"
              _hover={{
                textColor: "black",
                bgColor: "brand.100",
              }}
            >
              Go!
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
