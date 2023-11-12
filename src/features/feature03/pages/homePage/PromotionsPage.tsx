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
import mockP from "../PF3mock.json";

interface PProps {
  id: number;
  name: string;
  picP: string;
}

export const PromotionsPage = () => {
  const P: PProps[] = mockP;
  return (
    <Box width={"100%"} pt={1}>
      <Box overflowX="auto">
        <Box
          display="grid"
          width="100%"
          gridTemplateColumns={{ lg: "repeat(4, 1fr)", base: "repeat(1, 1fr)" }}
          overflow="hidden"
          mt="3"
        >
          {P.map((P, index) => (
            <Card
              key={index}
              minW={"150px"}
              maxW="sm"
              minH={"150px"}
              maxH="sm"
              borderRadius="xl"
              mb="5"
            >
              <NavLink to="/IDK_PathAAAAA">
                <Image
                  src={P.picP}
                  alt="Promotion_Pic not load"
                  borderRadius="xl"
                  w="100%"
                  h="200px"
                />
              </NavLink>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
