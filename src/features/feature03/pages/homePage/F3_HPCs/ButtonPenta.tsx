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
import { BiRestaurant, BiSolidDrink } from "react-icons/Bi";
import { SiHomebrew } from "react-icons/Si";
import { FaRobot } from "react-icons/fa";
import { MdMovie } from "react-icons/md";

const cardStyle = {
  mt: "15",
  mx: { lg: "4", base: "1" },
  w: "21vw",
  maxW: "230px",
  h: { lg: "150px", base: "100px" },
  _hover: { bg: "brand.200", textColor: "white" },
  bgColor: "brand.100",
  borderRadius: "xl",
};

export const ButtonPenta = () => {
  return (
    <Flex pb={{ base: 0, lg: 2 }} justifyContent={"center"} width={"100%"}>
      <NavLink to="/Restaurants">
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
                Restaurants
              </Heading>
            </Stack>
          </CardBody>
        </Card>
      </NavLink>

      <NavLink to="/Clubs">
        <Card sx={cardStyle}>
          <CardBody py={{ base: "3", lg: "6" }} px={"0"}>
            <HStack justifyContent={"center"}>
              <Circle size={{ base: "50px", lg: "60px" }} bg="white">
                <Icon
                  as={BiSolidDrink}
                  fontSize={{ base: "28px", lg: "35px" }}
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
                Clubs
              </Heading>
            </Stack>
          </CardBody>
        </Card>
      </NavLink>

      <NavLink to="/Bars">
        <Card sx={cardStyle}>
          <CardBody py={{ base: "3", lg: "6" }} px={"0"}>
            <HStack justifyContent={"center"}>
              <Circle size={{ base: "50px", lg: "60px" }} bg="white">
                <Icon
                  as={SiHomebrew}
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
                Bars
              </Heading>
            </Stack>
          </CardBody>
        </Card>
      </NavLink>

      <NavLink to="/Cinemas">
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
        <Card sx={cardStyle} display={{ base: "none", lg: "block" }}>
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
    </Flex>
  );
};
