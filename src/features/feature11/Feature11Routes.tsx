import { ArticlePage } from "./page/ArticlePage/ArticlePage";
import { CommunityPage } from "./page/CommunityPage";

export const Feature11Routes = () => {
  return [
    { path: "/article", element: "ElementPlaceHolder" },
    { path: "/article/:articleId", element: <ArticlePage/> },
    { path: "/community", element: <CommunityPage /> },

  ];
};
