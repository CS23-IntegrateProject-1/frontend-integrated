/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";


export const QrCodeScan = () => {
  const [accessToken, setAccessToken] = useState('');
  const [expireAt, setExpireAt] = useState<number>(0); // Specify the type as number

  useEffect(() => {
    const fetchDataAndQrGen = async () => {
      try {
        const tokenHeaders = {
          "Content-Type": "application/json",
          "resourceOwnerId": "l7197996523b07499dbc0ad067c9933636",
          "requestUId": "{{$guid}}",
          "accept-language": "EN"
        };

        const tokenBody = {
          "applicationKey": "l7197996523b07499dbc0ad067c9933636",
          "applicationSecret": "3615a4c818d2478eb792bc16f245f0ec",
        };

        const response = await axios.post(
          "https://api-sandbox.partners.scb/partners/sandbox/v1/oauth/token",
          tokenBody,
          { headers: tokenHeaders }
        );

        console.log("Token response:", response.data);

        // Access the accessToken and expiresAt from the data property of the response
        const receivedAccessToken = response.data.data.accessToken;
        const receivedExpireAt = response.data.data.expiresAt;
        setAccessToken(receivedAccessToken);
        setExpireAt(receivedExpireAt);
      } catch (error) {
        console.error("Token request error:", error);
        // Handle errors
      }
    };
    console.log(isTokenExpired(expireAt))
    // Check if accessToken is not present or if it's expired
    if (!accessToken || isTokenExpired(expireAt)) {
      fetchDataAndQrGen();
    }
  }, [accessToken, expireAt]); // Dependency on accessToken and expireAt to run the effect when they change

  useEffect(() => {
    const qrGen = async () => {
      try {
        const qrGenHeaders = {
          "Content-Type": "application/json",
          "authorization": "Bearer "+accessToken,
          "resourceOwnerId": "l7197996523b07499dbc0ad067c9933636",
          "requestUId": "{{$guid}}",
          "accept-language": "EN"
        };

        const qrGenBody = {
          "qrType": "PP",
          "ppType": "BILLERID",
          "ppId": "359644351204206",
          "amount": "344",
          "ref1": "REFERENCE1",
          "ref3": "SCB1234"
        };

        const qrGenResponse = await axios.post(
          "https://api-sandbox.partners.scb/partners/sandbox/v1/payment/qrcode/create",
          qrGenBody,
          { headers: qrGenHeaders }
        );

        console.log("QR code creation response:", qrGenResponse.data);
        // Handle the response data as needed
      } catch (error) {
        console.error("QR code creation error:", error);
        // Handle errors
      }
    };

    // Check if accessToken is present and not expired
    if (accessToken && !isTokenExpired(expireAt)) {
        console.log(accessToken)
        console.log(expireAt)
        qrGen();
    }
  }, [accessToken, expireAt]); // Dependency on accessToken and expireAt to run the effect when they change

  // Function to check if the token is expired
  const isTokenExpired = (expireAt: number) => { // Explicitly specify the type as number
    const currentTime = Math.floor(Date.now() / 1000);
    return expireAt < currentTime;
  };

  return <div>This is for scanning QR code</div>;
};
