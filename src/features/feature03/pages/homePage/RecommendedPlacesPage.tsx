import { NavLink } from "react-router-dom";
import {
  Box,
  Stack,
  Text,
  Card,
  CardBody,
  Heading,
  Image,
  Button,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { Filter_Modal } from "./F3_FMCs/Filter_Modal";
import { SearchBar } from "./F3_HPCs/SearchBar";
import { FaFilter } from "react-icons/fa";
import mockR from "../RF3mock.json";
import { StarIcon } from "@chakra-ui/icons";

interface RProps {
  id: number;
  name: string;
  description: string;
  picR: string;
}

export const RecommendedPlacesPage = () => {
  const R: RProps[] = mockR;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box width={"100%"} px={{ base: "none", lg: "30px" }}>
      <Flex direction="row" pt={{ base: "2", lg: "0" }}>
        <SearchBar />
        <Flex
          direction="column"
          ml="3"
          _hover={{ color: "brand.100" }}
          onClick={onOpen}
        >
          <FaFilter fontSize="25px" />
          <Text fontSize="15px" transform="translateX(-3px)">
            Filter
          </Text>
          <Filter_Modal isOpen={isOpen} onClose={onClose} />
        </Flex>
      </Flex>
      <Box
        display="grid"
        width="100%"
        gridTemplateColumns={{ lg: "repeat(3, 1fr)", base: "repeat(1, 1fr)" }}
        overflow="hidden"
        mt={{ base: "3", lg: "8" }}
        px={{ base: "none", lg: "10px" }}
        justifyItems={"center"}
      >
        {R.filter((R) => R).map((R, index) => (
          <Card
            minW={{ base: "250px", lg: "350px" }}
            width="sm"
            borderRadius="2xl"
            bg="brand.200"
            key={index}
            mb={8}
          >
            <CardBody>
              <Image
                src={R.picR}
                alt="BarButPic not load"
                borderRadius="lg"
                w="100%"
                h="160px"
              />
              <Stack mt="4" spacing="3">
                <Flex direction="row" justify="space-between" align="center">
                  <Heading color="white" size="md">
                    {R.name}
                  </Heading>
                  <Flex
                    direction="row"
                    p="1.5"
                    mr="2"
                    borderRadius="14"
                    color="white"
                  >
                    5<StarIcon ml="1" transform="translateY(2px)" />
                  </Flex>
                </Flex>
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
              <NavLink to="/Temp_RestaurantDetail">
                <Button
                  variant="outline"
                  textColor="white"
                  _hover={{
                    textColor: "black",
                    borderColor: "black",
                    bgColor: "brand.100",
                  }}
                  w="160px"
                >
                  More Info
                </Button>
              </NavLink>
              <NavLink to="/table">
              <Button
                variant="solid"
                textColor="white"
                bgColor="brand.300"
                _hover={{ bgColor: "brand.100", textColor: "black" }}
                w="160px"
              >
                Reserve Now
              </Button>
              </NavLink>
            </Flex>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
