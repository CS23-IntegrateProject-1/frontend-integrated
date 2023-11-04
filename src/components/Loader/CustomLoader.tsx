import { Spinner, Box } from "@chakra-ui/react";
import { FC } from "react";

interface LoaderProps {
  height?: string; // ex. 100px
  size?: string; // xs, sm, md, lg, xl
  thickness?: string; // ex. 4px
}

export const CustomLoader: FC<LoaderProps> = ({ height, size, thickness }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      h={height ? height : "100px"}
      // h={"100vh"} // You can adjust the height as needed
    >
      <Spinner
        thickness={thickness ? thickness : "4px"}
        speed="0.65s"
        emptyColor="gray.200" // Adjust the color as needed
        color="brand.500" // Use your brand color here
        size={size ? size : "xl"} // Adjust the size as needed
      />
    </Box>
  );
};
