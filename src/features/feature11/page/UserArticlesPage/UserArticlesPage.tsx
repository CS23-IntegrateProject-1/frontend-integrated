import { Box, Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { ArticlesPageProps } from "../../../../interfaces/feature11/ArticleType";
import { Axios } from "../../../../AxiosInstance";
import { formatDate1 } from "../../../../functions/formatDatetime";
import { useQuery } from "@tanstack/react-query";
import { FullPageLoader } from "../../../../components/Loader/FullPageLoader";
import { useParams } from "react-router-dom";
import { ArticlesBox } from "../ArticlesPage/ArticlesBox";

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
    if (UserArticles.error.message === "Request failed with status code 404") {
      return <Text textAlign={"center"}>This user has no articles.</Text>;
    } else {
      return <div>An error occurred: {UserArticles.error.message}</div>;
    }
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
            src={
              import.meta.env.VITE_BACKEND_URL +
                UserArticles.data?.[0].User.profile_picture || ""
            }
            alt="Profile"
            width="91px"
            height="91px"
          />
          <Text color={"#C5C4C7"} fontSize={"md"} mt={"10px"} as={"b"}>
            {UserArticles.data?.[0].User.username}
          </Text>
        </Box>
      </Box>
      <Box w={"100%"}>
        {UserArticles.data?.map((article, index: number) => {
          return (
            <ArticlesBox
              key={index}
              articleId={article.articleId}
              topic={article.topic}
              author_name={article.author_name}
              Images={article.Images}
              Like={article.Like}
              Comment={article.Comment}
              created_date={article.created_date}
              // key={article.articleId}
              content={""}
              category={""}
              userId={0}
              User={article.User}
              isLike={article.isLike}
              Article_tags={article.Article_tags}
              Article_venue={article.Article_venue}
            />
          );
        })}
      </Box>
    </Flex>
  );
};
