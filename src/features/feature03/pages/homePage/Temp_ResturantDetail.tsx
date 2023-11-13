import { NavLink } from "react-router-dom";
import {
  Box,
  Stack,
  Text,
  Card,
  CardBody,
  Heading,
  Image,
  Button,
  Flex,
  Divider,
} from "@chakra-ui/react";
import { StarIcon, ChevronRightIcon } from "@chakra-ui/icons";

export const Temp_ResturantDetail = () => {
  return (
    <Box width={"100%"}>
      <Image
        src="https://static.vecteezy.com/system/resources/previews/006/659/199/original/futuristic-map-of-the-planet-world-map-globalization-internet-and-technology-cyber-security-abstract-background-with-glowing-map-of-the-earth-illustration-vector.jpg"
        alt="Map_Pic not load"
        borderRadius="10"
        w="100%"
        h="300px"
        objectFit={"cover"}
        mb="5"
      />
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Flex direction="column" mb="5">
        <Flex direction="column">
          <Heading fontSize="25px" mb="2">
            Happy family restaurant
          </Heading>
          <Flex direction="row" justify="space-between" mb="2">
            <Flex direction="row">
              <StarIcon boxSize="3" transform="translateY(1px)" mr="1" />
              <Text fontSize="12px">4.7 (2934 ratings)</Text>
            </Flex>
            <Text fontSize="12px" textDecorationLine="underline">
              View all ratings & reviews
            </Text>
          </Flex>
          <Box backgroundColor="brand.200" p="2" borderRadius="5" mb="5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Box>
        </Flex>
        <Divider mb="5" />
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <Flex direction="row" justify="space-between">
          <Heading fontSize="18px" mb="2">
            Available vouchers
          </Heading>
          <ChevronRightIcon boxSize="6" transform="translateY(-2px)" />
        </Flex>
        <Box display="flex" flexDirection="row" overflow="scroll">
          <Flex border="2px solid white" borderRadius="10" p="2" mr="2">
            <Box mr="2">Voucher name</Box>
            <Divider orientation="vertical" mr="2" />
            <Box>Apply</Box>
          </Flex>
          <Flex border="2px solid white" borderRadius="10" p="2" mr="2">
            <Box mr="2">Voucher name</Box>
            <Divider orientation="vertical" mr="2" />
            <Box>Apply</Box>
          </Flex>
          <Flex border="2px solid white" borderRadius="10" p="2" mr="2">
            <Box mr="2">Voucher name</Box>
            <Divider orientation="vertical" mr="2" />
            <Box>Apply</Box>
          </Flex>
          <Flex border="2px solid white" borderRadius="10" p="2" mr="2">
            <Box mr="2">Voucher name</Box>
            <Divider orientation="vertical" mr="2" />
            <Box>Apply</Box>
          </Flex>
        </Box>
      </Flex>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Heading fontSize="18px" mb="2">
        Menu list
      </Heading>
      <Flex direction="column">
        <Flex
          direction="row"
          align="center"
          backgroundColor="brand.200"
          borderRadius="5"
          p="2"
          mb="3"
        >
          <Image
            src="https://static.vecteezy.com/system/resources/previews/006/659/199/original/futuristic-map-of-the-planet-world-map-globalization-internet-and-technology-cyber-security-abstract-background-with-glowing-map-of-the-earth-illustration-vector.jpg"
            alt="Map_Pic not load"
            borderRadius="5"
            w="auto"
            h="100px"
            objectFit={"cover"}
            mr="2"
          />
          <Flex direction="column">
            <Heading fontSize="18px" mb="2">
              Happy steak
            </Heading>
            <Heading fontSize="18px" mb="2">
              Price: $100
            </Heading>
            <Text fontSize="10px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </Flex>
        </Flex>
        <Flex
          direction="row"
          align="center"
          backgroundColor="brand.200"
          borderRadius="5"
          p="2"
          mb="3"
        >
          <Image
            src="https://static.vecteezy.com/system/resources/previews/006/659/199/original/futuristic-map-of-the-planet-world-map-globalization-internet-and-technology-cyber-security-abstract-background-with-glowing-map-of-the-earth-illustration-vector.jpg"
            alt="Map_Pic not load"
            borderRadius="5"
            w="auto"
            h="100px"
            objectFit={"cover"}
            mr="2"
          />
          <Flex direction="column">
            <Heading fontSize="18px" mb="2">
              Happy steak
            </Heading>
            <Heading fontSize="18px" mb="2">
              Price: $100
            </Heading>
            <Text fontSize="10px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </Flex>
        </Flex>
        <Flex
          direction="row"
          align="center"
          backgroundColor="brand.200"
          borderRadius="5"
          p="2"
          mb="3"
        >
          <Image
            src="https://static.vecteezy.com/system/resources/previews/006/659/199/original/futuristic-map-of-the-planet-world-map-globalization-internet-and-technology-cyber-security-abstract-background-with-glowing-map-of-the-earth-illustration-vector.jpg"
            alt="Map_Pic not load"
            borderRadius="5"
            w="auto"
            h="100px"
            objectFit={"cover"}
            mr="2"
          />
          <Flex direction="column">
            <Heading fontSize="18px" mb="2">
              Happy steak
            </Heading>
            <Heading fontSize="18px" mb="2">
              Price: $100
            </Heading>
            <Text fontSize="10px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </Flex>
        </Flex>
      </Flex>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
    </Box>
  );
};
