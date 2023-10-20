import { Box, Stack, StackDivider, Text } from "@chakra-ui/react";
import { ButtonComponent } from "../../../../components/buttons/ButtonComponent";
import { Center, Square, Circle } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";

export const HomePage = () => {
  // const [searchFilter, setSearchFilter] = useState<string>("");
  // const [selectedRestaurant, setSelectedRestaurant] =
  //   useState<RestaurantProps | null>(null);

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
            <Stack mt="6" spacing="3" justifyContent={"center"}>
              <Heading fontSize="2xl" textAlign={"center"}>
                Chat Bot
              </Heading>
            </Stack>
          </CardBody>
        </Card>
      </Flex>

      <Text fontSize="50px">Book Seats</Text>
      <SearchBar />
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
      <Text mt={5} fontSize="40px">
        Recommended Places
      </Text>
      
      <Card maxW="sm" borderRadius='2xl' bg="brand.200">
        <CardBody>
          <Image
            src="https://media.tenor.com/Bv37u6GJKkkAAAAd/bar-feelre.gif"
            alt="BarButPic not load"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading color="white" size="md">Living room Sofa</Heading>
            <Text color="grey.200">
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>
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
      <Text mt={5} fontSize="40px">
        Promotions
      </Text>

      <Card maxW="sm" borderRadius='2xl' bg="brand.200" _hover={{ bg: "brand.300" }}>
        <CardBody>
          <Image
            src="https://i.pinimg.com/originals/b8/78/64/b87864c8958161004082c2ea16aee291.jpg"
            alt="Promotion_Pic not load"
            borderRadius="lg"
          />
        </CardBody>
      </Card>
      <Text mt={5} fontSize="40px">
        Events
      </Text>

      <Card maxW="sm" borderRadius='2xl' bg="brand.200">
        <CardBody>
          <Image
            src="https://phuketeventcompany.b-cdn.net/wp-content/uploads/2021/06/Expert-Event-Management-Your-Trusted-Event-Planner-and-Organizer-in-Bangkok-1.jpg"
            alt="Event_Pic not load"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Text color="grey.200">Date that IDK</Text>
            <Heading color="white" size="md">Living room Sofa</Heading>
            <Text color="grey.200">@ Where IDK</Text>
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

      <Footer_HomePage />
    </Box>
    
  );
};
