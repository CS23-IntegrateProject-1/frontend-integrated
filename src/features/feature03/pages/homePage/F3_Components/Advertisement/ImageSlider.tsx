// import { useState } from "react";
// import {
//     Box,
//     Text,
//     Image,
//   } from "@chakra-ui/react";

// const slideStyles = {
//   width: "100%",
//   height: "100%",
//   borderRadius: "10px",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
// };

// const rightArrowStyles = {
//   position: "absolute",
//   top: "50%",
//   transform: "translate(0, -50%)",
//   right: "32px",
//   fontSize: "45px",
//   color: "#fff",
//   zIndex: 1,
//   cursor: "pointer",
// };

// const leftArrowStyles = {
//   position: "absolute",
//   top: "50%",
//   transform: "translate(0, -50%)",
//   left: "32px",
//   fontSize: "45px",
//   color: "#fff",
//   zIndex: 1,
//   cursor: "pointer",
// };

// const sliderStyles = {
//   position: "relative",
//   height: "100%",
// };

// const dotsContainerStyles = {
//   display: "flex",
//   justifyContent: "center",
// };

// const dotStyle = {
//   margin: "0 3px",
//   cursor: "pointer",
//   fontSize: "20px",
// };

// const ImageSlider = ({ slides }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const goToPrevious = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };
//   const goToNext = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };
//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };
//   const slideStylesWidthBackground = {
//     ...slideStyles,
//     backgroundImage: `url(${slides[currentIndex].url})`,
//   };

//   export const ImageSlider = () => {

//     return (
//     <Box style={sliderStyles}>
//       <Box>
//         <Box onClick={goToPrevious} style={leftArrowStyles}>
//           ❰
//         </Box>
//         <Box onClick={goToNext} style={rightArrowStyles}>
//           ❱
//         </Box>
//       </Box>
//       <Box style={slideStylesWidthBackground}></Box>
//       <Box style={dotsContainerStyles}>
//         {slides.map((slide, slideIndex) => (
//           <Box
//             style={dotStyle}
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//           >
//             ●
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// };



import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

interface Slide {
  url: string;
  title: string;
}

interface ImageSliderProps {
  slides: Slide[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      {slides.map((slide, index) => (
        <Box key={index} m={4} p={4} borderWidth="1px" borderRadius="lg">
          <Image src={slide.url} alt={slide.title} />
          <Text>{slide.title}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default ImageSlider;
