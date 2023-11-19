import React, {} from "react";
import {
  Box,
} from "@chakra-ui/react";


// import MessageLog from "./MessageLog";
import TestMessageLog from "../testingPage/TestMessageLog";
import OpenConversations from "../../components/OpenConversations";

interface CommunityChatPageProps {}

export const CommunityChatPage = () => {
  return (
    <Box display="flex">
      <MessageLog />
      <Box display="flex" flexDirection="column" flexGrow="1" height="83vh">
        <Box flexGrow="1" overflow="auto">
          <Messages />
        </Box>
        <SendMessage />
      </Box>
    </Box>
  );
};
