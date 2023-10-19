import { Box, Stack, Text } from "@chakra-ui/react";
import { TextStyle } from "../../../theme/TextStyle";
import { Input } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";

// const flexBox = {
//   width: "50%",
//   minWidth: "250px",
//   maxWidth: "400px",
//   display: "flex",
//   flexDirection: "column",
// }

export const Advertisement = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
    >
      <Box
        paddingBottom={3}
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
      >
        <Text style={TextStyle.h2} color={"white"}>
          {" "}
          Name *
        </Text>
        <Input
          variant="name"
          placeholder="Filled"
          style={{ width: "auto" }}
          color={"black"}
        />
      </Box>

      <Box
        paddingBottom={3}
        width={"50%"}
        minWidth={"250px"}
        maxWidth={"400px"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Text style={TextStyle.h2} color={"white"}>
          {" "}
          Description *
        </Text>
        <Textarea
          variant="name"
          placeholder="Filled"
          width="auto"
          color={"black"}
        />
      </Box>

      <Box
        paddingBottom={3}
        width={"50%"}
        minWidth={"250px"}
        maxWidth={"400px"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
      >
        <Box mr={"20px"} flex={"1"} >
          <Text style={TextStyle.h2} color={"white"}>
            {" "}
            Starting Date *
          </Text>
          <Input 
           size={"xs"} type="date" color="black" bg={"white"}></Input>
        </Box>
        <Box flex={"1"} >
          <Text style={TextStyle.h2} color={"white"}>
            {" "}
            Ending Date *
          </Text>
          <Input 
           size={"xs"} type="date" color="black" bg={"white"}></Input>
        </Box>
      </Box>

      <Box paddingBottom={3}></Box>

      <Box paddingBottom={3}>
        <Text style={TextStyle.h2} color={"white"}>
          {" "}
          Type
        </Text>
        <RadioGroup defaultValue="2">
          <Stack spacing={1} direction="column">
            <Radio value="1">Special offers/ promotions</Radio>
            <Radio value="2">Special events</Radio>
          </Stack>
        </RadioGroup>
      </Box>

      <Box paddingBottom={10}>
        <Text style={TextStyle.h2} color={"white"} paddingBottom={1}>
          {" "}
          Images (mobile & desktop view)
        </Text>
        <Stack spacing={2} direction="column">
          <Box width={"auto"} height={"100"} bg={"white"} />
          <Box width={"200"} height={"100"} bg={"white"} />
        </Stack>
      </Box>

      <Box paddingBottom={3}>
        <Text style={TextStyle.h2} color={"white"}>
          {" "}
          Advertisement plan
        </Text>
        <RadioGroup defaultValue="2">
          <Stack spacing={1} direction="column">
            <Radio value="1">100 Baht/Week</Radio>
            <Radio value="2">300 Baht/Month</Radio>
            <Radio value="3">3,600 Baht/Year</Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </Box>
  );
};
