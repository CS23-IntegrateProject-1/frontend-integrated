import { FaFacebookSquare, FaInstagram, FaLine } from "react-icons/fa";

import { Box, Flex, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Divider } from "@chakra-ui/react";

export const Footer_HomePage = () => {
  return (
    <Box textAlign="center" justifyContent="center" mt={8}>
      <Divider py={2} borderBottomWidth="1.5px" borderColor={"white"} opacity={"100%"} />
      <Flex textAlign="center" justifyContent="center" pt={8}>
        <Box
          px={10}
          _hover={{
            transform: "scale(1.25) translateY(-2px)",
            transitionDuration: "0.5s",
          }}
        >
          <a href="https://www.facebook.com/xXNekoLordXx/" target="_blank">
            <Box _hover={{ color: "brand.100" }}>
              <FaFacebookSquare
                fontSize="40px"
              />
            </Box>
          </a>
        </Box>
        <Box
          px={10}
          _hover={{
            transform: "scale(1.25) translateY(-2px)",
            transitionDuration: "0.5s",
          }}
        >
          <a href="https://www.instagram.com/kitsune_ne_cs/" target="_blank">
            <Box _hover={{ color: "brand.100" }}>
              <FaInstagram
                fontSize="40px"
              />
            </Box>
          </a>
        </Box>
        <Box
          px={10}
          _hover={{
            transform: "scale(1.25) translateY(-2px)",
            transitionDuration: "0.5s",
          }}
        >
          <a href="https://line.me/th/" target="_blank">
            <Box _hover={{ color: "brand.100" }}>
              <FaLine
                fontSize="40px"
              />
            </Box>
          </a>
        </Box>
      </Flex>
      <Flex textAlign="center" justifyContent="center">
        <NavLink to="/privacy-policy">
          <Box _hover={{ color: "brand.100", textDecoration: "underline" }}>
            <Text fontSize="sm" fontWeight="normal" pt={5} px={4}>
              Privacy Policy
            </Text>
          </Box>
        </NavLink>
        <NavLink to="/term-of-service">
          <Box _hover={{ color: "brand.100", textDecoration: "underline" }}>
            <Text fontSize="sm" fontWeight="normal" pt={5} px={4}>
              Terms of Services
            </Text>
          </Box>
        </NavLink>
        <NavLink to="/IDK_Path">
          <Box _hover={{ color: "brand.100", textDecoration: "underline" }}>
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
