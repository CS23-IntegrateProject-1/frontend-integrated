import { Axios } from "../../AxiosInstance";
import { formatDate1 } from "../../functions/formatDatetime";
import { ArticlePageProps } from "../../interfaces/feature11/ArticleType";

export const fetchArticle = async (
  articleId: string
): Promise<ArticlePageProps> => {
  try {
    const article = await Axios.get(
      `/feature11/fetchArticleDetail/${articleId}`
    );
    article.data.created_date = formatDate1(article.data.created_date);
    return article.data;
    // return mockArticle;
  } catch (error) {
    console.error("Error fetching article:", error);
    throw new Error("Failed to fetch article");
  }
};
