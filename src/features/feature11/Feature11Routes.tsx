import { ArticlePage } from "./page/ArticleDetailPage/ArticlePage";
import { CommunityPage } from "./page/CommunityPage";
import { ArticlesPage } from "./page/ArticlesPage/ArticlesPage";
import { CreateArticlePage } from "./page/CreateArticlePge/CreateArticlePage";

export const Feature11Routes = () => {
  return [
    { path: "/article", element: <ArticlesPage /> },
    { path: "/article/:articleId", element: <ArticlePage /> },
    { path: "/article/create", element: <CreateArticlePage /> },
  ];
};
