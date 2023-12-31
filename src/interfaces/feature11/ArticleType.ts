export interface ArticlesPageProps {
  articleId: number;
  topic: string;
  content: string;
  created_date: string;
  category: string;
  userId: number;
  author_name: string;
  Images: { url: string; description: string }[];
  Like: number;
  Comment: number;
  isLike: boolean;
  Article_tags: {
    articleId: number;
    Tag: {
      tagId: number;
      tag_name: string;
    };
  }[];
  Article_venue: number[];
  User: {
    username: string;
    profile_picture: string;
  };
}

export interface ArticlePageProps {
  articleId: number;
  topic: string;
  content: string;
  created_date: string;
  category: string;
  userId: number;
  author_name: string;
  Images: { url: string; description: string }[];
  Like: number;
  CommentCount: number;
  isLike: boolean;
  Article_tags: {
    articleId: number;
    tagId: 4;
    Tag: {
      tagId: number;
      tag_name: string;
    };
  }[];
  Article_venue: {
    articleId: number;
    venueId: number;
    Venue: {
      venueId: number;
      name: string;
    };
  }[];
  User: {
    username: string;
    profile_picture: string;
  };
}

// export interface ArticleTagProps {
//   articleId: number;
//   tag: {
//     tagId: number;
//     tag_name: string;
//   };
// }
export interface ArticleTagProps {
  articleId: number;
  tagId: number;
  Tag: {
    tagId: number;
    tag_name: string;
  };
}

export interface ArticleFooterProps {
  author_name: string;
  Article_tags: ArticleTagProps[];
}

export interface VenueProps {
  venueId: number;
  name: string;
}

export interface ArticleVenueProps {
  articleId: number;
  venueId: number;
  Venue: {
    venueId: number;
    name: string;
  };
}
