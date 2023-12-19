import React, { useContext,useState, useEffect, createContext} from "react";
import { UserContext } from "../../../contexts/userContext/UserContext";
import io, { Socket } from "socket.io-client";
import { Axios } from "../../../AxiosInstance";

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
  id: number;
}
interface SendMessageParams {
  recipients: Recipient[];
  id: number;
  text: string;
  sender: string;
}
interface ProviderProps {
  children: React.ReactNode;
}
interface ConversationContextValue {
  conversations: Conversation[] ;
  openConversation: (recipients: Recipient[], group_name: string,id:number) => void;
  sendMessage: (message: SendMessageParams) => void;
  selectedConversation: Conversation | undefined;
  setSelectedConversation: React.Dispatch<React.SetStateAction<Conversation | undefined>>;
  socket: Socket | undefined;
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}
const ConversationsContext = createContext<ConversationContextValue>({
  conversations: [],
  openConversation: () => {},
  sendMessage: () => {},
  selectedConversation: undefined,
  setSelectedConversation: () => {},
  socket: undefined,
  messages: [],
  setMessages: () => {},
});

export const ConversationsProvider: React.FC<ProviderProps> = ({children}) => {
    const [messages,setMessages] = useState<Message[]>([]);
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
      const newConversations = res.data.map((group: Conversation) => ({
        group_name: group.group_name,
        group_profile: group.group_profile,
        id: group.id,
        members: group.members, 
        messages: [],
        selected: false,
      }));

      setConversations(newConversations);
    });
  }, [socket]);

  const openConversation = (recipients: Recipient[], group_name: string, id: number) => {
    socket?.emit("join-room", { recipients, group_name, id });
  };

  const sendMessage = (
    { recipients, id, text,sender }:{recipients: Recipient[]; id:number; text: string; sender: string; }
    ) => {
    socket?.emit("send-message", { recipients, text, id, sender });
  };

  return (
    <ConversationsContext.Provider
      value={{
        conversations,
        openConversation,
        sendMessage,
        selectedConversation,
        setSelectedConversation,
        socket,
        messages,
        setMessages
      }}>
      {children}
    </ConversationsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useConversations = () => useContext(ConversationsContext);