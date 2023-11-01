import {
  Box,
  Flex,
  Heading,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { TextStyle } from "../../../../theme/TextStyle";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
BiComment;
import { BiComment } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { ArticleFooter } from "./ArticleFooter";
import { CommentModal } from "./CommentModal";
import mockArticle from "./mockAritcle.json";

interface ArticleComment {
  commentId: string;
  commentContent: string;
  commentDate: string;
  likedByCreator: boolean;
  commentWriterUsername: string;
}

interface ArticlePageProps {
  articleId: string;
  articleName: string;
  articleContent: string;
  writerUsername: string;
  writerName: string;
  writerProfilePicture: string;
  articlePicture: string[];
  articleLikes: number;
  articleComments:ArticleComment[];
  dateCreated: string;
}

const fetchArticle = async (): Promise<ArticlePageProps> => {
  // const response: AxiosResponse<User[]> = await Axios.get("/users");
  // return response.data;
  return mockArticle;
};

export const ArticlePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const result = useQuery(fetchArticle);
  const article = useQuery({ queryKey: ["article"], queryFn: fetchArticle });
  if (article.status == "loading") {
    return <span>Loading...</span>;
  }

  if (article.error instanceof Error) {
    return <div>An error occurred: {article.error.message}</div>;
  }

  return (
    <Box>
      {article.data?.articleName}
      <Heading mb={"0.5em"} style={TextStyle.h1}></Heading>
      <Box display={"flex"} mb={"1em"}>
        <Box width={"45px"} height={"45px"} mr={"1em"} bg={"red"}></Box>
        <Box>
          <Text style={TextStyle.h3}>{article.data?.writerUsername}</Text>
          <Text style={TextStyle.body3}>{article.data?.dateCreated}</Text>
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
        <Text style={TextStyle.body2}>{article.data?.articleContent}</Text>
      </Box>
      <Flex mb={"2em"} justifyContent={"space-between"}>
        <Flex>
          <Flex alignItems={"center"} mr={"2em"}>
            <IconButton
              variant={"link"}
              fontSize={"2xl"}
              color={"white"}
              aria-label="unlike"
              icon={<AiOutlineHeart />}
            />
            {/* <IconButton variant={"link"} fontSize={"3xl"} color={"white"} aria-label="unlike" icon={<AiFillHeart/>} /> */}
            <Text display={"inline"} style={TextStyle.body3}>
              {article.data?.articleLikes}
            </Text>
          </Flex>
          <Flex alignItems={"center"}>
            <IconButton
              variant={"link"}
              fontSize={"2xl"}
              color={"white"}
              aria-label="unlike"
              icon={<BiComment />}
              onClick={onOpen}
            />
            <Text display={"inline"} style={TextStyle.body3}>
              {article.data?.articleComments.length}
            </Text>
          </Flex>
        </Flex>

        <IconButton
          variant={"link"}
          fontSize={"2xl"}
          color={"white"}
          aria-label="unlike"
          icon={<FiSend />}
        />
      </Flex>
      <ArticleFooter />
      <CommentModal isOpen={isOpen} onClose={onClose} comments={article.data?.articleComments||[]}/>
    </Box>
  );
};
