import { Box,Card,Flex,Stack,Tab,TabList,TabPanel,TabPanels,Tabs,Text} from "@chakra-ui/react";
import Conversation from "../../components/Conversation";
import { useConversations } from "../../context/ConversationProvider";
import { useState } from "react";

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
export const CommunityChatPage = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const { conversations, openConversation,selectedConversation} = useConversations();
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
                    onClick={() => {openConversation(conversation.members, conversation.group_name,conversation.id);
                    setSelectedCard(index);}}
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
        {selectedConversation ? <Conversation /> : <Text>Select a conversation</Text>}
        </Box>
    </Box>
  )
};
