import {
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useState } from "react";

export const StarReviewD = () => {
  const [food, setFodRating] = useState(0);
  const [deliver, setDelRating] = useState(0);
  const [order, setOrdRating] = useState(0);
  const [service, setSerRating] = useState(0);
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating: number, category: string) => {
    switch (category) {
      case "food":
        setFodRating(selectedRating);
        break;
      case "deliver":
        setDelRating(selectedRating);
        break;
      case "order":
        setOrdRating(selectedRating);
        break;
      case "service":
        setSerRating(selectedRating);
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
            <Text fontSize="120%">Food quality</Text>
            <Box>
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  color={star <= food ? "#fcda12" : "brand.100"}
                  onClick={() => handleStarClick(star, 'food')}
                  cursor="pointer"
                  mr="1"
                />
              ))}
            </Box>
          </Flex>
          <Flex direction="row" align="center" justify="space-between" mb="5">
            <Text fontSize="120%">Delivery time</Text>
            <Box>
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  color={star <= deliver ? "#fcda12" : "brand.100"}
                  onClick={() => handleStarClick(star, 'deliver')}
                  cursor="pointer"
                  mr="1"
                />
              ))}
            </Box>
          </Flex>
          <Flex direction="row" align="center" justify="space-between" mb="5">
            <Text fontSize="120%">Order accuracy</Text>
            <Box>
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  color={star <= order ? "#fcda12" : "brand.100"}
                  onClick={() => handleStarClick(star, 'order')}
                  cursor="pointer"
                  mr="1"
                />
              ))}
            </Box>
          </Flex>
          <Flex direction="row" align="center" justify="space-between" mb="5">
            <Text fontSize="120%">Customer service</Text>
            <Box>
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  color={star <= service ? "#fcda12" : "brand.100"}
                  onClick={() => handleStarClick(star, 'service')}
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
