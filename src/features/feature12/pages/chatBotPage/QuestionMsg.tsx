import {
    Text,
    Avatar,
    Flex,
    Box,
    VStack,
} from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { FC, useEffect, useState, Fragment, useRef } from "react";
import { Axios } from "../../../../AxiosInstance";
import { ClientMsg } from "./ClientMsg";
import { AnswerMsg } from "./AnswerMsg";

interface IUser{
    id: number;
    name: string;
    img: string;
}
interface IquestionProps {
    question: string;
    data: any;
}


export const QuestionMsg : FC<IquestionProps> = ({ data }) => {
    const [questions, setQuestions] = useState<string[]>([]);
    const [GenQid, setGenQId] = useState<string | null>(null);
    const [VenQid, setVenQId] = useState<string | null>(null);
    const [answers, setAnswers] = useState<string[]>([]);

    const user: IUser = {
        id: 1,
        name: "John",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIkSDNcRcU_UeGaNIl7pi7zlSwznp-ulDJxnm-zKYoTf2ZLqQY7zIgsni5waCv2ButaDQ&usqp=CAU",
    };
    
    const forAnswer = (event:React.MouseEvent<HTMLDivElement>) => {
        const value = event.currentTarget.getAttribute('data-value');
        const GenQid = event.currentTarget.getAttribute('genqid-value');
        const VenQid = event.currentTarget.getAttribute('venqid-value');
        if (value !== null) {
            setQuestions([...questions, value]);
        }
        if (GenQid !== null) {
            setGenQId(GenQid);
        }
        if (VenQid !== null) {
            setVenQId(VenQid);
        }
    }
    
    useEffect(() => {
        if (GenQid !== null) {
            Axios.get(`/feature12/printAnswer/${GenQid}`)
            .then((res) => {
                setAnswers([...answers, res.data]);
            }).catch((error) => {
                console.error("Error fetching data: ", error);
        });
    }
    }, [GenQid]);
    
    useEffect(() => {
        if (VenQid !== null) {
            Axios.get(`/feature12/displayAnswer/${VenQid}`)
            .then((res) => {
                setAnswers([...answers, res.data]);
            }).catch((error) => {
                console.error("Error fetching data: ", error);
            });
        }
    }, [VenQid]);

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
    }, [answers]);

    return isVisible ? (
            <>
            <Flex gap='4' justifyContent="start">
                <Avatar name={user.name} src={user.img} />
                <VStack alignItems="start" maxW="60%">
                    {data.map((data : any, index : number) => (
                        <Box    key={index} 
                                borderRadius='10px' 
                                bg="grey.100" 
                                style={{ cursor: 'pointer' }} 
                                onClick={forAnswer} 
                                data-value={data.g_question || data.question} 
                                genqid-value={data.generalQuestionId} 
                                venqid-value={data.venueQuestionId}>
                            <Text style={TextStyle.body2} color="brand.200" p="3">
                                {data.g_question || data.question}
                            </Text>
                        </Box>
                    ))}
                </VStack>
            </Flex>

            {questions.map((question, index) => (
                <Fragment key={index}>
                    <ClientMsg msg={question} />
                    {answers[index] && <AnswerMsg data={answers[index]} />}
                </Fragment>
            ))}
            <div ref={messagesEndRef} />
            </>
        ): null;
};