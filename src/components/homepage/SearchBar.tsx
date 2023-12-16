import { useState } from "react";
import { SearchBar } from "../../features/feature03/pages/homePage/F3_HPCs/SearchBar";
import { useNavigate } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";
import { IoMdSearch } from "react-icons/io";

export default function HomePageSearchBar(){
    const navigate = useNavigate()
    const [ searchFilter, setSearchFilter ] = useState(""); 

    // useEffect(() => {
    //     const timer = setTimeout(() => {

    //     }, 500);
    //     return () => clearTimeout(timer)
    // }, [searchFilter])

    const handleSubmit = () => {
        navigate(`/Venues?search=${searchFilter}`) 
    }
    
    return <Flex direction="row" width="100%" pt={{ base: "2", lg: "0" }} alignItems="center">
        <SearchBar searchFilter={searchFilter} setSearchFilter={setSearchFilter} onSubmit={handleSubmit}/>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          ml="3"
          _hover={{ color: "brand.100" }}
          onClick={handleSubmit}
        >
          <IoMdSearch fontSize="25px" />
          <Text fontSize="15px" transform="translateX(-3px)">
            Search
          </Text>
        </Flex>
      </Flex>
}