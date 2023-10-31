import {
  Box,
  CloseButton,
  Flex,
  Heading,
  IconButton,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { FC } from "react";
import { TextStyle } from "../../../../theme/TextStyle";
import { CommentInput } from "./CommentInput";
import { CommentItem } from "./CommentItem";

interface ModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommentModal: FC<ModalComponentProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      isCentered
    >
      <ModalOverlay />
      <ModalContent
        position="fixed"
        bottom={{ base: "0" }}
        borderRadius={{ base: "2em 2em 0 0" }}
        maxW={{ base: "480px", sm: "768px" }}
        p={"1.5em"}
        // pr={"1em"}
        bg={"brand.100"}
      >
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={"0.5em"}
        >
          <Heading style={TextStyle.h1} color={"black"}>
            Comments (1)
          </Heading>
          <IconButton
            variant={"link"}
            color={"black"}
            aria-label="close"
            mr={"-1em"}
            icon={<CloseButton />}
            onClick={onClose}
          />
        </Flex>
        <CommentInput />
        <Box>
          <CommentItem />
        </Box>
      </ModalContent>
    </Modal>
  );
};
