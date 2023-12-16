import { NavLink } from "react-router-dom";
import { SliderAdvertisement } from "./F3_HPCs/SliderAdvertisement";
import { Footer_HomePage } from "./F3_HPCs/Footer_HomePage";
import { ButtonPenta } from "./F3_HPCs/ButtonPenta";
import { ButtonQuad } from "./F3_HPCs/ButtonQuad";
import { RecommendSlide } from "./F3_HPCs/RecommendSlide";
import { PromoSlide } from "./F3_HPCs/PromoSlide";
import {
  Box,
  Text,
  Image,
  Flex,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Advertisement } from "./F3_HPCs/Advertisement";
import { ReviewModalDel } from "../../external/reviewModalDel";
import { ReviewModalRes } from "../../external/reviewModalRes";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Axios } from "../../../../AxiosInstance"; 
import { FullPageLoader } from "../../../../components/Loader/FullPageLoader";
import HomePageSearchBar from "../../../../components/homepage/SearchBar"; 

interface VenueRecommended {
  id: number;
  venueId: number;
  name: string;
  description: string;
  category: string;
  capacity: string;
  location: string;
  score: string;
  website_url: string;
}

export const HomePage = () => {
  const modal1 = useDisclosure();
  const modal2 = useDisclosure();
  const modal3 = useDisclosure();
  useEffect(() => {
    const isAdAvailable = sessionStorage.getItem("is_ads_available") 
    if(isAdAvailable == null) {  
      modal1.onOpen(); 
      sessionStorage.setItem("is_ads_available", "false")
    }
  }, []);

  return (
    <Box width={"100%"}>
      <Box pb={3}>
        <SliderAdvertisement />
      </Box>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <ButtonPenta />
      <ButtonQuad />
      <Button onClick={modal1.onOpen} mr="5" />
      <Advertisement isOpen={modal1.isOpen} onClose={modal1.onClose} />
      <Button onClick={modal2.onOpen} mr="5"/>
      <ReviewModalDel isOpen={modal2.isOpen} onClose={modal2.onClose} />
      <Button onClick={modal3.onOpen} mr="5"/>
      <ReviewModalRes isOpen={modal3.isOpen} onClose={modal3.onClose} />
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Text fontSize={{ base: "30px", lg: "40px" }} fontWeight="bold">
        Explore Venues
      </Text>
      <Box display="flex">
        <HomePageSearchBar/>
      </Box>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Box pt="10px" display={"block"}>
        <Text fontSize={{ base: "25px", lg: "35px" }} fontWeight="bold" pt={1}>
          Maps
        </Text>
        <NavLink to="/map">
          <Image
            src="https://www.localguidesconnect.com/t5/image/serverpage/image-id/577026iC349F71B836713F5/image-size/large?v=v2&px=999"
            alt="Map_Pic not load"
            borderRadius="xl"
            w="100%"
            h={{base:"125px", lg:"300px"}}
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
