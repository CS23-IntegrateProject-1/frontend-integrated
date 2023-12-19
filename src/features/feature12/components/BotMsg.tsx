import {
    Text,
    Flex,
    Box,
    VStack,
    Avatar,
} from "@chakra-ui/react";
import { TextStyle } from "../../../theme/TextStyle";
import { FC, useEffect, useState,useCallback } from "react";

interface BotMsgProps {
    consequences: string | undefined;
    text: string;
}

interface Ibot{
    name: string;
    img: string;
}

export const BotMsg : FC<BotMsgProps> = ( {consequences,text}) => {

    const bot: Ibot = {
        name: "MONIQUE",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIkSDNcRcU_UeGaNIl7pi7zlSwznp-ulDJxnm-zKYoTf2ZLqQY7zIgsni5waCv2ButaDQ&usqp=CAU",
    };

    //To make the message appear one by one
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 50); // 50ms = 0.005s
        return () => clearTimeout(timer); // Clean up the timer
    }, []);

    //To scroll to the bottom of the chat
    const setRef = useCallback((node: HTMLElement | null) => {
        if (node) {
            node.scrollIntoView({ behavior: "smooth" });
            }
    }, []);

    return isVisible ? (
        <>
            <Flex 
                gap={"4"}
                justifyContent={"start"}
                marginY={"10px"}
                >
                <Avatar name={bot.name} src={bot.img} />
                <VStack 
                    alignItems={"start"}
                    maxW={"60%"}
                    >
                    <Box 
                        ref={setRef} 
                        borderRadius={'10px'}
                        bg="grey.100"
                        >
                        <Text 
                            style={TextStyle.body2} 
                            color={"brand.200"}
                            p={3}>
                            {/* Client's asking Message */}
                            {text} 
                        </Text>
                    </Box>
                    {consequences !== undefined ? (
                        <Box 
                        ref={setRef} 
                        borderRadius={'10px'}
                        bg="grey.100"
                        >
                        <Text 
                            style={TextStyle.body2} 
                            color={"brand.200"}
                            p={3}>
                            {/* Client's asking Message */}
                            {consequences} 
                        </Text>
                    </Box>
                    ) : null}
                </VStack>
            </Flex>
        </>


    ): null;
};