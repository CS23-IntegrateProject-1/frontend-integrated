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

interface ArticleCommentProps {
  commentId: string;
  commentContent: string;
  commentDate: string;
  likedByCreator: boolean;
  commentWriterUsername: string;
}

interface ModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
  comments: ArticleCommentProps[];
}

export const CommentModal: FC<ModalComponentProps> = ({
  isOpen,
  onClose,
  comments,
}) => {
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
        maxH={"80%"}
        // pr={"1em"}
        bg={"brand.100"}
      >
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={"0.5em"}
        >
          <Heading style={TextStyle.h1} color={"black"}>
            Comments ({comments.length})
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
        <Box mt={"1em"} maxH={"70%"} overflow={"scroll"}>
          {comments.map((comment) => (
            <CommentItem comment={comment} key={comment.commentId} />
          ))}
        </Box>
      </ModalContent>
    </Modal>
  );
};
