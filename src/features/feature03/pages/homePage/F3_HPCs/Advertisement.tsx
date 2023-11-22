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
  Box,
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
      size={{ base: "xs", sm: "xl" }}
      isCentered
    >
      <ModalOverlay />
      <ModalContent
        backgroundColor="brand.300"
        display="flex"
        alignItems="center"
        justifyContent="center"
        rounded="3xl"
      >
        <ModalBody p={0}>
          <Image
            src="https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg"
            alt="Pic not load"
            w="100%"
            h="100%"
            maxH={{base:"200px", lg:"300px"}}
            objectFit={"cover"}
            rounded="3xl"
          />
          <Box mx={{base:"4", lg:"6"}} mt="4">
            <Heading fontWeight="bold" fontSize={{ base: "25px", lg: "30px" }}>
              Advertisement
            </Heading>
            <Text fontSize={"sm"} mt="1">
              Placeholder text advertisement detail buy my merch click the link
              the description to buy my products free giveaway
            </Text>
          </Box>
        </ModalBody>
        <ModalFooter mx="4" my="2">
          <Flex direction="row">
            <Button
              variant="outline"
              borderColor="white"
              textColor="white"
              _hover={{
                textColor: "black",
                bgColor: "brand.100",
                borderColor: "black",
              }}
              mr={{base:"5", lg:"10"}}
              w={{base:"125px", lg:"180px"}}
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
              w={{base:"125px", lg:"180px"}}
            >
              Go!
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
