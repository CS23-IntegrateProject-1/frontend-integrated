import { Box, Heading } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";

export const ChatBotPage = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Heading style={TextStyle.h1} color={"white"}>
        {" "}
        Hello, This is ChatBot Page
      </Heading>

    </Box>
  );
};
