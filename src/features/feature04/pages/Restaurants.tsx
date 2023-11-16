import { Box, Text } from "@chakra-ui/react";
import PlaceTypes from "../components/PlaceTypes";
import Cards from "../components/Card";
import Search from "../components/Search";
import GoogleMapComponent from "../components/Maps/GoogleMapComponent"; // Correct import statement
import Header from "../components/Header";
import RecommendLocation from "../components/RecommendLocation";
import index from "../../../theme/foundations/index";

export const Maps = () => {

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
      <br />
      <Search />
      <PlaceTypes />
      {/* Include the Map component with the required props */}
      <GoogleMapComponent type="restaurant"/>

      {/* Correct component name */}
      <Search />
      <Cards
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WVAS29MBwowjBkkTA234c8Wmirp_2Dn0JO0oPhtibBew-6Rq"
        name="ABCC"
        description="lorem"
      />
    </Box>
  );
};

export default Maps;
