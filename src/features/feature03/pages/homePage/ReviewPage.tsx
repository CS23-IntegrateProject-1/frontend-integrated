import { Box, Flex } from "@chakra-ui/react";
import { Ratings } from "./F3_RVPCs/Ratings";
import { Reviews } from "./F3_RVPCs/Reviews";

import { useQuery } from "@tanstack/react-query";
import { Axios } from "../../../../AxiosInstance";


export const ReviewPage = () => {

  const {
    isLoading: reviewsLoading,
    isError: reviewsError,
    data: reviewsData,
  } = useQuery<reviewsData[]>({
    queryKey: ["getReviews"],
    queryFn: async () => {
      const { data } = await Axios.get(
        `/feature3/reviews/${0}`
      );
      return data;
    },
  });

  if (reviewsLoading) {
    return (
      <span>
        <FullPageLoader />
      </span>
    );
  }

  if (reviewsError) {
    return <span>An error occurred: </span>;
  }
  
  return (
    <Flex justify="center">
      <Box
        width={"100%"}
        px={{ base: "0", lg: "300" }}
      >
        <Ratings />
        <Reviews />
      </Box>
    </Flex>
  );
};
