import {Box,Image,Text,VStack,HStack,Flex,IconButton,Center} from "@chakra-ui/react";
import {FC,useState} from "react";
import textStyles from "../../../theme/foundations/textStyles";
import { AddIcon,MinusIcon} from '@chakra-ui/icons'
import { ButtonComponent } from "../../../components/buttons/ButtonComponent";

import { Axios } from "../../../AxiosInstance";
import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const getCartMenuItem = async (type: string, menuid: string) => {
    const response = await Axios.get(`/feature7/show${type}DetailFromCart/${menuid}`);
    console.log(response.data); //debugging response
    return response.data;
  };

// interface MenuDetailProps {
//     id:number;
//     name:string;
//     price:number;
//     description:string;
//     image_url:string;
// }
export const CartMenuDetail: FC = () => {
    const {type, menuid} = useParams();
    const navigate = useNavigate();
    //console.log(menuid);

    const { data: menuItem, isLoading, isError } = useQuery([type, menuid], () => {
        if (type !== undefined && menuid !== undefined) {
          return getCartMenuItem(type, menuid);
        }
        return Promise.reject(new Error('type or menuid is undefined'));
  });
    console.log(menuItem);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        if (menuItem) {
            // Set the amount to the initial quantity from menuItem, assuming menuItem.quantity exists
            setAmount(menuItem.quantity || 0);
        }
    }, [menuItem]);

    const increaseAmount = () => {
      setAmount(amount + 1);
    };
  
    const decreaseAmount = () => {
      if (amount > 0) {
        setAmount(amount - 1);
      }
    };
    const handleDelete = async () =>{
        try{
            const response = await Axios.delete(`/feature7/delete${type}FromCookie/${menuid}`);
            console.log("Item Deleted From Cart:",response.data);
            navigate("/venue/cart");
        } catch(error){
            console.error("Error deleting item:", error);
        }
    }
    
    const handleAddToCart = async () => {
        try {
            if (amount > 0) {
                const response = await Axios.post(`/feature7/add${type}ToCookie/${menuid}`, { 
                    quantity : amount,
                });
                console.log(response.data);
            } else if (amount == 0){
                await handleDelete();
            }
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
      }

    const buttonBgColor = amount > 0 ? "brand.200" : "red";
    const buttonText = amount > 0 ? "Update" : "Remove";
   
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching {type} details</div>;
    }

    return(
        <Flex direction="column" align="center" justify="center">
        <VStack align="start">
        <Center>
            <Image 
                // src="/src/features/feature07/assets/test.jpg" 
                src={type == "Set" ? menuItem.image_url: menuItem.image}
                width="350px" 
                height="250px" 
                objectFit="cover"/>
         </Center>
         <Box width="100%">
          <Flex justifyContent="space-between" alignItems="flex-start">
                <Text {...textStyles.h1} color="white" lineHeight="1.5">{menuItem.name}</Text>
                <Text {...textStyles.h3} color="white" lineHeight="1.5" marginLeft="70px">{menuItem.price} baht</Text>
                </Flex>
        </Box>
                <Text {...textStyles.body2}>{menuItem.description}</Text>
           
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
            text={buttonText}
            bgColor={buttonBgColor}
            
            onClick={handleAddToCart}/>
            </HStack>
            </VStack>
        </Flex>
    )
}