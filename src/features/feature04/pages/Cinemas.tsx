import {
    Box,
    Text,
    SimpleGrid,
    HStack
  } from "@chakra-ui/react";
  import PlaceTypes from "../components/PlaceTypes";
  import Header from "../components/Header";

  import index from "../../../theme/foundations/index";
  import RecommendLocationCinema from "../components/RecommendLocationCinemas";
  import CinemasCard from "../components/CinemasCard";
  import GoogleMapComponent from "../components/Maps/GoogleMapComponent";
  import { useEffect,useState } from "react";
  import SearchBar from "../components/Search";
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
    address: string;
    phone_num: string;
    latitude: number;
    longitude: number;
    
  }
  
  export const Cinemas = () => {
    const [savedData, setSavedData] = useState<LocationData[] | null>(null);
    const [filteredData, setFilteredData] = useState<LocationData[] | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    searchTerm;
    const [registered, setRegistered] = useState<RegisteredData[] | null>(null);
    const [locations, setLocations] = useState<LocMap[] | null>(null);

    const fetchRestaurantData = async () => {
      try {
        const response = await Axios.get("/feature4/cinemas");
        setRegistered(response.data.cinemas);
        console.log(response.data);
        setLocations(response.data.cinemas.map((item : any) => ({
          locationId: item.theaterId,
          name: item.name,
          address: item.address,
          latitude: parseFloat(item.latitude),
          longtitude: parseFloat(item.longitude),
        })));
        
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };
    useEffect(() => {
      console.log("hello from cinema")
      console.log("Updated locations cinemas:", locations);
      // console.log("hello1")
    }, [locations]); // This effect will run whenever locations change
  
    useEffect(() => {
      fetchRestaurantData();
      console.log("hello")
    }, []);

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
      console.log("Searching for:", searchTerm);
  
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
          // maxWidth="1000px"
        >
          <HStack spacing={2} overflowX="auto">
           {registered &&
            registered.map((location,index) => (
             <RecommendLocationCinema
                key={index}
                name = {location.name}
                address = {location.address}
                phone_num={location.phone_num}
                latitude={location.latitude}
                longitude={location.longitude}
             />
          ))}
          </HStack>
        </Box>
  
        <br/>
        
        <PlaceTypes />
        <GoogleMapComponent type="cinema" locMap={locations}/>
        <br />
        <SearchBar onSearch={handleSearch} />
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={2}>
          {filteredData &&
            filteredData.map((location) => (
              <CinemasCard
                key={location.id}
                name={location.name}
                distance={location.distance}
              />
            ))}
        </SimpleGrid>
      </Box>
    );
  };
  