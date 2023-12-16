import { Box, Flex, Text, Divider } from "@chakra-ui/react";
import { StarSort } from "./F3_RVPCs/StarSort";
import { StarIcon } from "@chakra-ui/icons";
import { useQuery } from "@tanstack/react-query";
import { Axios } from "../../../../AxiosInstance";
import { FullPageLoader } from "../../../../components/Loader/FullPageLoader";
import { FC } from "react";
import { useParams } from "react-router-dom";

interface MyReviewsData {
  name: string;
  description: string;
  category: string;
  venueId: number;
  Venue_branch: [
    {
      branchId: number;
      venueId: number;
      branch_name: string;
      Venue_reviews: [
        {
          userId: number;
          rating: number;
          review: string;
          date_added: string;
          venueReviewId: number;
          branchId: number;
          review_type: string;
        }
      ];
    }
  ];
}

export const MyReviews: FC = () => {
  const {
    isLoading: myReviewsLoading,
    isError: myReviewsError,
    data: myReviewsData,
  } = useQuery<MyReviewsData[]>({
    queryKey: ["getMyReviews"],
    queryFn: async () => {
      const { data } = await Axios.get(`/feature3/MyReviews`);
      return data;
    },
  });

  if (myReviewsLoading) {
    return (
      <span>
        <FullPageLoader />
      </span>
    );
  }

  if (myReviewsError) {
    return <span>An error occurred: </span>;
  }

  // console.log(myReviewsData);
  return (
    <Box width={"100%"} px={{ base: "0", lg: "300" }}>
      <Text fontSize={{ base: "40px", lg: "50px" }} fontWeight="bold">
        My Reviews
      </Text>
      <StarSort />
      <Divider
        pt={"20px"}
        borderBottomWidth="3px"
        borderColor={"brand.100"}
        opacity={"100%"}
      />
      <Flex direction="column" pt={"20px"}>
        {myReviewsData?.map((branchs, index: number) => {
          if (!branchs) {
            return <></>;
          }

          return branchs.Venue_branch.map((reviews, index: number) => {
            if (!reviews) {
              return <></>;
            }

            return reviews.Venue_reviews.map((review, index: number) => {
              if (!review) {
                return <></>;
              }
              console.log(review);

              return (
                <Box key={index} pb={"20px"}>
                  <Box display={"flex"}>
                    <Box width={"80%"}>
                      <Text fontWeight="bold">
                        {branchs.name} |{" "}
                        <Text as="span" textColor={"white"}>
                          {reviews.branch_name}
                        </Text>
                      </Text>
                      <Text fontWeight="bold">{branchs.category}</Text>
                      <Text fontWeight="bold" textColor={"red"}>{review.review_type}</Text>
                      <Flex color={"brand.100"} alignItems={"center"}>
                        <StarIcon mr={"6px"} />
                        <Text mt={"1.5px"}>{review.rating}</Text>
                      </Flex>
                      <Text py={"15px"} textColor={"grey.200"}>
                        {review.review}
                      </Text>
                    </Box>
                    <Box textColor={"grey.200"} ml={"auto"}>
                      {review.date_added.substring(0, 10)}
                    </Box>
                  </Box>
                  <Divider
                    borderBottomWidth="2.5px"
                    borderColor={"brand.100"}
                    opacity={"100%"}
                  />
                </Box>
              );
            });
          });
        })}
      </Flex>
    </Box>
  );
};
