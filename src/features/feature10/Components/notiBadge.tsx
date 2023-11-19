import { Avatar, Box, Flex ,  Badge , Text, background} from "@chakra-ui/react";
import { color } from "framer-motion";
import React from 'react'
import { Link } from "react-router-dom";

export const NotiBadge = () => {
  return (
    <>
    <Link to="">
      {/* <Flex marginBottom={"5px"}>
        <Text fontWeight={"bold"} >New</Text>
      </Flex> */}
      <Flex
        bg={"blackAlpha.300" }
        h={"75px"}
        align={"center"}
        borderRadius={"10px"}
        transition={"background-color 0.3s ease-in-out"}
        _hover={{ bg: "blackAlpha.400" }}
        _active={{ bg: "blackAlpha.200" }}
      
      >
        {/* <Avatar src='https://bit.ly/sage-adebayo' /> */}
        <Flex bgColor={"yellow"} w={"60px"} h={"100%"} borderTopLeftRadius={"10px"}
          borderBottomLeftRadius={"10px"} alignItems={"center"} justifyContent={"center"} >
          <Box w={"40px"} h={"40px"} borderRadius={"50%"} bg={"white"} >  </Box>
        </Flex>
        <Box ml='3'>
          <Text fontWeight='bold'>
            order is currently ongoing
          </Text>
          <Text fontSize='sm'> 5 minute ago</Text>
        </Box>
      </Flex>
    </Link>
    </>
    
  )
}
