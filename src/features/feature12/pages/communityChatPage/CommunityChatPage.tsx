import { Avatar, Box,Card,Flex,Stack,Tab,TabList,TabPanel,TabPanels,Tabs,Text} from "@chakra-ui/react";
import { useConversations } from "../../context/ConversationProvider";
import { useContext, useState } from "react";
import { PConversation } from "../../components/PConversation";
import { CConversation } from "../../components/CConversation";
import { UserContext } from "../../../../contexts/userContext/UserContext";

interface Recipient {
  member: {
    username: string;
    userId: number;
    addId: string;
    profile_picture: string | null;
  },
  memberId: number;
}
interface Message {
  recipients: Recipient[] | string[];
  text: string;
  sender: string;
  fromMe: boolean;
  id: number;
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
export const CommunityChatPage = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const { Pconversations, Cconversations, openConversation,selectedConversation,setSelectedConversation,setMessages } = useConversations();
  const user = useContext(UserContext)
  const handleCardClick = (conversation: PConversation | CConversation , index: number): React.MouseEventHandler<HTMLDivElement> => {
    return () => {
      setSelectedCard(index);
      setSelectedConversation(conversation);
      openConversation(conversation.members, conversation.id);
      setMessages([]);
    };
  };
  const restartLog = () => {
    setSelectedCard(null);
    setSelectedConversation(undefined);
    setMessages([]);
  }
  function isPConversation(obj: any): obj is PConversation {
  // Replace this with your actual type check
  return obj && obj.group_name !== undefined;
  }
  console.log(selectedConversation, "selectedConversation")
  return (
    <Box display="flex" height={"83vh"}>
      <Box width="30%" mr="4px" overflowY={"scroll"} overflowX={"hidden"} borderRight={"1px dotted"}> 
        <Tabs isFitted>
          <TabList >
            <Tab onClick={restartLog}>Private Chat</Tab>
            <Tab onClick={restartLog}>Community Chat</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Stack>
                {Pconversations.map((conversation : PConversation, index : number) => {
                  const users =conversation.group_name.split(",");
                  return(
                    <Card
                      key={index}
                      onClick={handleCardClick(conversation,index)}
                      background={selectedCard === index ? "#DEBEF6" : "transparent"}>
                      <Flex marginY={"10px"}>
                        <Avatar src={conversation.group_profile ? `${import.meta.env.VITE_BACKEND_URL}/uploads/${conversation.group_profile}` : "/path/to/default/avatar.jpg"} size={"md"} marginX={"15px"} />
                        <Text color={"white"} alignSelf={"center"}>
                          {users[0]=== user.username? users[1] : users[0] }
                        </Text>
                      </Flex>
                    </Card>
                  )
                }
                )}
              </Stack>
            </TabPanel>
            <TabPanel>
              <Stack>
                {Cconversations.map((conversation : CConversation, index : number) => (
                  <Card
                    key={index}
                    onClick={handleCardClick(conversation,index)}
                    background={selectedCard === index ? "#DEBEF6" : "transparent"}>
                      <Flex margin={"10px"}>
                        <Avatar src={conversation.community_group_profile ? `${import.meta.env.VITE_BACKEND_URL}/uploads/${conversation.community_group_profile}` : "/path/to/default/avatar.jpg"} size={"md"} marginX={"15px"} />
                        <Text color={"white"}>
                          {conversation.roomname}
                        </Text>
                      </Flex>
                    </Card>
                ))}
              </Stack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Box width="75%">
        {selectedCard !== null && selectedConversation !== undefined 
          ? (isPConversation(selectedConversation)) 
            ? <PConversation id={selectedConversation.id} members={selectedConversation.members} />
            : <CConversation id={selectedConversation.id} members={selectedConversation.members} />
          : <Text>Select a conversation</Text>}
      </Box>
    </Box>
  )
};
