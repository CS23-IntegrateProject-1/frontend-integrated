import { CommunityPage } from "./page/CommunityPage";

export const Feature11Routes = () => {
  return [
    { path: "/article", element: "ElementPlaceHolder" },
    { path: "/article/:articleId", element: "ElementPlaceHolder" },
    { path: "/community", element: <CommunityPage /> },

  ];
};
