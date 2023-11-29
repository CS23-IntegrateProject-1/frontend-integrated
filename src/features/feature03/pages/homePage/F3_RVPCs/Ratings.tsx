import { Box, Flex, Text } from "@chakra-ui/react";
import { StarGraph } from "./StarGraph";


export const Ratings = () => {

  // const {
  //   isLoading: venueXRateLoading,
  //   isError: venueXRateError,
  //   data: venueXRateData,
  // } = useQuery<VenueXRate[]>({
  //   queryKey: ["getVenueXRates"],
  //   queryFn: async () => {
  //     const { data } = await Axios.get("/feature3/venXRate");
  //     return data;
  //   },
  // });

  // if (venueLoading || venueXRateLoading) {
  //   return (
  //     <span>
  //       <FullPageLoader />
  //     </span>
  //   );
  // }

  // if (venueError || venueXRateError) {
  //   return <span>An error occurred: </span>;
  // }




  return (
    <Box width={"100%"} pb="30px">
      <Text fontSize={"20px"} fontWeight="bold">
        Ratings
      </Text>
      <Box
        mt="1"
        backgroundColor="brand.200"
        borderRadius="5"
        p="4"
        display={"flex"}
        justifyContent={"center"}
      >
        <Flex direction="row" align="center" justify="space-between" w="auto">
          <Flex direction="column" align="center" mr="8" ml="4">
            <Text fontSize="250%">4.7</Text>
            <Text fontSize="80%">2934 reviews</Text>
          </Flex>
          <StarGraph />
        </Flex>
      </Box>
    </Box>
  );
};
