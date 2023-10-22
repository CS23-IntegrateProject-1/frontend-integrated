import { Box, Heading, Text, Button, Card } from "@chakra-ui/react";
import { ReservationCard } from "../components/ReservationCards";


export const MyReservation = () => {
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
      >
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
      >
      <Text color={"white"} fontSize="12px" fontWeight={"normal"}>
        History
      </Text>
    </Button>
    </Box>
    <Box
    marginTop={5}>
    <ReservationCard/>
    </Box>
    <Box
    marginTop={5}>
    <ReservationCard/>
    </Box>
    </Box>
  );
};
