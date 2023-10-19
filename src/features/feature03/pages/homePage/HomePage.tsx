import { Box, Stack, StackDivider, Text } from "@chakra-ui/react";
import { ButtonComponent } from "../../../../components/buttons/ButtonComponent";
import { Center, Square, Circle } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { SearchBar } from "./F3_Components/SearchBar";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Divider,
  ButtonGroup,
  Button,
  HStack,
  Flex,
} from "@chakra-ui/react";

export const HomePage = () => {
  // const [searchFilter, setSearchFilter] = useState<string>("");
  // const [selectedRestaurant, setSelectedRestaurant] =
  //   useState<RestaurantProps | null>(null);
  const breakpoints = {
    base: "0em", // 0px
    sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
    md: "48em", // ~768px
    lg: "62em", // ~992px
    xl: "80em", // ~1280px
    "2xl": "96em", // ~1536px
  };


  return (
    <Box>
      This is Home Page F3_T11
      <br />
      <ButtonComponent text="Geng maQk" />
      <br />
      <Flex mb={5}
      justifyContent={"center"}>
        <NavLink to="/IDK_Path">
          <Card mt={15} mx={{lg:"4",base:"1"}} w={{lg: "220px", base:"112px"}} h={{lg:"150px", base:"115px"}} _hover={{ bg: "brand.100" }}>
            <CardBody>
              <HStack justifyContent={"center"}>
                <Circle size="50px" bg="brand.200" color="white">
                  <StarIcon color="black" />
                </Circle>
              </HStack>
              <Stack mt={{lg:'6' , base:"3"}} spacing="3" justifyContent={"center"}>
                <Heading fontSize={{lg:'2xl', base:'sm'}} textAlign={"center"}>
                  Restaurant
                </Heading>
              </Stack>
            </CardBody>
          </Card>
        </NavLink>

        <NavLink to="/IDK_Path">
          <Card mt={15} mx={{lg:"4",base:"1"}} w={{lg: "220px", base:"112px"}} h={{lg:"150px", base:"115px"}} _hover={{ bg: "brand.100" }}>
            <CardBody>
              <HStack justifyContent={"center"}>
                <Circle size="50px" bg="brand.200" color="white">
                  <StarIcon color="black" />
                </Circle>
              </HStack>
              <Stack mt={{lg:'6' , base:"3"}} spacing="3" justifyContent={"center"}>
                <Heading fontSize={{lg:'2xl', base:'sm'}} textAlign={"center"}>
                  Clubs
                </Heading>
              </Stack>
            </CardBody>
          </Card>
        </NavLink>

        <NavLink to="/IDK_Path">
          <Card mt={15} mx={{lg:"4",base:"1"}} w={{lg: "220px", base:"112px"}} h={{lg:"150px", base:"115px"}} _hover={{ bg: "brand.100" }}>
            <CardBody>
              <HStack justifyContent={"center"}>
                <Circle size="50px" bg="brand.200" color="white">
                  <StarIcon color="black" />
                </Circle>
              </HStack>
              <Stack mt={{lg:'6' , base:"3"}} spacing="3" justifyContent={"center"}>
                <Heading fontSize={{lg:'2xl', base:'sm'}} textAlign={"center"}>
                  Bars
                </Heading>
              </Stack>
            </CardBody>
          </Card>
        </NavLink>

        <NavLink to="/IDK_Path">
          <Card mt={15} mx={{lg:"4",base:"1"}} w={{lg: "220px", base:"112px"}} h={{lg:"150px", base:"115px"}} _hover={{ bg: "brand.100" }}>
            <CardBody>
              <HStack justifyContent={"center"}>
                <Circle size="50px" bg="brand.200" color="white">
                  <StarIcon color="black" />
                </Circle>
              </HStack>
              <Stack mt={{lg:'6' , base:"3"}} spacing="3" justifyContent={"center"}>
                <Heading fontSize={{lg:'2xl', base:'sm'}} textAlign={"center"}>
                  Community
                </Heading>
              </Stack>
            </CardBody>
          </Card>
        </NavLink>

        <Card mt={15} mx={4} display={{ base: 'none', lg: 'block' }} w={"220px"} h={"150"} _hover={{ bg: "brand.100" }}>
          <CardBody>
            <HStack justifyContent={"center"}>
              <Circle size="50px" bg="brand.200" color="white">
                <StarIcon color="black" />
              </Circle>
            </HStack>
            <Stack mt="6" spacing="3" justifyContent={"center"}>
              <Heading fontSize='2xl' textAlign={"center"}>
                Chat Bot
              </Heading>
            </Stack>
          </CardBody>
        </Card>

      </Flex>

      <Text fontSize='50px'>
        Book Seats
      </Text>
      <SearchBar />

      <Text mt={5} fontSize='40px'>
        Maps
      </Text>
      <NavLink to="/IDK_Path">
        <Image
        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Green double couch with wooden legs'
        borderRadius='lg'
        />
      </NavLink>

      <Text mt={5} fontSize='40px'>
        Recommended Places
      </Text>
      <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>



      <Text mt={5} fontSize='40px'>
        Promotions
      </Text>
      <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>



      <Text mt={5} fontSize='40px'>
        Events
      </Text>
      <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>


    </Box>
  );
};
