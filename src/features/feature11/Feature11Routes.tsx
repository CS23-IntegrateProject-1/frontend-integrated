import { ArticlePage } from "./page/ArticleDetailPage/ArticlePage";
import { CommunityPage } from "./page/CommunityPage";
import { ArticlesPage } from "./page/ArticlesPage";
import { CreateArticlePage } from "./page/CreateArticlePage";

export const Feature11Routes = () => {
  return [
    { path: "/article", element: <ArticlesPage/> } ,
    { path: "/article/:articleId", element: <ArticlePage/> },
    { path: "/community", element: <CommunityPage /> },
    { path: "/article/create", element: <CreateArticlePage />}

  ];
};
