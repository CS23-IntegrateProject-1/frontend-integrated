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
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { FaHeart } from "react-icons/fa";
import { FC } from "react";

export const SavedPlacesSlide = () => {
  return (
    <Card
      minW={{ base: "200px", lg: "350px" }}
      width={{ base: "100%", lg: "80%" }}
      // w={{ base: "300px" }}
      borderRadius="2xl"
      bg="brand.200"
      mb={8}
      mr={"20px"}
    >
      <CardBody pb={1}>
        <Image
          src="src\features\feature11\img\Card Info.png"
          borderRadius="lg"
          w="100%"
          h="160px"
          bgColor={"white"}
        />
        <IconButton
          top={"7%"}
          left={"84%"}
          position={"absolute"}
          variant="unstyled"
          aria-label="add"
          icon={<FaHeart size={"28px"} color={"white"} />}
        />

        <Flex mt="4">
          <Heading color="white" size="md">
            Ping
          </Heading>
          <Flex
            direction="row"
            mr="2"
            borderRadius="14"
            ml={"auto"}
            color="white"
            transform="translateY(2px)"
          >
            5
            <StarIcon ml="2" transform="translateY(2px)" />
          </Flex>
        </Flex>
      </CardBody>
      <Flex direction="column" justify="center" width="100%" px="5" pb="5">
        <Text mb={3} textColor={"gray.300"}>
          {/* {R.description.length > 30
    //               ? `${R.description.slice(0, 30)}...`
    //               : R.description} */}{" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          officia optio,
        </Text>
        <NavLink to={`/Branches/${1}`}>
          <Button
            variant="solid"
            textColor="white"
            bgColor="brand.300"
            _hover={{ bgColor: "brand.100", textColor: "black" }}
            w={{ base: "320px", sm: "310px" }}
          >
            Branches
          </Button>
        </NavLink>
      </Flex>
    </Card>
    // </Box>
  );
};
