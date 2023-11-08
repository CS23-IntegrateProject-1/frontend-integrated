// import React from "react";
// import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import {
//   Box,
//   Text,
//   Image,
// } from "@chakra-ui/react";

// import mockA from "../../../AF3mock.json";

// interface AProps {
//   id: number;
//   name: string;
//   picA: string;
// }

// export const SliderAdvertisement = () => {
//   const A: AProps[] = mockA;

//   return (
//     <Box width={"100%"}>
//         {A.filter((A) => A).map((A, index) => (
//       <Box bgColor={"black"} overflow={"hidden"} maxH="100px" key={index}>
//         <Image
//           src={A.picA}
//           alt="Advitisment not load"
//           borderRadius="xl"
//           w="100%"
//           h="100px"
//           overflow={"hidden"}
//         />
//       </Box>
//         ))}
//     </Box>
//   );
// };

import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import ImageSlider from "./ImageSlider";

const slides = [
  { url: "https://img.freepik.com/premium-photo/empty-wooden-table-top-with-blur-background-summer-lakes-mountain-exuberant-image_31965-195428.jpg", title: "beach" },
  { url: "http://localhost:3000/image-2.jpg", title: "boat" },
  { url: "http://localhost:3000/image-3.jpg", title: "forest" },
  { url: "http://localhost:3000/image-4.jpg", title: "city" },
  { url: "http://localhost:3000/image-5.jpg", title: "italy" },
];

const SliderAdvertisement: React.FC = () => {
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };

  return (
    <Box>
      <Heading as="h1">Hello monsterlessons</Heading>
      <Box style={containerStyles}>
        <ImageSlider slides={slides} />
      </Box>
    </Box>
  );
};

export default SliderAdvertisement;
