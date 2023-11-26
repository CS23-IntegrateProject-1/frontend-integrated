import { Box, Card, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import mockP from "../../PF3mock.json";

interface PProps {
  id: number;
  name: string;
  picP: string;
}

export const PromoSlide = () => {
  const P: PProps[] = mockP;
  return (
    <Box width={"100%"} pt={1}>
      <Box overflowX="auto">
        <Box display="flex">
          {P.map((P, index) => (
            <Card
              key={index}
              minW={"300px"}
              maxW="sm"
              minH={"150px"}
              maxH="sm"
              borderRadius="xl"
              marginRight="5"
            >
              <NavLink to="/IDK_PathAAAAA">
                <Image
                  src={P.picP}
                  alt="Promotion_Pic not load"
                  borderRadius="xl"
                  w="100%"
                  maxW="300px"
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
