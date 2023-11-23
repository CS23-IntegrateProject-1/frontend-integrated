import {
    Text,
    Avatar,
    Flex,
    Box,
    VStack,
} from "@chakra-ui/react";
import { TextStyle } from "../../../theme/TextStyle";
import { FC, useEffect, useState, useCallback } from "react";

interface IUser{
    id: number;
    name: string;
    img: string;
}
interface IAnswerProps {
    data: any;
}

export const AnswerMsg : FC<IAnswerProps> = ({ data }) => {

    const user: IUser = {
        id: 1,
        name: "John",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIkSDNcRcU_UeGaNIl7pi7zlSwznp-ulDJxnm-zKYoTf2ZLqQY7zIgsni5waCv2ButaDQ&usqp=CAU",
    };

    //To make the message appear one by one
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500); // 500ms = 0.5s
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
            >
            <Avatar name={user.name} src={user.img} />
            <VStack 
                alignItems={"start"} 
                maxW={"60%"}
                >
                {/* Mapping to get the answer of a question */}
                {data.map((item : any, index: number) => (
                    <Box 
                        key={index} 
                        ref={ index === data.length - 1 ? setRef : null} 
                        borderRadius={"10px"}
                        bg={"grey.100"}
                        >
                        <Text 
                            style={TextStyle.body2} 
                            color={"brand.200" }
                            p={3}>
                            {/* Showing the Answer */}
                            {item.g_answer || item.answer}
                        </Text>
                    </Box>
                    
                ))}
            </VStack>
        </Flex>

        </>
    ): null;
};