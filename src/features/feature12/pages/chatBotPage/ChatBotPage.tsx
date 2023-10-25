import { Box, Heading } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import {Intro} from "./Intro";  
import { FAQ } from "./FAQ";
export const ChatBotPage = () => {
  return (
<>
  <Intro/>
  <Heading style={TextStyle.h2} color={"white"} pt={"15px"} pb={"15px"}>
        {" "}
        FAQs
      </Heading>
  <FAQ/>
</>
  );
};
