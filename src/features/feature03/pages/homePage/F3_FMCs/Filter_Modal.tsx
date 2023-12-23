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
import { FilterPrice } from "./FilterPrice";
import { FilterType } from "./FilterType";
import { useContext } from "react";
import { DEFAULT_FILTER, FilterContext } from "../VenuePage";

export function Filter_Modal({ isOpen = false, onClose = () => {} }) {
  const context = useContext(FilterContext);
  const handleFilterReset = () => {
    context.setFilter(() => DEFAULT_FILTER);
  }
  // console.log(context.filter)
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
        <ModalCloseButton mt={"1"} />
        <ModalBody>
          <FilterType />
          <FilterPrice />
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
            onClick={handleFilterReset}
          >
            Reset
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
