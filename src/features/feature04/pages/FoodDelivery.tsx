import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { MenuComp } from "../components/FoodDeliveryComp/MenuComp";
import { FoodDeliNavbar } from "../components/FoodDeliveryComp/FoodDeliNavbar";
import index from "../../../theme/foundations/index";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Axios } from "../../../AxiosInstance";
interface Menu {
  menuId: number;
  name: string;
  price: number;
  description: string;
  image: string;
}
const FoodDelivery = () => {
  const navigate = useNavigate();
  const navToCartDetail=()=>{
    navigate('/map/food-delivery/cart-detail')
  }

  const [numberInCart, setNumberInCart] = useState(0);
  const [menuData, setMenuData] = useState<Menu[]>([]);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await Axios.get<Menu[]>("/feature4/menus/1");
        console.log("Menu Data Response:", response.data);
        setMenuData(response.data);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };
    

    fetchMenuData();
  }, []); // Empty dependency array to run the effect only once on component mount

  const addToCart = (amount) => {
    setNumberInCart(numberInCart + amount);
  };
  return (
    <Box>
      <FoodDeliNavbar RestaurantName="MK Restaurant (Big C Rama 4)" DeliveryMinute={30}/>
      <Flex flexDir={"column"} alignItems="center">
        {/* <Flex flexWrap="wrap" justifyContent="center" maxW="800px" gap={5}>
          <MenuComp menuName="MK Roasted Duck" price={210.0}/>
          <MenuComp menuName="MK Roasted Duck"price={210.0} />
          <MenuComp menuName="MK Roasted Duck" price={210.0}/>
          <MenuComp menuName="MK Roasted Duck" price={210.0}/>
          <MenuComp menuName="MK Roasted Duck"price={210.0} />
          <MenuComp menuName="MK Roasted Duck"price={210.0} />
        </Flex> */}
       <Flex flexWrap="wrap" justifyContent="center" maxW="800px" gap={5}>
        {menuData.map((menu,index) => (
          <MenuComp key={index} name={menu.name} price={menu.price} menuId={menu.menuId} description={menu.description} image={menu.image} />
        ))}
      </Flex>
      </Flex>
      
      <Flex justifyContent={"center"}>
        <Button
          variant={"unstyle"}
          display={"flex"}
          justifyContent={"space-between"}
          width={"auto"}
          minW={"300"}
          height={70}
          background={index.colors.brand[200]}
          color={index.colors.white}
          m={10}
          onClick={navToCartDetail}
        >
          <Text
            borderRadius={"100%"}
            borderWidth="2px"
            borderStyle="solid"
            width={"2em"}
            height={"2em"}
            textAlign={"center"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {numberInCart}
          </Text>
          <Text
            fontSize={index.textStyles.body1.fontSize}
            fontWeight={index.textStyles.h1.fontWeight}
          >
            View Your Cart
          </Text>
          <Text
            fontSize={index.textStyles.body1.fontSize}
            fontWeight={index.textStyles.body1.fontWeight}
          >
            $210.0
          </Text>
        </Button>
      </Flex> 
    </Box>
  );
};
export default FoodDelivery;
