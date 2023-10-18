import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { TextStyle } from "../../../theme/TextStyle";
import { ButtonComponent } from "../../../components/buttons/ButtonComponent";

export const TablePage = () => {
  return (
    <Box display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      position={"relative"}>
    <Heading style={TextStyle.h1} color={"white"} fontSize="20px" alignItems={"center"}>
        Choose your tables
      </Heading>
    <Box width="360px" height="1px" backgroundColor="white" 
    position={"absolute"} top={"50px"}/>
    <Box position={"fixed"} marginTop={"680px"}>
    <ButtonComponent text={"Continue"}/></Box>
    </Box>
  );
};
