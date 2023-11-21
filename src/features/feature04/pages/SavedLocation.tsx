import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  InputGroup,
  Input,
  InputLeftElement,
  Flex,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  Divider,
  Stack,
  Icon,
} from "@chakra-ui/react";
import SavedLocationCard from "../components/SavedLocationCard";
import Header from "../components/Header";
import textStyles from "../../../theme/foundations/textStyles";
import colors from "../../../theme/foundations/colors";
import { Axios } from "../../../AxiosInstance";
import { FaMapMarkerAlt } from "react-icons/fa";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";

// Define interface for the saved location item
interface SavedLocationItem {
  locationId: number;
  userId:number;
  name:string;
  latitude:number;
  longtitude:number;
  createdAt:Date;
  address: string;
  province: string;
  district: string;
  subdistrict: string;
  postcode: string;
}

interface SavedLocationInterface{
  message: string;
  location: SavedLocationItem[];
}

const queryClient = new QueryClient(); // Create a new instance of QueryClient

export const SavedLocation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [locationId, setLocationId] = useState("");
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [subdistrict, setSubdistrict] = useState("");
  const [postcode, setPostcode] = useState("");
  const { data: savedData, isLoading, isError } = useQuery<SavedLocationInterface>({
    queryKey: ["savedData"], 
    queryFn: async () => {
      const result = await Axios.get("/feature4/saved-location");
      return result.data;
    },
  });

  if (isLoading){
    return <></>
  }
  if(isError){
    return <></>
  }

  const handleSubmit = async () => {
    try {
      const payload = {
        userId,
        name,
        latitude,
        longitude,
        address,
        province,
        district,
        subdistrict,
        postcode,
      };
      const response  = await Axios.post('/feature4/saved-location',payload);
      console.log(response.data);
  
      // After creating a new location, refetch the data to update the UI
      // queryClient.invalidateQueries('savedData');
      onClose(); // Close the modal after successfully creating a new address
    } catch (error) {
      console.error('Error saving location:', error);onClose(); 
    }
  };
  

  return (
    <Box>
      <Header />

      <Flex flexDir={"column"} alignItems="center">
        <Flex flexWrap="wrap" justifyContent="center" maxW="800px">
          {savedData.location.map((location, index) => (
            <SavedLocationCard key={index} city={location.province} address={location.address}/> 
          ))}
        </Flex>
      </Flex>

      <br />
      <Flex flexDir={"row"} justifyContent={"center"}>
        <Button
          variant={"unstyled"}
          backgroundColor={colors.brand[200]}
          color={colors.white}
          p={2}
          pl={10}
          pr={10}
          height={"50px"}
          width={"300px"}
          onClick={onOpen}
        >
          Add New Address
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bg={colors.brand[400]}>
            <ModalHeader>Add new address</ModalHeader>
            <ModalCloseButton pt={5} />
            <Divider borderColor={colors.brand[200]} />
            <ModalBody>
              <Flex flexDir={"row"}>
                <Icon as={FaMapMarkerAlt} height={6} width={6}/>
                ...
              </Flex>
              <br />
              <Text
                color={colors.white}
                fontSize={textStyles.h3.fontSize}
                fontWeight={textStyles.h3.fontWeight}
              >
                Address Information
              </Text>
              <Stack spacing={3} mt={2}>
              <Input
                  variant="outline"
                  placeholder="LocationID"
                  onChange={(e) => setLocationId(e.target.value)}
                />
              <Input
                  variant="outline"
                  placeholder="UserID"
                  onChange={(e) => setUserId(e.target.value)}
                />
                <Input
                  variant="outline"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  variant="outline"
                  placeholder="Latitude"
                  onChange={(e) => setLatitude(e.target.value)}
                />
                <Input
                  variant="outline"
                  placeholder="Longtitude"
                  onChange={(e) => setLongitude(e.target.value)}
                />
                <Input
                  variant="outline"
                  placeholder="Address"
                  onChange={(e) => setAddress(e.target.value)}
                />
                <Input
                  variant="outline"
                  placeholder="Province"
                  onChange={(e) => setProvince(e.target.value)}
                />
                <Input
                  variant="outline"
                  placeholder="District"
                  onChange={(e) => setDistrict(e.target.value)}
                />
                <Input
                  variant="outline"
                  placeholder="Subdistrict"
                  onChange={(e) => setSubdistrict(e.target.value)}
                />
                <Input
                  variant="outline"
                  placeholder="Postcode"
                  onChange={(e) => setPostcode(e.target.value)}
                />
              </Stack>
            </ModalBody>
            <Divider borderColor={colors.brand[200]} />
            <Flex justifyContent={"center"} m={5}>
              <Button
                variant={"unstyled"}
                backgroundColor={colors.brand[200]}
                color={colors.white}
                p={2}
                pl={10}
                pr={10}
                height={"50px"}
                width={"300px"}
                onClick={handleSubmit}
              >
                Save and Continue
              </Button>
            </Flex>
          </ModalContent>
        </Modal>
      </Flex>
    </Box>
  );
};
