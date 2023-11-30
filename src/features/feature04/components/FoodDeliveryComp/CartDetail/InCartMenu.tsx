import { Box, Flex, Text, IconButton, Divider, Button } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useState } from "react";
import index from "../../../../../theme/foundations/index";
export const InCartMenu = () => {
  const [addItem, setAddItem] = useState(0);
  const handleAddItem = () => {
    setAddItem(addItem + 1);
  };
  const handleDecreaseItem = () => {
    if (addItem > 1) {
      setAddItem(addItem - 1);
    }
  };
  return (
    <Box mt={20}>
      <Box>
        <Flex flexDir={"row"} justifyContent={"space-around"}>
          <img
            src="https://www.mkrestaurant.com/public/uploads/mk_menu/images/33e10dd680609fd2de8cc182fd51f644.jpg"
            width="10%"
            height="10%"
            style={{ borderRadius: "20px" }}
            alt="Menu Item"
          />
          <Flex flexDir={"column"}>
            <Text>MK Roasted Duck</Text>
            <Text>small</Text>
          </Flex>
          <Flex flexDir={"column"} justifyContent={"space-around"}>
            <Text>$200</Text>
            <Flex flexDir={"row"}>
              <IconButton
                icon={<MinusIcon />}
                onClick={handleDecreaseItem}
                isDisabled={addItem === 0}
                aria-label="Decrease Amount"
                width="30px"
                height="28px"
                borderRadius="10% 0% 0% 10%"
              />
              <Text color="black" backgroundColor={"white"} pl={2} pr={2}>
                {addItem}
              </Text>
              <IconButton
                icon={<AddIcon />}
                onClick={handleAddItem}
                aria-label="Add Item"
                width="30px"
                height="28px"
                borderRadius="0 10% 10% 0"
              />
            </Flex>
          </Flex>
        </Flex>
        <Divider borderColor={index.colors.brand[100]} mt={5} />
        <Flex
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-around"}
        >
          <Text>Add more items</Text>
          <Box
            minWidth={100}
            maxHeight={100}
            width={500}
            borderRadius={10}
            border={"solid 1.5px"}
            borderColor={index.colors.brand[100]}
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
              <Text>$210</Text>
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
            <Text>Total(incl. Vat)</Text>
            <Text>$210</Text>
          </Box>
          <Button
            variant={"unstyle"}
            backgroundColor={index.colors.brand[200]}
            maxWidth={500}
            minWidth={100}
            maxHeight={100}
            width={500}
            mb={2}
          >
            Review payment and address
          </Button>
        </Flex>
    </Box>
  );
};
