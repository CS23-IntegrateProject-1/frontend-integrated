import { Box } from "@chakra-ui/react";
import { Ratings } from "./F3_RVPCs/Ratings";
import { Reviews } from "./F3_RVPCs/Reviews";

export const ReviewPage = () => {
  return (
    <Box width={"100%"} px={{base:"none", lg:"30px"}}>
      <Ratings />
      <Reviews />
    </Box>
  );
};
