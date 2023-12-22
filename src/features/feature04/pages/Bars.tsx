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
}

export const Bars = () => {
  const [savedData, setSavedData] = useState<LocationData[] | null>(null);
  const [filteredData, setFilteredData] = useState<LocationData[] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  searchTerm;
  const [registered1, setRegistered1] = useState<RegisteredData[] | null>(null);
  const [locations1, setLocations1] = useState<LocMap[] | null>(null);

  const fetchRestaurantData = async () => {
    try {
      const response = await Axios.get("/feature4/bars");
      setRegistered1(response.data.bars);
      console.log("Registered Data Response:", response.data.bars);
      setLocations1(response.data.bars.map((item:any) => item.Location));
      
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  useEffect(() => {
    console.log("hello")
    console.log("Updated locations:", locations1);
    console.log("hello1")
  }, [locations1]); // This effect will run whenever locations change

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
    console.log(searchTerm);

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
          {registered1 &&
            registered1.map((location) => (
              <RecommendLocation
                key={location.name}
                name={location.name}
                description={location.description}
                category={location.category}
                capacity={location.capacity}
                score={location.score}
                website_url={location.website_url}
              />
            ))}
        </HStack>
       
      </Box>
      <br />
      <PlaceTypes />
      <Box mt={4}>
        <GoogleMapComponent type="bar" locMap ={locations1} />
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

export default Bars;