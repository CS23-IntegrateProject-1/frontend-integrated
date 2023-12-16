import { ChangeEvent, FC, useEffect, useState } from "react";
import {
  Box,
  Button,
  CloseButton,
  Flex,
  Heading,
  Modal,
  ModalContent,
  Text,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import {
  CommentItem,
  EditCommentModalProps,
} from "../../../../interfaces/feature11/CommentType";
import { TextStyle } from "../../../../theme/TextStyle";
import { editComment } from "../../../../api/feature11/editComment";
import { useCustomToast } from "../../../../components/useCustomToast";
import { useQueryClient } from "@tanstack/react-query";

export const EditCommentModal: FC<EditCommentModalProps> = ({
  article: { topic },
  articleId,
  commentId,
  content,
  create_date,
  user: { profile_picture, username },
  userId,
  onClose,
  isOpen,
}) => {
  const [comment, setComment] = useState<CommentItem | null>(null);
  const [newContent, setNewContent] = useState<string>("");
  const queryClient = useQueryClient();

  const toast = useCustomToast();
  useEffect(() => {
    setComment({
      article: { topic },
      articleId,
      commentId,
      content,
      create_date,
      user: { profile_picture, username },
      userId,
    });
    setNewContent(content);
  }, []);
  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewContent(event.target.value);
  };
  const handleEditComment = async () => {
    try {
      await editComment(commentId, newContent);
      toast.success("Edit comment successfully");
      queryClient.invalidateQueries(["myComments"]); // Invalidate and refetch the article query

      onClose();
    } catch (err) {
      toast.error("Edit comment failed");
      console.log(err);
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
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
          <Box flexDirection="column">
            <img
              src="/src/features/feature11/img/Profile.png"
              alt="Profile"
              width="32px"
              height="32px"
            />
            <Text
              display={"flex"}
              fontSize={"xs"}
              color={"#191919"}
              mt={"-30px"}
              ml={"40px"}
              as={"b"}
            >
              {username}
            </Text>
            <Text
              display={"flex"}
              fontSize={"xs"}
              color={"#191919"}
              mt={"-1px"}
              ml={"40px"}
            >
              {create_date}
            </Text>
          </Box>
          <Textarea
            p={"0.5em"}
            style={TextStyle.body3}
            variant={"unstyled"}
            rows={2}
            placeholder={"Write a comment..."}
            value={newContent}
            onChange={handleContentChange}
            color={"black"}
            resize={"none"}
            // bg={"red"}
          />

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
              onClick={handleEditComment}
            >
              Save
            </Button>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
};
