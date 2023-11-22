import { useQuery } from "@tanstack/react-query";
import { Axios } from "../../../../AxiosInstance";
import { formatDate1 } from "../../../../functions/formatDatetime";
import { ArticlesPageProps } from "../../ArticleTypes";
import { MyArticlesBox } from "../MyArticlesPage/MyArticlesBox";
import { useEffect, useState } from "react";
import { FullPageLoader } from "../../../../components/Loader/FullPageLoader";

const fetchMyArticles = async (): Promise<ArticlesPageProps[]> => {
  const res = await Axios.get("/feature11/fetchArticleHistory");
  res.data.forEach((article: ArticlesPageProps) => {
    article.created_date = formatDate1(article.created_date);
  });
  return res.data;
};

export const MyArticlesPage = () => {

    const [searchTerm] = useState("");
    const [, setFilteredArticles] = useState<
      ArticlesPageProps[]
    >([]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [filteredAuthors, setFilteredAuthors] = useState<ArticlesPageProps[]>(
      []
    );

  const myArticles = useQuery({
    queryKey: ["myArticles"],
    queryFn: fetchMyArticles,
  });
  if (myArticles.status == "loading") {
    return <FullPageLoader />;
  }

  if (myArticles.error instanceof Error) {
    return <div>An error occurred: {myArticles.error.message}</div>;
  }

  return (
    <div>
        
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
    </div>
  );
};
