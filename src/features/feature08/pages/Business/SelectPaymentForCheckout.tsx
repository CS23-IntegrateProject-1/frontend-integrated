import { QrCodeButton } from "../QrCode/QrCodeButton"
import { MobileBankingList } from "../MobileBanking/MobileBankingList"
import { CreditCardList } from "../CreditCard/CreditCardList";
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
  
  export const SelectPaymentForCheckout: FC<ButtonProps> = ({
    bgColor,
    textColor,
    borderColor,
    bgHover,
  }) => {

    //simulate only krub fetch data later when we can idk for now
    interface Credit_cardProps {
      creditCardId: number;
      card_no: string;
      name: string;
      country: string;
      bank: string;
      cvc: number;
      exp: Date;
      UserId: number;
    }
    //simulate only krub fetch data later when we can idk for now
    const simulatedData: Credit_cardProps[] = [
      {
        creditCardId: 1,
        card_no: "****1319",
        name: "Visa",
        country: "USA",
        bank: "Bank of America",
        cvc: 123,
        exp: new Date("2023-12-31"),
        UserId: 101,
      },
      {
        creditCardId: 2,
        card_no: "****1319",
        name: "Mastercard",
        country: "USA",
        bank: "Chase",
        cvc: 456,
        exp: new Date("2024-05-31"),
        UserId: 102,
      },
    ];


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
        <CreditCardList card={simulatedData} />
        <ConfirmButton />
        </Box>
    )
  };
  
