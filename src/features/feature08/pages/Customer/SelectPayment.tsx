import { QrCodeButton } from "../QrCode/QrCodeButton";
import { MobileBankingList } from "../MobileBanking/MobileBankingList"
import { CreditCardList } from "../CreditCard/CreditCardList";
import { ConfirmButton } from "../Confirm/ConfirmButton";
import { Box, Button, ChakraProvider, FormControl, FormLabel } from "@chakra-ui/react";
import {MdAttachMoney} from "react-icons/md"
import { FC, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PayButton from "./PayButton";

interface ButtonProps {
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  bgHover?: string;
}

type creditCardUser = {
  creditCardId:string;
  card_no:string;
  name:string;
  country:string;
  bank:string;
  cvc:string;
  exp:Date;
  userId:string;

}
export const SelectPayment: FC<ButtonProps>= ({
  bgColor,
  textColor,
  borderColor,
  bgHover,
}) => {
  const [creditCardUser, setCreditCardUser] = useState<creditCardUser[]>([]);
  const { userId } = useParams();

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   try {
  //     // Use fetch or another library to make a POST request
  //     const response = await fetch('https://api.example.com/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       // body: JSON.stringify(formData),
  //     });
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/feature8/creditcardU/${userId}`);
        setCreditCardUser(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching credit card data:', error);
      }
    };
  
    if (userId) {
      fetchData();
    }
  }, [userId]);
  



    return (
        <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        margin={5}
      >
      <form action="/create-checkout-session" method="POST">
        <Button
              type="submit"
              id="checkout-button"
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
      </form>
          
        {/* <PayButton cartItems={[]} /> */}
        <QrCodeButton />
        <MobileBankingList />
        <CreditCardList card={creditCardUser} />
        <ConfirmButton />
        </Box>
    )
}