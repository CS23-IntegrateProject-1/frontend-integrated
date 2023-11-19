import { NavLink } from "react-router-dom";
import { SearchBar } from "./F3_HPCs/SearchBar";
import { SliderAdvertisement } from "./F3_HPCs/SliderAdvertisement";
import { Footer_HomePage } from "./F3_HPCs/Footer_HomePage";

import { ButtonPenta } from "./F3_HPCs/ButtonPenta";
import { ButtonQuad } from "./F3_HPCs/ButtonQuad";
import { RecommendSlide } from "./F3_HPCs/RecommendSlide";
import { PromoSlide } from "./F3_HPCs/PromoSlide";
import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
        

export const HomePage = () => {
  // const [searchFilter, setSearchFilter] = useState<string>("");
  // const [selectedRestaurant, setSelectedRestaurant] =
  //   useState<RestaurantProps | null>(null);

  return (
    <Box width={"100%"}>
      <Box pb={3}>
        <SliderAdvertisement />
      </Box>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <ButtonPenta />
      <ButtonQuad />
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Text fontSize={{ base: "30px", lg: "40px" }} fontWeight="bold">
        Explore Venues
      </Text>
      <Box display="flex">
        <SearchBar />
        <NavLink to="/map">
          <Box
            _hover={{ color: "brand.100" }}
            pl="15px"
            display={{ base: "block", lg: "none" }}
          >
            <FaMapMarkerAlt fontSize="25px" />
            <Text fontSize="15px" transform="translateX(-3px)">
              Map
            </Text>
          </Box>
        </NavLink>
      </Box>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Box pt="10px" display={{ base: "none", lg: "block" }}>
        <Text fontSize={{ base: "25px", lg: "35px" }} fontWeight="bold" pt={1}>
          Maps
        </Text>
        <NavLink to="/map">
          <Image
            src="https://www.localguidesconnect.com/t5/image/serverpage/image-id/577026iC349F71B836713F5/image-size/large?v=v2&px=999"
            alt="Map_Pic not load"
            borderRadius="xl"
            w="100%"
            h="300px"
            objectFit={"cover"}
          />
        </NavLink>
      </Box>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Flex pt={5} align="center">
        <Text fontSize={{ base: "25px", lg: "35px" }} fontWeight="bold">
          Recommended Places
        </Text>
        <NavLink to="/RecommendedPlaces" style={{ marginLeft: "auto" }}>
          <Text
            fontSize={{ base: "15px", lg: "20px" }}
            color="grey.100"
            textDecorationLine="underline"
            _hover={{ textColor: "white" }}
          >
            See all
          </Text>
        </NavLink>
      </Flex>
      <RecommendSlide />
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Flex pt={5} align="center">
        <Text fontSize={{ base: "25px", lg: "35px" }} fontWeight="bold">
          Promotions
        </Text>
        <NavLink to="/Promotions" style={{ marginLeft: "auto" }}>
          <Text
            fontSize={{ base: "15px", lg: "20px" }}
            color="grey.100"
            textDecorationLine="underline"
            _hover={{ textColor: "white" }}
          >
            See all
          </Text>
        </NavLink>
      </Flex>
      <PromoSlide />
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Footer_HomePage />
    </Box>
  );
};
