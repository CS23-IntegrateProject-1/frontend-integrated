import { Box, Text, Input, Textarea, Button, Flex } from "@chakra-ui/react";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface create1 {
  tabletype: string;
  tablenumber: number;
  information: string;
}

export const CreateTable1 = () => {
  const [tabletype, setTabletype] = useState("");
  const [tablenumber, setTablenumber] = useState("");
  const [information, setInformation] = useState("");
  let navigate = useNavigate();
  const tocreatetable2 = () => {
    const path = "/createtable2";
    navigate(path);
  };
  {
    console.log(tabletype);
  }
  {
    console.log(tablenumber);
  }
  {
    console.log(information);
  }
  return (
    <Box justifyContent={"center"} alignItems={"center"} display={"flex"}>
      <Box ml={"-20px"}>
        <Text fontSize={"16px"} fontWeight={"600"} ml={"32px"}>
          Table type
        </Text>
        <Box display={"flex"} alignContent={"center"}>
          <FormControl
            w={"235px"}
            ml={"27px"}
            mt={"5px"}
            backgroundColor={"#5F0DBB66"}
            borderRadius={'6px'}
          >
            <Select
              placeholder="select your table type"
              onChange={(e) => {
                setTabletype(e.target.value);
              }}
              borderWidth="0" // Remove border from Select component
              focusBorderColor="none"
            >
              <option>Bar counter</option>
              <option>High-top table</option>
              <option>Simply table</option>
              <option>Community table</option>
            </Select>
          </FormControl>
          
          <Button
            backgroundColor="#A533C8"
            textColor={"white"}
            w={"57px"}
            fontSize={"25px"}
            mt={'5px'}
            ml={'11px'}
            onClick={tocreatetable2}
          >
            +
          </Button>

        </Box>
        <Text fontSize={"16px"} fontWeight={"600"} ml={"32px"} mt={"17px"}>
          Table number
        </Text>
        <Input
          placeholder="put your table number "
          htmlSize={4}
          backgroundColor={"#5F0DBB66"}
          borderStyle={"none"}
          ml={"27px"}
          mt={"5px"}
          width="307px"
          onChange={(e) => {
            setTablenumber(e.target.value);
          }}
        />
        <Text fontSize={"16px"} fontWeight={"600"} ml={"32px"} mt={"17px"}>
          Information
        </Text>

        <Textarea
          placeholder="put your information"
          backgroundColor={"#5F0DBB66"}
          borderStyle={"none"}
          ml={"27px"}
          mt={"5px"}
          width="307px"
          height={"100px"}
          onChange={(e) => {
            setInformation(e.target.value);
          }}
        />
        <Box
          justifyContent={"center"}
          alignItems={"center"}
          display={"flex"}
          mt={"100px"}
          ml={"20px"}
        >
          <Button
            bgColor={"#A533C8"}
            textColor={"white"}
            fontSize={"16px"}
            w={"322px"}
          >
            Create
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
