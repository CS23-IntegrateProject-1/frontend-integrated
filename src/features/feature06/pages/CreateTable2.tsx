import { Box, Text, Input, Button  } from "@chakra-ui/react";
import { useState } from "react";

interface create2{
    tabletype: string;
    capacity: number;
}



export const CreateTable2 = () => {
    const [tabletype, setTabletype] = useState("");
    const [capacity, setCapacity] = useState("");
    {console.log(tabletype)}
    {console.log(capacity)}
  return (
    <Box
    justifyContent={"center"}
    alignItems={"center"}
    display={"flex"}>
    <Box>
      <Text fontSize={"16px"} fontWeight={"600"} ml={'32px'}>
        Table type
      </Text>
      <Input htmlSize={4} backgroundColor={'#5F0DBB66'} borderStyle={'none'} mt={'5px'} width='307px' 
      onChange={(e) => {
        setTabletype(e.target.value);
    }}/>
      <Text fontSize={"16px"} fontWeight={"600"} ml={'32px'} mt={'17px'}>
        Capacity
      </Text>
      <Input htmlSize={4} backgroundColor={'#5F0DBB66'} borderStyle={'none'} mt={'5px'} width='307px'
      onChange={(e) => {
        setCapacity(e.target.value);
    }}/>
      <Text fontSize={"16px"} fontWeight={"600"} ml={'32px'} mt={'17px'}>
        Upload image
      </Text>

      <Button bgColor={"#A533C8"} textColor={"white"} fontSize={'16px'} w={'322px'} mt={'200px'} >
          Create
        </Button>
    </Box>
    </Box>
  );
};
