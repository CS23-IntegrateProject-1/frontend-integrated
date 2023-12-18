import React, { useContext, FC, useState, useEffect, useCallback} from "react";
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
  selectedConversation: Conversation | undefined;
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
  sender: string;
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
    socket?.emit("join-room", { recipients, group_name,id });
    
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
    { recipients, id, text,sender }:{recipients: Recipient[]; id:number; text: string; sender: string; }
    ) => {
    socket?.emit("send-message", { recipients, text, id, sender });
    addMessageToConversation({ recipients, text, sender});
    console.log("selectedConversation after sending", selectedConversation?.messages);
  };

const addMessageToConversation = useCallback(({
  recipients,
  text,
  sender,
}: {
  recipients: Recipient[];
  text: string;
  sender: string;
}) => {
  if(selectedConversation){
      selectedConversation.messages.push({
      recipients,
      text,
      sender,
      fromMe: sender === user.username,
  })
  }
}, [selectedConversation,user.username]);
  // Socket Recieve message event listener
  useEffect(() => {
    if (socket == null) {
      console.log("socket is null");
      return;
    }
    socket.on("receive-message", ({ recipients, text, sender }) => {
      addMessageToConversation({ recipients, text, sender });
    });
    return () => {
      socket.off("receive-message");
    };
  }, [socket,addMessageToConversation]);

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

// eslint-disable-next-line react-refresh/only-export-components
export function useConversations() {
  const context = useContext(ConversationsContext);

  if (!context || context instanceof Error) {
    throw new Error(
      "useConversations must be used within a ConversationsProvider"
    );
  }
  return context;
}
