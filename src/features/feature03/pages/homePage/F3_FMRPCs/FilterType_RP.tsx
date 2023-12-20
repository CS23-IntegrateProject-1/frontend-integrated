import { Text, Button, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { FilterContext_RP } from "../RecommendedPlacesPage";

const buttonStyle = {
  bgColor: "brand.200",
  textColor: "white",
  _hover: { bgColor: "brand.100", textColor: "black" },
  fontSize: "sm",
};


export const FilterType_RP = () => {
  const context_RP = useContext(FilterContext_RP);

  const isActiveTy = (ty: string) => {
    return context_RP.filter.type.includes(ty);
  }

  const handleTyClick = (ty: string) => {
    if (isActiveTy(ty)) {
      context_RP.setFilter(filter => {
        return {
          ...filter,
          type: filter.type.split(',').filter((t) => t !== ty).join(',')
        }
      });
    } else {
      context_RP.setFilter(filter => ({
        ...filter,
        type: [...filter.type.split(','), ty].filter((t) => t !== '').join(',')
      }));
    }
  }
  // console.log(context.filter.type)

  return (
    <Flex direction="column" mb="4">
      <Text fontWeight={"semibold"} mb="3">Type of place</Text>
      <Flex direction="row" justify="space-between">
        <Button sx={{...buttonStyle, backgroundColor: isActiveTy("Restaurant") ? "brand.400" : "brand.200"}} onClick={() =>handleTyClick('Restaurant')}>
          Restaurants
        </Button>
        <Button sx={{...buttonStyle, backgroundColor: isActiveTy("Bar") ? "brand.400" : "brand.200"}} onClick={() =>handleTyClick('Bar')} mx="2">
          Bars
        </Button>
        <Button sx={{...buttonStyle, backgroundColor: isActiveTy("Club") ? "brand.400" : "brand.200"}} onClick={() =>handleTyClick('Club')}>
          Clubs
        </Button>
      </Flex>
    </Flex>
  );
};
