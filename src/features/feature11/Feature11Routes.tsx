import { ArticlePage } from "./page/ArticlePage/ArticlePage";
import { CommunityPage } from "./page/CommunityPage";
import { ArticlesPage } from "./page/ArticlesPage";

export const Feature11Routes = () => {
  return [
    { path: "/article", element: "ElementPlaceHolder" },
    { path: "/article/:articleId", element: "ElementPlaceHolder" },
    { path: "/community", element: <CommunityPage /> },
  ];
};
