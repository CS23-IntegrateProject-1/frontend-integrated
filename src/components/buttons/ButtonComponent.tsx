import { Button } from "@chakra-ui/react";
import { FC } from "react";
import textStyles from "../../theme/foundations/textStyles";

interface ButtonProps {
  text: string;
  colorScheme?: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  bgColorHover?: string;
  borderColorHover?: string;
  textColorHover?: string;
  border?: string;
  textStyle?: keyof typeof textStyles;
  variant?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  isDisabled?: boolean;
  onClick?: () => void;
}

// this is a purple button with white text default, you can import this component and pass other prop specify below to change it

export const ButtonComponent: FC<ButtonProps> = ({
  text,
  colorScheme,
  bgColor,
  textColor,
  borderColor,
  bgColorHover,
  borderColorHover,
  textColorHover,
  border,
  textStyle,
  variant,
  width,
  height,
  borderRadius,
  isDisabled,
  onClick,
}) => {
  const textStyleObject = textStyle ? textStyles[textStyle] : {};
  return (
    <Button
      colorScheme={colorScheme ? colorScheme : ""}
      bgColor={bgColor ? bgColor : "brand.200"}
      textColor={textColor ? textColor : "white"}
      borderColor={borderColor ? borderColor : ""}
      border={border ? border : ""}
      {...textStyleObject}
      textStyle={textStyle ? textStyle : ""}
      variant={variant ? variant : ""}
      width={width ? width : "140px"}
      height={height ? height : "40px"}
      borderRadius={borderRadius}
      _hover={{
        bg: bgColorHover || "brand.300",
        borderColor: borderColorHover || "",
        color: textColorHover || "",
      }}
      isDisabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
