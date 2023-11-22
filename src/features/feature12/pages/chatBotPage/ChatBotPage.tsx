import {
    Text,
    Avatar,
    Flex,
    VStack,
    Button,
    Wrap,
    WrapItem,
    InputGroup,
    IconButton,
    FormControl,
    Input,
    InputRightElement,
  } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { FC, useState, useEffect} from "react";
import { ClientMsg } from "./ClientMsg";
import { QuestionMsg } from "./QuestionMsg";
import { Axios } from "../../../../AxiosInstance";
import { ShowingVenuesMsg } from "./ShowingVenuesMsg";
import { Form } from "react-router-dom";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { useUser } from "../../../../App";
import { v4 as uuidv4 } from "uuid";

interface Ibot{
    name: string;
    img: string;
}

export const ChatBotPage: FC = () => {
    const [catType, setCatType] = useState<string | null>(null);
    const [venues, setVenues] = useState<{ [key: string]: string[] }>({});
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [askedGenMsg, setAskedGenMsg] = useState<string>();
    const [data, setData] = useState<string | null>(null);

    const user = useUser();
    
    const bot: Ibot = {
        name: "MONIQUE",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIkSDNcRcU_UeGaNIl7pi7zlSwznp-ulDJxnm-zKYoTf2ZLqQY7zIgsni5waCv2ButaDQ&usqp=CAU",
    };
    
    //To get the categories
    useEffect(() => {
        Axios.get("/feature12/displayCategory").then((res) => {
            setCategories(res.data);
        });
    },[]);

    const selectingCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
        const value = event.currentTarget.getAttribute('data-value');
        if (value !== null) {
            setSelectedCategories([...selectedCategories, value]);
            setCatType(value);
        }
        if (value !== null && value === "General") {
            setAskedGenMsg(value);
        }  
    }
    
    //To get the venues of a category
    useEffect(() => {
        if (catType) {
            Axios.get(`/feature12/displayName/${catType}`).then((res) => {
                if (Array.isArray(res.data) && res.data.length > 0) {
                    let catType = res.data[0].category;
                    setVenues((prevVenues) => ({
                        ...prevVenues,
                        [catType]: res.data
                    }));
                }
            }).catch((error) => {
                console.error("Error fetching data: ", error);
            });
        }
    }, [catType]);
    
    //To get the questions of a venue
    useEffect(() => {
        Axios.get("/feature12/printAllQuestions").then((res) => {
            setData(res.data);
        });
    }, [askedGenMsg]);
    
    // Generate a new sessionId when the page loads
    let sessionId = uuidv4();

    const [userMessage, setUserMessage] = useState("");
    const handleSend = () => {

        Axios.post("feature12/dialogflow", {
            languageCode: "en",
            queryText: userMessage,
            sessionId: sessionId, // Include the sessionId in the request
        })
        .then(response => {
            console.log(response.data);
            setUserMessage("");
        })
        .catch(error => {
            console.error('Error:', error);
        });
        console.log(userMessage);
    };
    const sendButtonStyle = {
        border: "none",
        color: "#A533C8",
        fontSize: "30px",
    };

    return (
    <>
    <Box height={"70vh"}  /* IMPT need adjustment to be responsive */
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
                bg={"grey.100"
            }>
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
            <Box 
                borderRadius={"10px"} 
                bg={"grey.100"}
                >
                <Text 
                    style={TextStyle.body2} 
                    color={"brand.200"} 
                    p={3}
                    >
                To ensure a smooth experience, please choose a topic from the list below. I'll do my best to provide you with helpful answers. 
                </Text>
            </Box>
        </VStack>
    </Flex>
        {/* Mapping to get General Questions & Venues' name based on the ClientMsg */}
        {selectedCategories.map((category : string, index : number) => 
            category === "General" && data !== null ? (
                <Box key={index}>
                    <ClientMsg msg={category} />
                    <QuestionMsg data={data} />
                </Box>
            ) : (
                <Box key={index}>
                    <ClientMsg msg={category} />
                    { venues[category] && <ShowingVenuesMsg data={venues[category]} /> }
                </Box>
            )
        )}
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
        {/* For Categories Buttons */}
        <Wrap margin={"auto"}>
            <WrapItem>
                <Button variant="outline" 
                        colorScheme="brand" 
                        style={TextStyle.body3} 
                        color="brand.200" 
                        p={3}  
                        onClick={selectingCategory}  
                        data-value={"General"}>
                    General
                </Button>
            </WrapItem>
            
            {categories.map((item :any, index: number) => (
                <WrapItem key={index}>
                    <Button variant="outline" 
                            colorScheme="brand.200" 
                            style={TextStyle.body3} 
                            color="brand.200" p={3} 
                            onClick={selectingCategory}  
                            data-value={item.category}>
                        {item.category}
                    </Button>
                </WrapItem>
            ))}
        </Wrap>
        <Form onSubmit={handleSend}>
          <InputGroup marginTop={"10px"}>
            <FormControl 
                        // px="25px" 
                        // isRequired
                        // isDisabled
            >
              <Input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
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
                onClick={handleSend}
              />
            </InputRightElement>
          </InputGroup>
        </Form>
    </Flex>
    </>
  );
};