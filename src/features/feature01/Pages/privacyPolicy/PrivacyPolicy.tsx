import { Box, Heading, Text } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { ButtonComponent } from "../../../../components/buttons/ButtonComponent";


export const PrivacyPolicy = () => {
  return(
    <Heading style={TextStyle.h1} color={"white"}>
        {" "}
        Hello, This is PrivacyPolicy Page
      </Heading>
  );
};