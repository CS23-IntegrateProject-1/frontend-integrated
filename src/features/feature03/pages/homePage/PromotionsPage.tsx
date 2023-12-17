import { NavLink } from "react-router-dom";
import {
  Box,
  Card,
  Image,
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
    <Box width={"100%"} px={{base:"none", lg:"30px"}}>
      <Box
        display="grid"
        width="100%"
        gridTemplateColumns={{ lg: "repeat(3, 1fr)", base: "repeat(1, 1fr)" }}
        overflow="hidden"
        mt={{base:"3", lg:"8"}}
        px={{base: "none", lg: "10px"}}
        justifyItems={"center"}
      >
          {P.map((P, index) => (
            <Card
              key={index}
              minW={"400px"}
              maxW="2xl"
              minH={"220px"}
              maxH="2xl"
              borderRadius="2xl"
              mb="8"
            >
              <NavLink to="/IDK_PathAAAAA">
                <Image
                  src={P.picP}
                  alt="Promotion_Pic not load"
                  borderRadius="2xl"
                  w="100%"
                  h="220px"
                />
              </NavLink>
            </Card>
          ))}
      </Box>
    </Box>
  );
};
