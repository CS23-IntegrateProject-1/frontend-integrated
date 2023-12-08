import { NavLink } from "react-router-dom";
import {
  Box,
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

import { useQuery } from "@tanstack/react-query";
import { Axios } from "../../../../AxiosInstance";
import { FullPageLoader } from "../../../../components/Loader/FullPageLoader";
import { FC } from "react";

interface RecommendedPlaces {
  id: number;
  venueId: number;
  branchId: number;
  name: string;
  description: string;
  category: string;
  capacity: string;
  location: string;
  website_url: string;
  rating: string;
}

export const RecommendedPlacesPage: FC = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isLoading: recommendedPlacesLoading,
    isError: recommendedPlacesError,
    data: recommendedPlacesData,
  } = useQuery<RecommendedPlaces[]>({
    queryKey: ["getVen"],
    queryFn: async () => {
      const { data } = await Axios.get("/feature3/RecommendedPlaces");
      return data;
    },
  });

  if (recommendedPlacesLoading) {
    return (
      <span>
        <FullPageLoader />
      </span>
    );
  }

  if (recommendedPlacesError) {
    return <span>An error occurred: </span>;
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
        {recommendedPlacesData.map((RP) => (
          <Card
            minW={{ base: "250px", lg: "350px" }}
            width="sm"
            borderRadius="2xl"
            bg="brand.200"
            key={RP.venueId}
            mb={8}
          >
            <CardBody pb={1}>
              <Image
                src={RP.pic}
                alt={RP.name + "_Pic"}
                borderRadius="lg"
                w="100%"
                h="160px"
                bgColor={"white"}
              />
              <Flex mt="4">
                <Heading color="white" size="md">
                  {RP.name}
                </Heading>
                <Flex direction="row" mr="2" borderRadius="14" ml={"auto"} color="white" transform="translateY(2px)">
                  {RP.rating != "0" ? RP.rating : "N/A"}
                  <StarIcon ml="2" transform="translateY(2px)" />
                </Flex>
              </Flex>
            </CardBody>
            <Flex
              direction="column"
              justify="center"
              width="100%"
              px="5"
              pb="5"
            >
              <Text mb={3} textColor={"gray.300"}>
                {RP.description}
              </Text>
              <NavLink to={`/Branches/${RP.venueId}`}>
                <Button
                  variant="solid"
                  textColor="white"
                  bgColor="brand.300"
                  _hover={{ bgColor: "brand.100", textColor: "black" }}
                  w="350px"
                >
                  Branches
                </Button>
              </NavLink>
            </Flex>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
