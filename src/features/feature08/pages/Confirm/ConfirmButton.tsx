import { Box, Button } from "@chakra-ui/react"
import { FC } from "react";

interface ButtonProps {
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  bgHover?: string;
}

export const ConfirmButton : FC<ButtonProps> = ({
  bgColor,
  textColor,
  borderColor,
  bgHover,
}) => {
    return (
        <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      margin={10}
      width={"50%"}
    >
        <Button
            width={"70%"}
            height={"40px"}
            bg={!bgColor ? "brand.200" : bgColor}
            color={!textColor ? "white" : textColor}
            borderColor={!borderColor ? "" : borderColor}
            _hover={{ bg: !bgHover ? "brand.300" : bgHover }}
        >
      Confirm
    </Button>
    </Box>
    )
}