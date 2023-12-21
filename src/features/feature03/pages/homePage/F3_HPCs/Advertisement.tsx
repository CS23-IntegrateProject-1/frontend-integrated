import {
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  ModalFooter,
  Image,
  Text,
  Heading,
  Box,
} from "@chakra-ui/react";

import { useQuery } from "@tanstack/react-query";
import { Axios } from "../../../../../AxiosInstance";
import { FullPageLoader } from "../../../../../components/Loader/FullPageLoader";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Advertisement extends ModalProps {
  advertisementId: number;
  name: string;
  description: string;
  image_url: string;
  cost: number;
  start_date: string;
}

export function Advertisement({ isOpen = true, onClose = () => {} }) {

  const {
    isLoading: advertisementLoading,
    isError: advertisementError,
    data: advertisementData,
  } = useQuery<Advertisement[]>({
    queryKey: ["getSliderAD"], 
    queryFn: async () => {
      const { data } = await Axios.get(`/feature5/AllCompleteAdBSN`);
      return data;
    },
  });

  if (advertisementLoading) {
    return (
      <span>
        <FullPageLoader />
      </span>
    );
  }

  if (advertisementError) {
    return <span>An error occurred: </span>;
  }

  const sortedAdvertisementData = advertisementData.sort((a, b) => {
    // Sort by cost in descending order
    if (a.cost !== b.cost) {
      return b.cost - a.cost;
    }
    // If cost is the same, sort by start_date in ascending order
    return new Date(a.start_date).getTime() - new Date(b.start_date).getTime();
  });
  
  const selectedAdvertisement = sortedAdvertisementData[0]; // Get the first element

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: "xs", sm: "xl" }}
      isCentered
    >
      <ModalOverlay />
      <ModalContent
        backgroundColor="brand.300"
        display="flex"
        alignItems="center"
        justifyContent="center"
        rounded="3xl"
      >
        <ModalBody p={0} px={0}>
          <Image
            src={`${import.meta.env.VITE_BACKEND_URL}${selectedAdvertisement.image_url}`}
            alt="Pic not load"
            w="100%"
            maxW={{base:"350px", lg:"1000px"}}
            h="100%"
            maxH={{base:"200px", lg:"330px"}}
            objectFit={"cover"}
            rounded="3xl"
          />
          <Box mx={{ base: "4", lg: "6" }} mt="3">
            <Heading fontWeight="bold" fontSize={{ base: "25px", lg: "30px" }}>
              {selectedAdvertisement.name}
            </Heading>
            <Text fontSize={"sm"} fontWeight="normal" mt="1" textColor={"grey.200"}>
              {selectedAdvertisement.description}
            </Text>
          </Box>
        </ModalBody>
        <ModalFooter mx="4" my="2">
          <Flex direction="row">
            <Button
              variant="outline"
              borderColor="white"
              textColor="white"
              _hover={{
                textColor: "black",
                bgColor: "brand.100",
                borderColor: "black",
              }}
              w={{base:"125px", lg:"180px"}}
              onClick={onClose}
            >
              Dismiss
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
