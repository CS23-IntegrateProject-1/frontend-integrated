import { FC, useEffect, useState } from "react";
import { Axios } from "../../../AxiosInstance";
import { useParams } from "react-router-dom";
import { Box, Button, Image } from "@chakra-ui/react";
import { useCustomToast } from "../../../components/useCustomToast";

const QrcodeGen: FC = () => {
  const reservationId = parseInt(
    useParams<{ reservationId: string }>().reservationId || ""
  );
  const toast = useCustomToast();
  const [qr, setQr] = useState<string>("");
  const handleCheckInStatus = async () => {
    try {
      const response = await Axios.get(
        `/feature6/checkin/status/${reservationId}`
      );
      if (response.data == "Check_in") {
        toast.success("Check in successful");
      } else {
        toast.error("Check in failed");
      }
    } catch (error) {
      console.error("Error fetching QR code:", error);
    }
  };
  const fetchQrImg = async () => {
    try {
      const response = await Axios.get(`/feature6/qrcode/${reservationId}`, {
        responseType: "blob",
      });

      const blob = new Blob([response.data], { type: "image/png" });
      const qrUrl = URL.createObjectURL(blob);

      setQr(qrUrl);
    } catch (error) {
      console.error("Error fetching QR code:", error);
    }
  };

  useEffect(() => {
    fetchQrImg();
  });

  if (!qr) {
    return <div>Loading...</div>;
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="80vh"
    >
      <Image src={qr} />
      {/* This button actully is used to store cookies in customer side so I want you to decorate this button display like "Confirm CheckIn" */}
      <Button onClick={handleCheckInStatus}
      mt={'20px'} colorScheme="purple">Confirm Check-In</Button>
    </Box>
  );
};

export default QrcodeGen;
