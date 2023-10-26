import { Box, Stack, StackDivider, Text } from "@chakra-ui/react";
import { ButtonComponent } from "../../../../components/buttons/ButtonComponent";
import { NavLink } from "react-router-dom";
import { SearchBar } from "./F3_Components/SearchBar";
import { Footer_HomePage } from "./Footer_HomePage";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Image,
  ButtonGroup,
  Button,
  HStack,
  Flex,
  Center,
  Square,
  Circle,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

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
    <Box>
      This is Home Page F3_T11
      <br />
      <ButtonComponent text="Som Geng mak" />
      <br />
      <Flex mb={5} justifyContent={"center"}>
        <NavLink to="/IDK_Path">
          <Card
            mt={15}
            mx={{ lg: "4", base: "1" }}
            w={{ lg: "220px", base: "112px" }}
            h={{ lg: "150px", base: "115px" }}
            _hover={{ bg: "brand.100" }}
          >
            <CardBody>
              <HStack justifyContent={"center"}>
                <Circle size="50px" bg="brand.200" color="white">
                  <StarIcon color="black" />
                </Circle>
              </HStack>
              <Stack
                mt={{ lg: "6", base: "3" }}
                spacing="3"
                justifyContent={"center"}
              >
                <Heading
                  fontSize={{ lg: "2xl", base: "sm" }}
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
            w={{ lg: "220px", base: "112px" }}
            h={{ lg: "150px", base: "115px" }}
            _hover={{ bg: "brand.100" }}
          >
            <CardBody>
              <HStack justifyContent={"center"}>
                <Circle size="50px" bg="brand.200" color="white">
                  <StarIcon color="black" />
                </Circle>
              </HStack>
              <Stack
                mt={{ lg: "6", base: "3" }}
                spacing="3"
                justifyContent={"center"}
              >
                <Heading
                  fontSize={{ lg: "2xl", base: "sm" }}
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
            w={{ lg: "220px", base: "112px" }}
            h={{ lg: "150px", base: "115px" }}
            _hover={{ bg: "brand.100" }}
          >
            <CardBody>
              <HStack justifyContent={"center"}>
                <Circle size="50px" bg="brand.200" color="white">
                  <StarIcon color="black" />
                </Circle>
              </HStack>
              <Stack
                mt={{ lg: "6", base: "3" }}
                spacing="3"
                justifyContent={"center"}
              >
                <Heading
                  fontSize={{ lg: "2xl", base: "sm" }}
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
            w={{ lg: "220px", base: "115px" }}
            h={{ lg: "150px", base: "115px" }}
            _hover={{ bg: "brand.100" }}
          >
            <CardBody>
              <HStack justifyContent={"center"}>
                <Circle size="50px" bg="brand.200" color="white">
                  <StarIcon color="black" />
                </Circle>
              </HStack>
              <Stack
                mt={{ lg: "6", base: "3" }}
                spacing="3"
                justifyContent={"center"}
              >
                <Heading
                  fontSize={{ lg: "2xl", base: "sm" }}
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
          mx={4}
          display={{ base: "none", lg: "block" }}
          w={"220px"}
          h={"150"}
          _hover={{ bg: "brand.100" }}
        >
          <CardBody>
            <HStack justifyContent={"center"}>
              <Circle size="50px" bg="brand.200" color="white">
                <StarIcon color="black" />
              </Circle>
            </HStack>
            <Stack
              mt={{ lg: "6", base: "3" }}
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
      <SearchBar />
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
      <Box overflowX="auto">
        <Box display="flex">
          {R.filter((R) => R).map((R, index) => (
            <Card
              maxW="sm"
              borderRadius="2xl"
              bg="brand.200"
              key={index}
              marginRight="5"
            >
              <CardBody>
                <Image
                  src={R.picR}
                  alt="BarButPic not load"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading color="white" size="md">
                    {R.name}
                  </Heading>
                  <Text color="grey.200">{R.description}</Text>
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
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Text mt={5} fontSize="40px">
        Promotions
      </Text>
      <Box overflowX="auto">
        <Box display="flex">
          {P.map((P, index) => (
            <Card
              key={index}
              maxW="sm"
              borderRadius="2xl"
              bg="brand.200"
              marginRight="5"
            >
              <CardBody>
                <Image
                  src={P.picP}
                  alt="Promotion_Pic not load"
                  borderRadius="lg"
                />
              </CardBody>
            </Card>
          ))}
        </Box>
      </Box>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Text mt={5} fontSize="40px">
        Events
      </Text>
      <Box overflowX="auto">
        <Box display="flex">
          {E.map((E, index) => (
            <Card
              key={index}
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
      <Footer_HomePage />
    </Box>
  );
};
