import { Spinner, Box } from "@chakra-ui/react";

export const FullPageLoader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      h={{base:`calc(100vh - 102px)`, md:`calc(100vh - 134px)`}}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="brand.500" 
        size="xl"
      />
    </Box>
  );
};
