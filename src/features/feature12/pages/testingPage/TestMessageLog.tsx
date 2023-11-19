import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { Axios } from "../../../../AxiosInstance";

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

const data1 = window.localStorage.getItem("userId");

console.log(data1);

  const TestMessageLog:React.FC  = () => {
  const [contacts, setContacts] = useState<Contact[] | undefined>([]);
  // const [contactId, setContactId] = useState<string | undefined>("");

  useEffect(() => {
    Axios.get("/feature12/displayUser").then((res) => {
      if (Array.isArray(res.data)) {
        setContacts(res.data);
      }
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <Box width="25%" mr="4px">
      <Box borderBottom="1px solid white" padding="2">
        <Heading style={TextStyle.h1}>Chat</Heading>
      </Box>
      <Tabs variant="enclosed">
        <TabList>
          <Tab>Conversation</Tab>
          <Tab>Contacts</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <VStack>
              {conversations.map((conversation) => (
                <Box
                  key={conversation.id}
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
    </Box>
  );
}

export default TestMessageLog;