import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { TextStyle } from "../../../theme/TextStyle";
import { Input } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface AdvertisementProps {
  name: string;
  description: string;
  startingDate: Date;
  endingDate: Date;
  type: string;
  images: string;
  targetCustomer: string;
  targetGroup: string;
}
export const AdvertisementRequest = () => {
  const navigate = useNavigate();
  const [advertise, setAdvertise] = useState<AdvertisementProps>({
    name: "",
    description: "",
    startingDate: null,
    endingDate: null,
    type: "",
    images: "",
    targetCustomer: "",
    targetGroup: "",
  });
  const handleClick = () => {
    navigate("/advertisement/status");
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
    >
      {/* Name * */}
      <FormControl
        isRequired
        paddingBottom={3}
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
      >
        <FormLabel style={TextStyle.h2} color={"white"}>
          {" "}
          Name
        </FormLabel>
        <Input
          variant="name"
          style={{ width: "auto" }}
          color={"white"}
          bgColor={"#5F0DBB"}
          borderColor={"#5F0DBB"}
          type="email"
        />
      </FormControl>

      {/* Description * */}
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
          width="auto"
          color={"white"}
          bgColor={"#5F0DBB"}
          borderColor={"#5F0DBB"}
        />
      </Box>

      {/* Starting Date * & Ending Date * */}
      <Box
        paddingBottom={3}
        width={"50%"}
        minWidth={"250px"}
        maxWidth={"400px"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
      >
        <Box mr={"20px"} flex={"1"}>
          <Text style={TextStyle.h2} color={"white"}>
            {" "}
            Starting Date *
          </Text>
          <Input
            size={"xs"}
            type="date"
            color="white"
            bgColor={"#5F0DBB"}
            borderColor={"#5F0DBB"}
          ></Input>
        </Box>

        <Box flex={"1"}>
          <Text style={TextStyle.h2} color={"white"}>
            {" "}
            Ending Date *
          </Text>
          <Input
            size={"xs"}
            type="date"
            color="white"
            bgColor={"#5F0DBB"}
            borderColor={"#5F0DBB"}
          ></Input>
        </Box>
      </Box>

      {/* Type */}
      <Box
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
        paddingBottom={3}
      >
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

      <Box
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
        paddingBottom={3}
      >
        <Text style={TextStyle.h2} color={"white"} paddingBottom={1}>
          {" "}
          Images (mobile & desktop view)
        </Text>
        <Stack spacing={2} direction="column">
          <Box width={"auto"} height={"100"} bg={"#5F0DBB"} />
        </Stack>
      </Box>

      <Box
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
        paddingBottom={3}
      >
        <Text style={TextStyle.h2} color={"white"} paddingBottom={1}>
          {" "}
          Target customer *
        </Text>
        <Select bgColor={"#5F0DBB"} borderColor={"#5F0DBB"} placeholder=" ">
          <option value="option1">All</option>
          <option value="option2">Member</option>
        </Select>
      </Box>

      <Box
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
        paddingBottom={8}
      >
        <Text style={TextStyle.h2} color={"white"} paddingBottom={1}>
          {" "}
          Target group *
        </Text>
        <Select bgColor={"#5F0DBB"} borderColor={"#5F0DBB"} placeholder=" ">
          <option value="option1">Teen</option>
          <option value="option2">young Adult</option>
          <option value="option3">adult</option>
          <option value="option4">elder</option>
        </Select>
      </Box>

      <Box
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"row"}
        paddingBottom={3}
        justifyContent={"space-evenly"}
      >
        <Button
          backgroundColor="#A533C8"
          variant="solid"
          width="40%"
          color="white"
          onClick={handleClick}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};
