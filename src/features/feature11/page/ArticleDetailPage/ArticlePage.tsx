import {
  Box,
  Flex,
  Heading,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { TextStyle } from "../../../../theme/TextStyle";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
BiComment;
import { BiComment } from "react-icons/Bi";
import { FiSend } from "react-icons/fi";
import { ArticleFooter } from "./ArticleFooter";
import { CommentModal } from "./CommentModal";
import { mockArticle } from "./mockArticle";
import { Axios } from "../../../../AxiosInstance";
import { useParams } from "react-router-dom";
import { ArticlePageProps } from "./ArticleTypes";
import { ShareModal } from "../../components/ShareModal";

export const ArticlePage = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const commentDisclosure = useDisclosure();
  const shareDisclosure = useDisclosure();
  const { articleId } = useParams();
  const queryClient = useQueryClient();

  const fetchArticle = async (): Promise<ArticlePageProps> => {
    // const response: AxiosResponse<User[]> = await Axios.get("/users");
    // return response.data;
    try {
      const article = await Axios.get(
        `/feature11/fetchArticleDetail/${articleId}`
      );
      return article.data;
      // return mockArticle;
    } catch (error) {
      console.error("Error fetching article:", error);
      throw new Error("Failed to fetch article");
    }
  };

  // const result = useQuery(fetchArticle);
  const article = useQuery({ queryKey: ["article"], queryFn: fetchArticle });
  if (article.status == "loading") {
    return <span>Loading...</span>;
  }

  if (article.error instanceof Error) {
    return <div>An error occurred: {article.error.message}</div>;
  }

  const handleDeleteLike = (event: React.MouseEvent) => {
    // event.preventDefault();
    event.stopPropagation(); // Stop the click event from propagating
    Axios.delete(`/feature11/deleteLike`, {
      data: { articleId: article.data?.articleId },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error("Error deleting like:", err);
      });
    queryClient.invalidateQueries(["article"]); // Invalidate and refetch the article query
  };

  const handleAddLike = (event: React.MouseEvent) => {
    // event.preventDefault();
    event.stopPropagation(); // Stop the click event from propagating
    Axios.post(`/feature11/addLike`, { articleId: article.data?.articleId })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error("Error adding like:", err);
      });
    queryClient.invalidateQueries(["article"]); // Invalidate and refetch the article query
  };
  const handleShare = (event: React.MouseEvent) => {
    event.stopPropagation();
    shareDisclosure.onOpen();
  };
  return (
    <Box>
      {article.data?.topic}
      <Heading mb={"0.5em"} style={TextStyle.h1}></Heading>
      <Box display={"flex"} mb={"1em"}>
        <Box width={"45px"} height={"45px"} mr={"1em"} bg={"red"}></Box>
        <Box>
          <Text style={TextStyle.h3}>{article.data?.author_name}</Text>
          <Text style={TextStyle.body3}>{article.data?.created_date}</Text>
        </Box>
      </Box>
      <Box
        display={"flex"}
        minH={"200px"}
        minW={"250px"}
        mb={"1em"}
        bg={"red"}
      ></Box>
      <Box minH={"80px"} mb={"2em"}>
        <Text style={TextStyle.body2}>{article.data?.content}</Text>
      </Box>
      <Flex mb={"2em"} justifyContent={"space-between"} h={"100px"}>
        <Flex>
          <Flex alignItems={"center"} mr={"2em"}>
            {article.data?.isLike ? (
              <IconButton
                variant={"link"}
                fontSize={"2xl"}
                color={"white"}
                aria-label="unlike"
                icon={<AiFillHeart />}
                onClick={handleDeleteLike}
              />
            ) : (
              <IconButton
                variant={"link"}
                fontSize={"2xl"}
                color={"white"}
                aria-label="unlike"
                icon={<AiOutlineHeart />}
                onClick={handleAddLike}
              />
            )}
            {/* <IconButton variant={"link"} fontSize={"3xl"} color={"white"} aria-label="unlike" icon={<AiFillHeart/>} /> */}
            <Text display={"inline"} style={TextStyle.body3}>
              {article.data?.Like}
            </Text>
          </Flex>
          <Flex alignItems={"center"}>
            <IconButton
              variant={"link"}
              fontSize={"2xl"}
              color={"white"}
              aria-label="unlike"
              icon={<BiComment />}
              onClick={commentDisclosure.onOpen}
            />
            <Text display={"inline"} style={TextStyle.body3}>
              {article.data?.CommentCount}
            </Text>
          </Flex>
        </Flex>

        <IconButton
          variant={"link"}
          fontSize={"2xl"}
          color={"white"}
          aria-label="unlike"
          icon={<FiSend />}
          onClick={handleShare}
        />
        {/* <Icon
            as={MdOutlineSend}
            w={"20px"}
            h={"20px"}
          ></Icon> */}
      </Flex>
      <ArticleFooter author_name={article.data?.author_name || ""} />
      <CommentModal
        isOpen={commentDisclosure.isOpen}
        onClose={commentDisclosure.onClose}
      />
      <ShareModal
        isOpen={shareDisclosure.isOpen}
        onClose={shareDisclosure.onClose}
        url={`${window.location.href}/${article.data?.articleId}`}
      />
    </Box>
  );
};
