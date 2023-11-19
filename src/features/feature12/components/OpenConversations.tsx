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

export default function OpenConversations() {
  const [messages, setMessages] = useState<string[] | undefined>([]);
  const [text, setText] = useState<string>("");
  const setRef = useCallback((node: HTMLElement | null) => {
    if (node) {
      node.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const sendMessage = (text: string) => {
      setText(text);
      return text;
    };
    console.log(sendMessage(text));
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
          {messages &&
            messages.map((message, index) => {
              const lastMessage = messages.length - 1 === index;
              return (
                <Box
                  key={index}
                  ref={lastMessage ? setRef : null}
                  my="4px"
                  display="flex"
                  flexDirection="column"
                  alignItems="end"
                  alignSelf="end"
                >
                  {/*  return your message component here */}
                  <Box>
                    <Box bg="#DEBEF6" px="8px" py="4px" borderRadius="10px">
                      <Text color="black">{message}</Text>
                    </Box>
                  </Box>
                  <Box>
                    <Text color="gray.500" fontSize="sm">
                      You
                    </Text>
                  </Box>
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
