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
import { StarIcon } from "@chakra-ui/icons";
import { useQuery } from '@tanstack/react-query';
import { Axios } from "../../../../AxiosInstance";
import { FullPageLoader } from "../../../../components/Loader/FullPageLoader";


interface VenueType {
  id: number
  venueId: number
  name: string
  description: string
  category: string
  capacity: string
  location: string
  score: string
  website_url: string
}

export const RestaurantPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { isLoading, isError, data: venueData } = useQuery<VenueType[]>({
    queryKey: ['getVenues'],
    queryFn: async () => {
      const { data } = await Axios.get('/feature3/venues')
      return data
    },
  })

  if (isLoading) {
    return <span><FullPageLoader /></span>
  }

  if (isError) {
    return <span>An error occurred: </span>
  }

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
        {venueData.map((venue) => (
          <Card
            minW={{ base: "250px", lg: "350px" }}
            width="sm"
            borderRadius="2xl"
            bg="brand.200"
            key={venue.venueId}
            mb={8}
          >
            <CardBody>
              <Image
                src={venue.pic}
                alt="Restaurant_Pic not load"
                borderRadius="lg"
                w="100%"
                h="160px"
                bgColor={"white"}
              />
              <Stack mt="4" spacing="3">
                <Flex direction="row" justify="space-between" align="center">
                  <Heading color="white" size="md">
                    {venue.name}
                  </Heading>
                  <Flex
                    direction="row"
                    p="1.5"
                    mr="2"
                    borderRadius="14"
                    color="white"
                  >
                    {venue.score}<StarIcon ml="1" transform="translateY(2px)" />
                  </Flex>
                </Flex>
                <Text color="grey.200">{venue.description}</Text>
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
