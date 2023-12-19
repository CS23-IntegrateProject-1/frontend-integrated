import { useState } from "react";
import { Box, Icon, Image } from "@chakra-ui/react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

import { useQuery } from "@tanstack/react-query";
import { Axios } from "../../../../../AxiosInstance";
import { FullPageLoader } from "../../../../../components/Loader/FullPageLoader";

interface SliderAD {
  advertisementId: number;
  name: string;
  description: string;
  image_url: string;
}

export const SliderAdvertisement: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const {
    isLoading: SliderADLoading,
    isError: SliderADError,
    data: SliderADData,
  } = useQuery<SliderAD[]>({
    queryKey: ["getSliderAD"], 
    queryFn: async () => {
      const { data } = await Axios.get(`/feature5/AllCompleteAdBSN`);
      return data;
    },
  });

  if (SliderADLoading) {
    return (
      <span>
        <FullPageLoader />
      </span>
    );
  }

  if (SliderADError) {
    return <span>An error occurred: </span>;
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? SliderADData.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === SliderADData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <Box width="100%" pos={"relative"}>
      <Box bgColor="black" overflow="none" maxH={{base:"120px", lg:"140px"}}>
        {SliderADData.map((SADD, index) => (
          <Image
            key={index}
            src={SADD.image_url}
            alt={`Advertisement ${SADD.advertisementId}`}
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
          {SliderADData.map((_, index) => (
            <Box
              key={index}
              onClick={() => goToSlide(index)}
              fontSize="2xl"
              cursor="pointer"
              mx={1}
            >
              <Icon as={RxDotFilled} boxSize={{base:"5", lg:"6"}} color={index === currentIndex ? "white" : "gray.300"} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};