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
import { FaTicketAlt, FaUserFriends } from "react-icons/fa";
import { IoMdChatboxes } from "react-icons/io";

const cardStyle = {
  mt: "15",
  mx: { lg: "4", base: "1" },
  w: "21vw",
  maxW: "300px",
  h: { lg: "150px", base: "100px" },
  _hover: { bg: "brand.200", textColor: "white" },
  bgColor: "brand.100",
  borderRadius: "xl",
};

export const ButtonQuad = () => {
  return (
    <Flex mb={6} justifyContent={"center"} width={"100%"}>
      <NavLink to="/Friends">
        <Card sx={cardStyle}>
          <CardBody py={{ base: "3", lg: "6" }} px={"0"}>
            <HStack justifyContent={"center"}>
              <Circle size={{ base: "50px", lg: "60px" }} bg="white">
                <Icon
                  as={FaUserFriends}
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
                Friends
              </Heading>
            </Stack>
          </CardBody>
        </Card>
      </NavLink>

      <NavLink to="/Community">
        <Card sx={cardStyle}>
          <CardBody py={{ base: "3", lg: "6" }} px={"0"}>
            <HStack justifyContent={"center"}>
              <Circle size={{ base: "50px", lg: "60px" }} bg="white">
                <Icon
                  as={IoMdChatboxes}
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
                Community
              </Heading>
            </Stack>
          </CardBody>
        </Card>
      </NavLink>

      <NavLink to="/Ticket">
        <Card sx={cardStyle}>
          <CardBody py={{ base: "3", lg: "6" }} px={"0"}>
            <HStack justifyContent={"center"}>
              <Circle size={{ base: "50px", lg: "60px" }} bg="white">
                <Icon
                  as={FaTicketAlt}
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
                Ticket
              </Heading>
            </Stack>
          </CardBody>
        </Card>
      </NavLink>
    </Flex>
  );
};
