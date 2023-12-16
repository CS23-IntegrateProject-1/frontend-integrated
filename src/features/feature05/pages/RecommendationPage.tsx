import { Box } from "@chakra-ui/react";
import { RecommendationCard } from "../components/RecommendationCard";

export const RecommendationPage = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
    >
      <RecommendationCard />
    </Box>
  );
};
