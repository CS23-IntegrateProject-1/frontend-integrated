import {
    Text,
    Avatar,
    Flex,
    Box,
    VStack,
} from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { FC, useEffect, useState } from "react";

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
    
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500); // 500ms = 0.5s
        return () => clearTimeout(timer); // Clean up the timer
    }, []);
    return isVisible ? (
        <>
        <Flex gap='4' justifyContent="start">
            <Avatar name={user.name} src={user.img} />
            <VStack alignItems="start" maxW="60%">
                {data.map((data : any, index: number) => (
                    <Box key={index} borderRadius='10px' bg="grey.100">
                        <Text style={TextStyle.body2} color="brand.200" padding={3}>
                            {data.g_answer || data.answer}
                        </Text>
                    </Box>
                    
                ))}
            </VStack>
        </Flex>

        </>
    ): null;
};