import {
  Box,
  Image,
  Text,
  VStack,
  HStack,
  Flex,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import textStyles from "../../../theme/foundations/textStyles";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { ButtonComponent } from "../../../components/buttons/ButtonComponent";

import { Axios } from "../../../AxiosInstance";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { id } from "date-fns/locale";
const getCartMenuItem = async (type: string, menuid: string) => {
  const response = await Axios.get(
    `/feature7/show${type}DetailFromCart/${menuid}`
  );
  console.log(response.data); //debugging response
  return response.data;
};

interface MenuDetailProps {
  id: number;
  name: string;
  price: number;
  description: string;
  image_url: string;
}

export const CartMenuDetail: FC = () => {
  // const { type, menuid } = useParams();
  ////console.log(menuid);

  // const {
  //   data: menuItem,
  //   isLoading,
  //   isError,
  // } = useQuery([type, menuid], () => getCartMenuItem(type, menuid));
  // console.log(menuItem);

  const [AmountInCart, setAmountInCart] = useState(0);
  const addToCart = (amount: number) => {
    setAmountInCart(AmountInCart + amount);
  };

  // useEffect(() => {
  //   if (menuItem) {
  //     // Set the amount to the initial quantity from menuItem, assuming menuItem.quantity exists
  //     setAmount(menuItem.quantity || 0);
  //   }
  // }, [menuItem]);

  const increaseAmount = () => {
    setAmountInCart(AmountInCart + 1);
  };

  const decreaseAmount = () => {
    if (AmountInCart > 0) {
      setAmountInCart(AmountInCart - 1);
    }
  };

  // const handleAddToCart = async () => {
  //   try {
  //     const response = await Axios.post(
  //       `/feature7/add${type}ToCookie/${menuid}`,
  //       {
  //         quantity: amount,
  //       }
  //     );
  //     console.log(response.data);
  //     // setAmount(0);
  //   } catch (error) {
  //     console.error("Error adding to cart:", error);
  //   }
  // };

  const buttonBgColor = AmountInCart > 0 ? "brand.200" : "gray.300";

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <div>Error fetching {type} details</div>;
  // }

  const handleAddToCart = async () => {
    try {
      const response = await Axios.post(`/feature4/cart/${6969}`, {
        quantity: AmountInCart,
      });
      console.log(response.data);
      // setAmount(0);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <Box>
      <Image
        src="/src/features/feature07/assets/test.jpg"
        // src={type == "Set" ? menuItem.image_url: menuItem.image}
        width="350px"
        height="250px"
        objectFit="cover"
      />
      <VStack p={1.5} textAlign="start" alignItems="start">
        <HStack>
          <Text {...textStyles.h1} color="white" lineHeight="1.5">
            {/* {menuItem.name} */}
            lorem
          </Text>
          <Text
            {...textStyles.h3}
            color="white"
            lineHeight="1.5"
            marginLeft="70px"
          >
            {/* {menuItem.price} baht */}
            29 Baht
          </Text>
        </HStack>
        <Text {...textStyles.body2}>{/* {menuItem.description} */}</Text>
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
          onClick={handleAddToCart}
        />
      </HStack>
    </Box>
  );
};
