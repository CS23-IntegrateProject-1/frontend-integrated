import { Box, Flex, Text } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
// import { Html5QrcodeScanner, QrcodeErrorCallback } from "html5-qrcode";
import checkIn from "../../../../api/Reservation/checkIn";
import textStyles from "../../../../theme/foundations/textStyles";
import { QrScanner } from "@yudiel/react-qr-scanner";

export const QrcodeConfirm: React.FC = () => {
    const [scanResult, setScanResult] = useState<{
        reservationId: number;
        authToken: string;
    }>();
    const [checkingIn, setCheckingIn] = useState<number | string>(0);
    const [callCnt, setCallCnt] = useState<number>(0);
    const handleScanSuccess = (result: string) => {
        setScanResult(JSON.parse(result));
        // console.log(result);
    };
    const handleCheckIn = async (reservationId: number, authToken: string) => {
        console.log("handleCheckIn");

        try {
            if (callCnt > 1) return;
            const result = await checkIn(reservationId, authToken);
            setCheckingIn(result);
        } catch (error) {
            console.error("Error checking in:", error);
            setCheckingIn(500); // Set a generic error status
        }
    };

    const CheckingInDisplay: FC<{
        reservationId: number;
        authToken: string;
    }> = ({ reservationId, authToken }) => {
        useEffect(() => {
            setCallCnt(callCnt + 1);
            if (callCnt === 1) {
                handleCheckIn(reservationId, authToken);
            }
        }, [authToken, reservationId]); // Call handleCheckIn only when reservationId changes

        return (
            <Box
                w={"150px"}
                h={"150px"}
                backgroundColor={"GrayText"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Text style={textStyles.h2}>
                    {checkingIn === 0
                        ? "Checking In ..."
                        : checkingIn === "OK"
                        ? "Check In successful"
                        : checkingIn === 402
                        ? "Already Checked In"
                        : "Error Checkin"}
                </Text>
            </Box>
        );
    };

    const QrCodeComponent: FC = () => {
        return (
            <>
                {!scanResult ? (
                    // <Box id="reader" />
                    <Box>No Result</Box>
                ) : (
                    <CheckingInDisplay
                        reservationId={scanResult.reservationId}
                        authToken={scanResult.authToken}
                    />
                )}
            </>
        );
    };

    // useEffect(() => {
    //     const scanner = new Html5QrcodeScanner(
    //         "reader",
    //         {
    //             qrbox: {
    //                 width: 250,
    //                 height: 250,
    //             },
    //             fps: 10,
    //         },
    //         true
    //     );

    //     const error: QrcodeErrorCallback = (err) => {
    //         console.warn(err); // Access error properties, if applicable
    //     };

    //     scanner.render(success, error);

    //     function success(result: string) {
    //         scanner.clear();
    //         setScanResult(JSON.parse(result));
    //     }

    //     // Clean up function
    //     return () => {
    //         scanner.clear();
    //     };
    // }, []);

    return (
        <Flex
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Box
                justifyContent={"center"}
                alignItems={"center"}
                display={"flex"}
                mb={"2em"}
            >
                <QrCodeComponent />
            </Box>

            <Box w={"400px"}>
                <QrScanner
                    onDecode={(result) => handleScanSuccess(result)}
                    onError={(error) => console.log(error?.message)}
                />
            </Box>

            <Box backgroundColor={"rgba(95, 13, 187, 0.4)"}></Box>
        </Flex>
    );
};
