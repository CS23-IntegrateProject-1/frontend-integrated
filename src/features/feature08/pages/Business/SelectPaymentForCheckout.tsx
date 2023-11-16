import { QrCodeButton } from "../QrCode/QrCodeButton"
import { MobileBankingList } from "../MobileBanking/MobileBankingList"
import { CreditCardList } from "../CreditCard/CreditCardList";
import { ConfirmButton } from "../Confirm/ConfirmButton";
import { Box, Button } from "@chakra-ui/react";
import {MdAttachMoney} from "react-icons/md"
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
  
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

    type creditCardVen = {
      creditCardId:string;
      card_no:string;
      name:string;
      country:string;
      bank:string;
      cvc:string;
      exp:Date;
      venueId:string;
    
    }
    const [creditCardVenue, setCreditCardVenue] = useState<creditCardVen[]>([]);
  const { venueId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/feature8/venuecreditcard/${venueId}`);
        setCreditCardVenue(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching credit card data:', error);
      }
    };
  
    if (venueId) {
      fetchData();
    }
  }, [venueId]);

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
        <CreditCardList card={creditCardVenue} />
        <ConfirmButton />
        </Box>
    )
  };
  
