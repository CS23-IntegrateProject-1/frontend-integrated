import { Box, Text } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { MdOutlineArrowForwardIos, MdAccessTime } from "react-icons/md";
import { useEffect, useState } from "react";
import BoxNumberText from "./BoxNumberText";

interface IOrderData {
    tableNo: number;
    time: string;
    queueNo: number;
}

const OrderQueues = () => {
    const [latestOrder, setLatestOrder] = useState<IOrderData>({
        tableNo: 0,
        time: "",
        queueNo: 0,
    });

    const handleOpenOrderPage = () => {
        console.log("Open Order Page");
    };

    const handleFinishedOrder = () => {
        console.log(`Finished Order ${latestOrder.queueNo}`);
    };

    const fetchLatestOrder = () => {
        const OrderData: IOrderData = {
            tableNo: 8,
            time: "02:00",
            queueNo: 7,
        };
        setLatestOrder(OrderData);
    };

    useEffect(() => {
        fetchLatestOrder();
    }, []);

    const OrderText = () => {
        return (
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"319px"}
                marginTop={5}
                color={"grey.200"}>
                <Box>
                    <Text style={TextStyle.h2}>Order Queues</Text>
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
                {BoxNumberText(latestOrder.queueNo)}
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
                <Text style={TextStyle.h3}>{latestOrder?.time}</Text>
            </Box>
        );
    };

    const TableNoBox = () => {
        return (
            <Text style={TextStyle.h3} marginTop={2}>
                Table no. {latestOrder?.tableNo}
            </Text>
        );
    };

    const ConfirmButton = () => {
        return (
            <Box
                onClick={handleFinishedOrder}
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
            <Box onClick={handleOpenOrderPage}>{OrderText()}</Box>
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

export default OrderQueues;
