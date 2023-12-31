import { Box, Button, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Axios } from "../../../AxiosInstance";
import { useCustomToast } from "../../../components/useCustomToast";

interface ReservationCardsProps {
  name?: string;
  type?: string;
  status?: string;
  date?: string;
  reservationIdInt?: number;
  isPaymentSuccess?: string;
}

export const BusinessReservationCard: FC<ReservationCardsProps> = ({
  name,
  type,
  status,
  date,
  reservationIdInt,
  isPaymentSuccess,
}) => {
  const toast = useCustomToast();

  const CheckoutActivate = async () => {
    try {
      if (isPaymentSuccess === "Pending") {
        toast.warning("Please pay deposit first");
        return;
      }
      const response = Axios.post(`feature6/checkout/${reservationIdInt}`, {
        reservationId: reservationIdInt,
      });
      console.log(response);
      toast.success("checkout reservation success");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  const ShowButton = () => {
    return (
      <Button
        width={"80px"}
        height={"25px"}
        borderRadius={"6px"}
        background={"var(--Dark-second, #A533C8)"}
        onClick={() => CheckoutActivate()}
      >
        <Text
          fontSize={"12px"}
          color={"var(--white, #FFF)"}
          fontWeight={"600"}
          lineHeight={"normal"}
          fontStyle={"normal"}
          flexShrink={0}
          fontFamily={"Roboto"}
        >
          Checkout
        </Text>
      </Button>
    );
  };
  const dateString = `${date}`;
  const dateObject = new Date(dateString);

  const year = dateObject.getUTCFullYear();
  const month = dateObject.getUTCMonth() + 1; // Month is zero-based, so add 1
  const day = dateObject.getUTCDate();

  return (
    <Box
      position={"relative"}
      display={"flex"}
      flexDirection={"column"}
      borderRadius={"6px"}
      background={"rgba(95, 13, 187, 0.40)"}
      boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
      width={"319px"}
      height={"148px"}
    >
      <Text position={"absolute"} top={"5px"} right={"9px"}>
        {day}/{month}/{year}
      </Text>
      <Text position={"absolute"} top={"28px"} left={"21px"}>
        Name : {name}
      </Text>
      <Text position={"absolute"} top={"55px"} left={"21px"}>
        Type : {type}
      </Text>
      <Text
        position={"absolute"}
        top={"82px"}
        left={"21px"}
        display={"flex"}
        flexDirection={"row"}
      >
        Status :
        {status === "Pending" ? (
          <Text color={"#FFFF33"} marginLeft={"10px"}>
            Pending
          </Text>
        ) : status === "Check_out" ? (
          <Text color={"#00FFFF"} marginLeft={"10px"}>
            Checkout
          </Text>
        ) : status === "Check_in" ? (
          <Text color={"#00FF00"} marginLeft={"10px"}>
            Checkin
          </Text>
        ) : status === "Cancel" ? (
          <Text color={"#C00"} marginLeft={"10px"}>
            Cancel
          </Text>
        ) : (
          ""
        )}
      </Text>
      <Box position={"absolute"} bottom={"14px"} right={"21px"}>
        {status === "Check_in" ? <ShowButton /> : ""}
      </Box>
    </Box>
  );
};
