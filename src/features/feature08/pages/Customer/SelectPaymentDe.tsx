import { QrCodeButton } from "../QrCode/QrCodeButton";
import { MobileBankingList } from "../MobileBanking/MobileBankingList";
import { CreditCardList } from "../CreditCard/CreditCardList";
import { ConfirmButton } from "../Confirm/ConfirmButton";
import { Box, Button,} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { Axios } from "../../../../AxiosInstance";
import { useParams } from "react-router-dom";
import { MdAttachMoney } from "react-icons/md";


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
// export const SelectPayment: FC<ButtonProps> = ({
//   bgColor,
//   textColor,
//   borderColor,
//   bgHover,
// }) => {
export const SelectPaymentDe: FC<ButtonProps> = ({
  bgColor,
    textColor,
    borderColor,
    bgHover,
}) => {
  
  const [creditCardUser, setCreditCardUser] = useState<creditCardUser[]>([]);
  const { userId } = useParams();
  const { reservationId } = useParams();

  const redirectToDelivery = async (event: React.FormEvent) => {
    event.preventDefault();

    
    Axios.post(`/feature8/create-delivery-session/${reservationId}`)
      .then(async (res) => {
      
        console.log(res.data);
        window.location.href = res.data.url;
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });

    
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(`/feature8/creditcardU/${userId}`);
        setCreditCardUser(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching credit card data:", error);
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
      {/* <form onSubmit={redirectToCheckout}> */}
      {/* <Button
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
        </Button> */}
      {/* <button type="submit">Check Out</button> */}
      <Button
        onClick={redirectToDelivery}
        width={"70%"}
        height={"40px"}
        bg={!bgColor ? "brand.200" : bgColor}
        color={!textColor ? "white" : textColor}
        borderColor={!borderColor ? "" : borderColor}
        _hover={{ bg: !bgHover ? "brand.300" : bgHover }}
        textColor={"#DEBEF6"}
        leftIcon={<MdAttachMoney />}
      >
        Pay Delivery
      </Button>

      {/* </form> */}

      {/* <PayButton cartItems={[]} /> */}
      <QrCodeButton />
      <MobileBankingList />
      <CreditCardList card={creditCardUser} />
      <ConfirmButton />
    </Box>
  );
};
