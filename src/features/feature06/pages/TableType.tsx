import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { TextStyle } from "../../../theme/TextStyle";
import { TableCard } from "../components/TableCard";

export const TableType = () => {
  const mapping = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Box display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      position={"relative"}>
    <Heading style={TextStyle.h1} color={"white"} fontSize="20px" alignItems={"center"}>
        Choose your table types
      </Heading>
    <Box width="360px" height="1px" backgroundColor="white" 
    position={"absolute"} top={"50px"}/>
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-evenly"}
      columnGap={"20px"}
      alignItems={"center"}
      marginTop={"50px"}
      position={"relative"}
    >
      {mapping.map(() => (
        <Box marginBottom={"20px"}>
          <TableCard />
        </Box>
      ))}
      
    </Box>
    </Box>
  );
};
