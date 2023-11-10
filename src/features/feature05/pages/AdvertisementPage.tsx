import { Box } from "@chakra-ui/react";
import { AdvertisementCard } from "../components/AdvertisementCard";

export const AdvertisementPage = () => {

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
    >
      <AdvertisementCard />

    </Box>
  );
};
