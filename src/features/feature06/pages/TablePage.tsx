import { Box, Heading, Text } from "@chakra-ui/react";
import { TextStyle } from "../../../theme/TextStyle";
// import { ExampleComponent } from "../../exampleFeature/pages/examplePage/ExampleComponent";
// import { CommonComponent } from "../../exampleFeature/components/CommonComponent";
import { ButtonComponent } from "../../../components/buttons/ButtonComponent";
import { ReservationCards } from "../components/ReservationCards";

export const TablePage = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      height={"100vh"}
      position={"relative"}
    >
      <Heading style={TextStyle.h1} color={"white"} fontSize="20px">
        Choose your tables
      </Heading>
      

      <Box width="360px" height="1px" backgroundColor="white" position={"absolute"} top={"50px"}/>
      
      {/* <ReservationCards/> */}
      <Box marginBottom="140px">
      <ButtonComponent text={"Continue"} />
      </Box>
      
    </Box>
    
  );
};
