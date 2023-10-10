import { Box, Heading, Text } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { ExampleComponent } from "./ExampleComponent";
import { CommonComponent } from "../../components/CommonComponent";
import { ButtonComponent } from "../../../../components/buttons/ButtonComponent";

export const ExamplePage = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Heading style={TextStyle.h1} color={"white"}>
        {" "}
        Hello, This is Example Page
      </Heading>
      <Box textStyle={"h2"} color={"white"}>
        {" "}
        This is example of using textstyle "h2" with oher components that is not
        Text or Heading
      </Box>
      <Text style={TextStyle.h2} color={"white"}>
        {" "}
        This is example of using textstyle "h2" with Text or Heading component{" "}
      </Text>
      <ButtonComponent text={"yoooo"} />
      <ExampleComponent />
      <CommonComponent />
    </Box>
  );
};
