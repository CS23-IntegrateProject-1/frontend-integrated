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
  Flex,
} from "@chakra-ui/react";
import { useCallback, useContext, useEffect, useState } from "react";
import { BiSolidCamera } from "react-icons/bi";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { Form } from "react-router-dom";
import { useConversations } from "../context/ConversationProvider";
import { UserContext } from "../../../contexts/userContext/UserContext";
import { Axios } from "../../../AxiosInstance";

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
interface User {
  username: string,
  fname: string,
  lname: string,
  profile_picture: string | null,
}
interface LoadMessage {
  userId: number,
  user: User,
  message : string,
  date_time: string,
}
export default function Conversation() {
  const user = useContext(UserContext);
  const [text, setText] = useState<string>("");
  const { sendMessage, selectedConversation,setSelectedConversation} = useConversations()
  const[loadMessages,setLoadMessages] = useState<LoadMessage[]>([]);
  const setRef = useCallback((node: HTMLElement | null) => {
    if (node) {
      node.scrollIntoView({ behavior: "instant" });
    }
  }, []);
  console.log(selectedConversation, "selectedConversation")
  const handleSubmit = () => {
    if(selectedConversation){
      const message ={
      recipients: selectedConversation.members,
      id: selectedConversation.id,
      text,
      sender: user.username,
      fromMe :true,
    }
    sendMessage(message);
    setSelectedConversation(
        {...selectedConversation,
          messages: [...selectedConversation.messages, message]
        });
    }
    setText("");
  }
  useEffect(() => {
      Axios.get(`feature12/displayAllMessage/${selectedConversation?.id}`).then((response) => {
        setLoadMessages(response.data);
      });
  }, [selectedConversation]);
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
          {loadMessages && loadMessages.map((message, index) => {
            const lastMessage = loadMessages.length - 1 === index;
            return (
              <Flex
                key={index}
                ref={lastMessage ? setRef : null}
                my="4px"
                display="flex"
                flexDirection={message.user.username === user.username ? "row-reverse" : "row"}
                width="100%"
              >
                <Box 
                  flexDirection="column">
                  <Text
                    fontSize="sm"
                    color="gray.500"
                    textAlign={message.user.username === user.username ? "end" : "start"}
                  >
                    {message.user.username}
                  </Text>
                  <Box
                    rounded={"md"}
                    py="1"
                    px="2"
                    bg={message.user.username === user.username ? "#DEBEF6" : "red"}
                    color={message.user.username === user.username ? "black" : "white"}
                    borderWidth={message.user.username === user.username ? "0px" : "1px"}
                  >
                    {message.message}
                  </Box> 
                </Box>
              </Flex>
            );
          })}
          {/* Each message placing for sender or receiver */}
          {/* {selectedConversation?.messages.map((message, index) => {
            const lastMessage = selectedConversation.messages.length - 1 === index;
            return (
              <Flex
                key={index}
                ref={lastMessage ? setRef : null}
                my="4px"
                display="flex"
                flexDirection={message.fromMe ? "row-reverse" : "row"}
                width="100%"
              >
                <Box flexDirection="column">
                  <Text
                    fontSize="sm"
                    color="gray.500"
                    textAlign={message.fromMe ? "end" : "start"}
                  >
                    {message.sender}
                  </Text>
                  <Box
                    rounded={"md"}
                    py="1"
                    px="2"
                    bg={message.fromMe ? "#DEBEF6" : "red"}
                    color={message.fromMe ? "black" : "white"}
                    borderWidth={message.fromMe ? "0px" : "1px"}
                  >
                    {message.text}
                  </Box>
                </Box>
              </Flex>
            );
          })} */}
          {/* {activeMessages.map((message, index) => {
            const lastMessage = activeMessages.length - 1 === index;
            return (
              <Flex
                key={index}
                ref={lastMessage ? setRef : null}
                my="4px"
                display="flex"
                flexDirection={message.fromMe ? "row-reverse" : "row"}
                width="100%"
              >
                <Box flexDirection="column">
                  <Text
                    fontSize="sm"
                    color="gray.500"
                    textAlign={message.fromMe ? "end" : "start"}
                  >
                    {message.sender}
                  </Text>
                  <Box
                    rounded={"md"}
                    py="1"
                    px="2"
                    bg={message.fromMe ? "#DEBEF6" : "red"}
                    color={message.fromMe ? "black" : "white"}
                    borderWidth={message.fromMe ? "0px" : "1px"}
                  >
                    {message.text}
                  </Box>
                </Box>
              </Flex>
            );
          })} */}
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