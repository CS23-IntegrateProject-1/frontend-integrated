import {
    Text,
    Avatar,
    Flex,
    Box,
    VStack,
} from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { FC, useEffect, useState, useRef, Fragment } from "react";
import { Axios } from "../../../../AxiosInstance";
import { ClientMsg } from "./ClientMsg";
import { QuestionMsg } from "./QuestionMsg";
interface IUser{
    id: number;
    name: string;
    img: string;
}
interface IvenueProps {
    data: any;
}


export const ShowingVenuesMsg : FC<IvenueProps> = ({ data }) => {
    const [askedQMsgs, setAskedQMsgs] = useState<string[]>([]);
    const [questions, setQuestions] = useState<string[]>([]);
    const [venueId, setVenueId] = useState<string | null>(null);
    const user: IUser = {
        id: 1,
        name: "John",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIkSDNcRcU_UeGaNIl7pi7zlSwznp-ulDJxnm-zKYoTf2ZLqQY7zIgsni5waCv2ButaDQ&usqp=CAU",
    };

    const forQuestion = (event:React.MouseEvent<HTMLDivElement>) => {
        const value = event.currentTarget.getAttribute('data-value');
        const id = event.currentTarget.getAttribute('id-value');

        if (value !== null) {
            setAskedQMsgs([...askedQMsgs, value]);
        }
        if (id !== null) {
        setVenueId(id);
        }
    }
    
    useEffect(() => {
        if(venueId !== null){
            Axios.get(`/feature12/displayQuestion/${venueId}`).then((res) => {
                setQuestions(res.data);
            }).catch((error) => {
                console.error("Error fetching data: ", error);
            });
        }
    }, [askedQMsgs]);

    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500); // 500ms = 0.5s
        return () => clearTimeout(timer); // Clean up the timer
    }, []);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return isVisible ? (
        <>
        <Flex gap='4' justifyContent="start">
            <Avatar name={user.name} src={user.img} />
            <VStack alignItems="start" maxW="60%">
                {data.map((data : any, index : number) => (
                    <Box key={index} borderRadius='10px' bg="grey.100" style={{ cursor: 'pointer' }} onClick = {forQuestion} data-value={data.name} id-value={data.venueId}>
                        <Text style={TextStyle.body2} color="brand.200" p="3">
                            {data.name}
                        </Text>
                 </Box>
                ))}
            </VStack>
        </Flex>
        {askedQMsgs.map((category : string, index : number) => (
            <Fragment key={index}>
                <ClientMsg msg={category} />
                <QuestionMsg question={category} data={questions} />
            </Fragment>
        ))}
        <div ref={messagesEndRef} />
        </>
    ): null;
};