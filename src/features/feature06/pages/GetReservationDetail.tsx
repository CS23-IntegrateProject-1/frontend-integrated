/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Icon, Text, Button, Fade, useDisclosure } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { RDetailCard } from "../components/RDetailCard";
import { getReservationDetail } from "../../../api/Reservation/getReservationDetail";
import { CalendarIcon } from "@chakra-ui/icons";
import { TimeIcon, LinkIcon } from "@chakra-ui/icons";
import { MdOutlineEventSeat } from "react-icons/md";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { CancelModal } from "../components/CancelModal";
import { FC } from "react";
import { Axios } from "../../../AxiosInstance";
import { IGetReservationDetailData } from "../../../interfaces/reservation/GetReservationDetail.interface";
import { useCustomToast } from "../../../components/useCustomToast";

export const GetReservationDetail: FC = () => {
  const [data, setData] = useState<IGetReservationDetailData>();
  const dateString = `${data?.reservations[0]?.reserved_time}`;
  const dateObject = new Date(dateString);

  const year = dateObject.getUTCFullYear();
  const month = dateObject.getUTCMonth() + 1; // Month is zero-based, so add 1
  const day = dateObject.getUTCDate();
  const hour = dateObject.getUTCHours();
  const minute = dateObject.getUTCMinutes();
  const [showOverlay, setShowOverlay] = useState(false);

  const { venueId, reservationId } = useParams<{
    venueId: string;
    reservationId: string;
  }>();
  const venueIdInt = parseInt(venueId || "0");
  const reservationIdInt = parseInt(reservationId || "0");
  const cancelModal = useDisclosure();
  const toast = useCustomToast();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const handleCheckInStatus = async () => {
    try {
      const response = await Axios.get(
        `/feature6/checkin/status/${reservationId}`
      );
      if (response.data == "Check_in") {
        toast.success("Check in successful");
        navigate("/venue/menu");
      } else {
        toast.error("Check in failed");
      }
    } catch (error) {
      console.error("Error fetching QR code:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response: IGetReservationDetailData = await getReservationDetail(
        venueIdInt,
        reservationIdInt
      );
      setData(response);
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowOverlay(true);
    } catch (error) {
      console.error("Failed to copy URL to clipboard", error);
    }
    setTimeout(() => {
      setShowOverlay(false);
    }, 600);
  };

  const confirmCheckin = async () => {
    try {
      const response = await Axios.get(
        `/api/mik/checkInStatus/${reservationId}`
      );
      console.log(response);
      navigate(`/venue/menu`);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const NavigateToPayment = () => {
    const originalPath = `/reservation-detail/venue/paymentD/${data?.reservations[0].reservationId}`;
    const newPath = originalPath.replace("/reservation-detail", "");
    navigate(newPath);
  };

  const handleReview = () => {
    const path = `/ReviewReservation/${data?.reservations[0].branchId}`;
    navigate(path);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center" // Center the content horizontally
      justifyContent="center"
    >
      <RDetailCard
        name={data?.venue.name}
        location={data?.location.address}
        star={data?.venue.score}
        image_url={data?.venue.Venue_photo}
      />
      <Box
        width="393px"
        height="480px"
        flexShrink={0}
        borderRadius="20px 20px 0px 0px"
        background="var(--Dark-background, #200944)"
        boxShadow="0px -4px 30px 0px #B921B2"
      >
        <Box
          width="369px"
          height="295px"
          flexShrink={0}
          borderRadius="20px"
          background="#DEBEF6"
          marginTop="16px"
          marginLeft="12px" // Adjust margin top as needed
        >
          <Text
            color="#000"
            fontFamily="Roboto"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="normal"
            marginLeft={15}
            padding={19}
          >
            Reservation information
          </Text>

          <Box position="relative">
            <LinkIcon
              color={"black"}
              mt={"-85px"}
              ml={"330px"}
              onClick={handleCopyClick}
              cursor="pointer"
            />

            <Fade in={showOverlay}>
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                bg="rgba(0, 0, 0, 0.8)"
                color="white"
                padding={4}
                borderRadius={8}
                zIndex={999}
              >
                Copy link done
              </Box>
            </Fade>
          </Box>

          <Text
            color="#000"
            fontFamily="Roboto"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="normal"
            marginLeft={34}
            marginTop="-18px"
          >
            Name :
          </Text>
          <Text
            color="#000"
            fontFamily="Roboto"
            fontSize="12px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="normal"
            marginLeft={34}
            marginTop="10px"
          >
            {data?.reservations[0]?.name}
          </Text>
          <Text
            color="#000"
            fontFamily="Roboto"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="normal"
            marginLeft={34}
            marginTop={11}
          >
            Phone Number :
          </Text>
          <Text
            color="#000"
            fontFamily="Roboto"
            fontSize="12px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="normal"
            marginLeft={34}
            marginTop="10px"
          >
            {data?.reservations[0]?.phone}
          </Text>
          <CalendarIcon
            w={"20px"}
            h={"20px"}
            color={"black"}
            ml={"40px"}
            mt={"20px"}
          />
          <Text
            color="#000"
            fontFamily="Roboto"
            fontSize="12px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="normal"
            marginLeft="71px"
            marginTop="-17px"
          >
            Date :
          </Text>
          <Text
            color="#000"
            fontFamily="Roboto"
            fontSize="12px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="normal"
            marginLeft="120px"
            marginTop="-14px"
          >
            {day}/{month}/{year}
          </Text>

          <TimeIcon
            w={"20px"}
            h={"20px"}
            color={"black"}
            ml={"40px"}
            mt={"20px"}
          />
          <Text
            color="#000"
            fontFamily="Roboto"
            fontSize="12px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="normal"
            marginLeft="71px"
            marginTop="-17px"
          >
            Time :
          </Text>

          <Text
            color="#000"
            fontFamily="Roboto"
            fontSize="12px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="normal"
            marginLeft="120px"
            marginTop="-14px"
          >
            {hour}:{minute < 10 ? "0" + minute : "" + minute}
          </Text>

          <Icon ml={"38px"} mt={"15px"} width="35px" height="35px">
            <MdOutlineEventSeat style={{ color: "black" }} />
          </Icon>
          <Text
            color="#000"
            fontFamily="Roboto"
            fontSize="12px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="normal"
            marginLeft="71px"
            marginTop="-30px"
          >
            Seats :
          </Text>
          <Text
            color="#000"
            fontFamily="Roboto"
            fontSize="12px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="normal"
            marginLeft="120px"
            marginTop="-14px"
          >
            {data?.reservations[0]?.guest_amount}
          </Text>
        </Box>
        <Box
          width="360px"
          height="1px"
          background="#DEBEF6"
          marginTop="18px"
          marginLeft="18px"
        ></Box>
        {data?.reservations[0]?.status === "Cancel" ? (
          <Box>
            <Text
              color="#C83333"
              fontFamily="Roboto"
              fontSize="20px"
              fontStyle="normal"
              fontWeight="700"
              marginLeft="156px"
              marginTop="14px"
            >
              Canceled
            </Text>
          </Box>
        ) : (
          <Box>
            <Text
              color="#F6F6F6"
              fontFamily="Roboto"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="normal"
              marginLeft="26px"
              marginTop="22.01"
            >
              Reservation fee
            </Text>
            <Text
              color="#F6F6F6"
              fontFamily="Roboto"
              fontSize="20px"
              fontStyle="normal"
              fontWeight="700"
              marginLeft="288px"
              marginTop="-24px"
            >
              {data?.reservations[0]?.Deposit?.deposit_amount} Baht
            </Text>
          </Box>
        )}
        <Box
          width="360px"
          height="1px"
          background="#DEBEF6"
          marginTop="18px"
          marginLeft="18px"
        ></Box>
        {data?.reservations[0]?.status === "Pending" &&
        data?.venue.name !== "MIK" &&
        data?.reservations[0].isPaidDeposit === "Pending" ? (
          <Box mt="15px" ml={"50px"}>
            <Button
              borderRadius="10px"
              width="138px"
              height="40px"
              backgroundColor="#C83333"
              textColor="white"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="24px"
              mr={"17px"}
              onClick={() => cancelModal.onOpen()}
            >
              Cancel
            </Button>
            {data?.reservations[0]?.status === "Pending" &&
            data?.reservations[0]?.isPaidDeposit === "Pending" ? (
              <Button
                borderRadius="10px"
                width="138px"
                height="40px"
                backgroundColor="#A533C8"
                textColor="white"
                fontSize="16px"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="24px"
                onClick={() => NavigateToPayment()}
              >
                Pay deposit
              </Button>
            ) : (
              ""
            )}
          </Box>
        ) : data?.reservations[0]?.status === "Check_in" &&
          data?.venue.name === "MIK" ? (
          <Button
            borderRadius="10px"
            width="200px"
            height="40px"
            backgroundColor="#A533C8"
            textColor="white"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="24px"
            ml={"96px"}
            mt={"15px"}
            onClick={() => confirmCheckin()}
          >
            Confirm Check-in
          </Button>
        ) : data?.reservations[0]?.status === "Pending" &&
          data?.venue.name !== "MIK" &&
          data?.reservations[0].isPaidDeposit === "Completed" ? (
          <Button
            borderRadius="10px"
            width="200px"
            height="40px"
            backgroundColor="#A533C8"
            textColor="white"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="24px"
            ml={"96px"}
            mt={"15px"}
            onClick={() =>
              navigate(`/qrcode/display/${data?.reservations[0].reservationId}`)
            }
          >
            Check-in QR
          </Button>
        ) : data?.reservations[0]?.status === "Check_in" &&
          data?.reservations[0].isPaidDeposit === "Completed" ? (
          <Button
            borderRadius="10px"
            width="200px"
            height="40px"
            backgroundColor="#A533C8"
            textColor="white"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="24px"
            ml={"96px"}
            mt={"15px"}
            onClick={() => handleCheckInStatus()}
          >
            Confirm Check-in
          </Button>
        ) : data?.reservations[0]?.status === "Check_out" &&
          data?.reservations[0]?.isReview === false ? (
          <Button
            borderRadius="10px"
            width="128px"
            height="36px"
            backgroundColor="#A533C8"
            textColor="white"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="600"
            lineHeight="24px"
            marginTop="15px"
            marginLeft="133px"
            onClick={handleReview}
          >
            Review
          </Button>
        ) : (
          ""
        )}
      </Box>
      <CancelModal
        reservationIdInt={data?.reservations[0]?.reservationId}
        isOpen={cancelModal.isOpen}
        onClose={cancelModal.onClose}
      />
    </Box>
  );
};
