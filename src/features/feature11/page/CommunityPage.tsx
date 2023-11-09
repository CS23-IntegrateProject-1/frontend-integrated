import { Box } from "@chakra-ui/react";
import { EventComponents } from "../components/CommunityComponent/EventComponents";
import { ArticlesComponents } from "../components/CommunityComponent/ArticlesComponents";

export const CommunityPage = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box onClick={()=>{}}>
        <EventComponents />
      </Box>
      <ArticlesComponents />
      <div>Hello I'm editing</div>
    </Box>
  );
};
