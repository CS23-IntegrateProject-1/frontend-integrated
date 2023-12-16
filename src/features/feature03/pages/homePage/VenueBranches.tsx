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

interface VenueฺฺBranchPageData {
  id: number;
  branchId: number;
  venueId: number;
  branch_name: string;
  name: string;
  rating: string;
}

export const VenueBranches = () => {
  
  const { venueId } = useParams();
  const {
    isLoading: venueBranchPageLoading,
    isError: venueBranchPageError,
    data: venueBranchPageData,
  } = useQuery<VenueฺฺBranchPageData[]>({
    queryKey: ["getVenBranchPage"],
    queryFn: async () => {
      const { data } = await Axios.get(`/feature3/venBranchPage/${venueId}`);
      return data;
    },
  });

  if (venueBranchPageLoading) {
    return (
      <span>
        <FullPageLoader />
      </span>
    );
  }

  if (venueBranchPageError) {
    return <span>An error occurred: </span>;
  }
  console.log(venueBranchPageData);


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
        {venueBranchPageData?.length === 0 ? (
          <Card
            minW={{ base: "250px", lg: "350px" }}
            width="sm"
            borderRadius="2xl"
            border="3px solid white"
            bg="none"
            
            mb={8}
          >
            <CardBody>
              <Stack my="4" spacing="3">
                <Flex direction="row" justify="space-between" align="center">
                  <Heading color="white" size="md">
                    NO BRANCH
                  </Heading>
                  <Flex
                    direction="row"
                    mr="2"
                    borderRadius="14"
                    color="white"
                  >
                    {"N/A"}
                    <StarIcon ml="2" transform="translateY(2px)" />
                  </Flex>
                </Flex>
              </Stack>
            </CardBody>
          </Card>
        ) : (
          venueBranchPageData?.map((venueD) => (
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
                    <Flex
                      direction="row"
                      mr="2"
                      borderRadius="14"
                      color="white"
                      key={venueD.branchId}
                    >
                      {venueD.rating != "0" ? venueD.rating : "N/A"}
                      <StarIcon ml="2" transform="translateY(2px)" />
                    </Flex>
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
                <NavLink to={`/VenueDetail/${venueD.branchId}`}>
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
          ))
        )}

      </Box>
    </Box>
  );
};
