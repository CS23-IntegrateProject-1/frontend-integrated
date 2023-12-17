import { Axios } from "../../AxiosInstance";

export const deleteComment = async (commentId: number) => {
  try {
    const res = await Axios.delete(`/feature11/deleteComment`, {
      data: {
        commentId,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error deleting comment", error);
    throw new Error("Failed to delete comment");
  }
};
