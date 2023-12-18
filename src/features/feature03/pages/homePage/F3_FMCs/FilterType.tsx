import { Text, Button, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { FilterContext } from "../VenuePage";

const buttonStyle = {
  bgColor: "brand.200",
  textColor: "white",
  _hover: { bgColor: "brand.100", textColor: "black" },
  fontSize: "sm",
};


export const FilterType = () => {
  const context = useContext(FilterContext);

  const isActiveTy = (ty: string) => {
    return context.filter.type.includes(ty);
  }

  const handleTyClick = (ty: string) => {
    if (isActiveTy(ty)) {
      context.setFilter(filter => ({
        ...filter,
        type: filter.type.split(',').filter((t) => t !== ty).join(',')
      }));
    } else {
      context.setFilter(filter => ({
        ...filter,
        type: [...filter.type.split(','), ty].filter((t) => t !== '').join(',')
      }));
    }
  }
  console.log(context.filter.type)

  return (
    <Flex direction="column" mb="4">
      <Text fontWeight={"semibold"} mb="3">Type of place</Text>
      <Flex direction="row" justify="space-between">
        <Button sx={{...buttonStyle, backgroundColor: isActiveTy("Restaurant") ? "brand.200" : "brand.400"}} onClick={() =>handleTyClick('Restaurant')}>
          Restaurants
        </Button>
        <Button sx={{...buttonStyle, backgroundColor: isActiveTy("Bar") ? "brand.200" : "brand.400"}} onClick={() =>handleTyClick('Bar')} mx="2">
          Bars
        </Button>
        <Button sx={{...buttonStyle, backgroundColor: isActiveTy("Club") ? "brand.200" : "brand.400"}} onClick={() =>handleTyClick('Club')}>
          Clubs
        </Button>
      </Flex>
    </Flex>
  );
};
