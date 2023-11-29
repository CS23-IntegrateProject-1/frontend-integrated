import {
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalFooter,
} from "@chakra-ui/react";

export function reviewModal({ isOpen = false, onClose = () => {} }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: "xs", sm: "md" }}
      isCentered
    >
      <ModalOverlay />
      <ModalContent
        backgroundColor="brand.300"
        display="flex"
        alignItems="center"
        justifyContent="center"
        pb={{ base: "2", lg: "8" }}
        pt={{ base: "4", lg: "10" }}
        rounded={"2xl"}
      >
        <ModalHeader
          fontWeight={"bold"}
          fontSize={{ base: "20px", lg: "25px" }}
        >
          Write a review now?
        </ModalHeader>
        <ModalFooter>
          <Flex direction="row" justify="space-between" w="100%">
          <Button
            variant="outline"
            borderColor="white"
            textColor="white"
            _hover={{
              textColor: "black",
              borderColor: "black",
              bgColor: "white",
            }}
            mr="5"
          >
            Later
          </Button>
          <Button
            variant="solid"
            textColor="white"
            bgColor="brand.300"
            _hover={{ bgColor: "brand.100", textColor: "black" }}
          >
            Review
          </Button></Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
