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
import { Radio, RadioGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BiImageAdd } from "@react-icons/bi";

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
          Description 
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

      {/* Starting Date * & Ending Date * */}
      <FormControl
        isRequired
        paddingBottom={3}
        width={"50%"}
        minWidth={"250px"}
        maxWidth={"400px"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
      >
        <Box mr={"20px"} flex={"1"}>
        <FormLabel style={TextStyle.h2} color={"white"}>
          {" "}
          Starting Date 
        </FormLabel>
          <Input
            size={"xs"}
            type="date"
            color="white"
            bgColor={"#5F0DBB"}
            borderRadius={5}
            borderColor={"#5F0DBB"}
          />
        </Box>

        <Box flex={"1"}>
        <FormLabel style={TextStyle.h2} color={"white"}>
          {" "}
          Ending Date 
        </FormLabel>
          <Input
            size={"xs"}
            type="date"
            color="white"
            bgColor={"#5F0DBB"}
            borderRadius={5}
            borderColor={"#5F0DBB"}
          />
        </Box>
      </FormControl>

      {/* Image */}
      <FormControl
        isRequired
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
        paddingBottom={3}
      >
        <FormLabel style={TextStyle.h2} color={"white"} paddingBottom={1}>
          {" "}
          Images (mobile & desktop view)
        </FormLabel>
        <Stack spacing={2} direction="column">
          <Box width={"auto"} height={"100"} bg={"#5F0DBB"} />
        </Stack>
      </FormControl>

      {/* Target customer */}
      <FormControl
        isRequired
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
        paddingBottom={3}
      >
        <FormLabel style={TextStyle.h2} color={"white"} paddingBottom={1}>
          {" "}
          Target customer
        </FormLabel>
        <Select bgColor={"#5F0DBB"} borderColor={"#5F0DBB"} placeholder=" ">
          <option value="option1">All</option>
          <option value="option2">Member</option>
        </Select>
      </FormControl>

      {/* Target group */}
      <FormControl
        isRequired
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
        paddingBottom={3}
      >
        <FormLabel style={TextStyle.h2} color={"white"} paddingBottom={1}>
          {" "}
          Target group
        </FormLabel>
        <Select bgColor={"#5F0DBB"} borderColor={"#5F0DBB"} placeholder=" ">
          <option value="option1">Teen</option>
          <option value="option2">young Adult</option>
          <option value="option3">adult</option>
          <option value="option4">elder</option>
        </Select>
      </FormControl>

      {/* Advertisement plan */}
      <FormControl
        isRequired
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
        paddingBottom={6}
      >
        <FormLabel style={TextStyle.h2} color={"white"}>
          {" "}
          Advertisement plan 
        </FormLabel >
        <RadioGroup defaultValue="2">
          <Stack spacing={1} direction="column">
            <Radio value="1">100 Baht/Week</Radio>
            <Radio value="2">300 Baht/Month</Radio>
            <Radio value="3">3600 Baht/Year</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>

      {/* Submit */}
      <Box
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"row"}
        paddingBottom={3}
        justifyContent={"center"}
        alignItems={"center"}
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
