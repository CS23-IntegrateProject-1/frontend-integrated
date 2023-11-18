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
import { FilterCap } from "./FilterCap";
import { FilterDistance } from "./FilterDistance";
import { FilterPrice } from "./FilterPrice";
import { FilterType } from "./FilterType";

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

export function Filter_Modal({ isOpen = false, onClose = () => {} }) {
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
        <ModalHeader>Filter By</ModalHeader>
        <ModalCloseButton />
        <ModalBody p={"2"}>
          <FilterType />
          <FilterPrice />
          <FilterDistance />
          <FilterCap />
        </ModalBody>
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
            Reset
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
