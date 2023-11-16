import {
    Text,
    Flex,
    Box,
    VStack,
} from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { FC, useEffect, useState,useCallback } from "react";

interface ClientMsgProps {
    msg: string;
}

export const ClientMsg : FC<ClientMsgProps> = ({ msg }) => {

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
                justifyContent={"end"}
                marginY={"10px"}
                >
                <VStack 
                    alignItems={"end"}
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
                            {msg} 
                        </Text>
                    </Box>
                </VStack>
            </Flex>
        </>


    ): null;
};