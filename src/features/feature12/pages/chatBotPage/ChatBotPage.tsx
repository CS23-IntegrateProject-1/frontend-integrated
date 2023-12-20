import {
    Text,
    Avatar,
    Flex,
    VStack,
    InputGroup,
    IconButton,
    FormControl,
    Input,
    InputRightElement,
  } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { FC, useState, useContext} from "react";
import { ClientMsg } from "../../components/ClientMsg";
import { Axios } from "../../../../AxiosInstance";
import { Form } from "react-router-dom";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { UserContext } from "../../../../contexts/userContext/UserContext";
import { BotMsg } from "../../components/BotMsg";

interface Ibot{
    name: string;
    img: string;
}

export const ChatBotPage: FC = () => {
    
    const user = useContext(UserContext);
    const bot: Ibot = {
        name: "MONIQUE",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIkSDNcRcU_UeGaNIl7pi7zlSwznp-ulDJxnm-zKYoTf2ZLqQY7zIgsni5waCv2ButaDQ&usqp=CAU",
    };
    const sendButtonStyle = {
        border: "none",
        color: "#A533C8",
        fontSize: "30px",
    };
    
    // Generate a new sessionId when the page loads
    const sessionId = user.username;

    const [message,setMessage] = useState<string>("");
    const [messages, setMessages] = useState<Array<{sender: string,consequences:string | undefined, text: string}>>([]);

    const handleSend = () => {
        // Add user message to messages array
        if(message){
            setMessages(prevMessages => [...prevMessages, {sender: user.username, consequences: undefined, text: message}]);
    
            Axios.post("feature12/dialogflow", {
            languageCode: "en",
            queryText: message,
            sessionId: sessionId,
            })
            .then(response => {
            // Add bot message to messages array
            setMessages(prevMessages => [...prevMessages, {sender: 'Monique', consequences: response.data.consequences, text: response.data.fulfillmentText}]);
        })
        .catch(error => {
            console.error('Error:', error);
        });
        setMessage("");
    }
    };

    // const fetchData = () => {
    //     Axios.get("/feature12/fetchData").then((res) => {
    //         console.log(res.data);
    //     })
    // }

    return (
    <>
    <Box height={"78vh"}  /* IMPT need adjustment to be responsive */
        overflow={"scroll"}
        >
    <Flex gap='4'>
        <Avatar name={bot.name} src={bot.img} />
        <VStack 
            alignItems={"start"} 
            maxW={"60%"}
            >
            <Box 
                borderRadius={"10px"}
                bg={"grey.100"}>
                <Text 
                    style={TextStyle.body2} 
                    color={"brand.200"} 
                    p={3}>
                        {/* IMPT need to get user's name with Cookies */}
                Hi there <b>{user.username}</b> ! How may I help you today? 
                </Text>
            </Box>
            <Box 
                borderRadius={"10px"}
                bg={"grey.100"}
                >
                <Text 
                    style={TextStyle.body2} 
                    color={"brand.200"} 
                    p={3}
                    >
                    It's me ! "<b>{bot.name}</b>", your Online Assistant. 
                </Text>
            </Box>
        </VStack>
    </Flex>

        {messages.map((message, index) => (
            message.sender === "Monique" ? (
                <Box key={index}>
                    <BotMsg consequences={message.consequences} text={message.text}/> 
                    {/* {message.consequences != null &&  <BotMsg msg={message.consequences} /> } */}
                </Box> 
            ) : (
                <ClientMsg key={index} msg={message.text} />
                )
        ))}

    </Box>
    
    <Flex
        position="fixed"
        width={"98%"}
        bottom="0" 
        p="10px"
        left="50%" 
        transform="translateX(-50%)"
        flexDirection={"column"}
        >
        <Form onSubmit={handleSend}>
          <InputGroup marginTop={"10px"}>
            {/* <InputLeftElement>
              <IconButton
                // isDisabled
                aria-label="Send Message"
                icon={
                  <PiPaperPlaneRightFill border="none" style={sendButtonStyle} />
                }
                onClick={fetchData}
              />
            </InputLeftElement> */}
            <FormControl>
              <Input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message..."
                bg="white"
                color="black"
              />
            </FormControl>
            <InputRightElement>
              <IconButton
                // isDisabled
                type="submit"
                aria-label="Send Message"
                icon={
                  <PiPaperPlaneRightFill border="none" style={sendButtonStyle} />
                }
              />
            </InputRightElement>
          </InputGroup>
        </Form>
    </Flex>
    </>
  );
};