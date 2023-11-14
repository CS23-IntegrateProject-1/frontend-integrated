import { Box, IconButton, useDisclosure } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { ArticlesBox } from "../components/ArticlesComponent/ArticlesBox";
import { MdAddCircle } from "react-icons/md";
import { mockArticles } from "./ArticleDetailPage/mockArticles";
import { useQuery } from "@tanstack/react-query";
import { FullPageLoader } from "../../../components/Loader/FullPageLoader";
import { Axios } from "../../../AxiosInstance";

interface ArticlesPageProps {
  articleId: string;
  articleName: string;
  //articleContent: string;
  writerUsername: string;
  //writerName: string;
  writerProfilePicture: string;
  articlePicture: string[];
  articleLikes: number;
  // articleComments: ArticleComment[];
  articleCommentsNumber: number;
  dateCreated: string;
}

const fetchArticles = async (): Promise<ArticlesPageProps[]> => {
  // const res = await Axios.get("/getAllArticle");
  // return res.data;
  console.log(mockArticles);
  return mockArticles;
};

export const ArticlesPage = () => {
  // const result = useQuery(fetchArticle);
  const articles = useQuery({ queryKey: ["articles"], queryFn: fetchArticles });
  if (articles.status == "loading") {
    return <FullPageLoader />;
  }

  if (articles.error instanceof Error) {
    return <div>An error occurred: {articles.error.message}</div>;
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      w={"100%"}
    >
      <Box
        width={{ base: "100%", md: "80%", lg: "50%" }}
        height={"56px"}
        bg={"#5F0DBB"}
        mt={{ base: "-1em", md: "-2em" }}
      >
        <Text
          fontSize={"16px"}
          color={"#DEBEF6"}
          lineHeight={"56px"}
          as={"b"}
          margin={"22px"}
        >
          User Feed
        </Text>
      </Box>

      <IconButton
        borderRadius={"50%"}
        position={"fixed"}
        bottom={"40px"}
        right={"10px"}
        variant="unstyled"
        aria-label="add"
        icon={<MdAddCircle size={"72px"} color={"#A533C8"} />}
      />

      {articles.data?.map((article) => {
        return (
          <ArticlesBox
            articleId={article.articleId}
            articleName={article.articleName}
            writerUsername={article.writerUsername}
            writerProfilePicture={article.writerProfilePicture}
            articlePicture={article.articlePicture}
            articleLikes={article.articleLikes}
            articleCommentsNumber={article.articleCommentsNumber}
            dateCreated={article.dateCreated}
            key={article.articleId}
          />
        );
      })}
    </Box>
  );
};
