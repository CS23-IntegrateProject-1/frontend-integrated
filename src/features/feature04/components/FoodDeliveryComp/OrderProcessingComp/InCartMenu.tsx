import { useState } from "react";
import { Box, Flex, Text, IconButton, Divider, Button } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { Axios } from "../../../../../AxiosInstance";
import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

export const InCartMenu = () => {
  const [itemQuantities, setItemQuantities] = useState<{
    [itemId: string]: number;
  }>({});
  const queryClient = useQueryClient();

  const handleAddItem = async (itemId: string) => {
    try {
      // Increase the quantity locally
      setItemQuantities((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: (prevQuantities[itemId] || 0) + 1,
      }));
  
      // Use the updated state value
      const updatedQuantity = itemQuantities[itemId];
  
      // Send a request to update the server-side cart
      await Axios.post(`/feature4/updateCartItemQuantity/${itemId}`, {
        quantity: updatedQuantity,
      });
      console.log(updatedQuantity)
  
      // Invalidate the query to refetch the updated cart
      queryClient.invalidateQueries(["cartItem"]);
    } catch (error) {
      console.error("Error updating item quantity:", error);
    }
  };
  
  const handleDecreaseItem = async (itemId: string) => {
    try {
      // Ensure the quantity is greater than 0 before decreasing
      if (itemQuantities[itemId] > 0) {
        // Decrease the quantity locally
        setItemQuantities((prevQuantities) => ({
          ...prevQuantities,
          [itemId]: prevQuantities[itemId] - 1,
        }));
  
        // Use the updated state value
        const updatedQuantity = itemQuantities[itemId];
  
        // Send a request to update the server-side cart
        await Axios.post(`/feature4/updateCartItemQuantity/${itemId}`, {
          quantity: updatedQuantity,
        });
  
        // Invalidate the query to refetch the updated cart
        queryClient.invalidateQueries(["cartItem"]);
      }
    } catch (error) {
      console.error("Error updating item quantity:", error);
    }
  };
  

  const navigate = useNavigate();

  const nav = () => {
    navigate("/map/food-delivery/checkout");
  };
  const navToMenu = () => {
    navigate("/map/food-delivery");
  };

  const fetchCartItems = async () => {
    try {
      const response = await Axios.get("/feature4/showOrderCart");
      console.log("Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching cart items:", error);
      console.log("Error response:");
    }
  };

  const { data: cartItems, status } = useQuery(["cartItem"], () => fetchCartItems());
  console.log('Fetch Status:', status);  

  const calculateSubtotal = (items: typeof cartItems, quantities: typeof itemQuantities) => {
    if (!items) return 0;
  
    return items.reduce((acc: number, item: typeof cartItems) => {
      const price = parseFloat(item.price);
      const quantity = quantities[item.itemId]||0;
      console.log(`Price: ${price}, Quantity: ${quantity}`);
      return acc + price * quantity + price;
    }, 0);
  };
  
  const saveTotal = async (total: number) => {
    try {
      const response = await Axios.post(`/feature4/saveTotal/${total}`);
      console.log("Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error saving total:", error);
    }
  };

  const calculateTotal = (items: typeof cartItems) => {
    const subtotal = calculateSubtotal(items,itemQuantities);
    const total = parseFloat(subtotal) + 0;
    saveTotal(total);
    return total.toFixed(2);
  };

  const handleRemoveItem = async (itemId: string) => {
    try {
      const response = await Axios.delete(`/feature4/removeCartItem/${itemId}`);
      console.log("REMOVED");
      console.log(response);
      queryClient.invalidateQueries(["cartItem"]);
    } catch (error) {
      console.error("Error removing cart item:", error);
    }
  };

  return (
    <Box mt={20}>
      <Box>
        {cartItems &&
          cartItems.map((item: typeof cartItems, index: number) => (
            <Flex
              key={index}
              flexDir={"row"}
              justifyContent={"space-around"}
              border={"solid 1.5px #DEBEF6"}
              borderRadius={10}
              p={3}
            >
              <img
                src="https://www.mkrestaurant.com/public/uploads/mk_menu/images/33e10dd680609fd2de8cc182fd51f644.jpg"
                width="10%"
                height="10%"
                style={{ borderRadius: "20px" }}
                alt={item.name}
              />
              <Flex flexDir={"column"} justifyContent={"center"}>
                <Text width={20}>{item.name}</Text>
                <Text>{item.size}</Text>
              </Flex>
              <Flex flexDir={"column"} justifyContent={"space-around"}>
                <Text>${item.price}</Text>
                <Flex flexDir={"row"}>
                  <IconButton
                    icon={<MinusIcon />}
                    onClick={() => handleDecreaseItem(item.itemId)}
                    aria-label="Decrease Amount"
                    width="30px"
                    height="28px"
                    borderRadius="10% 0% 0% 10%"
                  />
                  <Text color="black" backgroundColor={"white"} pl={2} pr={2}>
                    {item.quantity + (itemQuantities[item.itemId] || 0)}
                  </Text>
                  <IconButton
                    icon={<AddIcon />}
                    onClick={() => handleAddItem(item.itemId)}
                    aria-label="Add Item"
                    width="30px"
                    height="28px"
                    borderRadius="0 10% 10% 0"
                  />
                </Flex>
              </Flex>
              <Flex flexDirection={"row"} alignItems={"center"}>
                <Button
                  variant={"unstyle"}
                  color={"red"}
                  onClick={() => handleRemoveItem(item.itemId)}
                >
                  Remove
                </Button>
              </Flex>
            </Flex>
          ))}
        <Divider borderColor="#DEBEF6" mt={5} />
        <Flex
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-around"}
        >
          <Button onClick={navToMenu}>Add more items</Button>
          <Box
            minWidth={100}
            maxHeight={100}
            width={500}
            borderRadius={10}
            border={"solid 1.5px"}
            borderColor="#DEBEF6"
            p={5}
            mt={5}
            mb={5}
          >
            <Box
              display={"flex"}
              flexDir={"row"}
              justifyContent={"space-around"}
            >
                <Text>Subtotal</Text>
                <Text>${calculateSubtotal(cartItems, itemQuantities)}</Text>
            </Box>
            <Box
              display={"flex"}
              flexDir={"row"}
              justifyContent={"space-around"}
            >
              <Text>Delivery Fee</Text>
              <Text>Free</Text>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Flex
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-around"}
        m={2}
      >
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-around"}
          gap={2}
        >
          <Text>Total (incl. Vat)</Text>
          <Text>${calculateTotal(cartItems)}</Text>
        </Box>
        <Button
          variant={"unstyled"}
          backgroundColor="#A533C8"
          color="white"
          maxWidth={500}
          minWidth={100}
          maxHeight={100}
          width={500}
          mb={2}
          onClick={nav}
        >
          Review payment and address
        </Button>
      </Flex>
    </Box>
  );
};