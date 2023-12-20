import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { MenuComp } from "../components/FoodDeliveryComp/MenuComp";
import { FoodDeliNavbar } from "../components/FoodDeliveryComp/FoodDeliNavbar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Axios } from "../../../AxiosInstance";

interface Menu {
  menuId: number | string;
  name: string;
  price: number;
}

const FoodDelivery = () => {
  const navigate = useNavigate();
  const navToCartDetail = () => {
    navigate("/map/food-delivery/cart-detail");
  };

  const [menuData, setMenuData] = useState<Menu[]>([]);
  const [total, setTotal] = useState<number>(0); // Define total state
  const [itemCount, setitemCount] = useState<number>(0); // Define total state
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

    const getTotalCost = async () => {
      try {
        const response = await Axios.get("/feature4/getTotal");
        console.log(response.data);
        const total = response.data;
        setTotal(total); // Update total state
      } catch (error) {
        console.log("Error fetching total cost: ", error);
      }
    };

    const getItemCount = async () => {
      try {
        const response = await Axios.get("/feature4/showOrderCart");
        console.log(response);
        if (response && response.data && Array.isArray(response.data)) {
          const totalQuantity = response.data.reduce(
            (acc, item) => acc + (item.quantity || 0),
            0
          );
          setitemCount(totalQuantity);
        } else {
          console.error("Invalid response format");
        }
        console.log("Item count :");
        console.log(itemCount);
      } catch (error) {
        console.log("Error getting item count: ", error);
      }
    };
    getItemCount();
    getTotalCost();
    fetchMenuData();
  }, []);

  return (
    <Box>
      <FoodDeliNavbar
        RestaurantName="MK Restaurant (Big C Rama 4)"
        DeliveryMinute={30}
      />
      <Flex flexDir={"column"} alignItems="center">
        <Flex flexWrap="wrap" justifyContent="center" maxW="800px" gap={5}>
          {menuData.map((menu, index) => (
            <MenuComp
              key={index}
              menuName={menu.name}
              price={menu.price}
              id={menu.menuId}
            />
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
          background={"brand.200"}
          color={"white"}
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
            {itemCount}
          </Text>
          <Text fontSize={"body1"} fontWeight={"h1"}>
            View Your Cart
          </Text>
          <Text fontSize={"body1"} fontWeight={"body1"}>
            {total}
          </Text>
        </Button>
      </Flex>
    </Box>
  );
};

export default FoodDelivery;
