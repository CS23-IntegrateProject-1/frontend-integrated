export interface ArticleComment {
  commentId: number;
  content: string;
  create_date: string;
  articleId: number;
  userId: number;
  // "isLikeByCreator": false
  User: {
    username: string;
    profile_picture: string;
  };
}

// export interface CommentItemProps extends ModalComponentProps {
//   article?: { topic: string };
//   articleId?: number;
//   commentId?: number;
//   content?: string;
//   create_date?: string;
//   user?: {
//     profile_picture: File | null;
//     username: string;
//   };
//   userID?: number;
//   onEdit?: (comment: CommentItemProps) => void;
// }

export interface CommentItem {
  Article: { topic: string };
  articleId: number;
  commentId: number;
  content: string;
  create_date: string;
  User: {
    profile_picture: File | null;
    username: string;
  };
  userId: number;
}
export interface ModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export interface EditCommentModalProps extends ModalComponentProps {
  Article: { topic: string };
  articleId: number;
  commentId: number;
  content: string;
  create_date: string;
  User: {
    profile_picture: File | null;
    username: string;
  };
  userId: number;
}

export interface ModalDeleteComment extends ModalComponentProps {
  commentId: number;
}

export interface ModalDeleteArticle extends ModalComponentProps {
  articleId: number;
}
