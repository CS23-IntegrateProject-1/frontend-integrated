import { Box, Flex, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useState } from "react";

export const StarReviewR = () => {
  
  const [reserve, setResRating] = useState(0);
  const [table, setTabRating] = useState(0);
  const [ambiance, setAmbRating] = useState(0);
  const [staff, setStaRating] = useState(0);
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating: number, category: string) => {
    switch (category) {
      case "reserve":
        setResRating(selectedRating);
        break;
      case "table":
        setTabRating(selectedRating);
        break;
      case "ambiance":
        setAmbRating(selectedRating);
        break;
      case "staff":
        setStaRating(selectedRating);
        break;
      case "rating":
        setRating(selectedRating);
        break;
      default:
        break;
    }
  };

  return (
    <Flex
      mt="1"
      backgroundColor="brand.200"
      borderRadius="5"
      p="4"
      justify="center"
      w="100%"
    >
      <Flex direction="column" justify="center" w="100%">
        <Flex direction="row" align="center" justify="space-between" mb="5">
          <Text fontSize="120%">Reservation process</Text>
          <Box>
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon
                key={star}
                color={star <= reserve ? "#fcda12" : "brand.100"}
                onClick={() => handleStarClick(star, 'reserve')}
                cursor="pointer"
                mr="1"
              />
            ))}
          </Box>
        </Flex>
        <Flex direction="row" align="center" justify="space-between" mb="5">
          <Text fontSize="120%">Table availablity</Text>
          <Box>
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon
                key={star}
                color={star <= table ? "#fcda12" : "brand.100"}
                onClick={() => handleStarClick(star, 'table')}
                cursor="pointer"
                mr="1"
              />
            ))}
          </Box>
        </Flex>
        <Flex direction="row" align="center" justify="space-between" mb="5">
          <Text fontSize="120%">Ambiance</Text>
          <Box>
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon
                key={star}
                color={star <= ambiance ? "#fcda12" : "brand.100"}
                onClick={() => handleStarClick(star, 'ambiance')}
                cursor="pointer"
                mr="1"
              />
            ))}
          </Box>
        </Flex>
        <Flex direction="row" align="center" justify="space-between" mb="5">
          <Text fontSize="120%">Staff friendliness</Text>
          <Box>
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon
                key={star}
                color={star <= staff ? "#fcda12" : "brand.100"}
                onClick={() => handleStarClick(star, 'staff')}
                cursor="pointer"
                mr="1"
              />
            ))}
          </Box>
        </Flex>
        <Flex direction="row" align="center" justify="space-between">
          <Text fontSize="120%">Restaurant rating</Text>
          <Box>
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon
                key={star}
                color={star <= rating ? "#fcda12" : "brand.100"}
                onClick={() => handleStarClick(star, 'rating')}
                cursor="pointer"
                mr="1"
              />
            ))}
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
