import { NavLink } from "react-router-dom";
import { Box, Flex, Text, Grid, Icon, Center } from "@chakra-ui/react";

export const Reviews = () => {
  return (
    <Box width={"100%"}>
      Reviews
      <Flex>Reviews star sort</Flex>
      <Box>
        <Box>
          <Box>
            <Box>Review user</Box>
            <Box>Stars</Box>
          </Box>
          <Box>Review desc</Box>
        </Box>
        <Box>Review time</Box>
      </Box>
    </Box>
  );
};
