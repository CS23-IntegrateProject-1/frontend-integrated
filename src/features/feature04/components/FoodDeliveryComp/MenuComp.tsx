import React from "react";
import {
  Box,
  Text,
  Flex,
  Button,
  Card,
} from "@chakra-ui/react";
import index from "../../../../theme/foundations/index";
import { useNavigate } from "react-router-dom";

interface MenuCompCard {
  menuName: string;
  price: number;
}

export const MenuComp: React.FC<MenuCompCard> = (props) => {
  const navigate = useNavigate();

  const navigateToDetail = () => {
    navigate('/map/food-delivery/food-detail');
  };

  return (
    <Box>
      <Box width={200} height={"auto"} m={2}>
        <Card width={"auto"} height={"auto"} style={{ borderRadius: "20px", margin: 0 }}>
          <Box style={{ width: "100%", height: "100%" }}>
            <img
              src="https://www.mkrestaurant.com/public/uploads/mk_menu/images/33e10dd680609fd2de8cc182fd51f644.jpg"
              width="100%"
              height="100%"
              style={{ borderRadius: "20px", margin: 0 }}
              alt="Menu Item"
            />
            <Box
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: "20px",
                margin: 0,
                background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))",
              }}
            />
          </Box>
          <Text
            position="absolute"
            p={5}
            fontSize={index.textStyles.h1.fontSize}
            fontWeight={index.textStyles.h1.fontWeight}
            color={index.colors.white}
            flexWrap={"wrap"}
            maxW={150}
          >
            {props.menuName}
          </Text>
          <Flex justifyContent={"flex-end"}>
            <Button
              style={{
                borderRadius: "100px",
                borderColor: "black",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
              width={100}
              height={"auto"}
              m={2}
              onClick={navigateToDetail}
            >
              <Text
                fontSize={index.textStyles.h4.fontSize}
                fontWeight={index.textStyles.h4.fontWeight}
                p={2}
              >
                For ${props.price}
              </Text>
            </Button>
          </Flex>
        </Card>
      </Box>
    </Box>
  );
};
