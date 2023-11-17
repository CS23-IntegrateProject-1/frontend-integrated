import { Box } from "@chakra-ui/react";
import { Text, Image } from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiComment } from "react-icons/Bi";
import { MdOutlineSend } from "react-icons/md";
import { TextStyle } from "../../../../theme/TextStyle";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ArticlesPageProps } from "../ArticleDetailPage/ArticleTypes";

export const AuthorBox: FC<ArticlesPageProps> = (props) => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      border="1px"
      borderColor="#A533C8"
      p={"1em"}
      onClick={() => {
        navigate(`/article/${props.articleId}`);
      }}
    >
      <Box
        w={"100%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
      >
        <img
          src="/src/features/feature11/img/Profile.png"
          alt="Profile"
          width="70px"
        />
        <Text
          style={TextStyle.h4}
          ml="10px"
          color={"#C5C4C7"}
        >
          {props.author_name}
        </Text>
      </Box>

      <Box display="flex" transform="rotate(315deg)" alignSelf={"flex-end"}>
        <MdOutlineSend />
      </Box>
    </Box>
  );
};
