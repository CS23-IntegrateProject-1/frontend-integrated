import React, { useState } from "react";
import {
  Box,
  Heading,
  IconButton,
  Modal,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { BiConversation } from "react-icons/bi";
import { useConversations } from "../../context/ConversationProvider";
import Conversations from "./Conversations";
import NewConversationModal from "../../components/NewConversationModal";

interface MessageLogProps {
  id: string;
}
interface Contact {
  username: string;
  userId: number;
}

const MessageLog: React.FC<MessageLogProps> = () => {
  const { contacts } = useConversations();
  const [modalOpen, setModalOpen] = useState(false);

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <Box width="25%" mr="4px">
      <Box borderBottom="1px solid white" padding="2">
        <Heading style={TextStyle.h1}>Chat</Heading>
        <IconButton
          aria-label="open modal"
          icon={<BiConversation />}
          onClick={() => setModalOpen(true)}
        />
      </Box>
      <Tabs variant="enclosed">
        <TabList>
          <Tab>Conversation</Tab>
          <Tab>Contacts</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <VStack>
              {/* {conversations.map((conversation, index: number) => (
                <Box
                  key={index}
                  width="100%"
                  borderBottom="0.5px solid white"
                  padding="2"
                  _active={conversation.id === 1 ? { bg: "#A533C8" } : {}}
                >
                  <Flex gap={"3"}>
                    <Avatar
                      name={conversation.name}
                      src="https://bit.ly/sage-adebayo"
                      size="sm"
                    />
                    <Box>
                      <Text style={TextStyle.body3}>{conversation.name}</Text>
                    </Box>
                  </Flex>
                </Box>
              ))} */}
              <Conversations />
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack>
              {contacts?.map((contact: Contact) => (
                <Box
                  key={contact.username}
                  width="100%"
                  borderBottom="0.5px solid white"
                  padding="2"
                >
                  {contact.username}
                </Box>
              ))}
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Modal isOpen={modalOpen} onClose={closeModal} size={"half"}>
        <NewConversationModal closeModal={closeModal} />
      </Modal>
    </Box>
  );
};

export default MessageLog;
