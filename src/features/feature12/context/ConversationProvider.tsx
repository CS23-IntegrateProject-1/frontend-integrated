import React, { useContext, FC, useState, useEffect, useCallback } from "react";
import { Axios } from "../../../AxiosInstance";
import { UserContext } from "../../../contexts/userContext/UserContext";
import io, { Socket } from "socket.io-client";
interface ConversationsProviderProps {
  // id: string;
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
  sendMessage: (message: SendMessageParams) => void;
}

interface Recipient {
  id: string;
  name: string;
}

interface Conversation {
  recipients: Recipient[];
  messages: Message[];
  selected?: boolean;
}
interface Message {
  recipients: Recipient[] | string[];
  text: string;
  sender: string;
  fromMe: boolean;
  // senderName: string;
}
interface Contact {
  username: string;
  addId: string;
}

interface SendMessageParams {
  recipients: Recipient[];
  text: string;
}

const ConversationsContext = React.createContext<
  ConversationContextValue | undefined
>(undefined);

export const ConversationsProvider: FC<ConversationsProviderProps> = ({
  children,
}) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);
  const user = useContext(UserContext);
  console.log("user", user);
  const [contacts, setContacts] = useState<Contact[] | undefined>([]);
  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    const newSocket = io("http://localhost:8000", {
      query: { id: user.addId },
    });
    setSocket(newSocket);
    console.log("newSocket", newSocket);
    return () => { newSocket.close(); }
  }, [user.addId]);

  //Temporary Contacts from database
  useEffect(() => {
    Axios.get("/feature12/displayFriendList")
      .then((res) => {
        console.log("API response:", res.data);
        if (Array.isArray(res.data)) {
          const contacts = res.data.map((c) => ({
            addId: c.addId,
            username: c.username,
          }));
          setContacts(contacts);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("contacts", contacts);

  function createConversation(recipients: Recipient[]) {
    socket?.emit("join-room", (recipients))
    setConversations((prevConversations) => {
      return [
        ...prevConversations,
        { recipients, messages: [], selected: false },
      ];
    });
  }

  const addMessageToConversation = useCallback(({ recipients, text, sender }: { recipients: Recipient[], text: string, sender: string },) => {
    setConversations((prevConversations) => {
      let madeChange = false;
      const newMessage: Message = { sender, text, recipients: [], fromMe: user.addId === sender };
      const newConversations = prevConversations.map(conversation => {
        if (arrayEquality(conversation.recipients.map(r => r.id), recipients.map(r => r.id))) {
          madeChange = true;
          return {
            ...conversation,
            messages: [...conversation.messages, newMessage]
          }
        }
        return conversation;
      })
      // If the conversation already exists, add the message to the conversation, otherwise create a new conversation with the message
      if (madeChange) {
        return newConversations; // Return the previous state
      } else {
        return [...prevConversations,
        { recipients, messages: [newMessage], selected: true}];
      }
    });
    
  }, [setConversations]);

  // Socket Recieve message event listener
  useEffect(() => {
    if (socket == null) {
      console.log("socket is null");
      return;
    }

    socket.on("receive-message", addMessageToConversation );

    return () => {
      socket.off("receive-message");
    }
  }, [socket, addMessageToConversation]);

  const sendMessage = ({ recipients, text }: { recipients: Recipient[], text: string }) => {
    socket?.emit("send-message", { recipients, text });
    addMessageToConversation({recipients, text, sender: user.addId});
  };

  const formattedConversations = conversations.map(
    (conversation, index: number) => {
      const recipients = conversation.recipients.map((recipient: Recipient) => {
        const contact = contacts?.find(
          (contact) => contact.addId === recipient?.id
        );
        const name = (contact && contact.username) || recipient?.id; // Use recipient.name
        return { id: recipient.id, name };
      });

      const messages = conversation.messages.map((message) => {
        // const contact = contacts?.find(
        //   (contact) => contact.addId === message?.sender
        // );
        const name = message?.sender;
        const fromMe = user.addId === message?.sender;
        return { ...message, senderName: name, fromMe, recipients };
      });

      const selected = index === selectedConversationIndex;

      return { ...conversation, messages, recipients, selected };
    }
  );

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

function arrayEquality(a: string[], b: string[]) {
  if (a.length !== b.length) return false;

  a.sort();
  b.sort();

  return a.every((element: string, index: number) => {
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
