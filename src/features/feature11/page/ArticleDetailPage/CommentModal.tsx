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
import { useParams } from "react-router-dom";
import { Axios } from "../../../../AxiosInstance";
import { useQuery } from "@tanstack/react-query";
import { formatDate1 } from "../../../../functions/formatDatetime";
import { CustomLoader } from "../../../../components/Loader/CustomLoader";
import { ArticleComment } from "../../../../interfaces/feature11/CommentType";

interface ModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
  // comments: ArticleCommentProps[];
}

export const CommentModal: FC<ModalComponentProps> = ({
  isOpen,
  onClose,
  // comments,
}) => {
  const { articleId } = useParams();
  const fetchComments = async (): Promise<ArticleComment[]> => {
    try {
      const comments = await Axios.get(
        `/feature11/fetchArticleComment/${articleId}`
      );
      comments.data.forEach((comment: ArticleComment) => {
        comment.create_date = formatDate1(comment.create_date);
      });
      return comments.data;
    } catch (error) {
      console.error("Error fetching comments:", error);
      throw new Error("Failed to fetch article");
    }
  };
  const comments = useQuery({ queryKey: ["comments"], queryFn: fetchComments });
  if (comments.status == "loading") {
    return <CustomLoader />;
  }

  if (comments.error instanceof Error) {
    return <div>An error occurred: {comments.error.message}</div>;
  }
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
            Comments ({comments.data?.length})
          </Heading>
          <CloseButton
            variant={"link"}
            color={"black"}
            aria-label="close"
            mr={"-1em"}
            onClick={onClose}
          />
        </Flex>
        <CommentInput />
        <Box mt={"1em"} maxH={"70%"} overflow={"scroll"}>
          {comments.data?.map((comment) => (
            <CommentItem comment={comment} key={comment.commentId} />
          ))}
        </Box>
      </ModalContent>
    </Modal>
  );
};
