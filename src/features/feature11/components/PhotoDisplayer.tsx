import React, { useState } from "react";
import {
  Box,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface PhotoDisplayerProps {
    images: { url: string; description: string }[];
  }
const PhotoDisplayer: React.FC<PhotoDisplayerProps> = ({images}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );

  const openModal = (index: number) => {
    setSelectedPhotoIndex(index);
    onOpen();
  };

  const closeModal = () => {
    setSelectedPhotoIndex(null);
    onClose();
  };

  const navigatePhoto = (direction: "prev" | "next") => {
    if (selectedPhotoIndex !== null) {
      const newIndex =
        direction === "prev" ? selectedPhotoIndex - 1 : selectedPhotoIndex + 1;
      if (newIndex >= 0 && newIndex < images.length) {
        setSelectedPhotoIndex(newIndex);
      }
    }
  };

  return (
    <Flex w={"100%"}>
      {images.slice(0, 2).map((image, index) => (
        <Box
          key={index}
          onClick={() => openModal(index)}
          position="relative"
          cursor="pointer"
          _hover={{ opacity: 0.7 }}
          w={"100%"}
        >
          <Image
            src={import.meta.env.VITE_BACKEND_URL + image.url || ""}
            alt={`Photo ${index + 1}`}
            width="100%"
            height="100%"
            objectFit={"cover"}
          />
          {index === 1 && images.length > 2 && (
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              background="rgba(0, 0, 0, 0.5)"
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="white"
              fontWeight="bold"
              fontSize="xl"
            >
              {images.length - 2} more
            </Box>
          )}
        </Box>
      ))}

      <Modal isOpen={isOpen} onClose={closeModal} isCentered size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton zIndex={"100"} />
          <ModalBody p={0}>
            {selectedPhotoIndex !== null && (
              <Flex>
                <Image
                  src={import.meta.env.VITE_BACKEND_URL +images[selectedPhotoIndex]?.url || ""}
                  alt={`Photo ${selectedPhotoIndex + 1}`}
                  width="100%"
                  height="100%"
                />
                <IconButton
                  icon={<FaArrowLeft />}
                  aria-label="Previous Photo"
                  onClick={() => navigatePhoto("prev")}
                  position="absolute"
                  top="50%"
                  borderRadius={"none"}
                  left={0}
                  transform="translateY(-50%)"
                  h={"100%"}
                  bg={"transparent"}
                  _hover={{ bg: "rgba(0, 0, 0, 0.2)" }}
                  _active={{ bg: "rgba(0, 0, 0, 0.4)" }}
                  color={"white"}
                />
                <IconButton
                  icon={<FaArrowRight />}
                  aria-label="Next Photo"
                  onClick={() => navigatePhoto("next")}
                  position="absolute"
                  top="50%"
                  right={0}
                  transform="translateY(-50%)"
                  borderRadius={"none"}

                  h={"100%"}
                  bg={"transparent"}
                  _hover={{ bg: "rgba(0, 0, 0, 0.2)" }}
                  _active={{ bg: "rgba(0, 0, 0, 0.4)" }}
                  color={"white"}
                />
              </Flex>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default PhotoDisplayer;
