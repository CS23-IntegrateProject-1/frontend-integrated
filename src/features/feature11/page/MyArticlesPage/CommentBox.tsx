import { Box, Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { Text } from "@chakra-ui/react";
import { FaPencilAlt } from "react-icons/fa";
import { FC } from "react";
import { CommentItem } from "../../../../interfaces/feature11/CommentType";
import { useNavigate } from "react-router-dom";
import { EditCommentModal } from "./EditCommentModal";
import { DeleteIcon } from "@chakra-ui/icons";
import { DeleteCommentModal } from "./DeleteCommentModal";

export const CommentBox: FC<CommentItem> = ({
  article: { topic },
  articleId,
  commentId,
  content,
  create_date,
  User: { profile_picture, username },
  userId,
}) => {
  const navigate = useNavigate();
  const editModal = useDisclosure();
  const deleteModal = useDisclosure();
  return (
    <Box
      display="flex"
      flexDirection="column"
      w={"100%"}
      bg={"brand.100"}
      height={"148px"}
      mb={"1em"}
      borderRadius={"20px"}
      p="1em"
      onClick={() => {
        navigate(`/article/${articleId}`);
      }}
    >
      <Flex
        display="flex"
        justifyContent="space-between"
        w="100%"
        alignItems="center"
        mb={"1em"}
        mt={"-5px"}
      >
        <Text style={TextStyle.h2} color={"#191919"} ml={"10px"}>
          {topic}
        </Text>
        <Flex>
          <IconButton
            display={"flex"}
            variant={"unstyled"}
            size={"md"}
            color={"black"}
            aria-label="Delete Comment"
            icon={<DeleteIcon />}
            alignSelf={"flex-end"}
            onClick={(event: React.MouseEvent) => {
              event.stopPropagation();
              deleteModal.onOpen();
            }}
            mr={"0.5em"}
          />
          <IconButton
            display={"flex"}
            variant={"unstyled"}
            size={"md"}
            color={"black"}
            aria-label="Edit Comment"
            icon={<FaPencilAlt />}
            alignSelf={"flex-end"}
            onClick={(event: React.MouseEvent) => {
              event.stopPropagation();
              editModal.onOpen();
            }}
          />
        </Flex>
      </Flex>
      <Box ml={"1em"} mt={"-15px"} flexDirection="column">
        <img
          src={import.meta.env.BACKEND_URL + profile_picture || ""}
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
      <Box ml={"20px"} mt={"10px"} w={"100%"}>
        <Text display={"flex"} fontSize={"xs"} color={"#191919"}>
          {content}
        </Text>
      </Box>
      <EditCommentModal
        article={{ topic }}
        articleId={articleId}
        commentId={commentId}
        content={content}
        create_date={create_date}
        User={{ profile_picture, username }}
        userId={userId}
        key={commentId}
        onClose={editModal.onClose}
        isOpen={editModal.isOpen}
        onOpen={editModal.onOpen}
      />
      <DeleteCommentModal
        isOpen={deleteModal.isOpen}
        onClose={deleteModal.onClose}
        onOpen={deleteModal.onOpen}
        commentId={commentId}
      />
    </Box>
  );
};
