import { Box, Text, Input  } from "@chakra-ui/react";
import { useState } from "react";


export const CreateTable2 = () => {
  return (
    <Box
    justifyContent={"center"}
    alignItems={"center"}
    display={"flex"}>
    <Box>
      <Text fontSize={"16px"} fontWeight={"600"} ml={'32px'}>
        Table type
      </Text>
      <Input htmlSize={4} backgroundColor={'#5F0DBB66'} borderStyle={'none'} mt={'5px'} width='307px' />
      <Text fontSize={"16px"} fontWeight={"600"} ml={'32px'} mt={'17px'}>
        Capacity
      </Text>
      <Input htmlSize={4} backgroundColor={'#5F0DBB66'} borderStyle={'none'} mt={'5px'} width='307px' />
      <Text fontSize={"16px"} fontWeight={"600"} ml={'32px'} mt={'17px'}>
        Upload image
      </Text>
    </Box>
    </Box>
  );
};
