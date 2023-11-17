import React, {} from "react";
import {
  Box,
} from "@chakra-ui/react";

// import { TextStyle } from "../../../../theme/TextStyle";

import SendMessage from "./SendMessage";
import MessageLog from "./MessageLog";
import Messages from "./Messages";

interface CommunityChatPageProps {}

export const CommunityChatPage: React.FC<CommunityChatPageProps> = () => {

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
