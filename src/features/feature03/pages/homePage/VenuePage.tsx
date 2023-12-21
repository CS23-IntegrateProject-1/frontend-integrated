/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import { NavLink, useNavigate } from "react-router-dom";
import {
  Box,
  Text,
  Card,
  CardBody,
  Heading,
  Image,
  Button,
  Flex,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { Filter_Modal } from "./F3_FMCs/Filter_Modal";
import { SearchBar } from "./F3_HPCs/SearchBar";
import { FaFilter } from "react-icons/fa";
import { StarIcon } from "@chakra-ui/icons";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Axios } from "../../../../AxiosInstance";
// import { FullPageLoader } from "../../../../components/Loader/FullPageLoader";
import { useState, useEffect, createContext, useRef } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useCustomToast } from "../../../../components/useCustomToast";
import { FullPageLoader } from "../../../../components/Loader/FullPageLoader";

interface Venue {
  id: number;
  venueId: number;
  branchId: number;
  name: string;
  description: string;
  category: string;
  capacity: string;
  location: string;
  website_url: string;
  rating: string;
  venue_picture: string;
  isFavourite: boolean;
}

interface SearchFilter {
  type: string;
  priceMin: number;
  priceMax: number;
  capacity: string;
}

export const DEFAULT_FILTER = {
  type: "",
  priceMin: 0,
  priceMax: 1000,
  capacity: "",
};

export const FilterContext = createContext<{
  filter: SearchFilter;
  setFilter: (fn: (update: SearchFilter) => SearchFilter) => void;
}>({
  filter: DEFAULT_FILTER,
  setFilter: () => {},
});

function useThrottleValue<T>(value: T, delay: number = 500) {
  const [throttleValue, setThrottleValue] = useState<T>(value);
  const throttling = useRef(false);
  useEffect(() => {
    if (throttling.current === false) {
      setThrottleValue(value);
      throttling.current = true;
      setTimeout(() => {
        if (throttling?.current) throttling.current = false;
      }, delay);
    }
  }, [value, delay]);
  return throttleValue;
}

