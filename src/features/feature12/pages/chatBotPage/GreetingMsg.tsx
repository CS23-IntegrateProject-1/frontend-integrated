import {
    Text,
    Avatar,
    Flex,
    VStack,
    Button,
    Wrap,
    WrapItem,
  } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { FC, useState, useEffect, Fragment, useRef } from "react";
import { ClientMsg } from "./ClientMsg";
import { QuestionMsg } from "./QuestionMsg";
import { Axios } from "../../../../AxiosInstance";
import { ShowingVenuesMsg } from "./ShowingVenuesMsg";

interface IUser{
    id: number;
    name: string;
    img: string;
}

export const GreetingMsg: FC = () => {
    const [catType, setCatType] = useState<string | null>(null);
    const [venues, setVenues] = useState<{ [key: string]: string[] }>({});
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [askedGenMsg, setAskedGenMsg] = useState<string>();
    const [data, setData] = useState<string | null>(null);
    
    const user: IUser = {
        id: 1,
        name: "John",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIkSDNcRcU_UeGaNIl7pi7zlSwznp-ulDJxnm-zKYoTf2ZLqQY7zIgsni5waCv2ButaDQ&usqp=CAU",
    };
    
    // const categories: string[] = ["Restaurant","Bar","Club"];
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


    useEffect(() => {
        Axios.get("/feature12/printAllQuestions").then((res) => {
            setData(res.data);
            });
    }, [askedGenMsg]);
    
    const messagesEndRef = useRef<HTMLDivElement>(null);
    useEffect(() => { 
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    },[data]);

    return (
    <>
    <Flex gap='4'>
        <Avatar name={user.name} src={user.img} />
        <VStack alignItems="start" maxW="60%">
            <Box borderRadius='10px' bg="grey.100">
                <Text style={TextStyle.body2} color="brand.200" padding={3}>
                Hi there <b>{user.name}</b> ! How may I help you today? 
                </Text>
            </Box>
            <Box borderRadius='10px' bg="grey.100">
                <Text style={TextStyle.body2} color="brand.200" padding={3}>
                    It's me ! "<b>MONIQUE</b>", your Online Assistant. 
                </Text>
            </Box>
            <Box borderRadius='10px' bg="grey.100">
                <Text style={TextStyle.body2} color="brand.200" padding={3}>
                To ensure a smooth experience, please choose a topic from the list below. I'll do my best to provide you with helpful answers. 
                </Text>
            </Box>
            <Wrap>
                <WrapItem>
                    <Button variant="outline" colorScheme="brand" style={TextStyle.body3} color="brand.200" p={3}  onClick={selectingCategory} data-value={"General"}>
                        General
                    </Button>
                </WrapItem>
                
                {categories.map((item :any, index: number) => (
                    <WrapItem key={index}>
                        <Button variant="outline" 
                                colorScheme="brand.200" 
                                style={TextStyle.body3} 
                                color="brand.200" p={3} 
                                onClick={selectingCategory} data-value={item.category}>
                            {item.category}
                        </Button>
                    </WrapItem>
                ))}
            </Wrap>
        </VStack>
    </Flex>

    {selectedCategories.map((category : string, index : number) => 
        category === "General" ? (
            <Fragment key={index}>
                <ClientMsg msg={category} />
                <QuestionMsg question={category} data={data} />
            </Fragment>
        ) : (
            <Fragment key={index}>
                <ClientMsg msg={category} />
                { venues[category] && <ShowingVenuesMsg data={venues[category]} /> }
            </Fragment>
        )
    )}

    <div ref={messagesEndRef} />
    </>
  );
};