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
interface PConversation {
  group_name: string;
  group_profile: string;
  id:number;
  members: Recipient[];
  messages: Message[];
  selected?: boolean;
}
interface CConversation {
  roomname: string;
  community_group_profile: string;
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
  Pconversations: PConversation[] ;
  Cconversations: CConversation[] ;
  openConversation: (recipients: Recipient[],id:number) => void;
  sendPMessage: (message: SendMessageParams) => void;
  sendCMessage: (message: SendMessageParams) => void;
  selectedConversation: PConversation | CConversation | undefined;
  setSelectedConversation: React.Dispatch<React.SetStateAction<PConversation | CConversation | undefined>>;
  socket: Socket | undefined;
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}
const ConversationsContext = createContext<ConversationContextValue>({
  Pconversations: [],
  Cconversations: [],
  openConversation: () => {},
  sendPMessage: () => {},
  sendCMessage: () => {},
  selectedConversation: undefined,
  setSelectedConversation: () => {},
  socket: undefined,
  messages: [],
  setMessages: () => {},
});

export const ConversationsProvider: React.FC<ProviderProps> = ({children}) => {
  const [messages,setMessages] = useState<Message[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<PConversation | CConversation>();
  const [Pconversations, setPConversations] = useState<PConversation[]>([]);
  const [Cconversations, setCConversations] = useState<CConversation[]>([]);
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
      const newConversations = res.data.map((group: PConversation) => ({
        group_name: group.group_name,
        group_profile: group.group_profile,
        id: group.id,
        members: group.members, 
        messages: [],
        selected: false,
      }));

      setPConversations(newConversations);
    });
  }, [socket]);

  //To get all the communityConversationLog
  useEffect(() => {
    Axios.get("/feature12/displayCommunityDetail").then((res) => {
      console.log(">>>>>COMMUNITY>>>", res.data )
      const newConversations = res.data.map((room: CConversation) => ({
        roomname: room.roomname,
        community_group_profile: room.community_group_profile,
        id: room.id,
        members: room.members, 
        messages: [],
        selected: false,
      }));

      setCConversations(newConversations);
    });
  }, [socket]);

  const openConversation = (recipients: Recipient[], id: number) => {
    socket?.emit("join-room", { recipients, id });
  };

  const sendPMessage = (
    { recipients, id, text,sender }:{recipients: Recipient[]; id:number; text: string; sender: string; }
    ) => {
    socket?.emit("send-Pmessage", { recipients, text, id, sender });
  };
  const sendCMessage = (
    { recipients, id, text,sender }:{recipients: Recipient[]; id:number; text: string; sender: string; }
    ) => {
    socket?.emit("send-Cmessage", { recipients, text, id, sender });
  };

  return (
    <ConversationsContext.Provider
      value={{
        Pconversations,
        Cconversations,
        openConversation,
        sendPMessage,
        sendCMessage,
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