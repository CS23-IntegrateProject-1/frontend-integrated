import React, { useEffect, useState } from "react";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import PlaceTypes from "../components/PlaceTypes";
import Cards from "../components/Card";
import SearchBar from "../components/Search";
import GoogleMapComponent from "../components/Maps/GoogleMapComponent";
import Header from "../components/Header";
import RecommendLocation from "../components/RecommendLocation";
import index from "../../../theme/foundations/index";
import { Axios } from "../../../AxiosInstance";


interface LocationData {
  id: string;
  image: string;
  name: string;
  address: string;
  distance: number;
  // Add other properties as needed
}

interface RegisteredData{
  name: string;
  description: string;
  category: string;
  capacity: number;
  score: number;
  website: string;
}

export const Maps = () => {
  const [savedData, setSavedData] = useState<LocationData[] | null>(null);
  const [filteredData, setFilteredData] = useState<LocationData[] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [registered, setRegistered] = useState<RegisteredData[] | null>(null);

  const fetchRestaurantData = async () => {
    try {
      const response = await Axios.get("/feature4/restaurants");
      setRegistered(response.data);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  useEffect(() => {
    fetchRestaurantData();
    console.log(registered)
    console.log("hello")
  }, []);
  
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
        {/* Render RecommendLocation components based on savedData */}
        {Array.isArray(registered) &&
          registered.map((loc) => (
            <RecommendLocation
              key={loc.name}
              name={loc.name}
              description={loc.description}
              category={loc.category}
              capacity={loc.capacity}
              score={loc.score}
              website={loc.website}
            />
          ))}
      </Box>
      <br />
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
                address={location.address}
                distance={location.distance}
              />
            ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Maps;
