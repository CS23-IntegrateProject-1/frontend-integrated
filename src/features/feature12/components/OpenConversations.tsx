import {
  Box,
  FormControl,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import { BiSolidCamera } from "react-icons/bi";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { Form } from "react-router-dom";
import { useConversations } from "../context/ConversationProvider";

const cameraIconStyle = {
  borderRadius: "50%",
  color: "#DEBEF6",
  background: "#A533C8",
  fontSize: "30px",
  padding: "2px",
};
const sendButtonStyle = {
  border: "none",
  color: "#A533C8",
  fontSize: "30px",
};

export default function OpenConversations({ id }: { id: string }) {
  const [text, setText] = useState<string>("");
  const { sendMessage, selectedConversation } = useConversations();
  const setRef = useCallback((node: HTMLElement | null) => {
    if (node) {
      node.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    sendMessage({
      recipients: selectedConversation.recipients.map(
        (recipient: { id: number }) => recipient.id
      ),
      text: text,
      sender: id,
      fromMe: true,
      // senderName: selectedConversation.messages[0].senderName,
    });
    console.log("text", text);
    setText("");
  }

  return (
    <Box display="flex" flexDirection="column" flexGrow="1" height="83vh">
      <Box flexGrow="1" overflow="auto">
        <VStack
          display={"flex"}
          flexDirection={"column"}
          alignItems="end"
          justifyContent="start"
          px="12px"
        >
          {/* Each message placing for sender or receiver */}
          {selectedConversation.messages.map((message, index) => {
            const lastMessage =
              selectedConversation.messages.length - 1 === index;
            return (
              <Box
                key={index}
                ref={lastMessage ? setRef : null}
                my="4px"
                display="flex"
                flexDirection="column"
                alignItems={message.fromMe ? "flex-end" : "flex-start"}
              >
                <Box
                  rounded={"md"}
                  py="1"
                  px="2"
                  bg={message.fromMe ? "#DEBEF6" : "transparent"}
                  color={message.fromMe ? "black" : "white"}
                  borderWidth={message.fromMe ? "0px" : "1px"}
                >
                  {message.text}
                </Box>
                <Text
                  fontSize="sm"
                  color="gray.500"
                  textAlign={message.fromMe ? "end" : "start"}
                >
                  {lastMessage ? (message.fromMe ? "You" : "") : ""}
                </Text>
              </Box>
            );
          })}
        </VStack>
      </Box>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <InputLeftElement display={"flex-end"}>
            <IconButton
              aria-label="Send Image"
              icon={<BiSolidCamera style={cameraIconStyle} />}
            />
          </InputLeftElement>
          <FormControl px="25px" isRequired>
            <Input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Message..."
              bg="white"
              color="black"
            />
          </FormControl>
          <InputRightElement>
            <IconButton
              type="submit"
              aria-label="Send Message"
              icon={
                <PiPaperPlaneRightFill border="none" style={sendButtonStyle} />
              }
            />
          </InputRightElement>
        </InputGroup>
      </Form>
    </Box>
  );
}
