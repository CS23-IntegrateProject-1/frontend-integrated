import { NavLink } from "react-router-dom";
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
import mockR from "../RF3mock.json";
import { StarIcon } from "@chakra-ui/icons";

interface RProps {
  id: number;
  name: string;
  description: string;
  picR: string;
}

export const RecommendedPlacesPage = () => {
  const R: RProps[] = mockR;
  return (
    <Box width={"100%"}>
      <Box
        display="grid"
        width="100%"
        gridTemplateColumns={{ lg: "repeat(4, 1fr)", base: "repeat(1, 1fr)" }}
        overflow="hidden"
        mt="3"
      >
        {R.filter((R) => R).map((R, index) => (
          <Card
            minW={{ base: "250px", lg: "350px" }}
            width="sm"
            borderRadius="2xl"
            bg="brand.200"
            key={index}
            mb="5"
          >
            <CardBody>
              <Image
                src={R.picR}
                alt="BarButPic not load"
                borderRadius="lg"
                w="100%"
                h="160px"
              />
              <Stack mt="4" spacing="3">
                <Flex direction="row" justify="space-between" align="center">
                  <Heading color="white" size="md">
                    {R.name}
                  </Heading>
                  <Flex
                    direction="row"
                    p="1.5"
                    mr="2"
                    borderRadius="14"
                    color="white"
                  >
                    5<StarIcon ml="1" transform="translateY(2px)" />
                  </Flex>
                </Flex>
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
              <Button
                variant="outline"
                textColor="white"
                _hover={{
                  textColor: "black",
                  borderColor: "black",
                  bgColor: "brand.100",
                }}
                w="155px"
              >
                More Info
              </Button>
              <Button
                variant="solid"
                textColor="white"
                bgColor="brand.300"
                _hover={{ bgColor: "brand.100", textColor: "black" }}
                w="155px"
              >
                Reserve Now
              </Button>
            </Flex>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
