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
  branch_name: string;
  name: string;
  description: string;
  category: string;
  capacity: string;
  location: string;
  score: string;
  website_url: string;
}

interface BranchRateData {
  id: number;
  branchId: number;
  venueId: number;
  rating: string;
}

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

  const {
    isLoading: branchRateLoading,
    isError: branchRateError,
    data: branchRateData,
  } = useQuery<BranchRateData[]>({
    queryKey: ["getBranchRates"],
    queryFn: async () => {
      const { data } = await Axios.get("/feature3/branchRate");
      return data;
    },
  });

  if (venueBLoading || branchRateLoading) {
    return (
      <span>
        <FullPageLoader />
      </span>
    );
  }

  if (venueBError || branchRateError) {
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
        {(venueBData || [])
          .filter((v) => String(v.venueId) == venueId)
          .map((venueD) => (
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
                <Stack mt="4" spacing="3">
                  <Flex direction="row" justify="space-between" align="center">
                    <Heading color="white" size="md">
                      {venueD.branch_name}
                    </Heading>
                    {(branchRateData || []).filter((v) => String(v.branchId) === String(venueD.branchId)).map((venueDR) => (
                        <Flex
                          direction="row"
                          mr="2"
                          borderRadius="14"
                          color="white"
                          key={venueDR.branchId}
                        >
                          {venueDR.rating}
                          <StarIcon ml="2" transform="translateY(2px)" />
                        </Flex>
                      ))}
                  </Flex>
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
                <NavLink to={`/venueDetail/${venueD.branchId}`}>
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
