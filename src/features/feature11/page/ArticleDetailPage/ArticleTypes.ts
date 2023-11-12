export interface ArticlesPageProps {
  // articleId: string;
  // articleName: string;
  // //articleContent: string;
  // writerUsername: string;
  // //writerName: string;
  // writerProfilePicture: string;
  // articlePicture: string[];
  // articleLikes: number;
  // // articleComments: ArticleComment[];
  // articleCommentsNumber: number;
  // dateCreated: string;
  articleId: number;
  topic: string;
  content: string;
  created_date: string;
  category: string;
  userId: number;
  author_name: string;
  Image: { url: string; description: string }[];
  Like: number;

  // "topic": "Sample Topic",
  //   "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   "created_date": "2023-11-12T00:00:00.000Z",
  //   "category": "Review",
  //   "userId": 1,
  //   "articleId": 1,
  //   "author_name": "John Doe",
  //   "Image": [

  //   ],
}

export interface ArticleComment {
  commentId: string;
  commentContent: string;
  commentDate: string;
  likedByCreator: boolean;
  commentWriterUsername: string;
}

export interface ArticlePageProps {
    articleId: string;
    articleName: string;
    articleContent: string;
    writerUsername: string;
    writerName: string;
    writerProfilePicture: string;
    articlePicture: string[];
    articleLikes: number;
    articleComments: ArticleComment[];
    dateCreated: string;
  }

export interface ImageProps {}
