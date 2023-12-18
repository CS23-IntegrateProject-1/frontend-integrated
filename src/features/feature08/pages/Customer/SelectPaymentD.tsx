import { QrCodeButton } from "../QrCode/QrCodeButton";
import { MobileBankingList } from "../MobileBanking/MobileBankingList";
import { CreditCardList } from "../CreditCard/CreditCardList";
import { ConfirmButton } from "../Confirm/ConfirmButton";
import { Box, Button,} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { Axios } from "../../../../AxiosInstance";
import { useParams } from "react-router-dom";
import { MdAttachMoney } from "react-icons/md";

// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe('pk_test_51OFf98BCLtNTpQNyKo7pOR2Oyl2N3LxLtvGO549ogZUwpqgAUY0ycFgCYGhJbNXXnnyy1eLxTC2czmCuZqRd5BKy00lHA8sWfw'); // replace 'your_publishable_key' with your actual publishable key

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
export const SelectPaymentD: FC<ButtonProps> = ({
  bgColor,
    textColor,
    borderColor,
    bgHover,
}) => {
  
  const [creditCardUser, setCreditCardUser] = useState<creditCardUser[]>([]);
  const { userId } = useParams();

  const redirectToDeposit = async (event: React.FormEvent) => {
    event.preventDefault();

    // const stripe = await stripePromise;

    // Call your server's endpoint to create a checkout session
    // const response = await fetch("http://localhost:4000/create-checkout-session", {
    //   method: "POST",
    // });

    Axios.post("/feature8/create-deposit-session", {})
      .then(async (res) => {
        // const session = res;
        // const result = await stripe?.redirectToCheckout({
        //   sessionId: res.data.id,
        // });

        // // If redirectToCheckout fails due to a browser or network error, you should display the localized error message to your customer
        // if (result.error) {
        //   alert(result.error.message);
        // }
        console.log(res.data);
        window.location.href = res.data.url;
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });

    // const session = await response.json();

    // Redirect to Checkout
    // const result = await stripe.redirectToCheckout({
    //   sessionId: session.id,
    // });

    // // If redirectToCheckout fails due to a browser or network error, you should display the localized error message to your customer
    // if (result.error) {
    //   alert(result.error.message);
    // }
  };

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
        onClick={redirectToDeposit}
        width={"70%"}
        height={"40px"}
        bg={!bgColor ? "brand.200" : bgColor}
        color={!textColor ? "white" : textColor}
        borderColor={!borderColor ? "" : borderColor}
        _hover={{ bg: !bgHover ? "brand.300" : bgHover }}
        textColor={"#DEBEF6"}
        leftIcon={<MdAttachMoney />}
      >
        Deposit
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
