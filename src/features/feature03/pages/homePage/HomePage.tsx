import { ButtonComponent } from "../../../../components/buttons/ButtonComponent";
import { NavLink } from "react-router-dom";
import { SearchBar } from "./F3_HPCs/SearchBar";
import { SliderAdvertisement } from "./F3_HPCs/SliderAdvertisement";
import { Footer_HomePage } from "./F3_HPCs/Footer_HomePage";
import {
  Box,
  Stack,
  Text,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Image,
  ButtonGroup,
  Button,
  HStack,
  Flex,
  Circle,
  Center,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { BiRestaurant, BiSolidDrink } from "react-icons/Bi";
import { SiHomebrew } from "react-icons/Si";
import { BsFillPeopleFill } from "react-icons/Bs";
import { FaTicketAlt, FaUserFriends, FaRegNewspaper, FaRobot, FaMapMarkerAlt, FaFilter } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import { IoMdChatboxes } from "react-icons/io";

import mockR from "../RF3mock.json";
import mockP from "../PF3mock.json";
import mockE from "../EF3mock.json";
import colors from "../../../../theme/foundations/colors";

interface RProps {
  id: number;
  name: string;
  description: string;
  picR: string;
}

interface PProps {
  id: number;
  name: string;
  picP: string;
}

interface EProps {
  id: number;
  name: string;
  date: string;
  location: string;
  picE: string;
}

export const HomePage = () => {
  // const [searchFilter, setSearchFilter] = useState<string>("");
  // const [selectedRestaurant, setSelectedRestaurant] =
  //   useState<RestaurantProps | null>(null);

  const R: RProps[] = mockR;
  const P: PProps[] = mockP;
  const E: EProps[] = mockE;

  return (
    <Box width={"100%"}>
      <Box pb={3}>
        <SliderAdvertisement />
      </Box>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Flex pb={{base:0, lg:2}} justifyContent={"center"} width={"100%"}>
        <NavLink to="/Restaurants">
          <Card
            mt={15}
            mx={{ lg: "4", base: "1" }}
            w={"21vw"}
            maxW={"230px"}
            h={{ lg: "150px", base: "100px" }}
            _hover={{ bg: "brand.200", textColor: "white" }}
            bgColor={"brand.100"}
            borderRadius="xl"
          >
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
          <Card
            mt={15}
            mx={{ lg: "4", base: "1" }}
            w={"21vw"}
            maxW={"230px"}
            h={{ lg: "150px", base: "100px" }}
            _hover={{ bg: "brand.200", textColor: "white" }}
            bgColor={"brand.100"}
            borderRadius="xl"
          >
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
          <Card
            mt={15}
            mx={{ lg: "4", base: "1" }}
            w={"21vw"}
            maxW={"230px"}
            h={{ lg: "150px", base: "100px" }}
            _hover={{ bg: "brand.200", textColor: "white" }}
            bgColor={"brand.100"}
            borderRadius="xl"
          >
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
          <Card
            mt={15}
            mx={{ lg: "4", base: "1" }}
            w={"21vw"}
            maxW={"230px"}
            h={{ lg: "150px", base: "100px" }}
            _hover={{ bg: "brand.200", textColor: "white" }}
            bgColor={"brand.100"}
            borderRadius="xl"
          >
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
          <Card
            mt={15}
            mx={{ lg: "4", base: "1" }}
            w={"21vw"}
            maxW={"230px"}
            h={{ lg: "150px", base: "100px" }}
            _hover={{ bg: "brand.200", textColor: "white" }}
            bgColor={"brand.100"}
            borderRadius="xl"
            display={{base:"none", lg:"block"}}
          >
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
      {/* ---------------------------------------------------------- */}
      <Flex mb={6} justifyContent={"center"} width={"100%"}>
        <NavLink to="/Articles">
          <Card
            mt={15}
            mx={{ lg: "4", base: "1" }}
            w={"21vw"}
            maxW={"230px"}
            h={{ lg: "150px", base: "100px" }}
            _hover={{ bg: "brand.200", textColor: "white" }}
            bgColor={"brand.100"}
            borderRadius="xl"
          >
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

        <NavLink to="/Friends">
          <Card
            mt={15}
            mx={{ lg: "4", base: "1" }}
            w={"21vw"}
            maxW={"230px"}
            h={{ lg: "150px", base: "100px" }}
            _hover={{ bg: "brand.200", textColor: "white" }}
            bgColor={"brand.100"}
            borderRadius="xl"
          >
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
          <Card
            mt={15}
            mx={{ lg: "4", base: "1" }}
            w={"21vw"}
            maxW={"230px"}
            h={{ lg: "150px", base: "100px" }}
            _hover={{ bg: "brand.200", textColor: "white" }}
            bgColor={"brand.100"}
            borderRadius="xl"
          >
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
          <Card
            mt={15}
            mx={{ lg: "4", base: "1" }}
            w={"21vw"}
            maxW={"230px"}
            h={{ lg: "150px", base: "100px" }}
            _hover={{ bg: "brand.200", textColor: "white" }}
            bgColor={"brand.100"}
            borderRadius="xl"
          >
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

      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Text fontSize={{ base: "30px", lg: "40px" }} fontWeight="bold">
        Book Seats
      </Text>
      <Box display="flex">
        <SearchBar />
        <NavLink to="/IDK_Path">
          <Box
            _hover={{ color: "brand.100" }}
            pl="15px"
            display={{ base: "block", lg: "none" }}
          >
            <FaMapMarkerAlt fontSize="25px" />
            <Text fontSize="15px" transform="translateX(-3px)">
              Map
            </Text>
          </Box>
        </NavLink>
      </Box>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Box pt="10px" display={{ base: "none", lg: "block" }}>
        <Text fontSize={{ base: "25px", lg: "35px" }} fontWeight="bold" pt={1}>
          Maps
        </Text>
        <NavLink to="/IDK_Path">
          <Image
            src="https://static.vecteezy.com/system/resources/previews/006/659/199/original/futuristic-map-of-the-planet-world-map-globalization-internet-and-technology-cyber-security-abstract-background-with-glowing-map-of-the-earth-illustration-vector.jpg"
            alt="Map_Pic not load"
            borderRadius="xl"
            w="100%"
            h="300px"
            objectFit={"cover"}
          />
        </NavLink>
      </Box>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Flex pt={5} align="center">
        <Text fontSize={{ base: "25px", lg: "35px" }} fontWeight="bold">
          Recommended Places
        </Text>
        <NavLink to="/RecommendedPlaces" style={{ marginLeft: "auto" }}>
          <Text
            fontSize={{ base: "15px", lg: "20px" }}
            color="grey.100"
            textDecorationLine="underline"
            _hover={{ textColor: "white" }}
          >
            See all
          </Text>
        </NavLink>
      </Flex>

      <Box overflow={"scroll"} display={"flex"} w={"100%"} pt={1}>
        {R.filter((R) => R).map((R, index) => (
          <Card
            minW={{ base: "300px", lg: "350px" }}
            width="sm"
            borderRadius="xl"
            bg="brand.200"
            key={index}
            marginRight="5"
          >
            <CardBody>
              <Image
                src={R.picR}
                alt="BarButPic not load"
                borderRadius="xl"
                w="100%"
                h="160px"
              />
              <Stack mt="4" spacing="3">
                <Heading color="white" size="md">
                  {R.name}
                </Heading>
                <Text color="grey.200">{R.description}</Text>
              </Stack>
            </CardBody>
            <Flex
              direction="row"
              justify="space-between"
              width="100%"
              pl="5"
              pr="5"
              pb="5"
            >
              <NavLink to="/IDK_PathMMMMMM">
              <Button
                variant="outline"
                textColor="white"
                _hover={{
                  textColor: "black",
                  borderColor: "black",
                  bgColor: "brand.100",
                }}
                w={{ base: "120px", lg: "145px" }}
              >
                More Info
              </Button>
              </NavLink>

              <NavLink to="/IDK_PathRRRRR">
              <Button
                variant="solid"
                textColor="white"
                bgColor="brand.300"
                _hover={{ bgColor: "brand.100", textColor: "black" }}
                w={{ base: "120px", lg: "145px" }}
              >
                Reserve Now
              </Button>
              </NavLink>
            </Flex>
          </Card>
        ))}
      </Box>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Flex pt={5} align="center">
        <Text fontSize={{ base: "25px", lg: "35px" }} fontWeight="bold">
          Promotions
        </Text>
        <NavLink to="/Promotions" style={{ marginLeft: "auto" }}>
          <Text
            fontSize={{ base: "15px", lg: "20px" }}
            color="grey.100"
            textDecorationLine="underline"
            _hover={{ textColor: "white" }}
          >
            See all
          </Text>
        </NavLink>
      </Flex>

      <Box width={"100%"} pt={1}>
        <Box overflowX="auto">
          <Box display="flex">
            {P.map((P, index) => (
              <Card
                key={index}
                minW={"300px"}
                maxW="sm"
                minH={"150px"}
                maxH="sm"
                borderRadius="xl"
                marginRight="5"
              >
                <NavLink to="/IDK_PathAAAAA">
                  <Image
                    src={P.picP}
                    alt="Promotion_Pic not load"
                    borderRadius="xl"
                    w="100%"
                    maxW="300px"
                    h="200px"
                  />
                </NavLink>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <Footer_HomePage />
    </Box>
  );
};
