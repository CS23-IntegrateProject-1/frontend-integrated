import {
  Box,
  Heading,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  ModalFooter,
  Text,
  Button,
} from "@chakra-ui/react";
import { FC } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Filter_Modal extends ModalProps {
    id: number;
    name: string;
    location: string;
    numberOfEmployee: number;
}

export const Filter_Modal: FC<Filter_Modal> = (props) => {
  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      size={{ base: "xs", sm: "md", md: "lg" }}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        {/* <ModalHeader>Modal Title</ModalHeader> */}
        <ModalCloseButton />
        <ModalBody padding={"2em"}>
          <Text>Lorem</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
