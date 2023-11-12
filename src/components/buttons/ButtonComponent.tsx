import { Button } from "@chakra-ui/react";
import { FC } from "react";

interface ButtonProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  bgHover?: string;
  width?: string;
  height?: string;
}

// this is a purple button with white text default, you can import this component and pass other prop specify below to change it

export const ButtonComponent: FC<ButtonProps> = ({
  text,
  bgColor,
  textColor,
  borderColor,
  bgHover,
  width,
  height,
}) => {
  return (
    <Button
      width={!width ? "140px" : width}
      height={!height ? "40px" : height}
      bg={!bgColor ? "brand.200" : bgColor}
      color={!textColor ? "white" : textColor}
      borderColor={!borderColor ? "" : borderColor}
      _hover={{ bg: !bgHover ? "brand.300" : bgHover }}
    >
      {text}
    </Button>
  );
};
