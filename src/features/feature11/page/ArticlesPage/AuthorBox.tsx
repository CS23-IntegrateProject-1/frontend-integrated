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
        navigate(`/article/userarticles/${props.userId}`);
      }}
    >
      <Box
        w={"100%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
      >
        <img
          src={import.meta.env.VITE_BACKEND_URL + props.User.profile_picture || ""}
          alt="profile picture"
          width="70px"
          height={"70px"}
        />
        <Text style={TextStyle.h4} ml="10px" color={"#C5C4C7"}>
          {props.User.username}
        </Text>
      </Box>
    </Box>
  );
};
