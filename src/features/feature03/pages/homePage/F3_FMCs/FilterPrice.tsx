import {
  Text,
  Flex,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { useContext } from "react";
import { FilterContext } from "../VenuePage";

export const FilterPrice = () => {
  const context = useContext(FilterContext);
  const handlePriceMinChange = (value: number) => {
    context.setFilter(filter => ({
      ...filter,
      priceMin: value
    }))
  };

  const handlePriceMaxChange = (value: number) => {
    context.setFilter(filter => ({
      ...filter,
      priceMax: value
    }))
  };

  return (
    <Flex direction="column" mb="4">
      <Text fontWeight={"semibold"} mb="3">
        Price range
      </Text>
      <RangeSlider aria-label={["min", "max"]} value={[context.filter.priceMin, context.filter.priceMax]} min={0} max={1000} onChange={([min, max]) => {
        handlePriceMinChange(min);
        handlePriceMaxChange(max);
      }}>
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      {/* <Slider mb="5" onChange={e => handlePriceMinChange(e)}>
        <SliderMark value={4} {...sliderLabel} >
          THB 0
        </SliderMark>
        <SliderMark value={77} {...sliderLabel}>
          THB 1000
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack bg="brand.200" />
        </SliderTrack>
        <SliderThumb />
      </Slider> */}
    </Flex>
  );
};
