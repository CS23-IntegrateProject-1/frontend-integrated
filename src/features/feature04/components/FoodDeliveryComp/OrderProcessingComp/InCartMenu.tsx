import { useState, useEffect } from "react";
import { Box, Flex, Text, IconButton, Divider, Button } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { Axios } from "../../../../../AxiosInstance";
import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

interface Venue{
  venueId: string | undefined;
  branchId: string | undefined;
}
export const InCartMenu = (props:Venue) => {
  const [subtotal, setsubTotal] = useState<number>(0); // Define total state
  const [itemQuantities, setItemQuantities] = useState<{
    [itemId: string]: number;
  }>({});
  const queryClient = useQueryClient();
  useEffect(() => {
    calculateSubtotal();
  });
  // const handleAddItem = async (itemId: string) => {
  //   try {
  //     // Increase the quantity locally
  //     console.log(itemId);
  //     setItemQuantities((prevQuantities) => ({
  //       ...prevQuantities,
  //       [itemId]: (prevQuantities[itemId] || 0) + 1,
  //     }));

  //     // Use the updated state value
  //     const updatedQuantity = itemQuantities[itemId] + 1;
  //     console.log("UpdatedQuantity:", updatedQuantity);
  //     // Send a request to update the server-side cart
  //     await Axios.post(`/feature4/updateCartItemQuantity/${itemId}`, {
  //       quantity: updatedQuantity,
  //     });

  //     // Invalidate the query to refetch the updated cart
  //     queryClient.invalidateQueries(["cartItem"]);
  //   } catch (error) {
  //     console.error("Error updating item quantity:", error);
  //   }
  // };

  interface CartItem {
    userId: number;
    itemId: string;
    name: string;
    quantity: number;
    price: string;
  }

  const handleAddItem = async (itemId: string) => {
    try {
      // Increase the quantity locally
      console.log(itemId);
      const itemIdToUpdate = itemId;
      const response = await Axios.get("/feature4/showOrderCart");
      console.log(response);
      const cartItems: CartItem[] = response.data; // Assuming it's an array of cart items
      const itemIndex = cartItems.findIndex(
        (item) => item.itemId === itemIdToUpdate
      );
      // Check if the item is found
      if (itemIndex !== -1) {
        // Increase the quantity by one
        const updatedQuantity = cartItems[itemIndex].quantity + 1;
        console.log("OLD:", cartItems[itemIndex].quantity);
        console.log("UPDATED:", updatedQuantity);

        // Update the quantity locally
        const updatedCartItems: CartItem[] = [
          ...cartItems.slice(0, itemIndex),
          { ...cartItems[itemIndex], quantity: updatedQuantity },
          ...cartItems.slice(itemIndex + 1),
        ];

        // Make a request to update the server-side cart
        await Axios.post(`/feature4/updateCartItemQuantity/${itemIdToUpdate}`, {
          quantity: updatedQuantity,
        });

        // Invalidate the query to refetch the updated cart
        queryClient.invalidateQueries(["cartItem"]);
      }
      // setItemQuantities((prevQuantities) => ({
      //   ...prevQuantities,
      //   [itemId]: (prevQuantities[itemId] || 0) + 1,
      // }));

      // // Use the updated state value
      // const updatedQuantity = itemQuantities[itemId] + 1;
      // console.log("UpdatedQuantity:", updatedQuantity);
      // // Send a request to update the server-side cart
      // await Axios.post(`/feature4/updateCartItemQuantity/${itemId}`, {
      //   quantity: updatedQuantity,
      // });

      // // Invalidate the query to refetch the updated cart
      // queryClient.invalidateQueries(["cartItem"]);
    } catch (error) {
      console.error("Error updating item quantity:", error);
    }
  };
  const handleDecreaseItem = async (itemId: string) => {
    try {
      // Increase the quantity locally
      console.log(itemId);
      const itemIdToUpdate = itemId;
      const response = await Axios.get("/feature4/showOrderCart");
      console.log(response);
      const cartItems: CartItem[] = response.data; // Assuming it's an array of cart items
      const itemIndex = cartItems.findIndex(
        (item) => item.itemId === itemIdToUpdate
      );
      // Check if the item is found
      if (itemIndex !== -1) {
        // Increase the quantity by one
        const updatedQuantity = cartItems[itemIndex].quantity - 1;

        // Update the quantity locally
        const updatedCartItems: CartItem[] = [
          ...cartItems.slice(0, itemIndex),
          { ...cartItems[itemIndex], quantity: updatedQuantity },
          ...cartItems.slice(itemIndex - 1),
        ];

        // Make a request to update the server-side cart
        await Axios.post(`/feature4/updateCartItemQuantity/${itemIdToUpdate}`, {
          quantity: updatedQuantity,
        });

        // Invalidate the query to refetch the updated cart
        queryClient.invalidateQueries(["cartItem"]);
      }
      // setItemQuantities((prevQuantities) => ({
      //   ...prevQuantities,
      //   [itemId]: (prevQuantities[itemId] || 0) + 1,
      // }));

      // // Use the updated state value
      // const updatedQuantity = itemQuantities[itemId] + 1;
      // console.log("UpdatedQuantity:", updatedQuantity);
      // // Send a request to update the server-side cart
      // await Axios.post(`/feature4/updateCartItemQuantity/${itemId}`, {
      //   quantity: updatedQuantity,
      // });

      // // Invalidate the query to refetch the updated cart
      // queryClient.invalidateQueries(["cartItem"]);
    } catch (error) {
      console.error("Error updating item quantity:", error);
    }
  };

  const navigate = useNavigate();

  const nav = () => {
    navigate(`/map/food-delivery/checkout/${props.venueId}/${props.branchId}`);
  };
  const navToMenu = () => {
    navigate(`/map/food-delivery/${props.venueId}/${props.branchId}`);
  };

  const fetchCartItems = async () => {
    try {
      const response = await Axios.get("/feature4/showOrderCart");
      //console.log("Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching cart items:", error);
      console.log("Error response:");
    }
  };

  const { data: cartItems } = useQuery(["cartItem"], () =>
    fetchCartItems()
  );
  //console.log("Card Items:", cartItems);
  //console.log("Fetch Status:", status);

  const calculateSubtotal = async () => {
    try {
      const response = await Axios.get("/feature4/getTotal");
      //console.log(response.data);
      const total = response.data;
      setsubTotal(total); // Update total state
      return total;
    } catch (error) {
      console.log("Error fetching total cost: ", error);
    }
  };

  const saveTotal = async (total: number) => {
    try {
      const response = await Axios.post(`/feature4/saveTotal/${total}`);
      //console.log("Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error saving total:", error);
    }
  };

  const calculateTotal = () => {
    const total = subtotal + 0;
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
                <Text>฿{item.price}</Text>
                <Flex flexDir={"row"}>
                  <IconButton
                    icon={<MinusIcon />}
                    onClick={() => handleDecreaseItem(item.itemId)}
                    aria-label="Decrease Amount"
                    width="30px"
                    height="28px"
                    borderRadius="10% 0% 0% 10%"
                    isDisabled={item.quantity === 1}
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
              <Text>฿{subtotal}</Text>
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
          <Text>฿{calculateTotal()}</Text>
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
