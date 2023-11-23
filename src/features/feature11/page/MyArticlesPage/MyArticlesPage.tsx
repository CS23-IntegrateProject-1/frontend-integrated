import { useQuery } from "@tanstack/react-query";
import { Axios } from "../../../../AxiosInstance";
import { formatDate1 } from "../../../../functions/formatDatetime";
import { ArticlesPageProps } from "../../../../interfaces/feature11/ArticleType";
import { FullPageLoader } from "../../../../components/Loader/FullPageLoader";
import { MyArticlesBox } from "./MyArticleBox";
import { CommentBox } from "./CommentBox";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import getArticleComments from "../../../../api/Reservation/getArticleComments";
import { useEffect, useState } from "react";
import { CommentItemProps } from "../../../../interfaces/feature11/CommentType";

const fetchMyArticles = async (): Promise<ArticlesPageProps[]> => {
  const res = await Axios.get("/feature11/fetchArticleHistory");
  res.data.forEach((article: ArticlesPageProps) => {
    article.created_date = formatDate1(article.created_date);
  });
  return res.data;
};

export const MyArticlesPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [comments, setComments] = useState<CommentItemProps[]>([]);
  const fetchArticleComments = async () => {
    const response = await getArticleComments();
    if (!response?.data) {
      return;
    }
    setComments(response.data);
  };
  const myArticles = useQuery({
    queryKey: ["myArticles"],
    queryFn: fetchMyArticles,
  });

  useEffect(() => {
    fetchArticleComments();
  }, []);

  if (myArticles.status == "loading") {
    return <FullPageLoader />;
  }

  if (myArticles.error instanceof Error) {
    return <div>An error occurred: {myArticles.error.message}</div>;
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
        //        bg={"#5F0DBB"}
        mt={{ base: "-1em", md: "-2em" }}
      >
        <Tabs isLazy isFitted variant="enclosed">
          <TabList>
            <Tab bg={"brand.400"} _selected={{ bg: "brand.300" }}>
              Article
            </Tab>
            <Tab bg={"brand.400"} _selected={{ bg: "brand.300" }}>
              Comment
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel p={"0"} pt={"1px"}>
              {myArticles.data?.map((article) => {
                return (
                  <MyArticlesBox
                    articleId={article.articleId}
                    topic={article.topic}
                    author_name={article.author_name}
                    Image={article.Image}
                    Like={article.Like}
                    Comment={article.Comment}
                    created_date={article.created_date}
                    key={article.articleId}
                    content={""}
                    category={""}
                    userId={0}
                    isLike={article.isLike}
                    Article_tags={article.Article_tags}
                    Article_venue={article.Article_venue}
                  />
                );
              })}
            </TabPanel>
            <TabPanel px={"0"}>
              {comments.map((comment) => {
                return (
                  <CommentBox
                    article={comment.article}
                    user={comment.user}
                    create_date={comment.create_date}
                    content={comment.content}
                  />
                );
              })}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};
