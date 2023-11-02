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
} from "@chakra-ui/react";
import { BiRestaurant, BiSolidDrink,  } from "react-icons/Bi";
import { SiHomebrew } from "react-icons/Si"
import { BsFillPeopleFill } from "react-icons/Bs"
import { FaRobot } from "react-icons/fa";

import mockR from "../RF3mock.json";
import mockP from "../PF3mock.json";
import mockE from "../EF3mock.json";

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
      <ButtonComponent text="Som Geng mak" />
      <Flex mb={5} justifyContent={"center"} width={"100%"}>
      <NavLink to="/IDK_Path">
          <Card
            mt={15}
            mx={{ lg: "4", base: "1" }}
            w={"21vw"}
            maxW={"230px"}
            h={{ lg: "150px", base: "100px" }}
            _hover={{ bg: "brand.100" }}
          >
            <CardBody py={{base:"3", lg:"6"}} px={"0"}>
              <HStack justifyContent={"center"}>
                <Circle size={{base:"50px", lg:"60px"}} bg="brand.200">
                  <BiRestaurant fontSize= {{base:"26px" , lg:"300px"}} color="black" />
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
            _hover={{ bg: "brand.100" }}
          >
            <CardBody py={{base:"3", lg:"6"}} px={"0"}>
              <HStack justifyContent={"center"}>
                <Circle size={{base:"50px", lg:"60px"}} bg="brand.200">
                  <BiSolidDrink fontSize= "28px"  color="black" />
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
            _hover={{ bg: "brand.100" }}
          >
            <CardBody py={{base:"3", lg:"6"}} px={"0"}>
              <HStack justifyContent={"center"}>
                <Circle size={{base:"50px", lg:"60px"}} bg="brand.200">
                  <SiHomebrew fontSize= "30px"  color="black" />
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
            _hover={{ bg: "brand.100" }}
          >
            <CardBody py={{base:"3", lg:"6"}} px={"0"}>
              <HStack justifyContent={"center"}>
                <Circle size={{base:"50px", lg:"60px"}} bg="brand.200">
                  <BsFillPeopleFill fontSize= "26px"  color="black" />
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
          _hover={{ bg: "brand.100" }}
          display={{ lg: "block", base: "none" }}
        >
          <CardBody>
            <HStack justifyContent={"center"}>
              <Circle size={{base:"50px", lg:"60px"}} bg="brand.200" >
                <FaRobot fontSize= "28px"  color="black" />
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
              >
                Chat Bot
              </Heading>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Text fontSize="50px">Book Seats</Text>
      {/* <SearchBar /> */}
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Text mt={5} fontSize="40px">
        Maps
      </Text>
      <NavLink to="/IDK_Path">
        <Image
          src="https://c4.wallpaperflare.com/wallpaper/210/9/215/anime-fantasy-game-map-wallpaper-preview.jpg"
          alt="Map_Pic not load"
          borderRadius="lg"
        />
      </NavLink>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Text mt={5} fontSize="40px">
        Recommended Places
      </Text>
      <Box overflow={"scroll"} display={"flex"} w={"100%"}>
        {R.filter((R) => R).map((R, index) => (
          <Card
            minW={"300px"}
            width="sm"
            borderRadius="2xl"
            bg="brand.200"
            key={index}
            marginRight="5"
          >
            <CardBody>
              <Image src={R.picR} alt="BarButPic not load" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading color="white" size="md">
                  {R.name}
                </Heading>
                <Text color="grey.200">{R.description}</Text>
              </Stack>
              <ButtonGroup mt={4} spacing="2">
                <Button 
                variant="outline" 
                colorScheme="gray" 
                textColor="white">
                  More Info
                </Button>
                <Button 
                variant="solid" 
                colorScheme="pink" 
                textColor="white">
                  Reserve Now
                </Button>
              </ButtonGroup>
            </CardBody>
          </Card>
        ))}
      </Box>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Text mt={5} fontSize="40px">
        Promotions
      </Text>
      <Box width={"100%"}>
        <Box overflowX="auto">
          <Box display="flex">
            {P.map((P, index) => (
              <Card
                key={index}
                minW={"300px"}
                maxW="sm"
                borderRadius="2xl"
                marginRight="5"
              >
                <Image
                  src={P.picP}
                  alt="Promotion_Pic not load"
                  borderRadius="lg"
                />
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Text mt={5} fontSize="40px">
        Events
      </Text>
      <Box width={"100%"}>
        <Box overflowX="auto">
          <Box display="flex">
            {E.map((E, index) => (
              <Card
                key={index}
                minW={"300px"}
                maxW="sm"
                borderRadius="2xl"
                bg="brand.200"
                marginRight="5"
              >
                <CardBody>
                  <Image
                    src={E.picE}
                    alt="Event_Pic not load"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Text color="grey.200">{E.date}</Text>
                    <Heading color="white" size="md">
                      {E.name}
                    </Heading>
                    <Text color="grey.200">{E.location}</Text>
                  </Stack>
                  <ButtonGroup mt={4} spacing="2">
                    <Button variant="solid" colorScheme="blue">
                      Buy now
                    </Button>
                    <Button variant="ghost" colorScheme="blue">
                      Add to cart
                    </Button>
                  </ButtonGroup>
                </CardBody>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
      <Footer_HomePage />
    </Box>
  );
};
