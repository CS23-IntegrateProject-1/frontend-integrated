import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ArticlesPageProps } from "../../../../interfaces/feature11/ArticleType";

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
          src={import.meta.env.BACKEND_URL + props.user.profile_picture}
          alt="profile picture"
          width="70px"
          height={"70px"}
        />
        <Text style={TextStyle.h4} ml="10px" color={"#C5C4C7"}>
          {props.user.username}
        </Text>
      </Box>
    </Box>
  );
};
