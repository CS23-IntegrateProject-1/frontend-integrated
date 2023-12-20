import {
  Box,
  Image,
  Text,
  VStack,
  HStack,
  Flex,
  IconButton,
  Center,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import textStyles from "../../../theme/foundations/textStyles";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { ButtonComponent } from "../../../components/buttons/ButtonComponent";
import { useCustomToast } from "../../../components/useCustomToast";
import { Axios } from "../../../AxiosInstance";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const getMenuItem = async (type: string, menuid: string) => {
  const response = await Axios.get(`/feature7/get${type}ById/${menuid}`);
  return response.data;
};


export const MenuDetail: FC = () => {
  const { type, menuid } = useParams();
  //console.log(menuid);

  const {
    data: menuItem,
    isLoading,
    isError,
  } = useQuery([type, menuid], () => {
    if (type !== undefined && menuid !== undefined) {
      return getMenuItem(type, menuid);
    }
    return Promise.reject(new Error('type or menuid is undefined'));
  });
  console.log(menuItem);
  const [amount, setAmount] = useState(0);
  const toast = useCustomToast();
  const navigate = useNavigate();
  const increaseAmount = () => {
    setAmount(amount + 1);
  };

  const decreaseAmount = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  const handleAddToCart = async () => {
    try {
      if (amount > 0) {
        const response = await Axios.post(
          `/feature7/add${type}ToCookie/${menuid}`,
          {
            quantity: amount,
          }
        );
        console.log(response.data);
        toast.success("Successfully Added to Cart");
        // setAmount(0);
        if (type == "Set") {
            navigate('/venue/menu?section=setmenu');
          } else {
            navigate('/venue/menu?section=allmenu');
          }
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Menu not avaliable");
      if (type == "Set") {
        navigate('/venue/menu?section=setmenu');
      } else {
        navigate('/venue/menu?section=allmenu');
      }
    }
    // const cart = localStorage.getItem("cart");
    // const cartObj = cart ? JSON.parse(cart) : {};
    // const cartItem = cartObj[menuid];
    // const newCartObj = {
    //   ...cartObj,
    //   [menuid]: {
    //     ...cartItem,
    //     name: menuItem.name,
    //     price: menuItem.price,
    //     amount: cartItem ? cartItem.amount + amount : amount,
    //   },
    // };
    // localStorage.setItem("cart", JSON.stringify(newCartObj));
    // setAmount(0);
  };

  const buttonBgColor = amount > 0 ? "brand.200" : "gray.300";
  const hoverColor = amount > 0 ? "brand.300" : "gray.300";
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching {type} details</div>;
  }

  return (
    <Flex direction="column" align="center" justify="center">
      <VStack align="start">
        <Center>
          <Image
            // src="/src/features/feature07/assets/test.jpg"
            src={type == "Set"
            ? `${import.meta.env.VITE_BACKEND_URL}${menuItem?.image_url}`
            : `${import.meta.env.VITE_BACKEND_URL}${menuItem?.image}`}
            width="350px"
            height="250px"
            objectFit="cover"
          />
        </Center>
        <Box width="100%">
          <Flex justifyContent="space-between" alignItems="flex-start">
            <Text {...textStyles.h1} color="white" lineHeight="1.5">
              {menuItem.name}
            </Text>
            <Text
              {...textStyles.h3}
              color="white"
              lineHeight="1.5"
              marginLeft="70px"
            >
              {menuItem.price} baht
            </Text>
          </Flex>
        </Box>
        <Text {...textStyles.body2}>{menuItem.description}</Text>

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
                  isDisabled={amount === 0}
                  aria-label="Decrease Amount"
                  width="30px"
                  height="28px"
                  borderRadius="5px 0 0 5px"
                />
                <Text {...textStyles.h2} marginX={2} color="black">
                  {amount}
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
            bgColorHover={hoverColor}
            isDisabled={amount === 0}
            onClick={handleAddToCart}
          />
        </HStack>
      </VStack>
    </Flex>
  );
};
