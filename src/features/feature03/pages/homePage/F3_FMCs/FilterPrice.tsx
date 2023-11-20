import {
  Text,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";

const sliderLabel = {
  mt: "2",
  ml: "-2.5",
  fontSize: "sm",
};

export const FilterPrice = () => {
  return (
    <Flex direction="column" mb="4">
      <Text fontWeight={"semibold"} mb="3">Price range</Text>
      <Slider mb="5">
        <SliderMark value={4} {...sliderLabel}>
          THB 0
        </SliderMark>
        <SliderMark value={77} {...sliderLabel}>
          THB 1000
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack bg="brand.200" />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Flex>
  );
};
