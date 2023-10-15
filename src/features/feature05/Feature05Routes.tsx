import { Advertisement } from "./pages/AdvertisementPage";

export const Feature05Routes = () => {
  return [
    {
      path: "/advertisement",
      element: <Advertisement />,
    },
    {
      path: "/list/recommendation",
      element: "ElementPlaceHolder",
    },
  ];
};
