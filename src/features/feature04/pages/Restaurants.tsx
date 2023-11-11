import { Box } from "@chakra-ui/react";
import PlaceTypes from "../components/PlaceTypes";
import Cards from "../components/Card";
import Search from "../components/Search";
import GoogleMapComponent from "../components/GoogleMapComponent"; // Correct import statement

export const Maps = () => {
  return (
    <Box>
      <PlaceTypes />
      {/* Include the Map component with the required props */}
      <GoogleMapComponent
        center={{ lat: 14.6513, lng: 100.4964 }}
        zoom={15}
        locations={[{ lat: 14.6513, lng: 100.4964, name: "KMUTT" }]}
      />

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
