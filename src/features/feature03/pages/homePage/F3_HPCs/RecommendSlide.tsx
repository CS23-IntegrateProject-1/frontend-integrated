import {
  Box,
  Stack,
  Text,
  Card,
  CardBody,
  Heading,
  Image,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { FaHeart } from "react-icons/fa";

import mockR from "../../RF3mock.json";

interface RProps {
  id: number;
  name: string;
  description: string;
  picR: string;
}

export const RecommendSlide = () => {
  const R: RProps[] = mockR;
  const [isFav, setIsFav] = useState(false);

  const toggleFav = () => {
    setIsFav((prevIsFav) => !prevIsFav);
  };
  return (
    <Box
      overflowX="auto"
      css={{
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "24px",
        },
      }}
      display={"flex"}
      w={"100%"}
      pt={1}
    >
      {R.filter((R) => R).map((R, index) => (
        <Card
          minW={{ base: "300px", lg: "350px" }}
          width="sm"
          borderRadius="xl"
          bg="brand.200"
          key={index}
          marginRight="5"
        >
          <Button
            position="absolute"
            right="0"
            mt="1.5"
            mr="1.5"
            borderRadius="100%"
            paddingY="3"
            paddingX="0"
            bgColor={isFav ? "#f0608d" : "white"}
            color={isFav ? "white" : "#f0608d"}
            _hover={{
              bgColor: isFav ? "black" : "white",
              color: isFav ? "white" : "black",
            }}
            onClick={toggleFav}
          >
            <FaHeart fontSize="20px" />
          </Button>
          <CardBody>
            <Image
              src={R.picR}
              alt="BarButPic not load"
              borderRadius="xl"
              w="100%"
              h="160px"
            />
            <Stack mt="4" spacing="3">
              <Heading display={"flex"} color="white" size="md">
                {R.name}

                <Text ml={"auto"}>5</Text>
                <StarIcon display={"flex"} ml="1" />
              </Heading>
              <Text color="grey.200">{R.description}</Text>
            </Stack>
          </CardBody>
          <Flex
            direction="row"
            justify="space-between"
            width="100%"
            pl="5"
            pr="5"
            pb="5"
          >
            <NavLink to="/Temp_RestaurantDetail">
              <Button
                variant="outline"
                textColor="white"
                _hover={{
                  textColor: "black",
                  borderColor: "black",
                  bgColor: "brand.100",
                }}
                w={{ base: "120px", lg: "145px" }}
              >
                More Info
              </Button>
            </NavLink>
            <NavLink to="/IDK_PathRRRRR">
              <Button
                variant="solid"
                textColor="white"
                bgColor="brand.300"
                _hover={{ bgColor: "brand.100", textColor: "black" }}
                w={{ base: "120px", lg: "145px" }}
              >
                Reserve Now
              </Button>
            </NavLink>
          </Flex>
        </Card>
      ))}
    </Box>
  );
};
