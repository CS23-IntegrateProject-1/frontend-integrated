import { CommunityPage } from "./page/CommunityPage";
import { CreateArticlePage } from "./page/CreateArticlePage";

export const Feature11Routes = () => {
  return [
    { path: "/article", element: "ElementPlaceHolder" },
    { path: "/article/:articleId", element: "ElementPlaceHolder" },
    { path: "/community", element: <CommunityPage /> },
    { path: "/article/create", element: <CreateArticlePage />}

  ];
};
