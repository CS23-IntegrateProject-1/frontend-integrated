import { Box,Tab,TabList,TabPanel,TabPanels,Tabs,Text } from "@chakra-ui/react";

import OpenConversations from "../../components/OpenConversations";
import { useConversations } from "../../context/ConversationProvider";
import ConversationsLog from "../../components/ConversationsLog";
// import { TextStyle } from "../../../../theme/TextStyle";

export const CommunityChatPage = () => {

  const { selectedConversation } = useConversations();

  return (
    <Box display="flex">
      <Box width="25%" mr="4px">
        <Tabs isFitted>
          <TabList >
            <Tab>Community Chat</Tab>
            <Tab>Private Chat</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <ConversationsLog />
            </TabPanel>
            <TabPanel>
              <Text>Groups</Text>
              <ConversationsLog />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Box width="75%">
        {selectedConversation ? <OpenConversations /> : <Text>Select a conversation</Text>}
        </Box>
    </Box>
  )
};
