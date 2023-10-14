import { Box, Heading, Text } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { ButtonComponent } from "../../../../components/buttons/ButtonComponent";


export const Account = () => {
  return(
    <Heading style={TextStyle.h1} color={"white"}>
        {" "}
        Hello, This is Account Page
      </Heading>
  );
};