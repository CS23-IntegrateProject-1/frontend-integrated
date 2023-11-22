import { ArticlePage } from "./page/ArticleDetailPage/ArticlePage";
import { ArticlesPage } from "./page/ArticlesPage/ArticlesPage";
import { CreateArticlePage } from "./page/CreateArticlePge/CreateArticlePage";
import { MyArticlesPage } from "./page/MyArticlesPage/MyArticlesPage";

export const Feature11Routes = () => {
  return [
    { path: "/article", element: <ArticlesPage /> },
    { path: "/article/:articleId", element: <ArticlePage /> },
    { path: "/article/create", element: <CreateArticlePage /> },
    { path: "/article/myarticles", element: <MyArticlesPage /> },
    { path: "/article/:articleId/edit", element: "test" },
  ];
};
