import { Box, Flex, Icon, IconButton, useDisclosure } from "@chakra-ui/react";
import { Text, Image } from "@chakra-ui/react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { MdOutlineSend } from "react-icons/md";
import { TextStyle } from "../../../../theme/TextStyle";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Axios } from "../../../../AxiosInstance";
import { useQueryClient } from "@tanstack/react-query";
import { ShareModal } from "../../components/ShareModal";
import { FaPencilAlt } from "react-icons/fa";
import { ArticlesPageProps } from "../../../../interfaces/feature11/ArticleType";
import { DeleteArticleModal } from "./DeleteArticleModal";
import { DeleteIcon } from "@chakra-ui/icons";

export const MyArticlesBox: FC<ArticlesPageProps> = (props) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const shareArticle = useDisclosure();
  const deleteArticle = useDisclosure();

  const handleDeleteLike = async (event: React.MouseEvent) => {
    event.stopPropagation(); // Stop the click event from propagating
    await Axios.delete(`/feature11/deleteLike`, {
      data: { articleId: props.articleId },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error("Error deleting like:", err);
      });
    queryClient.invalidateQueries({ queryKey: ["myArticles"] });
  };

  const handleAddLike = async (event: React.MouseEvent) => {
    event.stopPropagation(); // Stop the click event from propagating
    await Axios.post(`/feature11/addLike`, { articleId: props.articleId })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error("Error adding like:", err);
      });
    queryClient.invalidateQueries({ queryKey: ["myArticles"] });
  };

  const handleShare = (event: React.MouseEvent) => {
    event.stopPropagation();
    shareArticle.onOpen();
  };

  const handleEditClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Stop the click event from propagating
    navigate(`/article/${props.articleId}/edit`);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      border="1px"
      borderColor="#A533C8"
      p={"1em"}
      width={{ base: "100%" }}
      onClick={() => {
        navigate(`/article/${props.articleId}`);
      }}
      pt={"0.5em"}
    >
      <Flex justifyContent={"flex-end"} alignSelf={"flex-end"}>
        {" "}
        <IconButton
          display={"flex"}
          variant={"unstyled"}
          size={"sm"}
          color={"white"}
          aria-label="Delete Comment"
          icon={<DeleteIcon />}
          alignSelf={"flex-end"}
          onClick={(event: React.MouseEvent) => {
            event.stopPropagation();
            deleteArticle.onOpen();
          }}
          mr={"0.5em"}
        />
        <IconButton
          display={"flex"}
          variant={"unstyled"}
          size={"sm"}
          color={"white"}
          aria-label="Edit Article"
          icon={<FaPencilAlt />}
          alignSelf={"flex-end"}
          onClick={handleEditClick}
        />
      </Flex>

      {/* Profile Info */}
      <Box display="flex" alignItems="center" w={"100%"} height="32px">
        <Box display="flex" alignItems={"center"}>
          <img
            src={import.meta.env.VITE_BACKEND_URL + props.User.profile_picture || ""}
            alt="Profile"
            width="32px"
            height="32px"
          />
          <Text style={TextStyle.h4} ml="10px" color={"#C5C4C7"}>
            {props.User.username}
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
        <Text
          color={"#C5C4C7"}
          style={TextStyle.h2}
          w={"50%"}
          textAlign={"center"}
        >
          {props.topic}
        </Text>
        <Image
          src={
            import.meta.env.VITE_BACKEND_URL +
              `${props.Images[0] ? props.Images[0].url : ""}` || ""
          }
          alt="article image"
          w={"200px"}
          h={"100px"}
          objectFit={"cover"}
        />
      </Box>
      <Box
        display={"flex"}
        alignSelf={"flex-start"}
        mt={"0.5em"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box className="Like" display="flex" mr={"1em"} alignItems={"center"}>
          {props.isLike ? (
            <IconButton
              variant={"unstyled"}
              size={"xs"}
              fontSize={"2xl"}
              color={"white"}
              aria-label="liked"
              icon={<AiFillHeart />}
              onClick={handleDeleteLike}
            />
          ) : (
            <IconButton
              variant={"unstyled"}
              size={"xs"}
              fontSize={"2xl"}
              color={"white"}
              aria-label="unlike"
              icon={<AiOutlineHeart />}
              onClick={handleAddLike}
            />
          )}

          <Text fontSize="xs" ml="3px" color={"#DEBEF6"}>
            {props.Like}
          </Text>
        </Box>

        {/* Comment section */}
        <Box
          className="comment"
          display="flex"
          mr={"1em"}
          alignItems={"center"}
        >
          <Icon as={BiComment} fontSize={"2xl"} />
          <Text fontSize="xs" ml="3px" color={"#DEBEF6"}>
            {props.Comment}
          </Text>
        </Box>

        {/* Share section */}
        <IconButton
          variant={"unstyled"}
          size={"xs"}
          mt={"-5px"}
          fontSize={"xl"}
          color={"white"}
          aria-label="share"
          icon={<MdOutlineSend />}
          onClick={handleShare}
          transform="rotate(315deg)"
        />
      </Box>
      <ShareModal
        isOpen={shareArticle.isOpen}
        onClose={shareArticle.onClose}
        url={`${window.location.href}/${props.articleId}`}
      />
      <DeleteArticleModal
        isOpen={deleteArticle.isOpen}
        onClose={deleteArticle.onClose}
        articleId={props.articleId}
        onOpen={deleteArticle.onOpen}
      />
    </Box>
  );
};
