import React, { useState } from "react";
import { Box, Icon, Image } from "@chakra-ui/react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

import mockA from "../../AF3mock.json";

interface AProps {
  id: number;
  name: string;
  picA: string;
}

export const SliderAdvertisement: React.FC = () => {
  const A: AProps[] = mockA;

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? A.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === A.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <Box width="100%" pos={"relative"}>
      <Box bgColor="black" overflow="none" maxH={{base:"120px", lg:"140px"}}>
        {A.map((item, index) => (
          <Image
            key={index}
            src={item.picA}
            alt={`Advertisement ${index}`}
            objectFit={"cover"}
            borderRadius="xl"
            w="100%"
            h={{base:"120px", lg:"140px"}}
            display={index === currentIndex ? "block" : "none"}
            zIndex={index === currentIndex ? 1 : 0}
          />
        ))}
        {/* Left Arrow */}
        <Box
          display="block"
          top="55%"
          transform="translate(-50%, -50%)"
          left={6}
          position="absolute"
          fontSize="2xl"
          cursor="pointer"
          rounded="full"
        >
          <Icon
            as={BsChevronCompactLeft}
            color={"grey.100"}
            fontSize={80}
            onClick={prevSlide}
            rounded="full"
          />
        </Box>
        {/* Right Arrow */}
        <Box
          display="block"
          top="55%"
          transform="translate(50%, -50%)"
          right={6}
          position="absolute"
          cursor="pointer"
          rounded="full"
        >
          <Box opacity={1}>
            <Icon
              as={BsChevronCompactRight}
              color={"grey.100"}
              fontSize={80}
              onClick={nextSlide}
              rounded="full"
            />
          </Box>
        </Box>

        {/* Dots */}
        <Box display="flex" position="absolute" bottom={0} left="50%" transform="translateX(-50%)">
          {A.map((_, index) => (
            <Box
              key={index}
              onClick={() => goToSlide(index)}
              fontSize="2xl"
              cursor="pointer"
              mx={1}
            >
              <Icon as={RxDotFilled} boxSize={5} color={index === currentIndex ? "white" : "gray.300"} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
