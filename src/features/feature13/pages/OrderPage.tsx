import { Box, Grid, Text } from "@chakra-ui/react";
import { TextStyle } from "../../../theme/TextStyle";
import { useEffect, useState } from "react";
import OrderQueueCard from "../components/OrderPageComponents/OrderQueueCard";
import { TriangleDownIcon } from "@chakra-ui/icons";
import Queue from "../model/queue.model";

const OrderPage = () => {
    const isMobile = window.innerWidth <= 768;

    const [sortBy, setSortBy] = useState(1);

    const [ongingQueue, setOngoingQueue] = useState<Queue[]>([]);

    const fetchQueue = () => {
        const data: Queue[] = [
            {
                id: 1,
                name: "Mo",
                time: "17:00",
                tableNo: 1,
                status: "Ongoing",
            },
            {
                id: 2,
                name: "Mark",
                time: "18:00",
                tableNo: 2,
                status: "Ongoing",
            },
            {
                id: 3,
                name: "Tawan",
                time: "19:00",
                tableNo: 4,
                status: "Ongoing",
            },
            {
                id: 4,
                name: "Sun",
                time: "17:00",
                tableNo: 1,
                status: "Ongoing",
            },
            {
                id: 5,
                name: "IT",
                time: "18:00",
                tableNo: 2,
                status: "Ongoing",
            },
            {
                id: 6,
                name: "Jake",
                time: "19:00",
                tableNo: 4,
                status: "Ongoing",
            },
        ];
        setOngoingQueue(data);
    };

    useEffect(() => {
        fetchQueue();
    }, []);

    const SortBox = (lable: string, id: number) => {
        const _style = {
            backgroundColor: sortBy === id ? "brand.200" : "brand.400",
            borderColor: sortBy === id ? "brand.200" : "white",
        };

        const handleClick = () => {
            setSortBy(id);
        };
        return (
            <Box
                onClick={handleClick}
                width={"87px"}
                height={"28px"}
                backgroundColor={_style.backgroundColor}
                color={"white"}
                border={"1px"}
                borderColor={_style.borderColor}
                borderRadius={"5px"}
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"center"}
                alignItems={"center"}>
                <Text style={TextStyle.h3}>{lable}</Text>
            </Box>
        );
    };

    const sortIcon = (isUp: boolean) => {
        isUp;
        return (
            <Box
                display={"flex"}
                flexDir={"row"}
                justifyContent={"center"}
                alignItems={"center"}>
                <Text
                    style={TextStyle.h2}
                    marginRight={2}
                    textDecoration={"underline"}>
                    Sort
                </Text>
                <TriangleDownIcon marginRight={2} />
            </Box>
        );
    };

    const filterIcon = (isUp: boolean) => {
        isUp;
        return (
            <Box
                display={"flex"}
                flexDir={"row"}
                justifyContent={"center"}
                alignItems={"center"}>
                <Text
                    style={TextStyle.h2}
                    marginRight={2}
                    textDecoration={"underline"}>
                    Filter
                </Text>
                <TriangleDownIcon />
            </Box>
        );
    };

    const renderMobile = () => {
        return (
            <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}>
                <Box>
                    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                        {SortBox("Ongoing", 1)}
                        {SortBox("Completed", 2)}
                        {SortBox("Cancelled", 3)}
                    </Grid>
                </Box>
                <Box marginTop={5}>
                    <Box
                        display={"flex"}
                        flexDirection={"row"}
                        justifyContent={"flex-end"}
                        alignItems={"center"}>
                        {sortIcon(true)}
                        {filterIcon(true)}
                    </Box>
                    {ongingQueue.map((queue) => {
                        return OrderQueueCard(true, queue);
                    })}
                </Box>
            </Box>
        );
    };

    const renderDesktop = () => {
        return <>this is desktop</>;
    };

    return isMobile ? renderMobile() : renderDesktop();
};

export default OrderPage;
