import React, {} from "react";
import {
  Box,
} from "@chakra-ui/react";


// import TestMessageLog from "../testingPage/TestMessageLog";
import OpenConversations from "../../components/OpenConversations";
import { useConversations } from "../../context/ConversationProvider";
import MessageLog from "./MessageLog";


export const CommunityChatPage = ({ id }: { id: string }) => {
  const { selectedConversation } = useConversations();

  return (
    <Box display="flex">
      <MessageLog id={id} />
      {/* <TestMessageLog id={id} /> */}
      {selectedConversation && <OpenConversations id={id} />}
    </Box>
  );
};
