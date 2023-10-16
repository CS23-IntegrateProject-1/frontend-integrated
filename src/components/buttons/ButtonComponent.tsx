import { Button } from "@chakra-ui/react";
import {ReactElement, FC } from "react";

interface ButtonProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  bgHover?: string;
  leftIcon?: ReactElement | null;
}

// this is a purple button with white text default, you can import this component and pass other prop specify below to change it

export const ButtonComponent: FC<ButtonProps> = ({
  text,
  bgColor,
  textColor,
  borderColor,
  bgHover,
  leftIcon
}) => {
  return (
    <Button
      width={"70%"}
      height={"40px"}
      bg={!bgColor ? "brand.200" : bgColor}
      color={!textColor ? "white" : textColor}
      borderColor={!borderColor ? "" : borderColor}
      _hover={{ bg: !bgHover ? "brand.300" : bgHover }}
      leftIcon={leftIcon!}
    >
      {text}
    </Button>
  );
};
