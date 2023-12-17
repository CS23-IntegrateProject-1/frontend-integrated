import { CommentItem } from "../../interfaces/feature11/CommentType";
import { Axios } from "../../AxiosInstance";
import { formatDate1 } from "../../functions/formatDatetime";

export const fetchMyComments = async () => {
  try {
    const comments = await Axios.get("/feature11/fetchCommentHistory");

    comments.data.forEach((comment: CommentItem) => {
      comment.create_date = formatDate1(
        comment.create_date ? comment.create_date : ""
      );
    });
    return comments.data as CommentItem[];
  } catch (error) {
    console.error("Error fetching comment history:", error);
    throw new Error("Failed to fetch comment history");
  }
};
