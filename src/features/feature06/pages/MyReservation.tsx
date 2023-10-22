import { Box, Heading, Text, Button, Card } from "@chakra-ui/react";
import {useState} from 'react';
import { ReservationCards } from "../components/ReservationCards";
import { TableCard } from "../components/TableCard";

export const MyReservation = () => {
  const [ComShown, setComShown] = useState(false);
  const [HisShown, setHisShown] = useState(false);
  const maping = [1,2,3,4];  
  return (
    <Box display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      position={"relative"}>
    <Box className="ComingHisButton"
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      position={"relative"}
      overflow='hidden'>
    <Button className="ComingSoon" 
      variant='outline'
      background={"none"}
      width={"110px"}
      height={"32px"}
      display={"fixed"}
      justifyContent={"center"}
      alignItems={"center"}
      borderRadius={"15px"}
      marginRight={"53px"}
      _focus={{
        background: "#A533C8",
        borderColor: "none",
        transitionDuration: "1s",
      }}
      _hover={{
      }}
      onClick={()=>(setComShown(true),setHisShown(false))}>
      <Text color={"white"} fontSize="12px" fontWeight={"normal"}>
        Coming Soon
      </Text>
    </Button>
    <Button className="History" 
      variant='outline'
      background={"none"}
      width={"110px"}
      height={"32px"}
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
      <Text color={"white"} fontSize="12px" fontWeight={"normal"}>
        History
      </Text>
    </Button>
    </Box>
    {ComShown === true && maping.map(() => (
        <Box marginTop={"20px"}>
          <ReservationCards />
        </Box>
      ))}
    {HisShown === true && maping.map(() => (
        <Box marginTop={"20px"}>
          <TableCard />
        </Box>
      ))}
    </Box>
  );
};
