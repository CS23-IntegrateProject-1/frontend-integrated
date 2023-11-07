import { SavedPlacePage } from "./SavedPlacePage/SavedPlacePage";

export const DevLeadFeatureRoutes = () => {
  return [
    {
      path: "/saved-place",
      element: <SavedPlacePage />,
    },
  ];
};
