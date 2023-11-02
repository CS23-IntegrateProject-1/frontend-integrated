import { ButtonComponent } from "../../../../components/buttons/ButtonComponent";
import { NavLink } from "react-router-dom";
import { SearchBar } from "./F3_Components/SearchBar";
import { Footer_HomePage } from "./Footer_HomePage";
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
import { FaRobot, FaMapMarkerAlt, FaFilter } from "react-icons/fa";

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
      <Flex mb={5} justifyContent={"center"} width={"100%"}>
        <NavLink to="/IDK_Path">
          <Card
            mt={15}
            mx={{ lg: "4", base: "1" }}
            w={"21vw"}
            maxW={"230px"}
            h={{ lg: "150px", base: "100px" }}
            _hover={{ bg: "brand.200", textColor: "white" }}
            bgColor={"brand.100"}
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
                  Restaurant
                </Heading>
              </Stack>
            </CardBody>
          </Card>
        </NavLink>

        <NavLink to="/IDK_Path">
          <Card
            mt={15}
            mx={{ lg: "4", base: "1" }}
            w={"21vw"}
            maxW={"230px"}
            h={{ lg: "150px", base: "100px" }}
            _hover={{ bg: "brand.200", textColor: "white" }}
            bgColor={"brand.100"}
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

        <NavLink to="/IDK_Path">
          <Card
            mt={15}
            mx={{ lg: "4", base: "1" }}
            w={"21vw"}
            maxW={"230px"}
            h={{ lg: "150px", base: "100px" }}
            _hover={{ bg: "brand.200", textColor: "white" }}
            bgColor={"brand.100"}
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

        <NavLink to="/IDK_Path">
          <Card
            mt={15}
            mx={{ lg: "4", base: "1" }}
            w={"21vw"}
            maxW={"230px"}
            h={{ lg: "150px", base: "100px" }}
            _hover={{ bg: "brand.200", textColor: "white" }}
            bgColor={"brand.100"}
          >
            <CardBody py={{ base: "3", lg: "6" }} px={"0"}>
              <HStack justifyContent={"center"}>
                <Circle size={{ base: "50px", lg: "60px" }} bg="white">
                  <Icon
                    as={BsFillPeopleFill}
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
                  Community
                </Heading>
              </Stack>
            </CardBody>
          </Card>
        </NavLink>

        <Card
          mt={15}
          mx={{ lg: "4", base: "1" }}
          w={"21vw"}
          minW={"230px"}
          maxW={"230px"}
          h={{ lg: "150px", base: "100px" }}
          _hover={{ bg: "brand.200", textColor: "white" }}
          bgColor={"brand.100"}
          display={{ lg: "block", base: "none" }}
        >
          <CardBody>
            <HStack justifyContent={"center"}>
              <Circle size={{ base: "50px", lg: "60px" }} bg="white">
                <Icon as={FaRobot} fontSize={{ base: "28px", lg: "35px" }} color={"black"} />
              </Circle>
            </HStack>
            <Stack
              mt={{ lg: "5", base: "3" }}
              spacing="3"
              justifyContent={"center"}
            >
              <Heading
                fontSize={{ lg: "2xl", base: "sm" }}
                textAlign={"center"}
                fontWeight="bold"
              >
                Chat Bot
              </Heading>
            </Stack>
          </CardBody>
        </Card>
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
            <Text fontSize="15px" fontWeight="bold">
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
            src="https://c4.wallpaperflare.com/wallpaper/210/9/215/anime-fantasy-game-map-wallpaper-preview.jpg"
            alt="Map_Pic not load"
            borderRadius="xl"
            w="100%"
            h="300px"
          />
        </NavLink>
      </Box>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Flex pt={5} align="center">
        <Text fontSize={{ base: "25px", lg: "35px" }} fontWeight="bold">
          Recommended Places
        </Text>
        <NavLink to="/IDK_Path" style={{marginLeft: "auto"}}>
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
            borderRadius="2xl"
            bg="brand.200"
            key={index}
            marginRight="5"
          >
            <CardBody>
              <Image src={R.picR} 
              alt="BarButPic not load" 
              borderRadius="lg"
              w="100%"
              h= "160px"
               />
              <Stack mt="4" spacing="3">
                <Heading color="white" size="md">
                  {R.name}
                </Heading>
                <Text color="grey.200">{R.description}</Text>
              </Stack>
            </CardBody>
            <Flex
              bottom="0"
              left="0"
              width="100%"
              pb="5"
              justify="center"
              align="center"
            >
              <ButtonGroup spacing="4">
                <Button
                  variant="outline"
                  textColor="white"
                  _hover={{
                    textColor: "black",
                    borderColor: "black",
                    bgColor: "brand.100",
                  }}
                  w={{ base: "120px", lg: "140px" }}
                >
                  More Info
                </Button>
                <Button
                  variant="solid"
                  textColor="white"
                  bgColor="brand.300"
                  _hover={{ bgColor: "brand.100" }}
                  w={{ base: "120px", lg: "140px" }}
                >
                  Reserve Now
                </Button>
              </ButtonGroup>
            </Flex>
          </Card>
        ))}
      </Box>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Flex pt={5} align="center">
        <Text fontSize={{ base: "25px", lg: "35px" }} fontWeight="bold">
          Promotions
        </Text>
        <NavLink to="/IDK_Path" style={{marginLeft: "auto"}}>
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
                borderRadius="2xl"
                marginRight="5"
              >
                <NavLink to="/IDK_PathAAAAA">
                  <Image
                    src={P.picP}
                    alt="Promotion_Pic not load"
                    borderRadius="lg"
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
      <Flex pt={5} align="center">
        <Text fontSize={{ base: "25px", lg: "35px" }} fontWeight="bold">
          Events
        </Text>
        <NavLink to="/IDK_Path" style={{marginLeft: "auto"}}>
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
            {E.map((E, index) => (
              <Card
                minW={{ base: "300px", lg: "350px" }}
                width="sm"
                borderRadius="2xl"
                bg="brand.200"
                key={index}
                marginRight="5"
              >
                <CardBody>
                  <Image
                    src={E.picE}
                    alt="Event_Pic not load"
                    borderRadius="lg"
                    w="100%"
                    h="150px"
                  />
                  <Stack mt="4" spacing="3">
                    <Text color="grey.200">{E.date}</Text>
                    <Heading color="white" size="md">
                      {E.name}
                    </Heading>
                    <Box display={"flex"}>
                      <FaMapMarkerAlt
                        color={colors.grey[200]}
                        fontSize="25px"
                      />
                      <Text paddingLeft={2} color="grey.200">
                        {E.location}
                      </Text>
                    </Box>
                  </Stack>
                </CardBody>
                <Flex
                  bottom="0"
                  left="0"
                  width="100%"
                  pb="5"
                  justify="center"
                  align="center"
                >
                  <ButtonGroup spacing="4">
                    <Button
                      variant="outline"
                      textColor="white"
                      _hover={{
                        textColor: "black",
                        borderColor: "black",
                        bgColor: "brand.100",
                      }}
                      w={{ base: "120px", lg: "140px" }}
                    >
                      More Info
                    </Button>
                    <Button
                      variant="solid"
                      textColor="white"
                      bgColor="brand.300"
                      _hover={{ bgColor: "brand.100" }}
                      w={{ base: "120px", lg: "140px" }}
                    >
                      Reserve Now
                    </Button>
                  </ButtonGroup>
                </Flex>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
      <Footer_HomePage />
    </Box>
  );
};
