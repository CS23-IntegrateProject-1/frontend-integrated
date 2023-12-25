import { Box, Image, Text } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { FC } from "react";
import { ArticleComment } from "../../../../interfaces/feature11/CommentType";

interface CommentItemProps {
  comment: ArticleComment;
}

export const CommentItem: FC<CommentItemProps> = ({ comment }) => {
  return (
    <Box my={"1em"} borderBottom={"solid 1px #A533C8"}>
      <Box display={"flex"} alignItems={"center"} mb={"1em"}>
        <Image
          width={"45px"}
          height={"45px"}
          mr={"1em"}
          src={
            import.meta.env.VITE_BACKEND_URL + comment.User.profile_picture ||
            ""
          }
        ></Image>
        <Box>
          <Text color={"black"} style={TextStyle.h5}>
            {comment.User.username}
          </Text>
          <Text color={"black"} style={TextStyle.body3}>
            {comment.create_date}
          </Text>
        </Box>
      </Box>
      <Text style={TextStyle.body2} mb={"1em"} color={"black"}>
        {comment.content}
      </Text>
    </Box>
  );
};
