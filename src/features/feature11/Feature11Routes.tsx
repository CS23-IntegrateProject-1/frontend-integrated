import { ArticlePage } from "./page/ArticleDetailPage/ArticlePage";
import { ArticlesPage } from "./page/ArticlesPage/ArticlesPage";
import { CreateArticlePage } from "./page/CreateArticlePge/CreateArticlePage";
import { EditArticlePage } from "./page/EditArticlePage/EditArticlePage";
import { MyArticlesPage } from "./page/MyArticlesPage/MyArticlesPage";
import { UserArticlesPage} from "./page/UserArticlesPage/UserArticlesPage";
export const Feature11Routes = () => {
  return [
    { path: "/article", element: <ArticlesPage /> },
    { path: "/article/:articleId", element: <ArticlePage /> },
    { path: "/article/create", element: <CreateArticlePage /> },
    { path: "/article/myarticles", element: <MyArticlesPage /> },
    { path: "/article/:articleId/edit", element: <EditArticlePage/> },
    { path: "/article/userarticles/:userId", element: <UserArticlesPage /> },
  ];
};
