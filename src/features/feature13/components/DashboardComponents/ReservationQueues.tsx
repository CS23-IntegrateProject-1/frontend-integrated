import { Box, Text } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { MdOutlineArrowForwardIos, MdAccessTime } from "react-icons/md";
import { useEffect, useState } from "react";
import BoxNumberText from "./BoxNumberText";

interface IReservationData {
    tableNo: number;
    time: string;
    queueNo: number;
}

const ReservationQueues = () => {
    const [latestReservation, setLatestReservation] =
        useState<IReservationData>({
            tableNo: 0,
            time: "",
            queueNo: 0,
        });

    const handleOpenReservationPage = () => {
        console.log("Open Reservation Page");
    };

    const handleFinishedQueue = () => {
        console.log(`Finished Queue ${latestReservation.queueNo}`);
    };

    const fetchLatestReservation = () => {
        const ReservationData: IReservationData = {
            tableNo: 1,
            time: "17:00",
            queueNo: 1,
        };
        setLatestReservation(ReservationData);
    };

    useEffect(() => {
        fetchLatestReservation();
    }, []);

    const ReservationText = () => {
        return (
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"319px"}
                marginTop={5}
                color={"grey.200"}>
                <Box>
                    <Text style={TextStyle.h2}>Reservation Queues</Text>
                </Box>
                <Box>
                    <MdOutlineArrowForwardIos size={20} color={"grey.200"} />
                </Box>
            </Box>
        );
    };

    const QueueBox = () => {
        return (
            <Box
                width={"70px"}
                height={"70px"}
                border={"1px"}
                borderRadius={5}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}>
                {BoxNumberText(latestReservation.queueNo)}
            </Box>
        );
    };

    const TimeBox = () => {
        return (
            <Box
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}>
                <MdAccessTime size={24} />
                <Text style={TextStyle.h3}>{latestReservation?.time}</Text>
            </Box>
        );
    };

    const TableNoBox = () => {
        return (
            <Text style={TextStyle.h3} marginTop={2}>
                Table no. {latestReservation?.tableNo}
            </Text>
        );
    };

    const ConfirmButton = () => {
        return (
            <Box
                onClick={handleFinishedQueue}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                width={"60px"}
                height={"25px"}
                bg={"brand.210"}
                borderRadius={5}
                marginTop={2}>
                <Text style={TextStyle.h4}>Done</Text>
            </Box>
        );
    };

    return (
        <Box>
            <Box onClick={handleOpenReservationPage}>{ReservationText()}</Box>
            <Box
                display={"flex"}
                justifyContent={"left"}
                alignItems={"center"}
                borderRadius={"5px"}
                width={"319px"}
                height={"102px"}
                bg={"brand.310"}
                padding={4}
                marginTop={1}
                color={"white"}>
                <Box marginLeft={3}>{QueueBox()}</Box>
                <Box marginLeft={7} marginRight={2}>
                    {TimeBox()}
                    {TableNoBox()}
                </Box>
                <Box
                    marginLeft={10}
                    height={"100%"}
                    display={"flex"}
                    flexDirection={"column-reverse"}>
                    {ConfirmButton()}
                </Box>
            </Box>
        </Box>
    );
};

export default ReservationQueues;
