import { Axios } from "../../AxiosInstance";

export const editComment = async (commentId: number, content: string) => {
  try {
    const res = await Axios.patch(`/feature11/editComment`, {
      commentId,
      content,
    });
    return res.data;
  } catch (error) {
    console.error("Error editing comment", error);
    throw new Error("Failed to edit comment");
  }
};
