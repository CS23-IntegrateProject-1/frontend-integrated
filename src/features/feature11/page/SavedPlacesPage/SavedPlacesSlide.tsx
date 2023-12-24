import {
  Text,
  Card,
  CardBody,
  Heading,
  Image,
  Button,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { FaHeart } from "react-icons/fa";
import { FC } from "react";
import { Axios } from "../../../../AxiosInstance";
import { useQueryClient } from "@tanstack/react-query";
import { useCustomToast } from "../../../../components/useCustomToast";

interface SavedPlaceProps {
  id: number;
  venueId: number;
  rating: number;
  userId: number;
  Venue: {
    description: string;
    name: string;
    venue_picture: string;
  };
}

export const SavedPlacesSlide: FC<SavedPlaceProps> = (props) => {
  const queryClient = useQueryClient();
  const toast = useCustomToast();

  const handleUnFavorite = (venueId: number) => {
    Axios.delete(`/feature11/deleteSavedPlace`, { data: { venueId: venueId } })
      .then((res) => {
        console.log(res);
        queryClient.invalidateQueries({
          queryKey: ["savedPlaces"],
        });
        toast.success("Removed from Saved Places");
      })
      .catch((err) => {
        console.error("Error adding favorite:", err);
      });
  };
  return (
    <Card
      w={{ base: "320px", sm: "310px" }}
      borderRadius="2xl"
      bg="brand.200"
      mb={8}
      mr={"20px"}
      // alignSelf={"center"}
      margin={"1em auto"}
    >
      <CardBody pb={1}>
        <Image
          src={
            import.meta.env.VITE_BACKEND_URL + props.Venue.venue_picture || ""
          }
          borderRadius="lg"
          w="100%"
          h="160px"
          bgColor={"brand.300"}
        />
        <IconButton
          top={"7%"}
          left={"84%"}
          position={"absolute"}
          variant="unstyled"
          aria-label="add"
          icon={<FaHeart size={"28px"} color={"white"} />}
          onClick={() => handleUnFavorite(props.venueId)}
        />

        <Flex mt="4">
          <Heading color="white" size="md">
            {props.Venue.name}
          </Heading>
          <Flex
            direction="row"
            mr="2"
            borderRadius="14"
            ml={"auto"}
            color="white"
            transform="translateY(2px)"
          >
            {props.rating}
            <StarIcon ml="2" transform="translateY(2px)" />
          </Flex>
        </Flex>
      </CardBody>
      <Flex direction="column" justify="center" width="100%" px="5" pb="5">
        <Text mb={3} textColor={"gray.300"}>
          {props.Venue.description.length > 30
            ? `${props.Venue.description.slice(0, 30)}...`
            : props.Venue.description}
        </Text>
        <NavLink to={`/Branches/${1}`}>
          <Button
            variant="solid"
            textColor="white"
            bgColor="brand.300"
            _hover={{ bgColor: "brand.100", textColor: "black" }}
            w={"100%"}
          >
            Branches
          </Button>
        </NavLink>
      </Flex>
    </Card>
    // </Box>
  );
};
