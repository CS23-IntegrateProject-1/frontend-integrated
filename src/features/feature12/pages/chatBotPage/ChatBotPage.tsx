// import { Heading } from "@chakra-ui/react";
// import { TextStyle } from "../../../../theme/TextStyle";
// import { FAQ } from "./FAQ";
import {Intro} from "./Intro";  
import { GreetingMsg } from "./GreetingMsg";

export const ChatBotPage = () => {
  return (
<>
  <Intro/>
  {/* <Heading style={TextStyle.h2} color={"white"} pt={"15px"} pb={"15px"}>
        {" "}
        FAQs
  </Heading> */}
  {/* <FAQ/> */}
  <br/>
  <GreetingMsg/>
</>
  );
};
