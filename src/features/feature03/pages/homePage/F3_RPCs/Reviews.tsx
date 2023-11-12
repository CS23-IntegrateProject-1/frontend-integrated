import { NavLink } from "react-router-dom";
import { Box, Flex, Text, Grid, Icon, Center, Divider } from "@chakra-ui/react";
import { StarSort } from "./StarSort";
import reviewsData from "../../ReviewsMock.json";

interface reviewProps {
  id: number;
  name: string;
  star: number;
  description: string;
  time: string;
}

const divide = {
  py: "2",
  borderBottomWidth: "1.5px",
  borderColor: "white",
  opacity: "100%",
};

export const Reviews = () => {
  const reviews: reviewProps[] = reviewsData;
  return (
    <Box width={"100%"}>
      Reviews
      <StarSort />
      <Divider sx={divide} />
      <Flex direction="column">
        <Flex direction="row" justify="space-between" mt="5" height="100px">
          <Flex direction="column" align="stretch">
            <Flex direction="column" backgroundColor="brand.200">
              <Box>Review user</Box>
              <Box>Stars</Box>
            </Flex>
            <Flex opacity="0.8" backgroundColor="brand.300">
              Review desc
            </Flex>
          </Flex>
          <Box backgroundColor="brand.100">Review time</Box>
        </Flex>
        <Divider sx={divide} />
      </Flex>
    </Box>
  );
};
