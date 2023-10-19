import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLine,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { Box, Flex, Text, Grid, Icon } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const Footer_HomePage = () => {
  return (
    <Box
      bg="black"
      textAlign="center"
      justifyContent="center"
      mt={8}
    >
        <Flex textAlign="center" justifyContent="center"  pt={5}>
            <NavLink to="/IDK_Path">
                <Box px={10}>
                    <FaFacebookSquare color="black" fontSize="40px" _hover={{color:"tomato"}}/>
                </Box>
            </NavLink>
            <NavLink to="/IDK_Path">
                <Box px={10}>
                    <FaInstagram color='tomato' fontSize="40px"/>
                </Box>
            </NavLink>
            <NavLink to="/IDK_Path">
                <Box px={10} _hover={{ textDecoration: "underline"}}>
                    <FaLine color="brand.200" fontSize="40px"/>
                </Box>
            </NavLink>
        </Flex>
      <Flex textAlign="center" justifyContent="center">
        <NavLink to="/IDK_Path">
            <Box _hover={{ textDecoration: "underline"}}>
                <Text fontSize="sm" fontWeight="normal" pt={5} px={4}>
                Privacy Policy
                </Text>
            </Box>
        </NavLink>
        <NavLink to="/IDK_Path">
        <Box _hover={{ textDecoration: "underline"}}>
          <Text fontSize="sm" fontWeight="normal" pt={5} px={4}>
            Terms of Services
          </Text>
        </Box>
        </NavLink>
        <NavLink to="/IDK_Path">
        <Box _hover={{ textDecoration: "underline"}}>
          <Text fontSize="sm" fontWeight="normal" pt={5} px={4}>
            Contact Us
          </Text>
        </Box>
        </NavLink>
      </Flex>

      <Text fontSize="md" fontWeight="bold" pt={4} pb={5} px={4}>
        Harmoni LTD.
      </Text>
    </Box>
  );
};
