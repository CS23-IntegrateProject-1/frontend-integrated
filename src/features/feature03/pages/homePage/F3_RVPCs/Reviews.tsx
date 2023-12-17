import { Box, Flex, Text, Divider } from "@chakra-ui/react";
import { IStarSort, StarSort } from "./StarSort";
import { StarIcon } from "@chakra-ui/icons";

import { useQuery } from "@tanstack/react-query";
import { Axios } from "../../../../../AxiosInstance";
import { FC, useState } from "react";
import { useParams } from "react-router-dom";

interface reviewsData {
  id: number;
  userId: number;
  username: string;
  branchId: number;
  venueReviewId: number;
  rating: string;
  review: string;
  date_added: string;
  review_type: string;
}

export const Reviews: FC = () => {
  const branchId = useParams<{ branchId: string }>();
  const [reviewFilter, setReviewFilter] = useState<IStarSort>({
    reviewStars: "",
    reviewTypes: ""
  })

  const {
    // isLoading: reviewsLoading,
    isError: reviewsError,
    data: reviewsData,
  } = useQuery<reviewsData[]>({
    queryKey: ["getReviews", branchId.branchId, reviewFilter.reviewStars, reviewFilter.reviewTypes],
    queryFn: async () => {
      const { data } = await Axios.get(
        `/feature3/Reviews/${branchId.branchId}?reviewStars=${reviewFilter.reviewStars}&reviewTypes=${reviewFilter.reviewTypes}`
      );
      return data;
    },
    keepPreviousData: true
  });

  // if (reviewsLoading) {
  //   return (
  //     <span>
  //       <FullPageLoader />
  //     </span>
  //   );
  // }

  if (reviewsError) {
    return <span>An error occurred: </span>;
  }
  // console.log(reviewsData);

  return (
    <Box width={"100%"}>
      <Text fontSize={"20px"} fontWeight="bold">
        Reviews
      </Text>
      <StarSort reviewFilter={reviewFilter} setReviewFilter={setReviewFilter}/>
      <Divider
        pt={"20px"}
        borderBottomWidth="3px"
        borderColor={"brand.100"}
        opacity={"100%"}
      />
      <Flex direction="column" pt={"20px"}>
        {(reviewsData || []).map((reviews, index: number) => (
          <Box key={index} pb={"20px"}>
            <Box display={"flex"}>
              <Box width={"80%"}>
                <Text fontWeight="bold">
                  {reviews.username} |{" "}
                  <Text as="span" textColor={"red"}>
                    {reviews.review_type}
                  </Text>
                </Text>
                <Flex color={"brand.100"} alignItems={"center"}>
                  <StarIcon mr={"6px"} />
                  <Text mt={"1.5px"}>{reviews.rating}</Text>
                </Flex>
                <Text py={"15px"} textColor={"grey.200"}>
                  {reviews.review}
                </Text>
              </Box>
              <Box textColor={"grey.200"} ml={"auto"}>
                <Text fontSize="15px">
                  {reviews.date_added.substring(0, 10)}
                </Text>
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
