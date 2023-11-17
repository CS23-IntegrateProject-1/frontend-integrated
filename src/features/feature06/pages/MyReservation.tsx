import { Box, Heading, Text, Button, Card } from "@chakra-ui/react";
import {useState} from 'react';
import { ReservationCards } from "../components/ReservationCards";
import { TableCard } from "../components/TableCard";

export const MyReservation = () => {
  const [ComShown, setComShown] = useState(false);
  const [HisShown, setHisShown] = useState(false);
  const maping = [1,2,3,4];  
  return (
    <Box 
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      position={"relative"}>
    <Box className="ButtonBar"
      maxWidth={"90%"}
      overflowX={"auto"}
      // overflowY={"hidden"}
      whiteSpace={"nowrap"}
      display={"flex"}
      height={"50px"}
      flexDirection={"row"}
      justifyContent={"flex-start"}
      position={"relative"}
      >
    <Button className="Pending" 
      variant='outline'
      background={"none"}
      minWidth={"110px"}
      height={"30px"}
      display={"fixed"}
      justifyContent={"center"}
      alignItems={"center"}
      borderRadius={"15px"}
      marginRight={"20px"}
      _focus={{
        background: "#A533C8",
        borderColor: "none",
        transitionDuration: "1s",
      }}
      _hover={{
      }}
      onClick={()=>(setComShown(true),setHisShown(false))}>
      <Text color={"white"} fontSize="16px" fontWeight={"normal"}>
        Pending
      </Text>
    </Button>
    <Button className="Checkin" 
      variant='outline'
      background={"none"}
      minWidth={"110px"}
      height={"30px"}
      display={"fixed"}
      justifyContent={"center"}
      alignItems={"center"}
      borderRadius={"15px"}
      marginRight={"20px"}
      _focus={{
        background: "#A533C8",
        borderColor: "none",
        transitionDuration: "1s",
      }}
      _hover={{
      }}
      onClick={()=>(setComShown(false),setHisShown(true))}
      >
      <Text color={"white"} fontSize="16px" fontWeight={"normal"}>
        Checkin
      </Text>
    </Button>
    <Button className="Completed" 
     variant='outline'
      background={"none"}
      minWidth={"110px"}
      height={"30px"}
      display={"fixed"}
      justifyContent={"center"}
      alignItems={"center"}
      borderRadius={"15px"}
      marginRight={"20px"}
      _focus={{
        background: "#A533C8",
        borderColor: "none",
        transitionDuration: "1s",
      }}
      _hover={{
      }}
      onClick={()=>(setComShown(true),setHisShown(false))}>
      <Text color={"white"} fontSize="16px" fontWeight={"normal"}>
        Completed
      </Text>
    </Button>
    <Button className="Cancelled" 
      variant='outline'
      background={"none"}
      minWidth={"110px"}
      height={"30px"}
      display={"fixed"}
      justifyContent={"center"}
      alignItems={"center"}
      borderRadius={"15px"}
      _focus={{
        background: "#A533C8",
        borderColor: "none",
        transitionDuration: "1s",
      }}
      _hover={{
      }}
      onClick={()=>(setComShown(false),setHisShown(true))}
      >
      <Text color={"white"} fontSize="16px" fontWeight={"normal"}>
        Cancelled
      </Text>
    </Button>
    </Box>
    <Box className="ReservationList" marginTop={"10px"}>
    {ComShown === true && maping.map(() => (
        <Box marginBottom={"20px"}>
          <ReservationCards />
        </Box>
      ))}
    {HisShown === true && maping.map(() => (
        <Box marginBottom={"20px"}>
          <TableCard />
        </Box>
      ))}
      </Box>
    </Box>
  );
};
