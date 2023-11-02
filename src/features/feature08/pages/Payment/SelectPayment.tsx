import { QrCodeButton } from "../QrCode/QrCodeButton"
import { MobileBankingList } from "../MobileBanking/MobileBankingList"
import { ConfirmButton } from "../Confirm/ConfirmButton";
import { Box, Button } from "@chakra-ui/react";
import {MdAttachMoney} from "react-icons/md"
import { FC } from "react";

interface ButtonProps {
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  bgHover?: string;
}

export const SelectPayment: FC<ButtonProps>= ({
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
        margin={5}
      >
        <Button
      width={"70%"}
      height={"40px"}
      bg={!bgColor ? "brand.200" : bgColor}
      color={!textColor ? "white" : textColor}
      borderColor={!borderColor ? "" : borderColor}
      _hover={{ bg: !bgHover ? "brand.300" : bgHover }}
      textColor={"#DEBEF6"}
      leftIcon={<MdAttachMoney />}
    >
      Cash
    </Button>
        <QrCodeButton />
        <MobileBankingList />
        <ConfirmButton />
        </Box>
    )
}