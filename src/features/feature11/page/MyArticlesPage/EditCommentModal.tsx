import { ChangeEvent, FC, useState } from "react";
import {
  Box,
  Button,
  CloseButton,
  Flex,
  Heading,
  IconButton,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import {
  CommentItem,
  CommentItemProps,
  EditCommentModalProps,
} from "../../../../interfaces/feature11/CommentType";
import { TextStyle } from "../../../../theme/TextStyle";

export const EditCommentModal: FC<EditCommentModalProps> = ({
  isOpen,
  onClose,
  article,
  user,
  create_date,
  content,
  articleId,
  commentId,
}) => {
  //   const [editComment, setEditComment] = useState<CommentItem>({
  //     article,
  //     user,
  //     create_date,
  //     content,
  //     articleId,
  //     commentId,
  //   });
  const [newContent, setNewContent] = useState<string | null>(content || null);
  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewContent(event.target.value);
    // Update the editComment state with the new content
    // setEditComment((prevComment) => ({
    //   ...prevComment,
    //   content: newContent,
    // }));
  };

  return (
    <Modal isOpen={isOpen || false} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        bg={"brand.100"}
        w={{ base: "90%", md: "70%", lg: "50%" }}
        p={"1em"}
      >
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={"0.5em"}
        >
          <Heading style={TextStyle.h1} color={"black"}>
            Edit comment
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
        <Flex
          flexDir={"column"}
          bg={"white"}
          w={"100%"}
          minH={"150px"}
          shadow={"md"}
          p={"1em"}
          justifyContent={"space-between"}
          borderRadius={"20px"}
        >
          <Box>
            <Flex alignItems={"center"} mb={"0.25em"}>
              <Box w={"30px"} h={"30px"} mr={"0.5em"} bg={"red"}></Box>
              <Heading style={TextStyle.h4} color={"black"}>
                {user?.username}
              </Heading>
            </Flex>
            <Textarea
              p={"0.5em"}
              style={TextStyle.body3}
              variant={"unstyled"}
              rows={2}
              placeholder={"Write a comment..."}
              value={newContent || ""}
              onChange={handleContentChange}
              color={"black"}
              resize={"none"}
              // bg={"red"}
            />
          </Box>

          <Flex justifyContent={"flex-end"}>
            <Button
              border={"solid 1px"}
              bg={"white"}
              borderColor={"brand.200"}
              borderRadius={"30px"}
              h={"25px"}
              mr={"1em"}
              style={TextStyle.h5}
              w={"70px"}
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
              //   onClick={handleCreateComment}
            >
              Save
            </Button>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
};
