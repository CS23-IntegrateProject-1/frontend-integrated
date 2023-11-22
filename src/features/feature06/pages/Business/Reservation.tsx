import { BusinessReservationCard } from "../../components/BusinessReservationCard";
import { Box, Button } from "@chakra-ui/react";

export const Reservation = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Box
        display={"flex"}
        flexDirection={"row"}
        width={"319px"}
        justifyContent={"space-between"} // Aligns buttons at both ends
      >
        <Button
          display={"flex"}
          height={"40px"}
          width={"200px"}
          background={"#A533C8"}
          color={"#F6F6F6"}
          fontWeight={"600"}
        >
          Walk-in customer
        </Button>
        <Button
          background={"none"}
          color={"F6F6F6"}
          textDecoration={"underline"}
          fontWeight={"400"}
        >
          Filter
        </Button>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        marginTop={"32px"}
      >
        <BusinessReservationCard status="Check_in" />
      </Box>
    </Box>
  );
};
