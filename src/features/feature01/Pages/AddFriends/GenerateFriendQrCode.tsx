import { useEffect, useState } from "react";
import QrCode from "react-qr-code";
import { Axios } from "../../../../AxiosInstance";

const GenerateFriendQrCode = () => {
  const [qrCodeData, setQrCodeData] = useState("");

  useEffect(() => {
    const url = `/feature1/profile`;
    Axios.get(url, { withCredentials: true })
      .then((response) => {
        if (response.status == 200) {
          const data = response.data;
          const userId = data.user_id;
          const username = data.username;
          const qrCodeData = `${userId},${username}`;
          setQrCodeData(qrCodeData);
        }
      })
      .catch((error) => {
        console.error("Error fetching profile  data:", error);
      });
  }, [qrCodeData]);

  return <QrCode value={qrCodeData} size={180} level="H" bgColor="#FFFFFF" />;
};

export default GenerateFriendQrCode;
