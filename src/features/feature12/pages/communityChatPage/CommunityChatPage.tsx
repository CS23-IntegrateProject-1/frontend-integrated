import React, {} from "react";
import {
  Box,
} from "@chakra-ui/react";


// import MessageLog from "./MessageLog";
import TestMessageLog from "../testingPage/TestMessageLog";
import OpenConversations from "../../components/OpenConversations";


export const CommunityChatPage = () => {
  return (
    <Box display="flex">
      <TestMessageLog />
      <OpenConversations />
    </Box>
  );
};
