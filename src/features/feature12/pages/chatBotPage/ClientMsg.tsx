import {
    Text,
    Flex,
    Box,
    VStack,
} from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { FC, useEffect, useState } from "react";

interface ClientMsgProps {
    msg: string;
}

export const ClientMsg : FC<ClientMsgProps> = ({ msg }) => {

    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 50); // 50ms = 0.005s
        return () => clearTimeout(timer); // Clean up the timer
    }, []);

    return isVisible ? (
        <>
            <Flex gap='4' justifyContent="end" marginY="10px">
                <VStack alignItems="end" maxW="60%">
                    <Box borderRadius='10px' bg="grey.100">
                        <Text style={TextStyle.body2} color="brand.200" padding={3}>
                            {msg}
                        </Text>
                    </Box>
                </VStack>
            {/* <Avatar name={user.name} src={user.img} /> */}
            </Flex>
        </>


    ): null;
};