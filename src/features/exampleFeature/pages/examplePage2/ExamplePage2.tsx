import { Box, Heading } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { Example2Component } from "./ExamplePage2Component";
import { CommonComponent } from "../../components/CommonComponent";

export const ExamplePage2 = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Heading style={TextStyle.h1} color={"white"}>
        {" "}
        Hello, This is Example Page 2
      </Heading>
    
      <Example2Component />
      <CommonComponent/>
    </Box>
  );
};
