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
import { FilterCap_RP } from "./FilterCap_RP";
import { FilterPrice_RP } from "./FilterPrice_RP";
import { FilterType_RP } from "./FilterType_RP";
import { useContext } from "react";
import { DEFAULT_FILTER_RP, FilterContext_RP } from "../RecommendedPlacesPage";

export function Filter_Modal_RP({ isOpen = false, onClose = () => {} }) {
  const context_RP = useContext(FilterContext_RP);
  const handleFilterReset = () => {
    context_RP.setFilter(() => DEFAULT_FILTER_RP);
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
          <FilterType_RP />
          <FilterPrice_RP />
          <FilterCap_RP />
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
