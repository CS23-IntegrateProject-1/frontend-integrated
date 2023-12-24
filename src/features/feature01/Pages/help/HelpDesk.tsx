import { Box, Divider,Button, Text, Textarea, useDisclosure, Drawer, DrawerContent, DrawerOverlay, DrawerCloseButton, DrawerHeader, DrawerBody, } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import React, { useEffect, useState } from "react";
import { Axios } from "../../../../AxiosInstance";

type TicketDetails = {
  ticket_id: number;
  date: string;
  topic: string;
  complaint: string;
  user_id: number;
  status: string;
  time: string;
  responses: Array<string>;
}

const defaultTicketDetails: TicketDetails = {
  ticket_id: 0,
  date: "",
  topic: "",
  complaint: "",
  user_id: 0,
  status: "",
  time: "",
  responses: []
}

export const HelpDesk = () => {
    const[listData, setListData] = useState([]);
    const [ticketDetails, setTicketDetails] = useState<TicketDetails>(defaultTicketDetails);
    const [topicData, setTopicData] = useState("");
    const [complaintData, setComplaintData] = useState("");
    //For Drawer Sign out
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleOpen = (ticket_id: number) => {
      const matchingTickets = listData.filter((data:any) => data.ticket_id == ticket_id);
      setTicketDetails(matchingTickets[0]);
      onOpen();
    }

    //Handle Ticket Submit
    const handleTicket = (e : React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      const complaintDetails = {
        topic : topicData ,
        complaint : complaintData
      }
      Axios.post ('/feature1/help_desk/ticket', complaintDetails, {withCredentials: true})
      .then((response) => {
        if (response.status == 200) {
          console.log("Topic Submitted");
        }
        return response;
    })

  }



      useEffect(() => {
        const url1 = `/feature1/help_desk/ticket`;
        Axios.get(url1, {withCredentials: true})
        .then((response) => {
          if (response.status == 200) {
            setListData(response.data);
          }
          return response;
        })
        .catch((error) => {
          console.error("Error fetching ticket data:", error);
        });
      }, [listData]);

      
  return (
    <Box>
      {/* Create Ticket */}
      <Box
        fontWeight={TextStyle.h1.fontWeight}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box>
          <Text>Create a Ticket</Text>
        </Box>
        <Divider color={"brand.100"} />
      </Box>
      {/* Textare Box and button */}
      <Box mt={3} >
        <Box pt={2} px={5} bg={'grey.100'} borderRadius={15}>
        <Textarea 
                placeholder="Help Desk Topic"
                size="sm"
                bg={"grey.300"}
                color={'black'}
                borderRadius={15}
                height={70}
                onChange={(e) => setTopicData(e.target.value)}
            />
            <Textarea 
                placeholder="Help Desk "
                size="sm"
                bg={"grey.300"}
                color={'black'}
                borderRadius={15}
                height={150}
                onChange={(e) => setComplaintData(e.target.value)}
            />
            <Box py={3} position={'relative'} left={"40%"}>
                <Button onClick={handleTicket} px={20} _hover={{ bg:'brand.300'}} color={'white'} bg={'brand.200'}>Submit</Button>
            </Box>
        </Box>
      </Box>
      
      {/* Ticket History */}
      
      <Box mt={15} fontWeight={TextStyle.h1.fontWeight}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}>
         <Box><Text mb={10}>Ticket History</Text></Box>
         <Divider color={'brand.100'}/>
      </Box>
      {/* loop ticker hsitory here
      Pending color = yellow compeleted = green */}
         {listData.map((data:any) => (
          // <div key={data.ticket_id}>
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        <Box onClick={_ => handleOpen(data.ticket_id)} key={data.ticket_id} cursor={'pointer'} bg={'grey.100'} display={'flex'} w={'50%'} py={5} borderRadius={15} justifyContent={'space-between'} mt={"10px"}>
            <Box><Text color={'brand.300'} pl={2}>{data.topic}</Text></Box>
            <Box color={data.status === 'Pending' ? 'yellow' : 'green'} pr={2}>{data.status}</Box> 
         </Box>
        //  </div> 
        ))} 
         {/* --fix empo error  */}
        {/* <Box onClick={handleOpen} key={"test"} cursor={'pointer'} bg={'grey.100'} display={'flex'} w={'50%'} py={5} borderRadius={15} justifyContent={'space-between'} >
            <Box><Text color={'brand.300'} pl={2}>Dta.TItle</Text></Box>
            <Box color={'yellow'} pr={2}>Data.status</Box> 
         </Box> */}

        {/* Drawer for history deatil*/}
        <Drawer
        isOpen={isOpen}
        placement='bottom'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent  bg={'brand.400'} borderRadius={20}> 
          <DrawerCloseButton color={'brand.200'} />
          <DrawerHeader>{ticketDetails.topic}</DrawerHeader>
          <Divider color={'brand.200'}/>
          <DrawerBody>
            <Box display={'flex'}>
                <Box px={2}>
                    <Text>Status</Text>
                </Box>
                <Box px={2} color={ticketDetails.status === 'Pending' ? 'yellow' : 'green'}>

                    <Text>{ticketDetails.status}</Text>
                </Box>
            </Box>
            <Textarea 
                size="sm"
                bg={"grey.300"}
                color={'black'}
                borderRadius={15}
                height={50}
                value={ticketDetails.complaint}
                disabled
                mt={3}
            />
            {ticketDetails.responses.map((response) => (
               <Box mt={3}>
               <Text mb={2}>Response</Text>
               <Textarea 
               size="sm"
               bg={"grey.300"}
               color={'black'}
               borderRadius={15}
               height={50}
               value={response}
               disabled
              />
              </Box>
            ))}
        
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
