import { NavLink } from "react-router-dom";
import { Box, Text, Image, Button, Flex, Divider } from "@chakra-ui/react";
import { StarIcon, ChevronRightIcon } from "@chakra-ui/icons";

import mockO from "../OF3mock.json";

import { useQuery } from "@tanstack/react-query";
import { Axios } from "../../../../AxiosInstance";
import { FullPageLoader } from "../../../../components/Loader/FullPageLoader";
import { FC, useState } from "react";
import { useParams } from "react-router-dom";

interface VenueDetail {
  id: number;
  venueId: number;
  branchId: number;
  name: string;
  branch_name: string;
  description: string;
  category: string;
  capacity: string;
  location: string;
  website_url: string;
  rating: string;
  venue_picture: string;
}

interface OProps {
  id: number;
  name: string;
  picO: string;
  price: number;
  description: string;
}

export const VenueDetail: FC = () => {
  const O: OProps[] = mockO;
  const { branchId } = useParams();

  const [venueId, setVenueId] = useState<number | null>(null);

  const {
    isLoading: venueDetailLoading,
    isError: venueDetailError,
    data: venueDetailData,
  } = useQuery<VenueDetail[]>({
    queryKey: ["getVenueXRates"],
    queryFn: async () => {
      const { data } = await Axios.get(`/feature3/VenDetail/${branchId}`);
      setVenueId(data[0]?.venueId);
      return data;
    },
    keepPreviousData: true
  });

  if (venueDetailLoading) {
    return (
      <span>
        <FullPageLoader />
      </span>
    );
  }

  if (venueDetailError) {
    return <span>An error occurred: </span>;
  }



  return (
    <Box width={"100%"} >
      {venueDetailData.map((venue, index) => (
        <Box key={index}>
          <Image
            src={venue.venue_picture}
            alt={venue.name + "_Pic"}
            borderRadius="2xl"
            w="100%"
            h="300px"
            maxH="300px"
            minH="300px"
            objectFit={"cover"}
            mb="5"
            bgColor={"white"}
          />
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Box display={"flex"} alignItems={"center"}>
            <Text fontSize={"3xl"} fontWeight={"bold"}>
              {venue.name} | {venue.branch_name}
            </Text>
          </Box>
          <Box display={"flex"} pb={5}>
              <StarIcon color={"brand.100"} fontSize="20px" mr="2" />
              <Text color={"brand.100"} fontSize="15px">
                {venue.rating != "0" ? venue.rating : "N/A"}  
              </Text>

            <Box ml={"auto"}>
              <NavLink to={`/Reviews/${branchId}`}>
                <Text
                  textDecoration={"underline"}
                  fontSize="12.5px"
                  ml={"auto"}
                  mt={"3px"}
                  color={"grey.200"}
                  _hover={{ color: "white" }}
                >
                  View all ratings & reviews
                </Text>
              </NavLink>
            </Box>
          </Box>

          <Box bgColor={"brand.200"} borderRadius="xl">
            <Text p={3}>{venue.description}</Text>
          </Box>
        </Box>
      ))}



      <Divider
        py={4}
        borderBottomWidth="3px"
        borderColor={"brand.100"}
        opacity={"100%"}
      />

      <Box display={"flex"} pt={6}>
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Avaliable Vouchers
        </Text>
        <ChevronRightIcon fontSize="4xl" ml={"auto"} />
      </Box>

      <Flex>
        <Box
          border="2px solid white"
          borderRadius="xl"
          mt={2}
          p={3}
          alignItems={"center"}
          display={"flex"}
        >
          <Image
            src="https://pione.co.th/wp-content/uploads/2017/07/slider-bg-black.jpg"
            alt="Pic not load"
            borderRadius="full"
            w="40px"
            h="40px"
            maxH="40px"
            minH="40px"
            objectFit={"cover"}
            ml={1}
          />
          <Box pl={4} justifyItems={"center"} alignItems={"center"}>
            <Text fontWeight={"semibold"} fontSize={"sm"} textColor={"white"}>
              VoucherNameLorem
            </Text>
            <Text fontWeight={"normal"} fontSize={"xs"} textColor={"grey.200"}>
              Discound 50%
            </Text>
          </Box>
          <Divider
            py={3}
            borderColor={"white"}
            opacity={"100%"}
            orientation="vertical"
            mx={3}
            border="1px solid white"
          />
          <Button
            variant="solid"
            textColor="white"
            bgColor="brand.300"
            _hover={{ bgColor: "brand.100", textColor: "black" }}
            minW="60px"
            minH="30px"
            w="60px"
            h="30px"
            fontSize={"xs"}
            p={1}
          >
            Unapply
          </Button>
        </Box>
      </Flex>

      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Text fontSize={"2xl"} fontWeight={"bold"} pt={4}>
        Menu list
      </Text>

      <Flex
        display="grid"
        gridTemplateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
        pb="4"
      >
        {O.filter((O) => O).map((O, index) => (
          <Box
            borderRadius="xl"
            mb={4}
            mt={2}
            p={4}
            display={"flex"}
            alignItems={"center"}
            maxW={"450px"}
            key={index}
            bgColor={"brand.300"}
          >
            <Image
              src={O.picO}
              alt="Pic not load"
              borderRadius="lg"
              w="100px"
              h="100px"
              minW="100px"
              minH="100px"
              objectFit={"cover"}
              ml={1}
            />
            <Box
              pl={4}
              justifyItems={"center"}
              alignItems={"center"}
              maxW={"350px"}
            >
              <Text fontWeight={"bold"} fontSize={"xl"} textColor={"white"}>
                {O.name}
              </Text>
              <Text fontWeight={"semibold"} fontSize={"md"} textColor={"white"}>
                {O.price} THB
              </Text>
              <Text
                fontWeight={"semibold"}
                fontSize={"xs"}
                textColor={"grey.200"}
              >
                {O.description}
              </Text>
            </Box>
          </Box>
        ))}
      </Flex>

      <Flex direction="row" pb="10" justifyContent={"center"}>
        <NavLink to={`/table/${branchId}/${venueId}`}>
          <Button
            variant="solid"
            textColor="white"
            bgColor="brand.200"
            _hover={{
              textColor: "black",
              bgColor: "brand.100",
            }}
            mr={{ base: "5", lg: "10" }}
            w={{ base: "125px", lg: "180px" }}
          >
            Reserve now
          </Button>
        </NavLink>
        <NavLink to="/PATH_IDKKKKKKKKKOOOOOOO">
          <Button
            variant="solid"
            textColor="white"
            bgColor="brand.200"
            _hover={{
              textColor: "black",
              bgColor: "brand.100",
            }}
            w={{ base: "125px", lg: "180px" }}
          >
            Order now
          </Button>
        </NavLink>
      </Flex>
    </Box>
  );
};
