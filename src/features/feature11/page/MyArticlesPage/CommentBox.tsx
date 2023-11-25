import { Box, Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { Text } from "@chakra-ui/react";
import { FaPencilAlt } from "react-icons/fa";
import { FC, useState } from "react";
import {
  // ArticleComment,
  CommentItemProps,
} from "../../../../interfaces/feature11/CommentType";
import { useNavigate } from "react-router-dom";
import { set } from "date-fns";
import { EditCommentModal } from "./EditCommentModal";
// import { useParams } from "react-router-dom";
// import { formatDate1 } from "../../../../functions/formatDatetime";
// import { Axios } from "../../../../AxiosInstance";
// import { useQuery } from "@tanstack/react-query";
// import { CustomLoader } from "../../../../components/Loader/CustomLoader";

export const CommentBox: FC<CommentItemProps> = ({
  article,
  user,
  create_date,
  content,
  articleId,
  commentId,
  onClose,
  isOpen,
  onOpen,
  onEdit,
}: CommentItemProps) => {
  const navigate = useNavigate();
  const [commentToEdit, setCommentToEdit] = useState<CommentItemProps | null>(
    null
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      w={"100%"}
      bg={"brand.100"}
      height={"148px"}
      mb={"1em"}
      borderRadius={"20px"}
      p="4"
      onClick={() => {
        setCommentToEdit({
          article,
          user,
          create_date,
          content,
          articleId,
          commentId,
          onClose,
          isOpen,
          onOpen,
          onEdit,
        });
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
          {article?.topic}
        </Text>
        <IconButton
          variant={"unstyled"}
          size={"sm"}
          color={"black"}
          aria-label="Edit"
          icon={<FaPencilAlt />}
          alignSelf={"flex-end"}
          onClick={(event: React.MouseEvent) => {
            event.stopPropagation();

            onOpen();
          }}
        />
      </Flex>
      {/* <Box display="flex" alignItems="center"> */}
      <Box ml={"30px"} mt={"-15px"} flexDirection="column">
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
          {user?.username}
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
        {/* </Box> */}
      </Box>
      <Box ml={"20px"} mt={"10px"} w={"100%"}>
        <Text display={"flex"} fontSize={"xs"} color={"#191919"}>
          {content}
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            ut orci a lacus eleifend dapibus. */}
        </Text>
      </Box>
      <EditCommentModal
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        article={article}
        user={user}
        create_date={create_date}
        content={content}
        articleId={articleId}
        commentId={commentId}
      
      />
    </Box>
  );
};
