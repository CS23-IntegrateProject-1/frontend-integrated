import React, { useContext, FC, useState, useEffect} from "react";
import { UserContext } from "../../../contexts/userContext/UserContext";
import io, { Socket } from "socket.io-client";
import { Axios } from "../../../AxiosInstance";
interface ConversationsProviderProps {
  children: React.ReactNode;
}
interface ConversationContextValue {
  conversations: Conversation[];
  openConversation: (recipients: Recipient[],group_id: string) => void;
  selectedConversationIndex: React.Dispatch<React.SetStateAction<number>>;
  selectedConversation: Conversation;
  sendMessage: (message: SendMessageParams) => void;
}

interface Recipient {
  id: number;
  name: string;
  avatar: string | null;
}

interface Conversation {
  recipients: Recipient[];
  messages: Message[];
  selected?: boolean;
  group_name: string;
}
interface Message {
  recipients: Recipient[] | string[];
  text: string;
  sender: string;
  fromMe: boolean;
}
interface Contact {
  username: string;
  id: number;
  profile_picture: string;
}

interface SendMessageParams {
  recipients: Recipient[];
  text: string;
}

const ConversationsContext = React.createContext< ConversationContextValue | undefined >(undefined);

export const ConversationsProvider: FC<ConversationsProviderProps> = ({
  children,
}) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);
  const user = useContext(UserContext);
  const [contacts, setContacts] = useState<Contact[] | undefined>([]);
  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    const newSocket = io("http://localhost:8000", {
      query: { id: user.username }
    });
    setSocket(newSocket);
    console.log("newSocket", newSocket);
    return () => { newSocket.close(); }
  }, [user]);

  //Temporary Contacts from database
  useEffect(() => {
    Axios.get("/feature12/displayFriendList")
      .then((res) => {
        // console.log("API response:", res.data);
        if (Array.isArray(res.data)) {
          const contacts = res.data.map((c) => ({
            id: c.userId,
            username: c.username,
            profile_picture : c.profile_picture
          }));
          setContacts(contacts);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log("contacts", contacts);
  
  //To get all the privateConversationLog
  useEffect(() => {
  Axios.get("/feature12/displayGroupDetail").then((res) => {
    setConversations([]);
    const newConversations = res.data.map((group: any) => ({
      group_name: group.group_name,
      group_profile: group.group_profile,
      recipients: group.members, // add appropriate recipients
      messages: [], // add appropriate messages
      selected: false, // or true, depending on your logic
    }));

    setConversations(prevConversations => [
      ...prevConversations,
      ...newConversations,
    ]);
  });
}, [socket]);

  function openConversation(recipients: Recipient[],group_id: string) {
    console.log("recipients", recipients);
    console.log(conversations+ "<< conversations")
    socket?.emit("join-room", ({recipients,group_id}))
    // setConversations((prevConversations) => {
    //   return [
    //     ...prevConversations,
    //     { recipients, messages: [], selected: false ,group_name },
    //   ];
    // });
  }
  
  const sendMessage = ({ recipients, text }: { recipients: Recipient[], text: string }) => {
    socket?.emit("send-message", { recipients, text });
    addMessageToConversation({recipients, text, sender: user.username});
  };

  const addMessageToConversation = ({ recipients, text, sender }: { recipients: Recipient[], text: string, sender: string },) => {
    setConversations((prevConversations) => {
      let madeChange = false;
      const newMessage: Message = { sender, text, recipients: [], fromMe: user.username === sender };
      const newConversations = prevConversations.map(conversation => {
        if (arrayEquality(conversation.recipients.map(r => r.id.toString()), recipients.map(r => r.id.toString()))) {
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
  };

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
  }, [addMessageToConversation, socket]);


  const formattedConversations = conversations.map(
    (conversation, index: number) => {
      // const recipients = conversation.recipients.map((recipient: Recipient) => {
      //   const contact = contacts?.find(
      //     (contact) => contact.id === recipient?.id
      //   );
      //   const name = (contact && contact?.username) || recipient?.name; // Use recipient.name
      //   const avatar = contact?.profile_picture || 'default-avatar.png';
      //   return { id: recipient.id, name , avatar};
      // });

      const messages = conversation.messages.map((message) => {
      // const contact = contacts?.find(
      //   (contact) => contact.addId === message?.sender
      // );
      const name = message?.sender;
      const fromMe = user.username === message?.sender;
      return { ...message, senderName: name, fromMe};
      });

      const selected = index === selectedConversationIndex;

      return { ...conversation, messages, selected };
    }
  );

  return (
    <ConversationsContext.Provider
      value={{
        conversations: formattedConversations,
        selectedConversationIndex: setSelectedConversationIndex,
        selectedConversation: formattedConversations[selectedConversationIndex],
        openConversation,
        sendMessage
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
