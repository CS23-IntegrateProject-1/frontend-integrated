import React, { useContext, FC, useState, useEffect } from "react";
import { Axios } from "../../../AxiosInstance";
interface ConversationsProviderProps {
  id: string;
  children: React.ReactNode;
}
interface ConversationContextValue {
  // sendMessage: (text: string) => void;
  // formattedConversations: { messages: { text: string }[] }[];
  conversations: Conversation[];
  createConversation: (recipients: Recipient[]) => void;
  contacts: Contact[] | undefined;
  selectedConversationIndex: React.Dispatch<React.SetStateAction<number> >;
}

interface Recipient {
  id: number;
  name: string;
}

interface Conversation {
  recipients: Recipient[];
  messages: Message[];
  selected: boolean;
}
interface Message {
  text: string;
}
interface Contact {
  username: string;
  userId: number;
} 

const ConversationsContext = React.createContext<
  ConversationContextValue | undefined
>(undefined);

export const ConversationsProvider: FC<ConversationsProviderProps> = ({
  children,
}) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);

  //Temporary Contacts from database
  const [contacts, setContacts] = useState<Contact[] | undefined>([]);
  useEffect(() => {
    Axios.get("/feature12/displayFriendList")
      .then((res) => {
        // console.log("API response:", res.data);
        if (Array.isArray(res.data)) {
          const contacts = res.data.map((user) => ({
            userId: user.userId,
            username: user.username,
          }));
          setContacts(contacts);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }, [setContacts]);
    console.log(contacts);
  function createConversation(recipients: Recipient[]) {
    setConversations((prevConversations) => {
      return [...prevConversations, { recipients, messages: [], selected: false }];
    });
  }
  // If the conversation already exists, add the message to the conversation, otherwise create a new conversation with the message
  // function addMessageToConversation(text: string) {
  //   setConversations((prevConversations) => {
  //     // const madeChange = false;
  //     const newMessage = { text };
  //     const newConversations = prevConversations.map((conversation) => {
  //       return {
  //         ...conversation,
  //         messages: [...conversation.messages, newMessage],
  //       };
  //     });
  //     return newConversations;
  //   });
  // }
  // function sendMessage(text: string) {
  //   addMessageToConversation(text);
  // }
  const formattedConversations = conversations.map((conversation, index: number) => {
    const recipients = conversation.recipients.map((recipient: Recipient) => {
      console.log(contacts);
      console.log(recipient?.id)
      const contact = contacts?.find((contact) => contact.userId === recipient?.id);
      const name = (contact && contact.username) || recipient?.id.toString(); // Use recipient.name
      console.log(name);
      return { id: recipient.id, name };
    });

    const selected = index === selectedConversationIndex;

    // const messages = conversation.messages.map((message: Message) => {
    //   return { ...message };
    // });
    console.log(recipients);
    return { ...conversation, recipients, selected };
  });
  console.log(formattedConversations);
  // const value = {
    // sendMessage,
    
    // selectedConversations: formattedConversations[selectedConversationIndex],
    // selectedConversationIndex: setSelectedConversationIndex,
  // };
  return (
    <ConversationsContext.Provider
      value={{
        conversations: formattedConversations,
        createConversation,
        contacts,
        selectedConversationIndex: setSelectedConversationIndex,
      }}
    >
      {children}
    </ConversationsContext.Provider>
  );
};

export function useConversations() {
  const context = useContext(ConversationsContext);

  if (!context || context instanceof Error) {
    throw new Error(
      "useConversations must be used within a ConversationsProvider"
    );
  }

  return context;
}