export const VenuePage = () => {
  const params = new URL(String(window.location)).searchParams;
  const search = params.get("search");
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchFilter, setSearchFilter] = useState(search || "");
  const queryClient = useQueryClient();

  const [filter, setFilter] = useState<SearchFilter>({
    type: "",
    priceMin: 0,
    priceMax: 1000,
    capacity: "",
  });

  useEffect(() => {
    navigate(`?search=${searchFilter}`, { replace: true });
  }, [searchFilter]);
  const searchFilterThrottle = useThrottleValue(searchFilter, 500);
  const priceMinThrottle = useThrottleValue(filter.priceMin, 500);
  const priceMaxThrottle = useThrottleValue(filter.priceMax, 500);

  const {
    isLoading: venueLoading,
    error: venueError,
    data: venueData,
  } = useQuery<Venue[]>({
    queryKey: [
      "getVen",
      searchFilterThrottle,
      filter.type,
      filter.capacity,
      priceMaxThrottle,
      priceMinThrottle,
    ],
    queryFn: async () => {
      // console.log(filter.type);
      // console.log(filter.capacity);
      const { data } = await Axios.get(
        `/feature3/VenuesPage?search=${searchFilter.trim()}&capacity=${
          filter.capacity
        }&priceMin=${filter.priceMin}&priceMax=${filter.priceMax}&category=${
          filter.type
        }`
      );
      return data;
    },
    // keepPreviousData: true,
  });

  // console.log(venueData);
  const toast = useCustomToast();
  if (venueError) {
    return <span>An error occurred: </span>;
  }
  if (venueLoading) {
    return <FullPageLoader />;
  }
  const handleUnFavorite = (venueId: number) => {
    Axios.delete(`/feature11/deleteSavedPlace`, { data: { venueId: venueId } })
      .then((res) => {
        console.log(res);
        queryClient.invalidateQueries({
          queryKey: [
            "getVen",
            searchFilterThrottle,
            filter.type,
            filter.capacity,
            priceMaxThrottle,
            priceMinThrottle,
          ],
        });
        toast.success("Removed from Saved Places");
      })
      .catch((err) => {
        console.error("Error adding favorite:", err);
      });
  };
  const handleFavorite = (venueId: number) => {
    Axios.post(`/feature11/addSavedPlace`, { venueId })
      .then((res) => {
        console.log(res);
        queryClient.invalidateQueries({
          queryKey: [
            "getVen",
            searchFilterThrottle,
            filter.type,
            filter.capacity,
            priceMaxThrottle,
            priceMinThrottle,
          ],
        });
        toast.success("Added to Saved Places");
      })
      .catch((err) => {
        console.error("Error removing favorite:", err);
      });
  };
  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      <Box width={"100%"} px={{ base: "none", lg: "30px" }}>
        <Flex
          direction="row"
          pt={{ base: "2", lg: "0" }}
          px={{ base: "0", lg: "24" }}
          transform={{ base: "0", lg: "translateX(24px)" }}
        >
          <SearchBar
            searchFilter={searchFilter}
            setSearchFilter={setSearchFilter}
          />
          <Flex
            direction="column"
            ml="3"
            _hover={{ color: "brand.100" }}
            onClick={onOpen}
          >
            <FaFilter fontSize="25px" />
            <Text fontSize="15px" transform="translateX(-3px)">
              Filter
            </Text>
            <Filter_Modal isOpen={isOpen} onClose={onClose} />
          </Flex>
        </Flex>

        <Box
          display="grid"
          width="100%"
          gridTemplateColumns={{ lg: "repeat(3, 1fr)", base: "repeat(1, 1fr)" }}
          overflow="hidden"
          mt={{ base: "3", lg: "8" }}
          px={{ base: "none", lg: "10px" }}
          justifyItems={"center"}
          sx={{
            opacity: venueLoading ? 0.7 : 1,
            transition: "all .25s ease-in-out",
          }}
        >
          {(venueData || []).map((venueD) => (
            <Card
              minW={{ base: "250px", lg: "350px" }}
              width="sm"
              borderRadius="2xl"
              bg="brand.200"
              key={venueD.venueId}
              mb={8}
            >
              <CardBody pb={1}>
                <Image
                  src={venueD.venue_picture}
                  alt={venueD.name + "_Pic"}
                  borderRadius="lg"
                  w="100%"
                  h="160px"
                  bgColor={"white"}
                />

                <IconButton
                  variant={"unstyled"}
                  size={"xs"}
                  fontSize={"3xl"}
                  color={"red.300"}
                  // bg={"brand.300"}
                  aria-label="favorite"
                  top={"7%"}
                  left={"84%"}
                  position={"absolute"}
                  icon={
                    venueD && venueD.isFavourite ? (
                      <AiFillHeart />
                    ) : (
                      <AiOutlineHeart />
                    )
                  }
                  onClick={
                    venueD && venueD.isFavourite == true
                      ? () => handleUnFavorite(venueD.venueId)
                      : () => handleFavorite(venueD.venueId)
                  }
                  // onClick={handleDeleteLike}
                />
                {/* {venueD.isFavorite ? (
                  <Box>{}</Box>
                ) : (
                  <Box>NOT FAVORITE</Box>
                )} */}
                {/* <Box>{venueD}</Box> */}
                <Flex mt="4">
                  <Heading color="white" size="md">
                    {venueD.name}
                  </Heading>
                  <Flex
                    direction="row"
                    mr="2"
                    borderRadius="14"
                    ml={"auto"}
                    color="white"
                    transform="translateY(2px)"
                  >
                    {venueD.rating != "0" ? venueD.rating : "N/A"}
                    <StarIcon ml="2" transform="translateY(2px)" />
                  </Flex>
                </Flex>
              </CardBody>
              <Flex
                direction="column"
                justify="center"
                width="100%"
                px="5"
                pb="5"
              >
                <Text mb={3} textColor={"gray.300"}>
                  {venueD.description}
                </Text>
                <NavLink to={`/Branches/${venueD.venueId}`}>
                  <Button
                    variant="solid"
                    textColor="white"
                    bgColor="brand.300"
                    _hover={{ bgColor: "brand.100", textColor: "black" }}
                    w="350px"
                  >
                    Branches
                  </Button>
                </NavLink>
              </Flex>
            </Card>
          ))}
        </Box>
      </Box>
    </FilterContext.Provider>
  );
};
