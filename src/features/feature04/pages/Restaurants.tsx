import { useEffect, useState } from "react";
import { Box, Text, SimpleGrid,HStack } from "@chakra-ui/react";
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

interface LocMap{
  address : string;
  latitude : number; 
  locationId : number;
  longtitude : number;
  name: string;
}

interface RegisteredData{
  name: string;
  description: string;
  category: string;
  capacity: number;
  score: number;
  website_url: string;
  venueId: number
}

export const Maps = () => {
  const [savedData, setSavedData] = useState<LocationData[] | null>(null);
  const [filteredData, setFilteredData] = useState<LocationData[] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  searchTerm;
  const [registered, setRegistered] = useState<RegisteredData[] | null>(null);
  const [locations, setLocations] = useState<LocMap[] | null>(null);

  const fetchRestaurantData = async () => {
    try {
      const response = await Axios.get("/feature4/restaurants");
      const restaurantData: RegisteredData[] = response.data.restaurant;

      // Extract venueId from each item and set it in registered state
      const formattedRestaurantData: RegisteredData[] = restaurantData.map((item) => {
        return {
          name: item.name,
          description: item.description,
          category: item.category,
          capacity: item.capacity,
          score: item.score, // Assuming you want to convert score to a number
          website_url: item.website_url,
          venueId: item.venueId, // Set venueId
        };
      });

      setRegistered(formattedRestaurantData);
      
      // console.log(response.data.restaurant[0].location);
      setLocations(response.data.restaurant.map((item:any) => item.Location));
      
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  useEffect(() => {
    // console.log("hello")
    // console.log("Updated locations:", locations);
    // console.log("hello1")
  }, [locations]); // This effect will run whenever locations change

  useEffect(() => {
    fetchRestaurantData();
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
    // console.log(searchTerm);

    // Filter the data based on the search term
    const filtered =
      savedData?.filter((location) =>
        location.name.toLowerCase().includes(term.toLowerCase())
      ) || null;
    setFilteredData(filtered);
  };

  return (
    <Box >
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
        paddingRight={10}
      >
        {/* Render RecommendLocation com  onents based on registeredData */}
        <HStack spacing={2} overflowX="auto">
          {registered &&
            registered.map((location) => (
              <RecommendLocation
                key={location.name}
                name={location.name}
                description={location.description}
                category={location.category}
                capacity={location.capacity}
                score={location.score}
                website_url={location.website_url}
                venueId={location.venueId}
              />
            ))}
        </HStack>
       
      </Box>
      <br />
      <PlaceTypes />
      <Box mt={4}>
        <GoogleMapComponent type="restaurant" locMap ={locations} />
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