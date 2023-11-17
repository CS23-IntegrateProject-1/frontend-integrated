import { Box, Text, VStack } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { useConversations } from "./ConversationsProvider";
export default function Messages() {
  const [messages, setMessages] = useState<string[] | undefined>([]);
  const { formattedConversation } = useConversations();
  useEffect(() => {
    setMessages(formattedConversation);
  }, [formattedConversation]);
  const setRef = useCallback((node: HTMLElement | null) => {
    if (node) {
      node.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <Box>
      {/* Messages placing */}
      <VStack
        display={"flex"}
        flexDirection={"column"}
        alignItems="end"
        justifyContent="start"
        px="12px"
      >
        {/* Each message placing for sender or receiver */}
        {messages &&
          messages.map((message, index) => {
            const lastMessage = messages.length - 1 === index;
            return (
              <Box
                key={index}
                ref={lastMessage ? setRef : null}
                my="4px"
                display="flex"
                flexDirection="column"
                alignItems="end"
                alignSelf="end"
              >
                {/*  return your message component here */}
                <Box>
                  <Box bg="#DEBEF6" px="8px" py="4px" borderRadius="10px">
                    <Text color="black">{message}</Text>
                  </Box>
                </Box>
                <Box>
                  <Text color="gray.500" fontSize="sm">
                    You
                  </Text>
                </Box>
              </Box>
            );
          })}
      </VStack>
    </Box>
  );
}
