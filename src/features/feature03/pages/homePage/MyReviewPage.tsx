import { Box, Flex, Text, Divider } from "@chakra-ui/react";
import { IStarSort, StarSort } from "./F3_RVPCs/StarSort";
import { StarIcon } from "@chakra-ui/icons";
import { useQuery } from "@tanstack/react-query";
import { Axios } from "../../../../AxiosInstance";
import {  useState } from "react";

interface MyReviewsData {
  name: string;
  description: string;
  category: string;
  venueId: number;
  branchId: number;
  branch_name: string;
  userId: number;
  rating: number;
  review: string;
  date_added: string;
  venueReviewId: number;
  review_type: string;
}

export const MyReviews = () => {
  

  const [reviewFilter, setReviewFilter] = useState<IStarSort>({
    reviewStars: "",
    reviewTypes: ""
  })

  const {
    isError: myReviewsError,
    data: myReviewsData,
  } = useQuery<MyReviewsData[]>({
    queryKey: ["getMyReviews", reviewFilter.reviewStars, reviewFilter.reviewTypes],
    queryFn: async () => {
      const { data } = await Axios.get(`/feature3/MyReviews?reviewStars=${reviewFilter.reviewStars}&reviewTypes=${reviewFilter.reviewTypes}`);
      return data;
    },
    keepPreviousData: true
  });


  if (myReviewsError) {
    return <span>An error occurred: </span>;
  }

  // console.log(myReviewsData);
  return (
    <Box width={"100%"} px={{ base: "0", lg: "300" }}>
      <Text fontSize={{ base: "40px", lg: "50px" }} fontWeight="bold">
        My Reviews
      </Text>
      <StarSort reviewFilter={reviewFilter} setReviewFilter={setReviewFilter}/>
      <Divider
        pt={"20px"}
        borderBottomWidth="3px"
        borderColor={"brand.100"}
        opacity={"100%"}
      />
      <Flex direction="column" pt={"20px"}>
        {(myReviewsData || []).map((MRD) => {

              return (
                <Box key={MRD.venueReviewId} pb={"20px"}>
                  <Box display={"flex"}>
                    <Box width={"80%"}>
                      <Text fontWeight="bold">
                        {MRD.name} |{" "}
                        <Text as="span" textColor={"white"}>
                          {MRD.branch_name}
                        </Text>
                      </Text>
                      <Text fontWeight="bold">{MRD.category}</Text>
                      <Text fontWeight="bold" textColor={"red"}>{MRD.review_type}</Text>
                      <Flex color={"brand.100"} alignItems={"center"}>
                        <StarIcon mr={"6px"} />
                        <Text mt={"1.5px"}>{MRD.rating}</Text>
                      </Flex>
                      <Text py={"15px"} textColor={"grey.200"}>
                        {MRD.review}
                      </Text>
                    </Box>
                    <Box textColor={"grey.200"} ml={"auto"}>
                      {MRD.date_added.substring(0, 10)}
                    </Box>
                  </Box>
                  <Divider
                    borderBottomWidth="2.5px"
                    borderColor={"brand.100"}
                    opacity={"100%"}
                  />
                </Box>
              );
            }
          )}
      </Flex>
    </Box>
  );
};
