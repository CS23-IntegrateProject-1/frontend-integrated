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
      size={{ base: "xs", sm: "md"}}
      isCentered
    >
      <ModalOverlay />
      <ModalContent
        backgroundColor="brand.300"
        display="flex"
        alignItems="center"
        justifyContent="center"
        pb={{base:"2", lg:"8"}}
        pt={{base:"4", lg:"10"}}
        rounded={"2xl"}
      >
        <ModalHeader fontWeight={"bold"} fontSize={{base:"20px", lg:"25px"}}>Filter By</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
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
