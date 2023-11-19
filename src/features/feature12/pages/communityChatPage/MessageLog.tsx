import React from "react";
import { Avatar, Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";

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

const data1 = window.localStorage.getItem("userId");

console.log(data1);

export default function MessageLog() {
  return (
    <Box  width="25%" mr="4px">
      <Box borderBottom="1px solid white" padding="2">
        <Heading style={TextStyle.h1}>Chat</Heading>
      </Box>
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

    </Box>
  );
}
