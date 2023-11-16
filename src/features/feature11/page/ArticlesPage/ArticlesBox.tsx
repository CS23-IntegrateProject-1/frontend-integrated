import { Box, IconButton } from "@chakra-ui/react";
import { Text, Image } from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiComment } from "react-icons/Bi";
import { MdOutlineSend } from "react-icons/md";
import { TextStyle } from "../../../../theme/TextStyle";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ArticlesPageProps } from "../ArticleDetailPage/ArticleTypes";

export const ArticlesBox: FC<ArticlesPageProps> = (props) => {
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
      {/* Profile Info */}
      <Box display="flex" alignItems="center" w={"100%"} height="32px">
        <Box display="flex" alignItems={"center"}>
          <img
            src="/src/features/feature11/img/Profile.png"
            alt="Profile"
            width="32px"
            height="32px"
          />
          <Text style={TextStyle.h4} ml="10px" color={"#C5C4C7"}>
            {props.author_name}
          </Text>
          <Text style={TextStyle.h4} ml="25px" color={"#C5C4C7"}>
            {props.created_date}
          </Text>
        </Box>
      </Box>

      <Box
        w={"100%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Text color={"#C5C4C7"} style={TextStyle.h2}>
          {props.topic}
        </Text>
        <Image
          src="/src/features/feature11/img/Rectangle 186.png"
          alt="Article"
          w={"200px"}
          h={"100px"}
        />
      </Box>
      <Box display={"flex"} alignSelf={"flex-start"}>
        <Box className="Like" display="flex" mr={"1em"}>
          <IconButton
            variant={"link"}
            fontSize={"2xl"}
            color={"white"}
            aria-label="unlike"
            icon={<AiOutlineHeart />}
          />{" "}
          <Text fontSize="xs" ml="3px" color={"#DEBEF6"}>
            {props.Like}
          </Text>
        </Box>

        {/* Comment section */}
        <Box className="comment" display="flex" mr={"1em"}>
          <BiComment />
          <Text fontSize="xs" ml="3px" color={"#DEBEF6"}>
            {props.Comment}
          </Text>
        </Box>

        {/* Share section */}
        <Box display="flex" transform="rotate(315deg)">
          <MdOutlineSend />
        </Box>
      </Box>
    </Box>
  );
};
