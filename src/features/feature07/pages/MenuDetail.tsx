import {Box,Image,Text,VStack,HStack,Flex,IconButton,Button} from "@chakra-ui/react";
import {FC,useState} from "react";
import textStyles from "../../../theme/foundations/textStyles";
import { AddIcon,MinusIcon} from '@chakra-ui/icons'
import { ButtonComponent } from "../../../components/buttons/ButtonComponent";

import { Axios } from "../../../AxiosInstance";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const getMenuItem = async (type: string, menuid: string) => {
    const response = await Axios.get(`/feature7/get${type}ById/${menuid}`);
    return response.data;
  };

interface MenuDetailProps {
    id:number;
    name:string;
    price:number;
    description:string;
    image_url:string;
}
export const MenuDetail: FC = () => {
    const {type, menuid} = useParams();
    //console.log(menuid);

    const { data: menuItem, isLoading, isError } = useQuery([type, menuid], () => getMenuItem(type, menuid));
    console.log(menuItem);
    const [amount, setAmount] = useState(0);

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
            const response = await Axios.post(`/feature7/add${type}ToCookie/${menuid}`, { 
                quantity : amount,
            });
            console.log(response.data);
            // setAmount(0);
        } catch (error) {
            console.error("Error adding to cart:", error);
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
      }

    const buttonBgColor = amount > 0 ? "brand.200" : "gray.300";

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching {type} details</div>;
    }

    return(
        <Box>
            <Image 
                // src="/src/features/feature07/assets/test.jpg" 
                src={type == "Set" ? menuItem.image_url: menuItem.image}
                width="350px" 
                height="250px" 
                objectFit="cover"/>
            <VStack p={1.5} textAlign="start" alignItems="start">
                <HStack>
                <Text {...textStyles.h1} color="white" lineHeight="1.5">{menuItem.name}</Text>
                <Text {...textStyles.h3} color="white" lineHeight="1.5" marginLeft="70px">{menuItem.price} baht</Text>
                </HStack>
                <Text {...textStyles.body2}>{menuItem.description}</Text>
            </VStack>
            <HStack  p={2} position="absolute" bottom="0" width="100%" spacing={15}>
            <HStack>
            <Box border="solid" 
            bgColor="white" 
            width="116px" 
            height="30px"
            ml = '0'
            borderColor="white"
            borderRadius="5px"
            >
            <Flex justifyContent="space-between">
                <IconButton
                    icon={<MinusIcon/>}
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
                    icon={<AddIcon/>}
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
            isDisabled={amount === 0}
            onClick={handleAddToCart}/>
            </HStack>
        </Box>
    )
}