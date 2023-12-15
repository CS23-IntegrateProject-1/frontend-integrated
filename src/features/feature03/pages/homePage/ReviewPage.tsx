import { Box, Flex } from "@chakra-ui/react";
import { Ratings } from "./F3_RVPCs/Ratings";
import { Reviews } from "./F3_RVPCs/Reviews";



export const ReviewPage = () => {

  
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
