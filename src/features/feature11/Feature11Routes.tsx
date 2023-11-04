import { ArticlePage } from "./page/ArticleDetailPage/ArticlePage";
import { CommunityPage } from "./page/CommunityPage";
import { ArticlesPage } from "./page/ArticlesPage";

export const Feature11Routes = () => {
  return [
    { path: "/article", element: <ArticlesPage/> } ,
    { path: "/article/:articleId", element: <ArticlePage/> },
    { path: "/community", element: <CommunityPage /> },
  ];
};
