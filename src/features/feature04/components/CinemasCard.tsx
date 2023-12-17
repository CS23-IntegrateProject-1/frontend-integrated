import {
  Box,
  Flex,
  Button,
  Spacer,
} from "@chakra-ui/react";

import { useState } from "react"; 
import colors from "../../../theme/foundations/colors";
import textStyles from "../../../theme/foundations/textStyles";

interface CinemasCardProps {
  name: string;
  distance: number;
}

const ShareIcon: React.FC = () => {
  return (
    <svg
      width="13"
      height="18"
      viewBox="0 0 13 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.75 3.27273L8.59625 4.43455L7.30437 3.13364V12.2727H5.69563V3.13364L4.40375 4.43455L3.25 3.27273L6.5 0L9.75 3.27273ZM13 7.36364V16.3636C13 17.2636 12.2688 18 11.375 18H1.625C1.19402 18 0.780698 17.8276 0.475951 17.5207C0.171205 17.2138 0 16.7976 0 16.3636V7.36364C0 6.45545 0.723125 5.72727 1.625 5.72727H4.0625V7.36364H1.625V16.3636H11.375V7.36364H8.9375V5.72727H11.375C11.806 5.72727 12.2193 5.89967 12.524 6.20655C12.8288 6.51343 13 6.92965 13 7.36364Z"
        fill="#5F0DBB"
      />
    </svg>
  );
};
const CinemaIcon: React.FC = () => {
   
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.2493 5.83334L29.166 10.2083H24.791L21.8743 5.83334H18.9577L21.8743 10.2083H17.4993L14.5827 5.83334H11.666L14.5827 10.2083H10.2077L7.29102 5.83334H5.83268C4.22852 5.83334 2.9306 7.14584 2.9306 8.75001L2.91602 26.25C2.91602 27.8542 4.22852 29.1667 5.83268 29.1667H29.166C30.7702 29.1667 32.0827 27.8542 32.0827 26.25V5.83334H26.2493ZM16.4056 22.2396L14.5827 26.25L12.7598 22.2396L8.74935 20.4167L12.7598 18.5938L14.5827 14.5833L16.4056 18.5938L20.416 20.4167L16.4056 22.2396ZM24.7035 17.4125L23.3327 20.4167L21.9618 17.4125L18.9577 16.0417L21.9618 14.6708L23.3327 11.6667L24.7035 14.6708L27.7077 16.0417L24.7035 17.4125Z"
        fill="#5F0DBB"
      />
    </svg>
  );
};
const CinemasCard = (props: CinemasCardProps) => {
    const [liked, setLiked] = useState(false);
    const handleLikeClick = () => {
        setLiked(!liked);
        if (liked) {
          alert("Remove From Your Favourite location");
        } else if (!liked) {
          alert("Add to Your Favourite location");
        }
      };
  return (
    <Box margin={2}>
      <Box
        display={"flex"}
        flexDirection={"row"}
        backgroundColor={colors.grey[100]}
        maxWidth={"348px"}
        maxHeight={"100px"}
        p={3}
        borderRadius={20}
        gap={5}
      >
        <Flex alignItems={"center"}>
          <CinemaIcon />
        </Flex>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignContent={"center"}
          color={colors.black}
        >
          <Box fontSize={textStyles.h3.fontSize} fontWeight={textStyles.h3.fontWeight} 
            whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" maxWidth="150px">
            {props.name}
          </Box>

          <Box
            fontSize={textStyles.h5.fontSize}
            fontWeight={textStyles.h5.fontWeight}
            color={colors.grey[300]}
          >
            {`${(props.distance / 1000).toFixed(2)} km`}
          </Box>
          <Spacer />
          {/* <Flex flexDir={"row"}> */}
         
          {/* </Flex> */}
        </Box>
        <Spacer/>
        <Button onClick={handleLikeClick} variant={"unstyled"} size={"sm"}>
          {/* <HeartIcon isLiked={liked} /> */}
          </Button>
          <Button variant={"unstyled"} size={"sm"}>
          <ShareIcon/>
          </Button>
      </Box>
    </Box>
  );
};
export default CinemasCard;
