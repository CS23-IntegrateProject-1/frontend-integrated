import { Box,List,ListItem,Tab,TabList,TabPanel,TabPanels,Tabs} from "@chakra-ui/react";
// import OpenConversations from "../../components/OpenConversations";
import { useConversations } from "../../context/ConversationProvider";

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

  const { conversations, openConversation } = useConversations();
  console.log("conversations", conversations);
  return (
    <Box display="flex">
      <Box width="25%" mr="4px">
        <Tabs isFitted>
          <TabList >
            <Tab>Private Chat</Tab>
            <Tab>Community Chat</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <>
      <List
        spacing={3}
        variant="flush"
        width="100%"
        borderBottom="0.5px solid black"
      >
        {conversations.map((conversation:Conversation, index: number) => (
          <ListItem
            key={index}
            cursor={"pointer"}
            padding={3}
            onClick={() => {
              openConversation(
                conversation.members,
                conversation.group_name
              );
              // selectedConversationIndex(index);
            }}
            background={conversation.selected ? "#DEBEF6" : "transparent"}
          >
            {conversation.group_name}
          </ListItem>
        ))}
      </List>
    </>
            </TabPanel>
            <TabPanel>
              {/* <ConversationsLog /> */}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Box width="75%">
        {/* {selectedConversation ? <OpenConversations /> : <Text>Select a conversation</Text>} */}
        </Box>
    </Box>
  )
};
