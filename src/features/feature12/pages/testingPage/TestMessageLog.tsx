import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  Heading,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { Axios } from "../../../../AxiosInstance";
import { BiConversation } from "react-icons/bi";
import { Form } from "react-router-dom";
import { useConversations } from "../../context/ConversationProvider";
import { useContacts } from "../../context/ContactProvider";

const conversations = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
  {
    Id: 3,
    name: "John Smith",
  },
];

interface Contact {
  username: string;
  id: number;
}


const TestMessageLog: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[] | undefined>([]);
  const [selectedContactId, setSelectedContactId] = useState<number[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { createConversation } = useConversations();
  // const { contacts } = useContacts();


  useEffect(() => {
    Axios.get("/feature12/displayUser")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setContacts(res.data);
        }
        
        console.log(contacts)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) { 
    e.preventDefault();
    createConversation(selectedContactId);
  }

  function handleCheckboxChange(contactId: number) { 
    setSelectedContactId((prevSelectedContactIds) => {
      if (prevSelectedContactIds.includes(contactId)) {
        return prevSelectedContactIds.filter((prevId) => {
          return contactId !== prevId;
        })
      } else {
        return [...prevSelectedContactIds, contactId]
      }
    })
  }


  return (
    <Box width="25%" mr="4px">
      <Box borderBottom="1px solid white" padding="2">
        <Heading style={TextStyle.h1}>Chat</Heading>
        <IconButton
          aria-label="open modal"
          icon={<BiConversation />}
          onClick={onOpen}
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
              {conversations.map((conversation, index: number) => (
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
              ))}
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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Form onSubmit={handleSubmit}>
              {contacts?.map((contact: Contact) => (
                <CheckboxGroup key={contact.id}>
                  <VStack>
                    <Checkbox
                      // isChecked={selectedContactId.includes(contact.id)}
                      onChange={() => handleCheckboxChange(contact.id)}
                    >
                      <Text color={"black"}>{contact.username}</Text>
                    </Checkbox>
                  </VStack>
                </CheckboxGroup>
              ))}
              <Button type="submit" onClick={onClose}>Create</Button>
            </Form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default TestMessageLog;
