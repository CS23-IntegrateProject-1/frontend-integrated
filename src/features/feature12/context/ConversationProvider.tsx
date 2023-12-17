import React, { useContext, FC, useState, useEffect, useCallback } from "react";
import { UserContext } from "../../../contexts/userContext/UserContext";
import io, { Socket } from "socket.io-client";
import { Axios } from "../../../AxiosInstance";
interface ConversationsProviderProps {
  children: React.ReactNode;
}
interface ConversationContextValue {
  conversations: Conversation[];
  openConversation: (recipients: Recipient[], group_name: string,id:number) => void;
  sendMessage: (message: SendMessageParams) => void;
  selectedConversation: Conversation;
}

interface Recipient {
  member: {
    username: string;
    userId: number;
    addId: string;
    profile_picture: string | null;
  },
  memberId: number;
}

interface Conversation {
  group_name: string;
  group_profile: string;
  id:number;
  members: Recipient[];
  messages: Message[];
  selected?: boolean;
}
interface Message {
  recipients: Recipient[] | string[];
  text: string;
  sender: string;
  fromMe: boolean;
}

interface SendMessageParams {
  recipients: Recipient[];
  id: number;
  text: string;
}

const ConversationsContext = React.createContext<
  ConversationContextValue | undefined
>(undefined);

export const ConversationsProvider: FC<ConversationsProviderProps> = ({
  children,
}) => {
  const [selectedConversation, setSelectedConversation] = useState<Conversation>();

  const [conversations, setConversations] = useState<Conversation[]>([]);
  const user = useContext(UserContext);
  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    const newSocket = io("http://localhost:8000", {
      query: { id: user.username },
    });
    setSocket(newSocket);
    console.log("newSocket", newSocket);
    return () => {
      newSocket.close();
    };
  }, [user]);


  //To get all the privateConversationLog
  useEffect(() => {
    Axios.get("/feature12/displayGroupDetail").then((res) => {
      setConversations([]);
      const newConversations = res.data.map((group: Conversation) => ({
        group_name: group.group_name,
        group_profile: group.group_profile,
        id: group.id,
        members: group.members, 
        messages: [],
        selected: false,
      }));

      setConversations((prevConversations) => [
        ...prevConversations,
        ...newConversations,
      ]);
    });
  }, [socket]);

  function openConversation(recipients: Recipient[], group_name: string, id: number) {
    console.log("recipients", recipients);
    console.log(conversations + "<< conversations");
    socket?.emit("join-room", { recipients, group_name });
    
    //Get Specific Coversation
    Axios.get(`/feature12/displayChatDetail/${id}`).then((res) => {
      const newConversation = {
        group_name: res.data.group_name,
        group_profile: res.data.group_profile,
        id: res.data.id,
        members: res.data.members,
        messages: [],
        selected: true,
      };
      setSelectedConversation(newConversation);
    });
  }

  const sendMessage = (
    { recipients, id, text }:{recipients: Recipient[]; id:number, text: string; }
    ) => {
    socket?.emit("send-message", { recipients, text, id });
    // addMessageToConversation({ recipients, text, sender: user.username });
  };

  const addMessageToConversation = useCallback(
    ({
      recipients,
      text,
      sender,
    }: {
      recipients: Recipient[];
      text: string;
      sender: string;
    }) => {
      setConversations((prevConversations) => {
        let madeChange = false;
        const newMessage: Message = {
          sender,
          text,
          recipients: [],
          fromMe: user.username === sender,
        };
        const newConversations = prevConversations.map((conversation) => {
          if (
            arrayEquality(
              conversation.recipients.map((r) => r.id.toString()),
              recipients.map((r) => r.id.toString())
            )
          ) {
            madeChange = true;
            return {
              ...conversation,
              messages: [...conversation.messages, newMessage],
            };
          }
          return conversation;
        });
        // If the conversation already exists, add the message to the conversation, otherwise create a new conversation with the message
        if (madeChange) {
          return newConversations; // Return the previous state
        } else {
          return [
            ...prevConversations,
            {
              recipients,
              messages: [newMessage],
              selected: true,
              group_name: "",
              group_profile: "",
              id: 0,
            },
          ];
        }
      });
    },
    [user.username]
  );

  // Socket Recieve message event listener
  useEffect(() => {
    if (socket == null) {
      console.log("socket is null");
      return;
    }
    // socket.on("receive-message", addMessageToConversation);
    return () => {
      socket.off("receive-message");
    };
  }, [socket]);

  return (
    <ConversationsContext.Provider
      value={{
        conversations,
        openConversation,
        sendMessage,
        selectedConversation,
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
