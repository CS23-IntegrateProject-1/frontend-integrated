import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { TextStyle } from "../../../theme/TextStyle";
import { useState } from "react";
import { Axios } from "../../../AxiosInstance";

export const TablePage = () => {
  const [count, setCount] = useState(0);
  function handleSubmit() {
    Axios.post("/table", {
      guestAmount: count,
    })
      .then((response) => {
        console.log(response)
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function increment() {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Heading
        style={TextStyle.h1}
        color={"white"}
        fontSize="20px"
        alignItems={"center"}
      >
        Enter your number of people
      </Heading>
      <Box
        className="Line"
        width="360.001px"
        height="1px"
        backgroundColor="white"
        marginTop={"22px"}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="385"
        height="402"
        viewBox="0 0 385 402"
        fill="none"
      >
        <g filter="url(#filter0_di_4080_12672)">
          <path
            d="M233.951 97.5989C223.426 86.2498 208.726 80 192.5 80C176.188 80 161.439 86.212 150.963 97.4909C140.373 108.894 135.213 124.392 136.425 141.126C138.826 174.142 163.981 200.999 192.5 200.999C221.019 200.999 246.131 174.147 248.57 141.137C249.798 124.554 244.606 109.088 233.951 97.5989ZM287.69 321.999H97.3103C94.8184 322.031 92.3506 321.508 90.0865 320.468C87.8224 319.428 85.8189 317.897 84.2217 315.986C80.7062 311.789 79.2892 306.058 80.3384 300.262C84.9032 274.971 99.1492 253.726 121.54 238.812C141.433 225.572 166.631 218.285 192.5 218.285C218.369 218.285 243.567 225.577 263.46 238.812C285.851 253.72 300.097 274.965 304.662 300.257C305.711 306.053 304.294 311.784 300.778 315.981C299.182 317.893 297.178 319.425 294.914 320.466C292.65 321.507 290.182 322.03 287.69 321.999Z"
            fill="#200944"
          />
          <path
            d="M233.951 97.5989C223.426 86.2498 208.726 80 192.5 80C176.188 80 161.439 86.212 150.963 97.4909C140.373 108.894 135.213 124.392 136.425 141.126C138.826 174.142 163.981 200.999 192.5 200.999C221.019 200.999 246.131 174.147 248.57 141.137C249.798 124.554 244.606 109.088 233.951 97.5989ZM287.69 321.999H97.3103C94.8184 322.031 92.3506 321.508 90.0865 320.468C87.8224 319.428 85.8189 317.897 84.2217 315.986C80.7062 311.789 79.2892 306.058 80.3384 300.262C84.9032 274.971 99.1492 253.726 121.54 238.812C141.433 225.572 166.631 218.285 192.5 218.285C218.369 218.285 243.567 225.577 263.46 238.812C285.851 253.72 300.097 274.965 304.662 300.257C305.711 306.053 304.294 311.784 300.778 315.981C299.182 317.893 297.178 319.425 294.914 320.466C292.65 321.507 290.182 322.03 287.69 321.999Z"
            stroke="black"
          />
        </g>
        <defs>
          <filter
            id="filter0_di_4080_12672"
            x="0"
            y="0"
            width="385"
            height="402"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="40" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.647059 0 0 0 0 0.2 0 0 0 0 0.784314 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_4080_12672"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_4080_12672"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="25" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_4080_12672"
            />
          </filter>
        </defs>
      </svg>
      <Box
        className="AmountOfPeople"
        width="313px"
        height="80px"
        // flex-shrink="0"
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignContent={"center"}
        borderRadius="17px"
        backgroundColor="rgba(165, 51, 200, 0.30)"
        boxShadow="2px 2px 4px 0px rgba(0, 0, 0, 0.25)"
        marginBottom={"75px"}
      >
        <Button
          id="Minus"
          onClick={decrement}
          marginLeft={"24px"}
          marginTop={"11px"}
          marginBottom={"16.43px"}
          width={"54px"}
          height={"54px"}
          borderRadius={"50"}
          backgroundColor="#A533C8"
          boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
          _focus={{
            background: "#A533C8",
            borderColor: "none",
          }}
        >
          <Text
            color="var(--white, #F6F6F6)"
            fontFamily="Roboto"
            fontSize={"36px"}
            fontStyle="normal"
            fontWeight="700"
            lineHeight="normal"
          >
            -
          </Text>
        </Button>
        <Text
          // color={"white"} fontSize="48px" fontWeight={"normal"}
          color="var(--white, #F6F6F6)"
          fontFamily="Roboto"
          fontSize={"50px"}
          fontStyle="normal"
          fontWeight="700"
        >
          {count}
        </Text>
        <Button
          id="Plus"
          onClick={increment}
          marginRight={"24px"}
          marginTop={"11px"}
          marginBottom={"16.43px"}
          width={"54px"}
          height={"54px"}
          borderRadius={"50"}
          backgroundColor="#A533C8"
          boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
          _focus={{
            background: "#A533C8",
            borderColor: "none",
          }}
        >
          <Text
            color="var(--white, #F6F6F6)"
            fontFamily="Roboto"
            fontSize={"36px"}
            fontStyle="normal"
            fontWeight="700"
            lineHeight="normal"
          >
            +
          </Text>
        </Button>
      </Box>
      <Button
        width={"140px"}
        height={"40px"}
        bg={"brand.200"}
        color={"white"}
        _hover={{ bg: "brand.300"}}
        onClick={handleSubmit}
      >
        Continue
      </Button>
    </Box>
  );
};
