import { Box, Flex, Text, Divider } from "@chakra-ui/react";
import { StarSort } from "./StarSort";
import { StarIcon } from "@chakra-ui/icons";

import { useQuery } from "@tanstack/react-query";
import { Axios } from "../../../../../AxiosInstance";
import { FullPageLoader } from "../../../../../components/Loader/FullPageLoader";
import { FC } from "react";
import { useParams } from "react-router-dom";

interface reviewsData {
  id: number;
  venueReviewId: number;
  userId: number;
  branchId: number;
  rating: string;
  review: string;
  review_type: string;
  date_added: string;
}

export const Reviews: FC = () => {
  const branchId = useParams<{ branchId: string }>();
  
  const {
    isLoading: reviewsLoading,
    isError: reviewsError,
    data: reviewsData,
  } = useQuery<reviewsData[]>({
    queryKey: ["getReviews"],
    queryFn: async () => {
      const { data } = await Axios.get(`/feature3/reviews/${branchId.branchId}`);
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
  // console.log(reviewsData);
  
  return (
    <Box width={"100%"}>
      <Text fontSize={"20px"} fontWeight="bold">
        Reviews
      </Text>
      <StarSort />
      <Divider
        pt={"20px"}
        borderBottomWidth="3px"
        borderColor={"brand.100"}
        opacity={"100%"}
      />
      <Flex direction="column" pt={"20px"}>
        {reviewsData.map((reviews, index: number) => (
          <Box key={index} pb={"20px"}>
            <Box display={"flex"}>
              <Box width={"80%"}>
                <Text fontWeight="bold">{reviews.userId}USERNAME | <Text as ="span" textColor={"red"}>{reviews.review_type}</Text></Text>
                <Flex color={"brand.100"} alignItems={"center"}>
                  <StarIcon mr={"6px"}/>
                  <Text mt={"1.5px"}>{reviews.rating}</Text>
                </Flex>
                <Text py={"15px"} textColor={"grey.200"}>
                  {reviews.review}
                </Text>
              </Box>
              <Box textColor={"grey.200"} ml={"auto"}>
                {reviews.date_added.substring(0,10)}
              </Box>
            </Box>
            <Divider
              borderBottomWidth="2.5px"
              borderColor={"brand.100"}
              opacity={"100%"}
            />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
