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

export const FilterDistance = () => {
  return (
    <Flex direction="column" mb="4">
      <Text fontWeight={"semibold"} mb="3">Distance</Text>
      <Slider mb="5">
        <SliderMark value={4} {...sliderLabel}>
          x km
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack bg="brand.200" />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Flex>
  );
};
