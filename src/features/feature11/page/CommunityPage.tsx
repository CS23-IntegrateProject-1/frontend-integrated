
import { Box } from "@chakra-ui/react";
import { EventComponents } from "../components/EventComponents";
import { ArticlesComponents } from "../components/ArticlesComponents";

export const CommunityPage = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <EventComponents />
      <ArticlesComponents />
      
      
    </Box>
  );
};
