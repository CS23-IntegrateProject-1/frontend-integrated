import {
  Box,
  Text,

  Flex,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { SavedPlacesSlide } from "./SavedPlacesSlide";


export const SavedPlacesPage = () => {
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
            display={{ sm: "flex", base: "none" }}
          >
            See all
          </Text>
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
        display={"flex"}
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
        // bgColor={"black"}
        width={{ base: "100%" }}
        rowGap={{ base: "20px" }}
        // columnGap={{ sm: "20px" }}
        overflow={"scroll"}
        // flexWrap={"wrap"}
      >
        <SavedPlacesSlide />
        <SavedPlacesSlide />
        <SavedPlacesSlide />
        <SavedPlacesSlide />
        <SavedPlacesSlide />
      </Box>
    </>
  );
};
