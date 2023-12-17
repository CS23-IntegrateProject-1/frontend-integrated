import { Box, Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

import { useQuery } from "@tanstack/react-query";
import { Axios } from "../../../../../AxiosInstance";
import { FullPageLoader } from "../../../../../components/Loader/FullPageLoader";
import { FC } from "react";
import { useParams } from "react-router-dom";

interface StarGraphData {
  id: number;
  branchId: number;
  rating: number;
  total_per_rating: number;
  total_ratings_per_branch: number;
}

const starGraph = {
  direction: "row",
  mb: "2",
  align: "center",
};

export const StarGraph = () => {
  const { branchId } = useParams();

  const {
    isLoading: starGraphLoading,
    isError: starGraphError,
    data: starGraphData,
  } = useQuery<StarGraphData[]>({
    queryKey: ["getStarGraphData"],
    queryFn: async () => {
      const { data } = await Axios.get(`/feature3/StarGraph/${branchId}`);
      return data;
    },
  });

  if (starGraphLoading) {
    return (
      <span>
        <FullPageLoader />
      </span>
    );
  }

  if (starGraphError) {
    return <span>An error occurred: </span>;
  }

  return (
    <Flex direction="column" align="flex-start" mt={2}>
      <Box>
        {starGraphData.map(
          (SG, index) =>
            SG.rating === 5 && (
              <Flex sx={starGraph} key={index}>
                <StarIcon boxSize="3" />
                <StarIcon boxSize="3" />
                <StarIcon boxSize="3" />
                <StarIcon boxSize="3" />
                <StarIcon boxSize="3" />
                <Box
                  backgroundColor="white"
                  w={`${
                    (SG.total_per_rating / SG.total_ratings_per_branch) * 300
                  }px`}
                  h="9px"
                  ml="0.5rem"
                  borderRadius="10"
                  mt="0.5"
                />
              </Flex>
            )
        )}
        {starGraphData.map(
          (SG, index) =>
            SG.rating === 4 && (
              <Flex sx={starGraph} key={index}>
                <StarIcon boxSize="3" />
                <StarIcon boxSize="3" />
                <StarIcon boxSize="3" />
                <StarIcon boxSize="3" />
                <Box
                  backgroundColor="white"
                  w={`${
                    (SG.total_per_rating / SG.total_ratings_per_branch) * 300
                  }px`}
                  h="9px"
                  ml="1.25rem"
                  borderRadius="10"
                  mt="0.5"
                />
              </Flex>
            )
        )}
        {starGraphData.map(
          (SG, index) =>
            SG.rating === 3 && (
              <Flex sx={starGraph} key={index}>
                <StarIcon boxSize="3" />
                <StarIcon boxSize="3" />
                <StarIcon boxSize="3" />
                <Box
                  backgroundColor="white"
                  w={`${
                    (SG.total_per_rating / SG.total_ratings_per_branch) * 300
                  }px`}
                  h="9px"
                  ml="2rem"
                  borderRadius="10"
                  mt="0.5"
                />
              </Flex>
            )
        )}
        {starGraphData.map(
          (SG, index) =>
            SG.rating === 2 && (
              <Flex sx={starGraph} key={index}>
                <StarIcon boxSize="3" />
                <StarIcon boxSize="3" />
                <Box
                  backgroundColor="white"
                  w={`${
                    (SG.total_per_rating / SG.total_ratings_per_branch) * 300
                  }px`}
                  h="9px"
                  ml="2.75rem"
                  borderRadius="10"
                  mt="0.5"
                />
              </Flex>
            )
        )}
        {starGraphData.map(
          (SG, index) =>
            SG.rating === 1 && (
              <Flex sx={starGraph} key={index}>
                <StarIcon boxSize="3" />
                <Box
                  backgroundColor="white"
                  w={`${
                    (SG.total_per_rating / SG.total_ratings_per_branch) * 300
                  }px`}
                  h="9px"
                  ml="3.5rem"
                  borderRadius="10"
                  mt="0.5"
                />
              </Flex>
            )
        )}
      </Box>
    </Flex>
  );
};
