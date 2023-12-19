import { Box,Card,Flex,Stack,Tab,TabList,TabPanel,TabPanels,Tabs,Text} from "@chakra-ui/react";
import Conversation from "../../components/Conversation";
import { useConversations } from "../../context/ConversationProvider";
import { useState } from "react";
import { Conversation2 } from "../../components/Conversation2";

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
interface Conversation {
  group_name: string;
  group_profile: string;
  id:number;
  members: Recipient[];
  messages: Message[];
  selected?: boolean;
}
export const CommunityChatPage = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const { conversations, openConversation,selectedConversation,setSelectedConversation,setMessages } = useConversations();

  const handleCardClick = (conversation: Conversation, index: number): React.MouseEventHandler<HTMLDivElement> => {
    return () => {
      setSelectedCard(index);
      setSelectedConversation(conversation);
      openConversation(conversation.members, conversation.group_name, conversation.id);
      setMessages([]);
    };
  };
  console.log(selectedConversation, "selectedConversation")
  return (
    <Box display="flex" height={"83vh"}>
      <Box width="30%" mr="4px" overflowY={"scroll"} overflowX={"hidden"}> 
        <Tabs isFitted>
          <TabList >
            <Tab>Private Chat</Tab>
            <Tab>Community Chat</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Stack>
                {conversations.map((conversation : Conversation, index : number) => (
                  <Card
                    key={index}
                    onClick={handleCardClick(conversation,index)}
                    background={selectedCard === index ? "#DEBEF6" : "transparent"}>
                      <Flex margin={"10px"}>
                        <Text color={"white"}>
                          {conversation.group_name}
                        </Text>
                      </Flex>
                    </Card>
                )
                )}
              </Stack>
            </TabPanel>
            <TabPanel>
              {/* <ConversationsLog /> */}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Box width="75%">
        {selectedCard !== null ? 
          (selectedConversation && <Conversation2 id={selectedConversation.id} members={selectedConversation.members} />)
          : <Text>Select a conversation</Text>}
      </Box>
    </Box>
  )
};
