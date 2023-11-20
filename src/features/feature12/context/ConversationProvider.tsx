import React, { useContext, FC, useState } from "react";
interface ConversationsProviderProps {
  id: string;
  children: React.ReactNode;
}
interface ConversationContextValue {
  sendMessage: (text: string) => void;
  formattedConversation: { messages: { text: string }[] }[];
  createConversation: (recipients: string[]) => void;
}
interface Conversation {
  messages: { text: string }[];
}
interface Message {
  text: string;
}

const ConversationsContext = React.createContext<
  ConversationContextValue | undefined
>(undefined);


export const ConversationsProvider: FC<ConversationsProviderProps> = ({
  children,
}) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);

  function createConversation(recipients: string[]) { 
    setConversations((prevConversations) => {
      return [...prevConversations, {recipients, messages: [] }];
    });
  }
  // If the conversation already exists, add the message to the conversation, otherwise create a new conversation with the message
  function addMessageToConversation(text: string) {
    setConversations((prevConversations) => {
      // const madeChange = false;
      const newMessage = { text };
      const newConversations = prevConversations.map((conversation) => {
        return {
          ...conversation,
          messages: [...conversation.messages, newMessage],
        };
      });
      return newConversations;
    });
  }
  function sendMessage(text: string) {
    addMessageToConversation(text);
  }
  const formattedConversation = conversations.map((conversation) => {
    const messages = conversation.messages.map((message: Message) => {
      return { ...message };
    });
    return { ...conversation, messages };
  });
  // const value = {
  //   sendMessage,
  // };
  return (
    <ConversationsContext.Provider
      value={{ sendMessage, formattedConversation, createConversation }}
    >
      {children}
    </ConversationsContext.Provider>
  );
};

export function useConversations() {
  const context = useContext(ConversationsContext);
  if (!context) {
    return Error;
  }
  return context;
}