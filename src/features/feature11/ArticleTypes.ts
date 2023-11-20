export interface ArticlesPageProps {
  articleId: number;
  topic: string;
  content: string;
  created_date: string;
  category: string;
  userId: number;
  author_name: string;
  Image: { url: string; description: string }[];
  Like: number;
  Comment: number;
  isLike: boolean;
  Article_tags: {
    articleId: number;
    tag: {
      tagId: number;
      tag_name: string;
    };
  }[];

  Article_venue: number[];
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
  commentId: number;
  content: string;
  create_date: string;
  articleId: number;
  userId: number;
}

export interface ArticlePageProps {
  articleId: number;
  topic: string;
  content: string;
  created_date: string;
  category: string;
  userId: number;
  author_name: string;
  Image: { url: string; description: string }[];
  Like: number;
  CommentCount: number;
  isLike: boolean;
  Article_tags: {
    articleId: number;
    tag: {
      tagId: number;
      tag_name: string;
    };
  }[];
}

export interface ArticleTagProps {
  articleId: number;
  tag: {
    tagId: number;
    tag_name: string;
  };
}

export interface ArticleFooterProps {
  author_name: string;
  Article_tags: ArticleTagProps[];
}

export interface ImageProps {
  url: string;
  description: string;
}
export interface VenueProps {
  venueId: number;
  name: string;
}
