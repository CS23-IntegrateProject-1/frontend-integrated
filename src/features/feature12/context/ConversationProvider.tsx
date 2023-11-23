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
  selectedConversationIndex: React.Dispatch<React.SetStateAction<number>>;
  selectedConversation: Conversation;
  sendMessage: (message: Message) => void;
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
  recipients: number[];
  sender: string;
  fromMe: boolean;
  // senderName: string;
}
interface Contact {
  username: string;
  userId: number;
}

const ConversationsContext = React.createContext<
  ConversationContextValue | undefined
>(undefined);

export const ConversationsProvider: FC<ConversationsProviderProps> = ({
  id,
  children,
}) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);

  //Temporary Contacts from database
  const [contacts, setContacts] = useState<Contact[] | undefined>([]);
  useEffect(() => {
    Axios.get("/feature12/displayUser")
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

  function createConversation(recipients: Recipient[]) {
    setConversations((prevConversations) => {
      return [
        ...prevConversations,
        { recipients, messages: [], selected: false },
      ];
    });
  }

  function addMessageToConversation({
    recipients,
    text,
    sender,
  }: {
    recipients: number[];
    text: string;
    sender: string;
  }) {
    setConversations((preConversations) => {
      let madeChange = false;
      const newMessage = {
        sender,
        text,
        recipients,
      };
      const newConversations = preConversations.map((conversation) => {
        if (
          arrayEquality(
            conversation.recipients.map((recipient) => recipient.id),
            recipients
          )
        ) {
          madeChange = true;
          return {
            ...conversation,
            messages: [...conversation.messages, newMessage],
            selected: conversation.selected,
          };
        }
        return conversation;
      });

      // If the conversation already exists, add the message to the conversation, otherwise create a new conversation with the message
      if (madeChange) {
        return newConversations; // Return the previous state
      } else {
        return [...preConversations, { recipients, messages: [newMessage] }];
      }
    });
  }

  const sendMessage = ({ recipients, text }: Message) => {
    addMessageToConversation({ recipients, text, sender: id });
  };

  const formattedConversations = conversations.map(
    (conversation, index: number) => {
      const recipients = conversation.recipients.map((recipient: Recipient) => {
        const contact = contacts?.find(
          (contact) => contact.userId === recipient?.id
        );
        const name = (contact && contact.username) || recipient?.id.toString(); // Use recipient.name
        return { id: recipient.id, name };
      });

      const messages = conversation.messages.map((message) => {
        const contact = contacts?.find(
          (contact) => contact.userId === Number(message?.sender)
        );
        const name = (contact && contact.username) || message?.sender;
        const fromMe = id === message?.sender;
        return { ...message, senderName: name, fromMe };
      });

      const selected = index === selectedConversationIndex;

      return { ...conversation, messages, recipients, selected };
    }
  );
  // const value = {
  // sendMessage,

  // selectedConversations: formattedConversations[selectedConversationIndex],
  // selectedConversationIndex: setSelectedConversationIndex,
  // };
  return (
    <ConversationsContext.Provider
      value={{
        conversations: formattedConversations,
        selectedConversationIndex: setSelectedConversationIndex,
        selectedConversation: formattedConversations[selectedConversationIndex],
        createConversation,
        sendMessage,
        contacts,
      }}
    >
      {children}
    </ConversationsContext.Provider>
  );
};

function arrayEquality(a: number[], b: number[]) {
  if (a.length !== b.length) return false;

  a.sort();
  b.sort();

  return a.every((element: number, index: number) => {
    return element === b[index];
  });
}

export function useConversations() {
  const context = useContext(ConversationsContext);

  if (!context || context instanceof Error) {
    throw new Error(
      "useConversations must be used within a ConversationsProvider"
    );
  }

  return context;
}
