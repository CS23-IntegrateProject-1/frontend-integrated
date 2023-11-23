import { Axios } from "../../AxiosInstance";

const getArticleComments = () => {
    try {
        const response = Axios.get("/feature11/fetchCommentHistory");
        return response;
    }
    catch (e) {
        console.log(e);
    }
}

export default getArticleComments;