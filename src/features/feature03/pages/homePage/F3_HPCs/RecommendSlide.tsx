import {
  Box,
  Text,
  Card,
  CardBody,
  Heading,
  Image,
  Button,
  Flex,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
// import { FaHeart } from "react-icons/fa";

import { useQuery } from "@tanstack/react-query";
import { Axios } from "../../../../../AxiosInstance";
import { FullPageLoader } from "../../../../../components/Loader/FullPageLoader";

interface RecommendSlide {
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
  venue_picture: string;
}

export const RecommendSlide = () => {
  const {
    isLoading: recommendSlideLoading,
    isError: recommendSlideError,
    data: recommendSlideData,
  } = useQuery<RecommendSlide[]>({
    queryKey: ["getRPSlideVen"],
    queryFn: async () => {
      const { data } = await Axios.get(`/feature3/RecommendedPlaces`);
      return data;
    },
    keepPreviousData: true,
  });

  if (recommendSlideLoading) {
    return (
      <span>
        <FullPageLoader />
      </span>
    );
  }

  if (recommendSlideError) {
    return <span>An error occurred: </span>;
  }

  return (
    <Box
      overflowX="auto"
      css={{
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "24px",
        },
      }}
      display={"flex"}
      w={"100%"}
      pt={1}
    >
      {(recommendSlideData || []).map((RPS) => (
        <Card
          minW={{ base: "250px", lg: "350px" }}
          width="sm"
          borderRadius="2xl"
          bg="brand.200"
          key={RPS.venueId}
          mr="5"
        >
          <CardBody pb={1}>
            <Image
              src={RPS.venue_picture}
              alt={RPS.name + "_Pic"}
              borderRadius="lg"
              w="100%"
              h="160px"
              bgColor={"white"}
            />
            <Flex mt="4">
              <Heading color="white" size="md">
                {RPS.name}
              </Heading>
              <Flex
                direction="row"
                mr="2"
                borderRadius="14"
                ml={"auto"}
                color="white"
                transform="translateY(2px)"
              >
                {RPS.rating != "0" ? RPS.rating : "N/A"}
                <StarIcon ml="2" transform="translateY(2px)" />
              </Flex>
            </Flex>
          </CardBody>
          <Flex
            direction="column"
            justify="space-between"
            width="100%"
            pl="5"
            pr="5"
            pb="5"
          >
            <Text mb={3} textColor={"gray.300"}>
              {RPS.description}
            </Text>
            <NavLink to={`/Branches/${RPS.venueId}`}>
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
  );
};
