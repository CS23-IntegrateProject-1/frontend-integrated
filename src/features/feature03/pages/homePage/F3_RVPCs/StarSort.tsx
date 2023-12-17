import { Flex, Button, Text, Box } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const starSortBox = {
  backgroundColor: "brand.300",
  px: { base: "2", lg: "3" },
  py: { base: "1", lg: "2" },
  mr: "2",
  borderRadius: "xl",
};

const starPlacement = {
  ml: "2",
  fontSize: { base: "sm", lg: "lg" },
};

export type IStarSort = {
  reviewStars: string;
  reviewTypes: string;
}

interface StarSortProps {
  reviewFilter: IStarSort,
  setReviewFilter: (updatedFilter: (updated: IStarSort) => IStarSort) => void
}

export const StarSort = ({reviewFilter, setReviewFilter }:StarSortProps) => {
  const isActiveStar = (selectedRating: string) => {
    return reviewFilter.reviewStars.includes(selectedRating)
  }

  const isActiveType = (selectedType: string) => {
    return reviewFilter.reviewTypes.includes(selectedType)
  }

  const handleStarClick = (selectedRating: string) => {
    setReviewFilter((prevReviewFilter) => {
      if(prevReviewFilter.reviewStars.includes(selectedRating)){
        const reviewStars = prevReviewFilter.reviewStars.split(",").filter(v => v !== "").filter((rating) => rating !== selectedRating).join(",")
        return {
          ...prevReviewFilter,
          reviewStars
        }
      }else {
        return {
          ...prevReviewFilter,
          reviewStars: [prevReviewFilter.reviewStars,selectedRating].filter(v => v !== "").join(",")
        }
      }
    });
  }

  const handleTypeClick = (selectedType: string) => {
    setReviewFilter((prevReviewFilter) => {
      if(prevReviewFilter.reviewTypes.includes(selectedType)){
        const reviewTypes = prevReviewFilter.reviewTypes.split(",").filter(v => v !== "").filter((type) => type !== selectedType).join(",")
        return {
          ...prevReviewFilter,
          reviewTypes
        }
      }else {
        return {
          ...prevReviewFilter,
          reviewTypes: [prevReviewFilter.reviewTypes,selectedType].filter(v => v !== "").join(",")
        }
      }
    });
  }

  return (
    <Box>
      <Flex direction="row" mt="2">
        <Button
          sx={{...starSortBox, backgroundColor: isActiveStar("5") ? "brand.100" : "brand.300"}}
          textColor={"white"}
          _hover={{
            backgroundColor: "brand.100",
            textColor: "black",
          }}
          onClick={() => handleStarClick("5")}
        >
          <Text fontSize={{ base: "sm", lg: "lg" }} mt={0.5} ml={1}>
            5
          </Text>
          <StarIcon sx={starPlacement} />
        </Button>
        {/* ///////////////////////////////////////////////// */}
        <Button
          sx={{...starSortBox, backgroundColor: isActiveStar("4") ? "brand.100" : "brand.300"}}
          textColor={"white"}
          _hover={{
            backgroundColor: "brand.100",
            textColor: "black",
          }}
          onClick={() => handleStarClick("4")}
        >
          <Text fontSize={{ base: "sm", lg: "lg" }} mt={0.5} ml={1}>
            4
          </Text>
          <StarIcon sx={starPlacement} />
        </Button>
        {/* ///////////////////////////////////////////////// */}
        <Button
          sx={{...starSortBox, backgroundColor: isActiveStar("3") ? "brand.100" : "brand.300"}}
          textColor={"white"}
          _hover={{
            backgroundColor: "brand.100",
            textColor: "black",
          }}
          onClick={() => handleStarClick("3")}
        >
          <Text fontSize={{ base: "sm", lg: "lg" }} mt={0.5} ml={1}>
            3
          </Text>
          <StarIcon sx={starPlacement} />
        </Button>
        {/* ///////////////////////////////////////////////// */}
        <Button
          sx={{...starSortBox, backgroundColor: isActiveStar("2") ? "brand.100" : "brand.300"}}
          textColor={"white"}
          _hover={{
            backgroundColor: "brand.100",
            textColor: "black",
          }}
          onClick={() => handleStarClick("2")}
        >
          <Text fontSize={{ base: "sm", lg: "lg" }} mt={0.5} ml={1}>
            2
          </Text>
          <StarIcon sx={starPlacement} />
        </Button>
        {/* ///////////////////////////////////////////////// */}
        <Button
          sx={{...starSortBox, backgroundColor: isActiveStar("1") ? "brand.100" : "brand.300"}}
          textColor={"white"}
          _hover={{
            backgroundColor: "brand.100",
            textColor: "black",
          }}
          onClick={() => handleStarClick("1")}
        >
          <Text fontSize={{ base: "sm", lg: "lg" }} mt={0.5} ml={1}>
            1
          </Text>
          <StarIcon sx={starPlacement} />
        </Button>
      </Flex>
      {/************************************************************ */}
      <Flex mt={3}>
        <Button
          sx={{...starSortBox, backgroundColor: isActiveType("Reservation") ? "brand.100" : "brand.300"}}
          textColor={"white"}
          _hover={{
            backgroundColor: "brand.100",
            textColor: "black",
          }}
          onClick={() => handleTypeClick("Reservation")}
        >
          <Text fontSize={{ base: "sm", lg: "lg" }} mx={1}>Reservation</Text>
        </Button>
        <Button
          sx={{...starSortBox, backgroundColor: isActiveType("Delivery") ? "brand.100" : "brand.300"}}
          textColor={"white"}
          _hover={{
            backgroundColor: "brand.100",
            textColor: "black",
          }}
          onClick={() => handleTypeClick("Delivery")}
        >
          <Text fontSize={{ base: "sm", lg: "lg" }} mx={1}>Delivery</Text>
        </Button>
      </Flex>
    </Box>
  );
};
