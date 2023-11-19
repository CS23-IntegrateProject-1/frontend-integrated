import {
  Button,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  ModalFooter,
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
        <ModalBody p={"2"}>Placeholder text</ModalBody>
        <ModalFooter>
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
            Click
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
