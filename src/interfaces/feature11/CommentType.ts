export interface ArticleComment {
    commentId: number;
    content: string;
    create_date: string;
    articleId: number;
    userId: number;
  }

export interface CommentItemProps {
  article?: { topic: string };
  articleId?: number;
  commentId?: number;
  content?: string;
  create_date?: string;
  user?: {
    profile_picture: File | null;
    username: string;
  };
  userID?: number;
}