import {
    Box,
    Text,
    InputGroup,
    Input,
    InputLeftElement,
  } from "@chakra-ui/react";
  import PlaceTypes from "../components/PlaceTypes";
  import Cards from "../components/Card";
  import Header from "../components/Header";
  import Search from "../components/Search";
  import index from "../../../theme/foundations/index";
  import SavedLocationCard from "../components/SavedLocationCard";
  import RecommendLocation from "../components/RecommendLocation";
import GoogleMapComponent from "../components/GoogleMapComponent";
  
  export const Bars = () => {
    const apiKey = "";
  
    const center = { lat: 13.6513, lng: 100.4964 };
    const zoom = 12;
  
    return (
      <Box>
        <Header />
        <Text
          fontSize={index.textStyles.h1.fontSize}
          fontWeight={index.textStyles.h1.fontWeight}
          color={index.colors.white}
          m={2}
        >
          Recommended Locations
        </Text>
        <Box
    display="flex"
    overflowX="auto"
    whiteSpace="nowrap"
    paddingRight={4}
    maxWidth="1500px"
  >
          <RecommendLocation
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WVAS29MBwowjBkkTA234c8Wmirp_2Dn0JO0oPhtibBew-6Rq"
            name="ABCC"
            description="lorem"
          />
          <RecommendLocation
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WVAS29MBwowjBkkTA234c8Wmirp_2Dn0JO0oPhtibBew-6Rq"
            name="ABCC"
            description="lorem"
          />
          <RecommendLocation
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WVAS29MBwowjBkkTA234c8Wmirp_2Dn0JO0oPhtibBew-6Rq"
            name="ABCC"
            description="lorem"
          />
          <RecommendLocation
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WVAS29MBwowjBkkTA234c8Wmirp_2Dn0JO0oPhtibBew-6Rq"
            name="ABCC"
            description="lorem"
          />
        </Box>
  
        <br/>
        <Search />
        <PlaceTypes />
        <GoogleMapComponent />
        <br />
        <Cards
        // id={1}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WVAS29MBwowjBkkTA234c8Wmirp_2Dn0JO0oPhtibBew-6Rq"
        name="ABCC"
        description="lorem"
      />
      </Box>
    );
  };
  