import { NavLink } from "react-router-dom";
import { Box, Flex, Text, Grid, Icon, Center, Divider } from "@chakra-ui/react";
import { StarSort } from "./StarSort";
import { StarIcon } from "@chakra-ui/icons";
import mockRVF3 from "../../RVF3mock.json";

interface reviewProps {
  id: number;
  name: string;
  star: number;
  description: string;
  time: string;
}

export const Reviews = () => {
  const reviews: reviewProps[] = mockRVF3;
  return (
    <Box width={"100%"}>
      <Text fontSize={"20px"} fontWeight="bold">
        Reviews
      </Text>
      <StarSort />
      <Divider
        pt={"20px"}
        borderBottomWidth="5px"
        borderColor={"brand.100"}
        opacity={"100%"}
      />
      <Flex direction="column" pt={"20px"}>
        {reviews.map((review, index) => (
          <Box key={index} pb={"20px"}>
            <Box display={"flex"}>
              <Box width={"80%"}>
                <Text fontWeight="bold">{review.name}</Text>
                <Flex color={"brand.100"} alignItems={"center"}>
                  <StarIcon mr={"6px"} />
                  <Text mt={"1.5px"}>{review.star}</Text>
                </Flex>
                <Text py={"15px"} textColor={"grey.200"}>
                  {review.description}
                </Text>
              </Box>
              <Box textColor={"grey.200"} ml={"auto"}>
                {review.time} ago
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
