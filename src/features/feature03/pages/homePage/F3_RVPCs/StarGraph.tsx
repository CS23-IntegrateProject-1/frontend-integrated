import { Box, Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

import { useQuery } from "@tanstack/react-query";
import { Axios } from "../../../../../AxiosInstance";
import { FullPageLoader } from "../../../../../components/Loader/FullPageLoader";
import { FC } from "react";
import { useParams } from "react-router-dom";


interface ReviewsBranchOverAll {
  id: number;
  branchId: number;
  venueReviewId: number;
  rating: number;
  total_reviews: number;
}

const starGraph = {
  direction: "row",
  mb: "2",
  align: "center",
};

export const StarGraph = () => {

  const { branchId } = useParams();

  const {
    isLoading: reviewsBranchOverAllLoading,
    isError: reviewsBranchOverAllError,
    data: reviewsBranchOverAllData,
  } = useQuery<ReviewsBranchOverAll[]>({
    queryKey: ["getReviewsBranchOverAll"],
    queryFn: async () => {
      const { data } = await Axios.get(`/feature3/StarGraph/${branchId}`);
      return data;
    },
  });

  if (reviewsBranchOverAllLoading) {
    return (
      <span>
        <FullPageLoader />
      </span>
    );
  }

  if (reviewsBranchOverAllError) {
    return <span>An error occurred: </span>;
  }


  return (
    <Flex direction="column" align="flex-start" mt={2}>
      {reviewsBranchOverAllData.map((RBOA, index) => (
      <Box key={index}>
      <Flex sx={starGraph}>
        <StarIcon boxSize="3" />
        <StarIcon boxSize="3" />
        <StarIcon boxSize="3" />
        <StarIcon boxSize="3" />
        <StarIcon boxSize="3" />
        <Box
          backgroundColor="white"
          w="120px"
          h="9px"
          ml="0.5rem"
          borderRadius="10"
          mt="0.5"
        />
      </Flex>
      <Flex sx={starGraph}>
        <StarIcon boxSize="3" />
        <StarIcon boxSize="3" />
        <StarIcon boxSize="3" />
        <StarIcon boxSize="3" />
        <Box
          backgroundColor="white"
          w={RBOA.rating}
          h="9px"
          ml="1.25rem"
          borderRadius="10"
          mt="0.5"
        />
      </Flex>
      <Flex sx={starGraph}>
        <StarIcon boxSize="3" />
        <StarIcon boxSize="3" />
        <StarIcon boxSize="3" />
        <Box
          backgroundColor="white"
          w="40px"
          h="9px"
          ml="2rem"
          borderRadius="10"
          mt="0.5"
        />
      </Flex>
      <Flex sx={starGraph}>
        <StarIcon boxSize="3" />
        <StarIcon boxSize="3" />
        <Box
          backgroundColor="white"
          w="20px"
          h="9px"
          ml="2.75rem"
          borderRadius="10"
          mt="0.5"
        />
      </Flex>
      <Flex sx={starGraph}>
        <StarIcon boxSize="3" />
        <Box
          backgroundColor="white"
          w="30px"
          h="9px"
          ml="3.5rem"
          borderRadius="10"
          mt="0.5"
        />
      </Flex>
      </Box>
      ))}
    </Flex>
  );
};
