import {
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  ModalFooter,
  Image,
  Text,
  Heading,
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

export function Advertisement({ isOpen = true, onClose = () => {} }) {
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
        <ModalCloseButton />
        <ModalBody mt="3">
          <Image
            src="https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg"
            alt="Map_Pic not load"
            borderRadius="xl"
            w="100%"
            h="auto"
            objectFit={"cover"}
          />
          <Heading fontSize="30px" mt="4">
            Advertisement
          </Heading>
          <Text>
            Placeholder text advertisement detail buy my merch click the link
            the description to buy my products free giveaway
          </Text>
        </ModalBody>
        <ModalFooter>
          <Flex direction="row">
            <Button
              variant="outline"
              borderColor="brand.400"
              textColor="white"
              _hover={{
                textColor: "black",
                bgColor: "brand.100",
              }}
              mr="5"
              w="150px"
              onClick={onClose}
            >
              Dismiss
            </Button>
            <Button
              variant="solid"
              textColor="white"
              bgColor="brand.200"
              _hover={{
                textColor: "black",
                bgColor: "brand.100",
              }}
              w="150px"
            >
              Go!
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
