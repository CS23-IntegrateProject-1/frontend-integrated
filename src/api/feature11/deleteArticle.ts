import { Axios } from "../../AxiosInstance";

export const deleteArticle = async (articleId: number) => {
  try {
    const res = await Axios.delete(`/feature11/deleteArticle`, {
      data: {
        articleId: articleId,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error deleting article", error);
    throw new Error("Failed to delete article");
  }
};
