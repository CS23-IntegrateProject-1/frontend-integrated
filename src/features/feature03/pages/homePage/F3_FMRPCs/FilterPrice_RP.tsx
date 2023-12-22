import {
  Text,
  Flex,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { useContext } from "react";
import { FilterContext_RP } from "../RecommendedPlacesPage";

export const FilterPrice_RP = () => {
  const context_RP = useContext(FilterContext_RP);
  const handlePriceMinChange = (value: number) => {
    context_RP.setFilter((filter) => ({
      ...filter,
      priceMin: value,
    }));
  };

  const handlePriceMaxChange = (value: number) => {
    context_RP.setFilter((filter) => ({
      ...filter,
      priceMax: value,
    }));
  };

  return (
    <Flex direction="column" mb="4">
      <Text fontWeight={"semibold"} mb="3">
        Price range
      </Text>
      <RangeSlider
        aria-label={["min", "max"]}
        value={[context_RP.filter.priceMin, context_RP.filter.priceMax]}
        min={0}
        max={1000}
        onChange={([min, max]) => {
          handlePriceMinChange(min);
          handlePriceMaxChange(max);
        }}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack bg="brand.200" />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      <Flex>
        {" "}
        <Text>0 ฿</Text>
        <Text ml={"auto"}>1000 ฿</Text>
      </Flex>
    </Flex>
  );
};
