// import {
//     Text,
//     Avatar,
//     Flex,
//     Box,
//     VStack,
// } from "@chakra-ui/react";
// import { TextStyle } from "../../../theme/TextStyle";
// import { FC, useEffect, useState, useCallback } from "react";
// import { Axios } from "../../../AxiosInstance";
// import { ClientMsg } from "./ClientMsg";
// import { QuestionMsg } from "./QuestionMsg";
// interface IUser{
//     id: number;
//     name: string;
//     img: string;
// }
// interface IvenueProps {
//     data: any;
// }


// export const ShowingVenuesMsg : FC<IvenueProps> = ({ data }) => {
//     const [askedMsgs, setAskedMsgs] = useState<string[]>([]);
//     const [questions, setQuestions] = useState<{ [key: string]: string[] }>({});
//     const [venueId, setVenueId] = useState<string | null>(null);

//     const user: IUser = {
//         id: 1,
//         name: "John",
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIkSDNcRcU_UeGaNIl7pi7zlSwznp-ulDJxnm-zKYoTf2ZLqQY7zIgsni5waCv2ButaDQ&usqp=CAU",
//     };

//     const forQuestion = (event:React.MouseEvent<HTMLDivElement>) => {
//         const value = event.currentTarget.getAttribute('data-value');
//         const id = event.currentTarget.getAttribute('id-value');

//         if (value !== null) {
//             setAskedMsgs([...askedMsgs, value]);
//         }
//         if (id !== null) {
//         setVenueId(id);
//         }
//     }
    
//     //To get the questions of a venue
//     useEffect(() => {
//         if(venueId !== null){
//             Axios.get(`/feature12/displayQuestion/${venueId}`).then((res) => {
//                 if(Array.isArray(res.data) && res.data.length > 0){
//                     const venueName = res.data[0].venue.name;
//                     setQuestions((prevQuestions) => ({
//                         ...prevQuestions,
//                         [venueName]: res.data
//                     }));
//                 }
//             }).catch((error) => {
//                 console.error("Error fetching data: ", error);
//             });
//         }
//     }, [askedMsgs,venueId]);

//     //To make the message appear one by one
//     const [isVisible, setIsVisible] = useState(false);
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setIsVisible(true);
//         }, 500); // 500ms = 0.5s
//         return () => clearTimeout(timer); // Clean up the timer
//     }, []);

//     //To scroll to the bottom of the chat
//     const setRef = useCallback((node: HTMLElement | null) => {
//         if (node) {
//         node.scrollIntoView({ behavior: "smooth" });
//         }
//     }, []);

//     return isVisible ? (
//         <>
//         <Flex 
//             gap={"4"} 
//             justifyContent={"start"}
//             >
//             <Avatar name={user.name} src={user.img} />
//             <VStack 
//                 alignItems={"start"} 
//                 maxW={"60%"}
//                 >
//                 {/*  Mapping to get Venues' names based on a specific category  */}
//                 {data.map((item : any, index : number) => (
//                     <Box 
//                         key={index} 
//                         ref={ index === data.length - 1 ? setRef : null} 
//                         borderRadius={"10px"} 
//                         bg={"grey.100"}
//                         style={{ cursor: 'pointer' }} 
//                         onClick = {forQuestion} 
//                         data-value={item.name} 
//                         id-value={item.venueId}
//                         >
//                         <Text 
//                             style={TextStyle.body2} 
//                             color={"brand.200"} 
//                             p={"3"}>
//                             {/* Showing Venue's Name */}
//                             {item.name}
//                         </Text>
//                  </Box>
//                 ))}
//             </VStack>
//         </Flex>
//         {/* Mapping to call ClientMsg & questions which are related to that ClientMSg */}
//         {askedMsgs.map((venue : string, index : number) => (
//             <Box key={index}>
//                 <ClientMsg msg={venue} />
//                 { questions[venue] && <QuestionMsg data={questions[venue]} />}
//             </Box>
//         ))}
//         </>
//     ): null;
// };