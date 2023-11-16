import {
    Box,
    Text,
    SimpleGrid
  } from "@chakra-ui/react";
  import PlaceTypes from "../components/PlaceTypes";
  import React, { useEffect, useState } from "react";
  import Cards from "../components/Card";
  import Header from "../components/Header";
  import index from "../../../theme/foundations/index";
  import SavedLocationCard from "../components/SavedLocationCard";
  import RecommendLocation from "../components/RecommendLocation";
import GoogleMapComponent from "../components/Maps/GoogleMapComponent";
import SearchBar from "../components/Search";
  
interface LocationData {
  id: string;
  image: string;
  name: string;
  description: string;
  distance: number;
  // Add other properties as needed
}

  export const Bars = () => {
    const [savedData, setSavedData] = useState<LocationData[] | null>(null);
    const [filteredData, setFilteredData] = useState<LocationData[] | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
  
    // Retrieve data from localStorage on component mount
    useEffect(() => {
      const storedData = localStorage.getItem("nearbyPositions");
      const parsedData = storedData ? JSON.parse(storedData) : null;
      setSavedData(parsedData);
      setFilteredData(parsedData);
    }, []);
  
    // Listen for changes in localStorage
    useEffect(() => {
      const handleStorageChange = () => {
        const storedData = localStorage.getItem("nearbyPositions");
        const parsedData = storedData ? JSON.parse(storedData) : null;
        setSavedData(parsedData);
        setFilteredData(parsedData);
      };
  
      window.addEventListener("storage", handleStorageChange);
  
      return () => {
        window.removeEventListener("storage", handleStorageChange);
      };
    }, []); // Empty dependency array means this effect will run once on mount and clean up on unmount
  
    const handleSearch = (term: string) => {
      setSearchTerm(term);
  
      // Filter the data based on the search term
      const filtered =
        savedData?.filter((location) =>
          location.name.toLowerCase().includes(term.toLowerCase())
        ) || null;
      setFilteredData(filtered);
    };

    
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
        <PlaceTypes />
      <Box mt={4}>
        <GoogleMapComponent type="restaurant" />
      </Box>
      <Box mt={4}>
        {/* Use the SearchBar component with the onSearch prop */}
        <SearchBar onSearch={handleSearch} />
      </Box>

      {/* Render Cards components based on filteredData */}
      <Box>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={2}>
          {filteredData &&
            filteredData.map((location) => (
              <Cards
                key={location.id}
                image={location.image}
                name={location.name}
                description={location.description}
                distance={location.distance}
              />
            ))}
        </SimpleGrid>
      </Box>
      </Box>
    );
  };
  