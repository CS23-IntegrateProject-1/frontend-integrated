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
          <Card mt={15} mr={5} w={{lg: "220px", base:"160px"}} _hover={{ bg: "brand.100" }}>
            <CardBody>
              <HStack justifyContent={"center"}>
                <Circle size="60px" bg="brand.200" color="white">
                  <StarIcon />
                </Circle>
              </HStack>
              <Stack mt="6" spacing="3" justifyContent={"center"}>
                <Heading fontSize='2xl' textAlign={"center"}>
                  Restaurant
                </Heading>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        </NavLink>

        <NavLink to="/IDK_Path">
          <Card mt={15} mr={5} w={{lg: "220px", base:"160px"}} _hover={{ bg: "brand.100" }}>
            <CardBody>
              <HStack justifyContent={"center"}>
                <Circle size="60px" bg="brand.200" color="white">
                  <StarIcon />
                </Circle>
              </HStack>
              <Stack mt="6" spacing="3" justifyContent={"center"}>
                <Heading fontSize='2xl' textAlign={"center"}>
                  Restaurant
                </Heading>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        </NavLink>

        <NavLink to="/IDK_Path">
          <Card mt={15} mr={5} w={{lg: "220px", base:"160px"}} _hover={{ bg: "brand.100" }}>
            <CardBody>
              <HStack justifyContent={"center"}>
                <Circle size="60px" bg="brand.200" color="white">
                  <StarIcon />
                </Circle>
              </HStack>
              <Stack mt="6" spacing="3" justifyContent={"center"}>
                <Heading fontSize='2xl' textAlign={"center"}>
                  Restaurant
                </Heading>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        </NavLink>

        <NavLink to="/IDK_Path">
          <Card mt={15} mr={5} w={{lg: "220px", base:"160px"}} _hover={{ bg: "brand.100" }}>
            <CardBody>
              <HStack justifyContent={"center"}>
                <Circle size="60px" bg="brand.200" color="white">
                  <StarIcon />
                </Circle>
              </HStack>
              <Stack mt="6" spacing="3" justifyContent={"center"}>
                <Heading fontSize='2xl' textAlign={"center"}>
                  Restaurant
                </Heading>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        </NavLink>

        <NavLink to="/IDK_Path">
          <Card mt={15} mr={5} w={{lg: "220px", base:"160px"}} _hover={{ bg: "brand.100" }}>
            <CardBody>
              <HStack justifyContent={"center"}>
                <Circle size="60px" bg="brand.200" color="white">
                  <StarIcon />
                </Circle>
              </HStack>
              <Stack mt="6" spacing="3" justifyContent={"center"}>
                <Heading fontSize='2xl' textAlign={"center"}>
                  Restaurant
                </Heading>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        </NavLink>


      </Flex>

      <Text fontSize='50px'>
        Book Seats
      </Text>
      <SearchBar/>



    </Box>
  );
};
