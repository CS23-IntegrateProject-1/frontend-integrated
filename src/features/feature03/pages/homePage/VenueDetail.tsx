import { NavLink } from "react-router-dom";
import {
  Box,
  Text,
  Image,
  Button,
  Flex,
  Divider,
  Card,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

import { useQuery } from "@tanstack/react-query";
import { Axios } from "../../../../AxiosInstance";
import { FullPageLoader } from "../../../../components/Loader/FullPageLoader";
import { FC, useState } from "react";
import { useParams } from "react-router-dom";

interface VoucherVenueDetailBranch {
  voucherId: number;
  venueId: number;
  branchId: number;
  voucher_name: string;
  description: string;
  voucher_image: string;
  isApprove: string;
}

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

interface VenueDetailMenu {
  venueId: number;
  menuId: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const VenueDetail: FC = () => {
  const { branchId } = useParams();

  const [venueId, setVenueId] = useState<number | null>(null);

  const {
    isLoading: voucherVenueDetailBranchLoading,
    isError: voucherVenueDetailBranchError,
    data: voucherVenueDetailBranchData,
  } = useQuery<VoucherVenueDetailBranch[]>({
    queryKey: ["getVoucherVenueDetailBranchKey"],
    queryFn: async () => {
      const { data } = await Axios.get(
        `/feature3/VoucherVenueDetail/${branchId}`
      );
      return data;
    },
    keepPreviousData: true,
  });

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
    keepPreviousData: true,
  });

  const {
    isLoading: venueDetailMenuLoading,
    isError: venueDetailMenuError,
    data: venueDetailMenuData,
  } = useQuery<VenueDetailMenu[]>({
    queryKey: ["getVenueMenu"],
    queryFn: async () => {
      const { data } = await Axios.get(`/feature3/VenDetailMenu/${branchId}`);
      return data;
    },
    keepPreviousData: true,
  });

  if (
    venueDetailLoading ||
    venueDetailMenuLoading ||
    voucherVenueDetailBranchLoading
  ) {
    return (
      <span>
        <FullPageLoader />
      </span>
    );
  }

  if (
    venueDetailError ||
    venueDetailMenuError ||
    voucherVenueDetailBranchError
  ) {
    return <span>An error occurred: </span>;
  }

  return (
    <Box width={"100%"}>
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

      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Box display={"flex"} pt={6}>
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Avaliable Vouchers
        </Text>
      </Box>
      <Flex
        display="grid"
        gridTemplateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
        pb="2"
        alignItems={"center"}
        justifyContent={"center"}
      >
        {voucherVenueDetailBranchData.map((VVD) => (
          <Card
            key={`${VVD.voucherId}`}
            minW={"380px"}
            maxW={"380px"}
            minH={"150px"}
            maxH="sm"
            borderRadius="xl"
            pr={{base:"0", lg:"4"}}
            mt={"4"}
          >
            <NavLink to={`/voucher/${VVD.voucherId}`}>
              <Image
                src={VVD.voucher_image}
                alt={`Voucher not load ${VVD.voucherId}`}
                borderRadius="xl"
                w="100%"
                minW={"380px"}
                maxW={"380px"}
                h="150px"
                objectFit={"cover"}
              />
            </NavLink>
          </Card>
        ))}
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
        {venueDetailMenuData.length === 0 ? (
          <Box
            borderRadius="xl"
            mb={4}
            mt={2}
            p={4}
            display={"flex"}
            alignItems={"center"}
            maxW={"360px"}
            bgColor={"brand.300"}
          >
            <Box
              pl={4}
              justifyItems={"center"}
              alignItems={"center"}
              maxW={"350px"}
            >
              <Text fontWeight={"bold"} fontSize={"xl"} textColor={"white"}>
                There is no menu in this branch
              </Text>
            </Box>
          </Box>
        ) : (
          venueDetailMenuData.map((VDMD) => (
            <Box
              borderRadius="xl"
              mb={4}
              mt={2}
              p={4}
              display={"flex"}
              alignItems={"center"}
              maxW={"450px"}
              key={VDMD.menuId}
              bgColor={"brand.300"}
            >
              <Image
                src={VDMD.image}
                alt="Pic not load"
                borderRadius="lg"
                w="100px"
                h="100px"
                minW="100px"
                minH="100px"
                objectFit={"cover"}
                ml={1}
                backgroundColor={"white"}
              />
              <Box
                pl={4}
                justifyItems={"center"}
                alignItems={"center"}
                maxW={"350px"}
              >
                <Text
                  fontWeight={"bold"}
                  fontSize={"xl"}
                  textColor={"brand.200"}
                >
                  {VDMD.name}
                </Text>
                <Text
                  fontWeight={"normal"}
                  fontSize={"md"}
                  textColor={"brand.100"}
                >
                  {VDMD.price} THB
                </Text>
                <Text
                  fontWeight={"semibold"}
                  fontSize={"xs"}
                  textColor={"grey.200"}
                >
                  {VDMD.description}
                </Text>
              </Box>
            </Box>
          ))
        )}
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
