import React, { useState } from "react";
import { Box, Icon, Image } from "@chakra-ui/react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/Bs";
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
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? A.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === A.length - 1 ? 0 : prevIndex + 1));
  };


  return (
    <Box width="100%" pos={"relative"}>
      <Box bgColor="black" overflow="none" maxH="100px">
        {A.map((item, index) => (
          <Image
            key={index}
            src={item.picA}
            alt={`Advertisement ${index}`}
            objectFit={"cover"}
            borderRadius="xl"
            w="100%"
            h="100px"
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
        >
        <Icon as={BsChevronCompactLeft} color={"red"} fontSize={100} onClick={prevSlide}/>
        </Box>
        {/* Right Arrow */}
        <Box
          display="block"
          top="55%"
          transform="translate(50%, -50%)"
          right={6}
          position="absolute"
          fontSize="2xl"
          cursor="pointer"
        >
          <Icon as={BsChevronCompactRight} color={"red"} boxSize={100} onClick={nextSlide}/>
        </Box>
      </Box>
    </Box>
  );
};
