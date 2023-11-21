import { Button, Text } from "@chakra-ui/react";
import { FC } from "react";
interface ButtonMyReservationProps {
    onClick: () => void;
    text: string;
}

export const ButtonMyReservation: FC<ButtonMyReservationProps> = ({
    onClick,
    text
}) => {
return (
  <Button
    variant="outline"
    background={"none"}
    minWidth={"110px"}
    height={"30px"}
    display={"fixed"}
    justifyContent={"center"}
    alignItems={"center"}
    borderRadius={"15px"}
    marginRight={"20px"}
    _focus={{
      background: "#A533C8",
      borderColor: "none",
      transitionDuration: "1s",
      border: "none",
    }}
    _hover={{}}
    onClick={onClick}
  >
    <Text color={"white"} fontSize="16px" fontWeight={"normal"}>
      {text}
    </Text>
  </Button>
);
};