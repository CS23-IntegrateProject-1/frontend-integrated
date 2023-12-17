import { Box, Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { ArticlesPageProps } from "../../../../interfaces/feature11/ArticleType";
import { Axios } from "../../../../AxiosInstance";
import { formatDate1 } from "../../../../functions/formatDatetime";
import { useQuery } from "@tanstack/react-query";
import { FullPageLoader } from "../../../../components/Loader/FullPageLoader";
import { MyArticlesBox } from "../MyArticlesPage/MyArticleBox";
import { useParams } from "react-router-dom";

export const UserArticlesPage = () => {
  const { userId } = useParams();
  const fetchUserArticles = async (): Promise<ArticlesPageProps[]> => {
    const res = await Axios.post("/feature11/fetchUserArticle", {
      userId: Number(userId),
    });
    res.data.forEach((article: ArticlesPageProps) => {
      article.created_date = formatDate1(article.created_date);
    });
    return res.data;
  };
  const UserArticles = useQuery({
    queryKey: ["myArticles"],
    queryFn: fetchUserArticles,
  });
  if (UserArticles.status == "loading") {
    return <FullPageLoader />;
  }

  if (UserArticles.error instanceof Error) {
    return <div>An error occurred: {UserArticles.error.message}</div>;
  }

  return (
    <Flex
      width={{ base: "100%", md: "80%", lg: "50%" }}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      m={{ base: "-1em", md: "auto" }}
      ml={{ base: "0", md: "auto" }}
      mt={{ base: "-1em", md: "-2em" }}
    >
      <Box
        w={"100%"}
        height={"163px"}
        bg={"#5F0DBB"}
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
      >
        <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
          <img
            src="/src/features/feature11/img/Ellipse 43.png"
            alt="Profile"
            width="91px"
            height="91px"
          />
          <Text color={"#C5C4C7"} fontSize={"md"} mt={"10px"} as={"b"}>
            {UserArticles.data?.[0].author_name}
          </Text>
        </Box>
      </Box>
      {UserArticles.data?.map((article, index: number) => {
        return (
          <MyArticlesBox
            key={index}
            articleId={article.articleId}
            topic={article.topic}
            author_name={article.author_name}
            Image={article.Image}
            Like={article.Like}
            Comment={article.Comment}
            created_date={article.created_date}
            // key={article.articleId}
            content={""}
            category={""}
            userId={0}
            isLike={article.isLike}
            Article_tags={article.Article_tags}
            Article_venue={article.Article_venue}
          />
        );
      })}
    </Flex>
  );
};
