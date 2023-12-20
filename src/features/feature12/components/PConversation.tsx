import {
  Box,
  FormControl,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { FC, useCallback, useContext, useEffect, useState } from "react";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { Form } from "react-router-dom";
import { useConversations } from "../context/ConversationProvider";
import { UserContext } from "../../../contexts/userContext/UserContext";
import { Axios } from "../../../AxiosInstance";

const sendButtonStyle = {
  border: "none",
  color: "#A533C8",
  fontSize: "30px",
};
interface Recipient {
  member: {
    username: string;
    userId: number;
    addId: string;
    profile_picture: string | null;
  },
  memberId: number;
}
interface ConversationProps {
  id:number;
  members: Recipient[];
  selected?: boolean;
}
interface User {
  username: string,
  fname: string,
  lname: string,
  profile_picture: string | null,
}
interface LoadMessage {
  userId: number,
  User: User,
  message : string,
  date_time: string,
}
export const PConversation :FC<ConversationProps> = ({id, members}) => {
  const user = useContext(UserContext);
  const [text, setText] = useState<string>("");
  const [loadMessages,setLoadMessages] = useState<LoadMessage[]>([]);
  const [count, setCount] = useState<number>(0);
  const { sendPMessage, selectedConversation, socket, messages, setMessages} = useConversations()
  
  const setRef = useCallback((node: HTMLElement | null) => {
    if (node) {
      node.scrollIntoView({ behavior: "instant" });
    }
  }, []);
  
  useEffect(() => {
      Axios.get(`feature12/displayAllMessage/${id}`).then((response) => {
        setLoadMessages(response.data);
      });
  }, [selectedConversation,id]);
  
  const handleSubmit = () => {
    const message ={
      recipients: members,
      id: id,
      text : text,
      sender: user.username,
      fromMe :true,
    }
    sendPMessage(message);
    setText("");
    setCount(count + 1);
    setMessages(prevMessages => [...prevMessages, message]);
  }

 useEffect(() => {
        socket?.on("receive-Pmessage", ({ id, members, text, sender }) => {
            console.log(id, "id", selectedConversation?.id);

            const message ={
                recipients: members,
                id: id,
                text : text,
                sender: sender,
                fromMe :false,
            }
            setMessages(prevMessages => [...prevMessages, message]);
            return () => {
                console.log("clean up");
                socket.off("receive-Pmessage");
            };  
    });
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);
 console.log("messages==========", messages);
 console.log("loadMessages==========", loadMessages)
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
                flexDirection={message.User.username === user.username ? "row-reverse" : "row"}
                width="100%"
              >
                <Box 
                  flexDirection="column">
                  <Text
                    fontSize="sm"
                    color="gray.500"
                    textAlign={message.User.username === user.username ? "end" : "start"}
                  >
                    {message.User.username}
                  </Text>
                  <Box
                    rounded={"md"}
                    py="1"
                    px="2"
                    bg={message.User.username === user.username ? "#DEBEF6" : "red"}
                    color={message.User.username === user.username ? "black" : "white"}
                    borderWidth={message.User.username === user.username ? "0px" : "1px"}
                  >
                    {message.message}
                  </Box> 
                </Box>
              </Flex>
            );
          })}
          {messages.length > 0 ? messages.map((message, index) => {
              const lastMessage = messages.length - 1 === index;
              return (
                selectedConversation?.id === message.id &&
                <Flex
                  key={index}
                  ref={lastMessage ? setRef : null}
                  my="4px"
                  display="flex"
                  flexDirection={message.sender === user.username ? "row-reverse" : "row"}
                  width="100%"
                >
                  <Box 
                    flexDirection="column">
                    <Text
                      fontSize="sm"
                      color="gray.500"
                      textAlign={message.sender === user.username ? "end" : "start"}
                    >
                        {message.sender}
                    </Text>
                    <Box
                      rounded={"md"}
                      py="1"
                      px="2"
                      bg={message.sender === user.username ? "#DEBEF6" : "red"}
                      color={message.sender === user.username ? "black" : "white"}
                      borderWidth={message.sender === user.username ? "0px" : "1px"}
                    >
                        {message.text}
                    </Box> 
                  </Box>
                </Flex>
              );
            }):""
          }
        </VStack>
      </Box>

      <Form onSubmit={handleSubmit}>
        <InputGroup>
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