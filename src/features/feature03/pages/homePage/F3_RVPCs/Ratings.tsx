import { Box, Flex, Text } from "@chakra-ui/react";
import { StarGraph } from "./StarGraph";

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


export const Ratings: FC = () => {
  const { branchId } = useParams();

  const {
    isLoading: reviewsBranchOverAllLoading,
    isError: reviewsBranchOverAllError,
    data: reviewsBranchOverAllData,
  } = useQuery<ReviewsBranchOverAll[]>({
    queryKey: ["getReviewsBranchOverAll"],
    queryFn: async () => {
      const { data } = await Axios.get(`/feature3/ReviewsBranchOverAll/${branchId}`);
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
    <Box width={"100%"} pb="30px">
      <Text fontSize={"20px"} fontWeight="bold">
        Ratings
      </Text>
      {reviewsBranchOverAllData.map((RBOA, index) => (
      <Box
        mt="1"
        backgroundColor="brand.200"
        borderRadius="5"
        p="4"
        display={"flex"}
        justifyContent={"center"}
        key={index}
      >
        <Flex direction="row" align="center" justify="space-between" w="auto">
          <Flex direction="column" align="center">
            <Text color={"#fcda12"} fontSize={{base:"2xl", lg:"4xl"}}>{RBOA.rating} <StarIcon mb={{base:2 ,lg:3}}/></Text>
            <Text color={"#fcda12"} fontSize={{base:"md", lg:"xl"}}>{RBOA.total_reviews} reviews</Text>
          </Flex>
          <Box mx={{base:15, lg:50}}/>
          <StarGraph />
        </Flex>
      </Box>
      ))}
    </Box>
  );
};
