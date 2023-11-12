import { Box } from "@chakra-ui/react";
import { Ratings } from "./F3_RPCs/Ratings";
import { Reviews } from "./F3_RPCs/Reviews";

export const ReviewPage = () => {
  return (
    <Box width={"100%"}>
      <Ratings />
      <Reviews />
    </Box>
  );
};
