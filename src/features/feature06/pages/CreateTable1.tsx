import { Box, Text, Input, Textarea, Button } from "@chakra-ui/react";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";


export const CreateTable1 = () => {
  return (
    <Box
    justifyContent={"center"}
    alignItems={"center"}
    display={"flex"}>
    <Box>
      <Text fontSize={"16px"} fontWeight={"600"} ml={"32px"}>
        Table type
      </Text>
      <FormControl
        w={"307px"}
        ml={"27px"}
        mt={"5px"}
        backgroundColor={"#5F0DBB66"}
      >
        <Select placeholder="Select table type">
          <option>Bar counter</option>
          <option>High-top table</option>
          <option>Simply table</option>
          <option>Community table</option>
        </Select>
      </FormControl>
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
      />
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        mt={"100px"}
        padding={"10px"}
      >
        <Button bgColor={"#A533C8"} textColor={"white"} fontSize={'16px'} w={'322px'} >
          Create
        </Button>
      </Box>
    </Box>
    </Box>
  );
};
