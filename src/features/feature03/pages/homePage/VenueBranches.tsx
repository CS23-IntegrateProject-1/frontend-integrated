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
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useQuery } from "@tanstack/react-query";
import { Axios } from "../../../../AxiosInstance";
import { FullPageLoader } from "../../../../components/Loader/FullPageLoader";
import { useParams } from "react-router-dom";

interface BranchVenueData {
  id: number;
  venueId: number;
  branchId: number;
  branchName: string;
  name: string;
  description: string;
  category: string;
  capacity: string;
  location: string;
  score: string;
  website_url: string;
}

// interface VenueRate {
//   id: number;
//   venueId: number;
//   rating: string;
// }

export const VenueBranches = () => {

  const { venueId } = useParams();

  const {
    isLoading: venueBLoading,
    isError: venueBError,
    data: venueBData,
  } = useQuery<BranchVenueData[]>({
    queryKey: ["getBranch"],
    queryFn: async () => {
      const { data } = await Axios.get("/feature3/branchVenue");
      return data;
    },
  });


  // const {
  //   isLoading: venueRateLoading,
  //   isError: venueRateError,
  //   data: venueRateData,
  // } = useQuery<VenueRate[]>({
  //   queryKey: ["getVenueRates"],
  //   queryFn: async () => {
  //     const { data } = await Axios.get("/feature3/venue-ratings");
  //     return data;
  //   },
  // });

  if ( venueBLoading) {
    return (
      <span>
        <FullPageLoader />
      </span>
    );
  }

  if (venueBError ) {
    return <span>An error occurred: </span>;
  }

  return (
    <Box width={"100%"} px={{ base: "none", lg: "30px" }}>
        <Box
          display="grid"
          width="100%"
          gridTemplateColumns={{ lg: "repeat(3, 1fr)", base: "repeat(1, 1fr)" }}
          overflow="hidden"
          mt={{ base: "3", lg: "8" }}
          px={{ base: "none", lg: "10px" }}
          justifyItems={"center"}
          >
          {(venueBData || []).filter(v => String(v.venueId) == venueId).map((venueD) => (
            <Card
              minW={{ base: "250px", lg: "350px" }}
              width="sm"
              borderRadius="2xl"
              border="3px solid white"
              bg="none"
              key={venueD.venueId}
              mb={8}
              >
              <CardBody>
                <Image
                  src={venueD.pic}
                  alt={venueD.name}
                  borderRadius="lg"
                  w="100%"
                  h="160px"
                  bgColor={"white"}
                />
                <Stack mt="4" spacing="3">
                  <Flex direction="row" justify="space-between" align="center">
                    <Heading color="white" size="md">
                      {venueD.name}
                    </Heading>
                    <Flex
                      direction="row"
                      p="1.5"
                      mr="2"
                      borderRadius="14"
                      color="white"
                      >
                      5
                      <StarIcon ml="1" transform="translateY(2px)" />
                    </Flex>
                  </Flex>
                  <Text color="grey.200">{venueD.description}</Text>
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
                <NavLink to="/venuevenue-branch/:branchId">
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
