import { Box, Text, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { SavedPlacesSlide } from "./SavedPlacesSlide";
import { Axios } from "../../../../AxiosInstance";
import { useQuery } from "@tanstack/react-query";

interface SavedPlaceProps {
  id: number;
  venueId: number;
  rating: number;
  userId: number;
  Venue: {
    description: string;
    name: string;
    venue_picture: string;
  };
}

const fetchSavedPlaces = async () => {
  const res = await Axios.get("/feature11/fetchUserSavedPlace");
  console.log(res.data);
  return res.data;
};

export const SavedPlacesPage = () => {
  const savedPlaces = useQuery({
    queryKey: ["savedPlaces"],
    queryFn: fetchSavedPlaces,
  });

  console.log(savedPlaces.data);

  return (
    <>
      <Flex pt={5} alignItems="flex-end" mr={{ base: "30px" }}>
        <Text fontSize={{ base: "25px", lg: "35px" }} fontWeight="bold"></Text>
        <NavLink to="/RecommendedPlaces" style={{ marginLeft: "auto" }}>
          <Text
            fontSize={{ base: "15px", lg: "20px" }}
            color="grey.100"
            textDecorationLine="underline"
            _hover={{ textColor: "white" }}
            display={{ sm: "none", base: "flex" }}
          >
            Filter
          </Text>
        </NavLink>
      </Flex>
      <Box
      
        // display={"flex"}
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
        // width={{ base: "100%" }}
        // rowGap={{ base: "20px" }}
        overflow={"scroll"}
      >
        {savedPlaces.data?.map((savedPlace: SavedPlaceProps) => (
          <SavedPlacesSlide
            key={savedPlace.id}
            id={savedPlace.id}
            venueId={savedPlace.venueId}
            rating={savedPlace.rating}
            userId={savedPlace.userId}
            Venue={savedPlace.Venue}
          />
        ))}
      </Box>
    </>
  );
};
