import { FC, useState, useEffect } from "react";
import {
  Box,
  Image,
  Text,
  VStack,
  HStack,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { ButtonComponent } from "../../../components/buttons/ButtonComponent";
import { Axios } from "../../../AxiosInstance";
import { useParams } from "react-router-dom";
import textStyles from "../../../theme/foundations/textStyles";

interface MenuDetailProps {
  id: number;
  name: string;
  price: number;
  description: string;
}


export const CartMenuDetail: FC = () => {
  const [AmountInCart, setAmountInCart] = useState(0);
  const [menuData, setMenuData] = useState<MenuDetailProps | null>(null);
  const { id } = useParams();
useEffect(() => {
  const fetchMenuDetail = async () => {
    console.log("Fetching menu detail...");
    try {
      const response = await Axios.get(`/feature4/menu/${id}}`);
      console.log("Response:", response);
      console.log("Response data:", response.data);
      setMenuData(response.data);
    } catch (error) {
      console.error("Error fetching menu details:", error);
    }
  };

  fetchMenuDetail();
}, [id]);console.log("ID from useParams:", id);



  const increaseAmount = () => {
    setAmountInCart(AmountInCart + 1);
  };

  const decreaseAmount = () => {
    if (AmountInCart > 0) {
      setAmountInCart(AmountInCart - 1);
    }
  };

  const buttonBgColor = AmountInCart > 0 ? "brand.200" : "gray.300";

  console.log("menuData:", menuData);

  return (
    <Box>
      {menuData && menuData.name && (
        <>
          <Image
            src="https://www.mkrestaurant.com/public/uploads/mk_menu/images/33e10dd680609fd2de8cc182fd51f644.jpg"
            width="350px"
            height="250px"
            objectFit="cover"
          />
          <VStack p={1.5} textAlign="start" alignItems="start">
            <HStack>
              <Text {...textStyles.h1} color="white" lineHeight="1.5">
                {menuData.name}
              </Text>
              <Text
                {...textStyles.h3}
                color="white"
                lineHeight="1.5"
                marginLeft="70px"
              >
                {menuData.price} Baht
              </Text>
            </HStack>
            <Text {...textStyles.body2}>{menuData.description}</Text>
          </VStack>
          <HStack p={2} position="absolute" bottom="0" width="100%" spacing={15}>
            <HStack>
              <Box
                border="solid"
                bgColor="white"
                width="116px"
                height="30px"
                ml="0"
                borderColor="white"
                borderRadius="5px"
              >
                <Flex justifyContent="space-between">
                  <IconButton
                    icon={<MinusIcon />}
                    onClick={decreaseAmount}
                    isDisabled={AmountInCart === 0}
                    aria-label="Decrease Amount"
                    width="30px"
                    height="28px"
                    borderRadius="5px 0 0 5px"
                  />
                  <Text {...textStyles.h2} marginX={2} color="black">
                    {AmountInCart}
                  </Text>
                  <IconButton
                    icon={<AddIcon />}
                    onClick={increaseAmount}
                    aria-label="Increase Amount"
                    width="30px"
                    height="28px"
                    borderRadius="0 5px 5px 0"
                    marginRight={0}
                  />
                </Flex>
              </Box>
            </HStack>
            <ButtonComponent
              width="200px"
              text="Add To Cart"
              bgColor={buttonBgColor}
              isDisabled={AmountInCart === 0}
            />
          </HStack>
        </>
      )}
    </Box>
  );
};