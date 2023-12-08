import {
  Stack,
  Card,
  CardBody,
  Heading,
  HStack,
  Flex,
  Circle,
  Icon,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { BiRestaurant } from "react-icons/bi";
import { FaRobot, FaRegNewspaper } from "react-icons/fa";
import { MdMovie } from "react-icons/md";

const cardStyle = {
  mt: "15",
  mx: { lg: "4", base: "1" },
  w: "22vw",
  maxW: "330px",
  h: { lg: "150px", base: "100px" },
  _hover: { bg: "brand.200", textColor: "white" },
  bgColor: "brand.100",
  borderRadius: "xl",
};

export const ButtonPenta = () => {
  return (
    <Flex pb={{ base: 0, lg: 2 }} justifyContent={"center"} width={"100%"}>
      <NavLink to="/Venues">
        <Card sx={cardStyle}>
          <CardBody py={{ base: "3", lg: "6" }} px={"0"}>
            <HStack justifyContent={"center"}>
              <Circle size={{ base: "50px", lg: "60px" }} bg="white">
                <Icon
                  as={BiRestaurant}
                  fontSize={{ base: "30px", lg: "37px" }}
                  color={"black"}
                />
              </Circle>
            </HStack>
            <Stack
              mt={{ base: "2", lg: "4" }}
              spacing="3"
              justifyContent={"center"}
            >
              <Heading
                fontSize={{ lg: "2xl", base: "xs" }}
                textAlign={"center"}
                fontWeight="bold"
              >
                Venue
              </Heading>
            </Stack>
          </CardBody>
        </Card>
      </NavLink>

      <NavLink to="/cinemaMainPage">
        <Card sx={cardStyle}>
          <CardBody py={{ base: "3", lg: "6" }} px={"0"}>
            <HStack justifyContent={"center"}>
              <Circle size={{ base: "50px", lg: "60px" }} bg="white">
                <Icon
                  as={MdMovie}
                  fontSize={{ base: "30px", lg: "35px" }}
                  color={"black"}
                />
              </Circle>
            </HStack>
            <Stack
              mt={{ base: "2", lg: "4" }}
              spacing="3"
              justifyContent={"center"}
            >
              <Heading
                fontSize={{ lg: "2xl", base: "xs" }}
                textAlign={"center"}
                fontWeight="bold"
              >
                Cinemas
              </Heading>
            </Stack>
          </CardBody>
        </Card>
      </NavLink>

      <NavLink to="/Chatbot">
        <Card sx={cardStyle}>
          <CardBody py={{ base: "3", lg: "6" }} px={"0"}>
            <HStack justifyContent={"center"}>
              <Circle size={{ base: "50px", lg: "60px" }} bg="white">
                <Icon
                  as={FaRobot}
                  fontSize={{ base: "26px", lg: "33px" }}
                  color={"black"}
                />
              </Circle>
            </HStack>
            <Stack
              mt={{ base: "2", lg: "4" }}
              spacing="3"
              justifyContent={"center"}
            >
              <Heading
                fontSize={{ lg: "2xl", base: "xs" }}
                textAlign={"center"}
                fontWeight="bold"
              >
                Chatbot
              </Heading>
            </Stack>
          </CardBody>
        </Card>
      </NavLink>

      <NavLink to="/article">
        <Card sx={cardStyle}>
          <CardBody py={{ base: "3", lg: "6" }} px={"0"}>
            <HStack justifyContent={"center"}>
              <Circle size={{ base: "50px", lg: "60px" }} bg="white">
                <Icon
                  as={FaRegNewspaper}
                  fontSize={{ base: "30px", lg: "37px" }}
                  color={"black"}
                />
              </Circle>
            </HStack>
            <Stack
              mt={{ base: "2", lg: "4" }}
              spacing="3"
              justifyContent={"center"}
            >
              <Heading
                fontSize={{ lg: "2xl", base: "xs" }}
                textAlign={"center"}
                fontWeight="bold"
              >
                Articles
              </Heading>
            </Stack>
          </CardBody>
        </Card>
      </NavLink>
    </Flex>
  );
};
