import { FC } from "react";
import {
  Box,
  Button,
  CloseButton,
  Flex,
  Heading,
  Modal,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { ModalDeleteComment } from "../../../../interfaces/feature11/CommentType";
import { TextStyle } from "../../../../theme/TextStyle";
import { deleteComment } from "../../../../api/feature11/deleteComment";
import { useCustomToast } from "../../../../components/useCustomToast";
import { useQueryClient } from "@tanstack/react-query";

export const DeleteCommentModal: FC<ModalDeleteComment> = ({
  isOpen,
  onClose,
  commentId,
}) => {
  const toast = useCustomToast();
  const queryClient = useQueryClient();
  const handleDeleteComment = () => {
    try {
      deleteComment(commentId);
      queryClient.invalidateQueries(["myComments"]);
      toast.success("Delete comment successfully");
      onClose();
    } catch (err) {
      toast.error("Delete comment failed");
      console.error(err);
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        bg={"brand.100"}
        w={{ base: "90%", md: "70%", lg: "50%" }}
        p={"2em"}
      >
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={"0.5em"}
        >
          <Heading style={TextStyle.h1} color={"black"}>
            Delete comment
          </Heading>
          <CloseButton
            variant={"link"}
            color={"black"}
            aria-label="close"
            mr={"-1em"}
            onClick={onClose}
          />
        </Flex>
        {/* ============EDIT INPUT============*/}
        <Box color={"black"}>Are you sure to delete this comment?</Box>
        <Flex justifyContent={"flex-end"} mt={"2em"}>
          <Button
            border={"solid 1px"}
            bg={"white"}
            borderColor={"brand.200"}
            borderRadius={"30px"}
            h={"25px"}
            mr={"1em"}
            style={TextStyle.h5}
            w={"70px"}
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            borderRadius={"30px"}
            h={"25px"}
            bg={"brand.200"}
            color={"white"}
            _hover={{ bg: "brand.300" }}
            style={TextStyle.h5}
            w={"70px"}
            onClick={handleDeleteComment}
          >
            Delete
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};
